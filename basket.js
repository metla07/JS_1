// "use strict";
      /*
      
      2. С этого урока начинаем работать с функционалом интернет - магазина.
            Предположим, есть сущность корзины.Нужно реализовать функционал
            подсчета стоимости корзины в зависимости от находящихся в ней товаров.
            
            Задачи:
                  a.Организовать такой массив для хранения товаров в корзине;
                  b.Организовать функцию countBasketPrice, которая будет считать
            стоимость корзины.
      */

let Basket = [{
    name: 'phone1',
    price: 19
}, {
    name: 'phone2',
    price: 100
}, {
    name: 'phone3',
    price: 150
}, {
    name: 'phone4',
    price: 200
}, {
    name: 'phone5',
    price: 300
}, {
    name: 'phone6',
    price: 350
}, {
    name: 'phone7',
    price: 400
}, {
    name: 'phone8',
    price: 500
} ]

var basket_price = 0;

function countBasketPrice() {
    for (i = 0; i < Basket.length; i++) {
        basket_price = basket_price + Basket[i].price;
    }
    return basket_price;
}

(countBasketPrice(Basket));

console.log(basket_price + ' Стоимость товара');