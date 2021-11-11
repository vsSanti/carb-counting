import styled from 'styled-components/native';

export const Separator = styled.View`
  border-bottom-color: ${({ theme }) => theme.colors.text};
  border-bottom-width: 1px;

  margin: 6px 0;
`;
