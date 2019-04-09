import styled from 'styled-components';
import PropTypes from 'prop-types';

const H6 = styled.h6`
max-width: 100%;
text-overflow: ellipsis;
font-weight: normal;
text-align: left;
color:${props => props.textColor || "rgb(80, 80, 97)"};
margin: 0px 0px 20px;
overflow: hidden;
padding:5px 20px 5px 20px;

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

H6.propTypes = {
  textColor: PropTypes.string
}
export default H6;