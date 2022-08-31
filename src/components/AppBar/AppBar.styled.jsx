import styled from '@emotion/styled';

export const AppBarContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;

  padding-top: ${({ theme }) => theme.indent};
  padding-bottom: ${({ theme }) => theme.indent};
  background-color: ${({ theme }) => theme.colors.barColor};
`;

export const Title = styled.h1`
  display: block;
  font-size: 40px;
  line-height: 1.25;
  text-transform: uppercase;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundLightColor};
`;
