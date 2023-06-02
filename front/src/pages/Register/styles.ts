import styled from "styled-components";

export const ContainerRegister = styled.div`
  width: 100%;
  height: 100%;

  margin: 3rem auto;

  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 390px;
    min-width: 200px;

    padding: 0 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    width: 90%;
    max-width: 370px;

    padding: 2.625rem 1.375rem;

    background-color: var(--gray-scale-2);

    border-radius: var(--border-radius);
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
`;
