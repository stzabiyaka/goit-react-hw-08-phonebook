import styled from '@emotion/styled';

export const PageFooter = styled.footer`
  margin-top: auto;
  min-width: 300px;
  width: 100%;
  padding: 20px 0;
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: #f7eaed;
  box-shadow: 0 0 10px #d4d3d3;
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const Link = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.triadic.main};
  }
`;
