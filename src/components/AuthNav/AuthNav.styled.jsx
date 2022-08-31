import styled from '@emotion/styled';

export const AuthNavContainer = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.indent};
`;

export const AuthNavItem = styled.li`
  display: block;
`;
