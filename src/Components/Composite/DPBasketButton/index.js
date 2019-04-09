import styled from 'styled-components';
import React from 'react'
import FaBeer from 'react-icons/lib/fa/shopping-cart';

const Count = styled.span`
width: 18px;
    height: 18px;
    background-color: rgb(255, 255, 255);
    display: block;
    text-align: center;
    text-indent: 1px;
    color: rgb(20, 179, 81);
    line-height: 18px;
    font-size: 12px;
    font-weight: 700;
    position: absolute;
    right:0
    z-index: 3;
    border-radius: 50%;
    margin-top: 10px;
    margin-right: 8px;
`;


const BasketIcon = styled.button`
    
    width: 50px;
    height: 50px;
    background-color: rgb(20, 179, 81);
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 23px;
    position: relative;
    z-index: 2;
    opacity: 1;
    border-radius: 50%;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    overflow: hidden;
    outline: none !important;
    float:right;
margin:10px;
    `;


const BasketButton = (props) => {
  return (
    <div>
      <Count> {props.productCount}</Count>
      <BasketIcon onClick={() => props.onClick ? props.onClick() : undefined}>
        <FaBeer />
      </BasketIcon>
    </div>
  )
}
export default BasketButton;
