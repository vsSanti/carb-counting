import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 20px;
  margin-bottom: 20px;

  border-radius: 10px;
`;
