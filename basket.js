// "use strict";
/*
      
        2. С этого урока начинаем работать с функционалом интернет - магазина.

            Предположим, есть сущность корзины.Нужно реализовать функционал
            подсчета стоимости корзины в зависимости от находящихся в ней товаров.
            Товары в корзине хранятся в массиве.
      
                                    Задачи:

            a.Организовать такой массив для хранения товаров в корзине;
            b.Организовать функцию countBasketPrice, которая будет считать
                                стоимость корзины.

          Продолжить	работу	с	интернет-магазином,	а	именно,	перенести	функционал	
                       подсчета	корзины	на	объектно-ориентированную	базу:

          создать	объект	Basket	с	полем	goodList	и	методами	countTotalPrice,
          countTotalNumber и	putProduct (методы	должны	считать	общую	стоимость	того,	
          что	в	goodList, общее	количество	того,	что	в	goodList и	добавлять	товар	в	 корзину)

        • создать	массив	товаров	с	полями	name	и	price.

        • после	этого	пройтись	по	нему	в	цикле	и	положить	в	корзину	по	одному	
          товару	на	четной	позиции	и	по	2	товара	на	нечетной	позиции.

        • внутри	корзины в	массиве	goodList у каждого	товара	должно	быть	поле	
          count – количество	товаров	этого	вида	в	корзине	(например,	5	красных	шаров).
          
        • вывести	общую	стоимость	корзины	и	общее	количество	товаров	в	корзине
      
  
*/

let a = [{
    name: 'phone1',
    price: 50
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
}, {
    name: 'phone9',
    price: 600
}, {
    name: 'phone10',
    price: 750
}, {
    name: 'phone11',
    price: 350
}, {
    name: 'phone12',
    price: 400
}, {
    name: 'phone13',
    price: 500
}, {
    name: 'phone14',
    price: 600
}, {
    name: 'phone15',
    price: 750
}];

let Basket = {
    goodList: [],

    putProduct(product) {

        for (let i = 0; i < this.goodList[i]; i++) {
            let el = this.goodList[i];
            if (el.name == product.name) {
                el.count++;
                continue;
            };
        };
        this.goodList.push(Object.assign(product, {
            count: 1

        }));
        if (quantity == Basket.countTotalNumber()) {
            let basketDisplay = document.querySelector('.basket_display');
            let content = document.createElement('div');
            content.className = 'block2';
            let totalNumber = document.createElement('span');
            totalNumber.className = 'span_1';
            let totalPrise = document.createElement('span');
            totalPrise.className = 'span_2';
            let txtNumber = document.createTextNode("Количество товара в корзине  - " + this.countTotalNumber());
            let txtPrise = document.createTextNode("Общая стоимость товара  - " + this.countTotalPrice());
            totalNumber.appendChild(txtNumber);
            totalPrise.appendChild(txtPrise);
            content.appendChild(totalNumber);
            content.appendChild(totalPrise);

            basketDisplay.appendChild(content);
        };

    },
    countTotalNumber() {
        let total = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            let el = this.goodList[i];
            total += el.count;
        }
        return total;
    },
    countTotalPrice() {
        let totalSum = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            let el = this.goodList[i];
            totalSum += el.count * el.price;
        }
        return totalSum;

    }

};



let quantity = parseInt(prompt('Введите число от 0 - до 15  :'));

if (quantity == 0 || isNaN(quantity) == true || quantity > 15) {
    let basketDisplay = document.querySelector('.basket_display');
    let content2 = document.createElement('div');
    content2.className = 'block_empty';
    let txtBlockEmpty = document.createTextNode("Количество товара в корзине : 0 ");
    content2.appendChild(txtBlockEmpty);
    basketDisplay.appendChild(content2);
} else {


    for (let i = 0; i < quantity; i++) {
        Basket.putProduct(a[i]);


        // if (i % 2 == 0) {
        //     Basket.putProduct(a[i]); //получаем чётный 0 товар

        // } else {
        //     Basket.putProduct(a[i]); //два раза кладём попавшийся нечётный продукт
        //     Basket.putProduct(a[i]);

        // };
    };
};
let basketDisplay = document.querySelector('.basket_display');
let totalTotal = document.createElement('div');
totalTotal.className = 'total_total';
totalTotal.appendChild(document.createTextNode('Итоговая сумма  : ' + Basket.countTotalPrice()));
basketDisplay.appendChild(totalTotal);

console.log(Basket.goodList);
console.log(Basket.countTotalNumber());
console.log(Basket.countTotalPrice());