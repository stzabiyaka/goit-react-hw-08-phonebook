import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AppLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textLightColor};
  font-weight: bold;
  text-decoration: none;
  opacity: 0.9;

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.indent};
  }

  &.active {
    color: ${({ theme }) => theme.colors.accentColor};
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
