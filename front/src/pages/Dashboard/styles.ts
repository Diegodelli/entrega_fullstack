import styled from "styled-components";

export const ContainerDashboard = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  header {
    height: 80px;

    display: flex;
    align-items: center;

    border-bottom: 1px solid var(--gray-scale-2);
  }

  header > div {
    width: 100%;
    max-width: 960px;

    margin: auto;
    padding: 0 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section {
    height: 130px;

    border-bottom: 1px solid var(--gray-scale-2);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  section > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    padding: 0 16px;
  }

  section > div > p {
    margin-bottom: 0;
    color: var(--gray-scale-4);
  }

  .techAddDiv {
    margin: 2.3125rem auto;
    padding: 0 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.4375rem;

    max-width: 960px;
  }

  .btn__add {
    width: 2rem;
    height: 2rem;

    font-weight: var(--weigth-bold);
    font-size: var(--title-size2);

    background-color: var(--gray-scale-2);
    color: var(--gray-scale-5);

    border: none;
    border-radius: var(--border-radius);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
  }

  .sectionTech {
    display: flex;
    justify-content: center;

    padding: 0 16px;
  }

  .listTech {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    max-width: 935px;

    padding: 1.25rem;

    border-radius: var(--border-radius);

    background-color: var(--gray-scale-2);
  }

  .listTech > li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1rem;

    height: 50px;

    background-color: var(--gray-scale-1);

    border-radius: var(--border-radius);
  }

  .listTech > li > div {
    display: flex;
    gap: 0.75rem;
  }

  .listTech > li > h3 {
    color: var(--gray-scale-5);
  }

  .listTech > li > div > p {
    color: var(--gray-scale-4);
  }
  .listTech > li > div > button {
    cursor: pointer;

    width: 16px;

    background-color: transparent;
    color: var(--gray-scale-5);

    border: none;

    font-weight: var(--weigth-semiBold);
  }

  @media (min-width: 768px) {
    section > div {
      width: 100%;
      max-width: 960px;

      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
