import React, { Component } from 'react'
import Div from '../../UI/DPDiv/index'
import PropTypes from 'prop-types';
import H4 from '../../UI/DPH4/index';
import H6 from '../../UI/DPH6/index';
import P from '../../UI/DPPparagraph/index';
import Image from '../../UI/DPImage/index';
import MoneyDisplay from '../../UI/DPMoneyDisplay/index'
import Button from '../../UI/DPButton/index';
const DPProductCard = (props) => {
  debugger;
  return (
    props.productItem && props.productItem ?
      (<Div xs="6" md="3">
        <div>
          <Image
            src={props.productItem.imageUrl} />
          <H4 sm={"18"} md={"18"} >{props.productItem.productName}</H4>
          <H6 sm={"18"} md={"18"}>{props.productItem.size}</H6>
          <P sm={"14"} md={"14"}>{props.productItem.description}</P>
          <MoneyDisplay>{props.productItem.price}</MoneyDisplay>
          <Button sm={"10"} md={"12"} onClick={() => alert("sipariş alındı")}>Sipariş Ver</Button>
        </div>
      </Div>) :
      <div />
  )
}

DPProductCard.propTypes = {
  productItem: PropTypes.object.isRequired
}

export default DPProductCard;