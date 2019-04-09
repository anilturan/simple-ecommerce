import styled from 'styled-components';

const Row = styled.div`
&::after{
  content:"";
  clear:both;
  display:table;
  justify-content: center;
  align-items: center;
  align-self:center;
  
}
`;

export default Row;