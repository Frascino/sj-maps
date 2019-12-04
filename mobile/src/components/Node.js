import styled from 'styled-components/native';

export const Node = styled.View`
  height: 17;
  width: 18;
  border-width: 1;
  border-color: #bbb;
  background-color: ${props => `${props.isActive?'#f88':'#ccc'}`};
  opacity: ${props => `${props.isActive?'1':'0'}`};
`;
