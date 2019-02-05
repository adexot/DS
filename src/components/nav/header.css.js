import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;

  a {
    color: #757575;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  ${MEDIA.PHONE`
      padding: 10px 20px;
    `};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;
