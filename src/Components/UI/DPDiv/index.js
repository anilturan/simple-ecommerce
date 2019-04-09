import styled from 'styled-components';


function getWidthString(span) {
  if (!span) return;
  let width = span / 12 * 90;
  return `width:${width}%;`;
}

const Div = styled.div`
float:left;
border-radius: 20px;
color:red;
background-color:white;
margin:10px;
display: flex;
justify-content: center;
align-items: center;
${({ xs }) => (xs ? getWidthString(xs) : "width:100%")};

@media only screen and (min-width:768px){
  ${({ sm }) => sm && getWidthString(sm)};
}
@media only screen and (min-width:992px){
  ${({ md }) => md && getWidthString(md)};
}
@media only screen and (min-width:1200px){
  ${({ lg }) => lg && getWidthString(lg)};
}
`;
export default Div;
