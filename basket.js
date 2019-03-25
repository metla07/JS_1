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
}]

let Basket = {
    goodList: [],
    putProduct (product){
        for (let i = 0; i < this.goodList.length; i++) {
            let el = this.goodList[i];
            if(el.name == product.name){
                el.count++;
                return;
            };
        };
        this.goodList.push(Object.assign(product, {count:1}));
    },
    countTotalNumber(){
        let total = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            let el = this.goodList[i];
            total += el.count;
        }
        return total;
    },
    countTotalPrice (){
        let totalSum = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            let el = this.goodList[i];
            totalSum += el.count * el.price;
        }
        return totalSum;
    }

};
//начало с 1, чтобы получить чётные и нечётные числа
for (let i=1; i <= a.length; i++ ){
    if( i % 2 == 0 ){
        Basket.putProduct(a[i - 1]); //чтобы получить индекс 0 
    }else {
        Basket.putProduct(a[i - 1]); //два раза кладём попавшийся нечётный продукт
        Basket.putProduct(a[i - 1]);
    };
};

console.log(Basket.goodList);
console.log(Basket.countTotalNumber());
console.log(Basket.countTotalPrice());


