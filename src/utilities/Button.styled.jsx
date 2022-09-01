import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 52px;
  padding: 4px;
  background-color: transparent;
  font-size: 16px;
  line-height: 1;
  color: inherit;

  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.borderMiddleColor};

  transition: color, background-color, box-shadow 250ms ease-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.textLightColor};
    background-color: ${({ theme }) => theme.colors.accentColor};
    border-color: transparent;
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.accentColor};
  }

  &:disabled {
    opacity: 0.5;
  }
`;
