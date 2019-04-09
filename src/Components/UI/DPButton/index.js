
import styled from 'styled-components';

const Button = styled.button`
  font-size: 1em;
  margin: 5px 10px;

  color: ${props => props.textColor || "rgb(62, 73, 89)"};
  border: 2px solid ;
  border-color: ${props => props.borderColor || "rgb(62, 73, 89)"};
  float:right;
  
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  cursor: pointer;
  vertical-align: middle;
  user-select: none;
  background-image: none;
  white-space: nowrap;
  touch-action: manipulation;
  display: inline-block;
  text-align: center;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.5px;
  opacity: 1;
  height: 30px;
  background-color:${props => props.bgColor || "transparent"} ;
  border-radius: 15px;
  padding: 8px 20px 5px;
  outline: none !important;
  text-decoration: none !important;

  ${({ xs }) => (xs ? `font-size:${xs}px;` : "font-size:8px")};

@media only screen and (min-width:768px){
  ${({ sm }) => sm && `font-size:${sm}px;`};
}
@media only screen and (min-width:992px){
  ${({ md }) => md && `font-size:${md}px;`};
}
@media only screen and (min-width:1200px){
  ${({ lg }) => lg ? `font-size:${lg}px;` : "font-size:18px", "height:35px"};
}
`;

export default Button;