import styled from 'styled-components';

import { colors } from '../../assets/styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  main {
    margin: 3.2rem auto;
    width: 90%;
  }

  @media (min-width: 700px) {
    max-width: 100%;

    main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;

export const SearchForm = styled.form`
  margin-top: 3.2rem;
  label {
    color: ${colors.color_text_in_primary};

    .input-block {
      position: relative;
    }
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: ${colors.color_secundary};
    color: ${colors.color_button_text};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;

    display: block;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    transition: background-color 0.2s;
    margin-top: 3.2rem;

    &:hover {
      background: ${colors.color_secundary_dark};
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;
  }
`;
