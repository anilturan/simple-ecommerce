import React, { Component } from 'react'
import Div from '../../UI/DPDiv/index'
import PropTypes from 'prop-types';
import H4 from '../../UI/DPH4/index';
import H6 from '../../UI/DPH6/index';
import Image from '../../UI/DPImage/index';
import MoneyDisplay from '../../UI/DPMoneyDisplay/index'
import Button from '../../UI/DPButton/index';


const DPProductDetailCard = (props) => {
  debugger;
  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <H4 sm={"18"} md={"18"} >{props.productItem.productName}</H4>
      <Div xs={"12"} sm={"12"} md={"12"} lg={"10"}>
        <div>
          <Image
            src={props.productItem.detailImageUrl} />
          <H6 style={{ float: "left", margin: 20 }}>Fiyat:</H6>
          <MoneyDisplay style={{ marginTop: 20 }}>{props.productItem.price}</MoneyDisplay>
          <Button sm={"12"} md={"12"} lg={"12"}
            bgColor={"rgb(22, 187, 85)"}
            textColor={"white"}
            borderColor={"rgb(22, 187, 85)"}
            style={{ width: "30%", marginTop: 20 }}
            onClick={() => props.addBasket ? props.addBasket() : undefined}>Sepete Ekle</Button>
        </div>
      </Div>
    </div>)
}

DPProductDetailCard.propTypes = {
  productItem: PropTypes.object.isRequired
}

export default DPProductDetailCard;