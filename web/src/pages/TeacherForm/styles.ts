import styled from 'styled-components';

import { colors } from '../../assets/styles';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  .page-header .header-content {
    margin-bottom: 6.4rem;
  }

  main {
    background: ${colors.color_box_base};
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    overflow: hidden;

    label {
      color: ${colors.color_text_complement};
    }

    fieldset {
      border: 0;
      padding: 0 2.4rem;

      & + fieldset {
        margin-top: 6.4rem;
      }

      legend {
        font: 700 2.4rem Archivo;
        color: ${colors.color_text_title};
        margin-bottom: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid ${colors.color_line_in_white};

        button {
          background: none;
          border: 0;
          color: ${colors.color_primary};
          font: 700 1.6rem Archivo;
          cursor: pointer;
          transition: color 0.2s;

          &:hover {
            color: ${colors.color_primary_dark};
          }
        }
      }
    }

    footer {
      padding: 4rem 2.4rem;
      background: ${colors.color_box_footer};
      border-top: 1px solid ${colors.color_line_in_white};
      margin-top: 6.4rem;

      p {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.4rem;
        line-height: 2.4rem;
        color: ${colors.color_text_complement};

        img {
          margin-right: 2rem;
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
    }
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    .page-header .page-content {
      margin-bottom: 0;
    }

    main {
      fieldset {
        padding: 0 6.4rem;
      }

      .schedule-item {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;

        .input-block {
          margin-top: 0 !important;
        }
      }

      footer {
        padding: 4rem 6.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          justify-content: space-between;
        }

        button {
          width: 20rem;
          margin-top: 0;
        }
      }
    }
  }
`;
