import styled from 'styled-components';
import PropTypes from 'prop-types';


const P = styled.p`
height: 60px;
max-width: 100%;
text-overflow: ellipsis;
font-weight: 300;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
text-align: left;
color: ${props => props.textColor || "rgb(80, 80, 97)"};
margin: 0px 0px 15px;
overflow: hidden;
padding:5px 20px 10px 20px;

${({ xs }) => (xs ? `font-size:${xs}px;` : "font-size:10px")};

@media only screen and (min-width:768px){
  ${({ sm }) => sm && `font-size:${sm}px;`};
}
@media only screen and (min-width:992px){
  ${({ md }) => md ? `font-size:${md}px;` : "font-size:16px"};
}
@media only screen and (min-width:1200px){
  ${({ lg }) => lg ? `font-size:${lg}px;` : "font-size:16px"};
}
`;


P.propTypes = {
  textColor: PropTypes.string
}
export default P;