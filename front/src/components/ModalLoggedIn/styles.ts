import styled from "styled-components";

export const ContainerModalLoggedIn = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--gray-scale-5);
  background-color: var(--black-opacity);

  .content__modal {
    width: 90%;
    max-width: 370px;

    position: fixed;
    display: flex;
    flex-direction: column;

    background-color: var(--gray-scale-2);

    border-radius: var(--border-radius);

    animation: showModal 1.5s ease;
  }

  .title__modal {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 1.375rem;

    height: 3.125rem;

    background-color: var(--gray-scale-3);

    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  p {
    margin-top: -1.3rem;
    font-size: var(--text-size2);
    color: var(--gray-scale-4);
  }

  .link {
    height: var(--btn-input-height);
    width: 45%;
    margin: 30px;

    background-color: var(--color-primary-focus);
    color: var(--gray-scale-5);

    font-size: 1rem;
    font-weight: var(--weigth-medium);
    letter-spacing: 1.5px;

    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;

    border-radius: var(--border-radius);
  }

  @keyframes showModal {
    0% {
      opacity: 0;
      top: 0%;
    }

    50% {
      opacity: 1;
      top: 30%;
    }
  }
`;
