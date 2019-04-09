import styled from 'styled-components';


const MoneyDisplay = styled.span`
    display: block;
    height: 30px;
    line-height: 34px;
    font-weight: 600;
    color: ${props => props.textColor || " rgb(163, 130, 72)"};
    float: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding:0px 10px 20px 20px;

    
${({ xs }) => (xs ? `font-size:${xs}px;` : "font-size:10px")};

@media only screen and (min-width:768px){
  ${({ sm }) => sm && `font-size:${sm}px;`};
}
@media only screen and (min-width:992px){
  ${({ md }) => md && `font-size:${md}px;`};
}
@media only screen and (min-width:1200px){
  ${({ lg }) => lg ? `font-size:${lg}px;` : "font-size:19.6px"};
}
`;


export default MoneyDisplay;