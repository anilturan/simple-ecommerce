import styled from 'styled-components';
import PropTypes from 'prop-types';

const H4 = styled.h4`
line-height: 1;
max-width: 100%;
text-overflow: ellipsis;
font-weight: 400;
font-style: normal;
font-stretch: normal;
letter-spacing: normal;
text-align: left;
color: ${props => props.textColor || "rgb(80, 80, 97)"} ;
margin: 0px 0px 10px;
overflow: hidden;
padding:20px 20px 5px 20px;

${({ xs }) => (xs ? `font-size:${xs}px;` : "font-size:10px")};

@media only screen and (min-width:768px){
  ${({ sm }) => sm && `font-size:${sm}px;`};
}
@media only screen and (min-width:992px){
  ${({ md }) => md && `font-size:${md}px;`};
}
@media only screen and (min-width:1200px){
  ${({ lg }) => lg ? `font-size:${lg}px;` : "font-size:20px"};
}
`;

H4.propTypes = {
  textColor: PropTypes.string
}
export default H4;