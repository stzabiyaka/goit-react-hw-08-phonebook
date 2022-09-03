import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AppLink = styled(NavLink)`
  color: ${props =>
    props.contrast ? 'inherit' : props.theme.palette.secondary.main};
  font-weight: bold;
  text-decoration: none;
  opacity: 0.9;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &.active {
    color: ${({ theme }) => theme.palette.triadic.main};
  }

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
