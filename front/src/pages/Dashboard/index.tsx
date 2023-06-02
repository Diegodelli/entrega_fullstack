import { Link } from "react-router-dom";
import "../../styles/button.css";
import "../../styles/text.css";
import { ContainerDashboard } from "./styles";
import { useContext, useEffect } from "react";
import Loading from "../../components/Loading";
import { UserContext } from "../../contexts/UserContext";
import { ContactContext } from "../../contexts/ContactContext";
import { MdOutlineAdd } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { Modal } from "../../components/Modal";
import { ToastContainer } from "react-toastify";
import { getProfile } from "../../services/getProfile";
import { iContact } from "../../services/postContact";
import { api } from "../../services/api";

const Dashboard = () => {
  const { user, setUser, loading } = useContext(UserContext);
  const {
    modalContact,
    setModalContact,
    removeContact,
    loadingRemove,
    contact,
    setContact,
  } = useContext(ContactContext);

  useEffect(() => {
    (async () => {
      const res = await getProfile();

      setUser(res);
    })();
  }, []);

  const clean = () => {
    localStorage.clear();
    setUser(null);
  };

  const openModal = () => {
    setModalContact(true);
  };

  useEffect(() => {
    (async () => {
      const res = await api.get<iContact[]>("contact");

      setContact(res.data);
    })();
  }, []);

  return (
    <>
      <ToastContainer />
      <ContainerDashboard>
        <header>
          <div>
            <Link to={"/"} className="buttonDefault" onClick={() => clean()}>
              Sair
            </Link>
          </div>
        </header>
        <section>
          <div>
            {!loading && <Loading />}
            <h3 className="titleForm">{user?.fullname}</h3>
            <p className="textLabel">{user?.telephone}</p>
          </div>
        </section>
        <div className="techAddDiv">
          <h3 className="titleForm">Contatos</h3>
          <button
            type="button"
            className="btn__add"
            onClick={() => openModal()}
          >
            <MdOutlineAdd />
          </button>
        </div>
        <div className="sectionTech">
          <ul className="listTech">
            {loadingRemove && <Loading />}
            {contact?.map((element) => (
              <li key={element.email}>
                <h3 className="title__Modal">{element.fullname}</h3>
                <div>
                  <p className="textLabel">{element.email}</p>
                  <p className="textLabel">{element.telephone}</p>
                  <button
                    type="button"
                    onClick={() => removeContact(element.id)}
                  >
                    <IoTrashOutline />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {modalContact ? <Modal /> : modalContact}
      </ContainerDashboard>
    </>
  );
};

export default Dashboard;
