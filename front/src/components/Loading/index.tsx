import { MdOutlineDownloading } from "react-icons/md";
import { Container } from "./styles";

const Loading = () => (
  <Container>
    <MdOutlineDownloading />
    <p>carregando ...</p>
  </Container>
);

export default Loading;
