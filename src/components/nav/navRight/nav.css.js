import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      text-transform: uppercase;
      font-size: 1.3rem;

      a {
        padding: 5px 10px;
      }

      &:last-child a {
        border: 1px solid #ccc;
        border-radius: 25px;
        padding: 5px 15px;
        transition: border-color 0.3s ease;

        &:hover {
          border-color: #000;
        }
      }

      & + li {
        margin-left: 2rem;
      }
    }
  }
`;
