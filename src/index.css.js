import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Section = styled.section`
  background-color: ${props => props.bgColor || '#fff'};
  display: block;
  padding: 100px 0;

  ${MEDIA.PHONE`
      padding: 50px 0;
    `};

  .flex-row {
    display: flex;
    max-width: 1200px;
    margin: 0 auto 50px;
    background-color: #fff;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.32);

    ${MEDIA.PHONE`
      flex-direction: column;
width: 100%;
    `};
  }

  .flex-item-image {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: #f1f1f1;

    svg {
      width: 70%;
    }

    ${MEDIA.PHONE`
      flex-direction: column;
width: 100%;
padding: 0;
    `};
  }

  .flex-item-content {
    width: 60%;
    padding: 100px 50px;

    h3 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 20px;
    }

    p {
      width: 80%;
    }

    ${MEDIA.PHONE`
width: 100%;
padding: 20px;
    `};
  }

  .contact-us-intro {
    max-width: 1200px;
    margin: 0 auto;
    font-size: 3rem;

    a {
      color: #748088;
      padding-left: 20px;
    }
  }

  .description-text {
    max-width: 1000px;
    margin: 50px auto;
    text-align: center;
    font-size: 20px;
  }
`;

export const TopSection = styled(Section)`
  height: 50vh;
  background: linear-gradient(
    176.34deg,
    #e1faff 70.26%,
    rgba(225, 250, 255, 0) 91.26%
  );
  ${MEDIA.PHONE`
      height: 100%;
    `};
  div {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    ${MEDIA.PHONE`
      flex-direction: column;

      svg {
      width: 300px;
      }
    `};
  }
`;

export const ServiceList = styled.ul`
  display: flex;
  max-width: 1200px;
  margin: 100px auto;

  ${MEDIA.PHONE`
      flex-direction: column;
    `};
`;

export const ListItem = styled.li`
  flex: 1 1 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  ${MEDIA.PHONE`
      svg {
        height: 100px;
      }
    `};
`;

export const ServiceItem = styled(ListItem)`
  height: 200px;

  h3 {
    margin: 30px 0;
    line-height: 1.5;
  }

  svg {
    path {
      fill: #262625;
    }
  }

  &:hover {
    background-color: #ccc;
    transform: translateY(-20px);
    color: #000;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

    svg {
      path {
        fill: #fff;
      }
    }
  }
`;

export const ApproachItem = styled(ListItem)`
  height: 300px;

  &:hover {
    background-color: ${props => props.bgColor || '#f5f5f5'};
    transform: translateY(-10px);
    color: #fff;
  }

  h3 {
    font-size: 2.5rem;
    margin: 30px 0 20px;
  }

  p {
    font-size: 2rem;
  }
`;

export const Div = styled.div`
  display: block;
  width: 100%;
  height: 400px;
  background-image: url(${props => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const ContactForm = styled.form`
  display: block;
  max-width: 1000px;
  margin: 50px auto;

  .form-row {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;
  }

  .form-input {
    width: 48%;

    input {
      width: 100%;
      border-radius: 3px;
      border: 1px solid #ccc;
      height: 50px;
      margin-top: 15px;
    }
  }

  .form-text-area {
    width: 100%;

    textarea {
      display: block;
      width: 100%;
      height: 200px;
      margin-top: 15px;
      border-radius: 3px;
      border: 1px solid #ccc;
      padding: 15px;
    }
  }

  input,
  textarea {
    outline: 0;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .form-button-container {
    text-align: center;

    button {
      padding: 15px 50px;
      border-radius: 30px;
      font-size: 16px;
      margin-top: 40px;
      color: #03a8f5;
      border: 1px solid #03a8f5;
    }
  }
`;
