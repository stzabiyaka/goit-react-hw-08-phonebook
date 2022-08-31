import styled from '@emotion/styled';

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: ${({ theme }) => theme.indent};

  color: #ffffff;
`;

export const Email = styled.p`
  margin-right: ${({ theme }) => theme.indent};
  font-size: 14px;
`;
