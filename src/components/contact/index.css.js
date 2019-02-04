import styled from 'styled-components';

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
    font-size: 16px;
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
      transition: background-color 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        background-color: #03a8f5;
        color: #fff;
      }
    }
  }
`;
