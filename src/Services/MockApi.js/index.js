export default {

  getProducts() {
    return {
      "status": 200,
      "data": {
        "products": [
          {
            "id": "1",
            "productName": "Dopdolu",
            "imageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Global/DOPDOLU/NULL/434x404/TR",
            "size": "Orta",
            "description": "Jambon, Sucuk, Sosis, Mozarella Peyniri, Pizza Sos, Siyah Zeytin, Domates, Kekik",
            "price": "47.99",
            "detailImageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/DOPDOLU/NULL/1170x400/TR"

          }, {
            "id": "2",
            "productName": "Sucuksever Pizza",
            "imageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Global/_SUCUKPI/NULL/434x404/TR",
            "size": "Orta",
            "description": "Sucuk, Mozarella Peyniri, Pizza Sos",
            "price": "47.99",
            "detailImageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/_SUCUKPI/NULL/1170x400/TR"


          }, {
            "id": "3",
            "productName": "Klasik",
            "imageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Global/PIZZA/NULL/434x404/TR",
            "size": "Orta",
            "description": "Mozarella Peyniri, Pizza Sos",
            "price": "47.99",
            "detailImageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/PIZZA/NULL/1170x400/TR"

          },
          {
            "id": "4",
            "productName": "Dopdolu",
            "imageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Global/DOPDOLU/NULL/434x404/TR",
            "size": "Orta",
            "description": "Jambon, Sucuk, Sosis, Mozarella Peyniri, Pizza Sos, Siyah Zeytin, Domates, Kekik",
            "detailImageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/DOPDOLU/NULL/1170x400/TR",
            "price": "47.99",

          },
          {
            "id": "5",
            "productName": "Sucuksever Pizza",
            "imageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Global/_SUCUKPI/NULL/434x404/TR",
            "size": "Orta",
            "description": "Sucuk, Mozarella Peyniri, Pizza Sos",
            "price": "47.99",
            "detailImageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/_SUCUKPI/NULL/1170x400/TR"


          }, {
            "id": "6",
            "productName": "Klasik",
            "imageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Global/PIZZA/NULL/434x404/TR",
            "size": "Orta",
            "description": "Mozarella Peyniri, Pizza Sos",
            "price": "47.99",
            "detailImageUrl": "https://dpe-cdn.azureedge.net/api/medium/ProductOsg/Detail/PIZZA/NULL/1170x400/TR"

          },
        ]

      }
    }
  },

  getBasketProduct() {
    return {
      "status": 200,
      "data": {
        "products": [
          {
            "id": "1",
            "productId": "1",
            "productName": "Dopdolu",
            "size": "Orta",
            "price": "47.99",
            "productCount": 4
          }, {
            "id": "2",
            "productId": "2",
            "productName": "Sucuksever Pizza",
            "size": "Orta",
            "price": "47.99",
            "productCount": 1

          }, {
            "id": "3",
            "productId": "3",
            "productName": "Klasik",
            "size": "Orta",
            "price": "47.99",
            "productCount": 2

          },
        ]
      }
    }
  }
}
