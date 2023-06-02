import styled from "styled-components";

export const ContainerModal = styled.div`
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

    background-color: var(--gray-scale-2);

    border-radius: var(--border-radius);

    animation: showModal 1.5s ease;
  }

  .title__modal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.375rem;

    height: 3.125rem;

    background-color: var(--gray-scale-3);

    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    width: 100%;

    padding: 2rem 1.375rem;

    background-color: var(--gray-scale-2);

    border-radius: var(--border-radius);
  }

  form > div {
    align-items: flex-end;
  }

  input,
  select {
    height: var(--btn-input-height);

    padding-left: 0.85rem;
    letter-spacing: 1px;

    background-color: var(--gray-scale-3);
    color: var(--gray-scale-5);

    border-radius: var(--border-radius);
    border: var(--gray-scale-5);
  }

  p {
    margin-top: -1.3rem;
    font-size: var(--text-size2);
    color: var(--gray-scale-4);
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
