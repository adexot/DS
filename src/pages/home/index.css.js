import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${props => props.bgColor || '#fff'};
  display: block;
  padding: 100px 0;
`;

export const TopSection = styled(Section)`
  height: 80vh;
  width: 100vw;
`;

export const ServiceList = styled.ul`
  display: flex;
  max-width: 1200px;
  margin: 100px auto;
`;

export const ListItem = styled.li`
  flex: 1 1 0;
  width: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

export const ServiceItem = styled(ListItem)`
  height: 200px;

  h3 {
    margin: 30px 0;
    line-height: 1.5;
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
