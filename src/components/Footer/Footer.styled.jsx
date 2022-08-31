import styled from '@emotion/styled';

export const PageFooter = styled.footer`
  margin-top: auto;
  min-width: 300px;
  width: 100%;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Copyright = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.textDarkColor};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentColor};
  }
`;
