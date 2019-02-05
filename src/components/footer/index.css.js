import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.footer`
  background: ${props =>
    props.bgColor || 'linear-gradient(to bottom, #000428, #000)'};
  color: #fff;
  padding: 100px 0;

  ${MEDIA.PHONE`
padding: 50px 20px;
    `};

  & > div {
    display: flex;
    flex: 1 1 100%;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;

    ${MEDIA.PHONE`
      flex-wrap: wrap;
    `};

    div:first-child {
      width: 30%;
      padding-right: 50px;

      ${MEDIA.PHONE`
width: 100%;
    `};

      h3 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 30px;
      }

      p {
        font-size: 1.2rem;
        color: #748088;
        line-height: 1.5;
      }
    }

    div {
      width: 15%;

      h4 {
        font-weight: 600;
      }

      ul {
        margin-top: 20px;
      }

      li {
        line-height: 2;
      }
    }
  }

  .footer-bottom {
    font-size: 1.1rem;
    padding-top: 20px;
  }
`;
