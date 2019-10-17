import styled from 'styled-components/native';

export const Node = styled.View`
  height: 120;
  width: 120;
  border-width: 1;
  border-color: #bbb;
  background-color: ${props => `${props.isActive?'#f88':'#ccc'}`};
`;
