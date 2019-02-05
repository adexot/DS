import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  text-align: ${props => props.align || 'center'};

  ${MEDIA.PHONE`
text-align: center;
    `};

  p {
    color: #aaa;
    margin-top: 20px;
    font-size: 20px;
    max-width: 500px;
  }

  a {
    background-color: #000428;
    padding: 20px 50px;
    border-radius: 30px;
    color: #fff;
    text-decoration: none;
    margin-top: 30px;
    display: inline-block;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.5);
  }
`;

export const SmallHeader = styled.h2`
  font-size: 2rem;
`;

export const LargeHeader = styled.h4`
  font-size: 6rem;
  font-weight: 600;
  margin-top: 40px;

  ${MEDIA.PHONE`
      font-size: 4rem;
    `};
`;
