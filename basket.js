 "use strict";
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
 //Рандомный массив 
 //   let getRandomPrice = function(){
 //       return parseInt(Math.random() * 1000) + 10;
 //   }

 //   let a = [];
 //   for (let i = 0; i < 100; ++i){
 //       a[i] = { name: 'Phone ' + (i + 1), price: getRandomPrice()};
 //   }
 //Обычный массив
 let a = [{
     name: 'Phone 1',
     price: 50
 }, {
     name: 'Phone 2',
     price: 100
 }, {
     name: 'Phone 3',
     price: 150
 }, {
     name: 'Phone 4',
     price: 200
 }, {
     name: 'Phone 5',
     price: 300
 }, {
     name: 'Phone 6',
     price: 350
 }, {
     name: 'Phone 7',
     price: 400
 }, {
     name: 'Phone 8',
     price: 500
 }, {
     name: 'Phone 9',
     price: 600
 }, {
     name: 'Phone 10',
     price: 750
 }, {
     name: 'Phone 11',
     price: 850
 }, {
     name: 'Phone 12',
     price: 900
 }, {
     name: 'Phone 13',
     price: 1000
 }, {
     name: 'Phone 14',
     price: 1200
 }, {
     name: 'Phone 15',
     price: 1750
 }];

 let basketArrey = document.createElement('div');
 basketArrey.className = 'basketArrey';
 let body = document.querySelector('body');
 body.appendChild(basketArrey);
 let totalTotal = document.createElement('div');
 totalTotal.className = 'total_total';
 totalTotal.innerHTML = 'Корзина для товара  \n  ' + '\n' + '  Просто выберите товар и  \r\n' + '  добавьте его в корзину \n - ' + 'Удачи!';
 //totalTotal.appendChild(document.createTextNode('Корзина для товара  \n  ' + '  Просто выберите товар и  \n' +  '  добавьте его в корзину \n' +  'Удачи!'));
 let basketDisplay = document.querySelector('.basket_display');
 basketDisplay.appendChild(totalTotal);
 let description = document.createElement('div');
 description.className = 'description';
 description.innerHTML = 'Товары нашего магазина : '
 basketArrey.appendChild(description);

 let inputBtn = document.createElement('input');
 inputBtn.className = 'input_btn';
 inputBtn.value = ('Посчитать');
 inputBtn.setAttribute("type", "button");
 basketArrey.appendChild(inputBtn);
 inputBtn.addEventListener('click', function (event) {
     event.stopPropagation();
     event.preventDefault();
     totalTotal.innerHTML = 'Итоговая сумма - ' + Basket.countTotalPrice() + ' р.';
     Basket.conclusion();
     if (0 == Basket.countTotalNumber()) {
         totalTotal.className = 'total_total_change_red';
     };
 });

 let inputBtnResset = document.createElement('input');
 inputBtnResset.className = 'input_btn_resset';
 inputBtnResset.value = ('Сброс');
 inputBtnResset.setAttribute("type", "reset");
 basketArrey.appendChild(inputBtnResset);
 inputBtnResset.addEventListener('click', function (event) {
     event.stopPropagation();
     event.preventDefault();
     window.location.reload(true);
 });

 let Basket = {
     goodList: [],

     putProduct(product) {

         for (let i = 0; i < this.goodList[i]; i++) {
             let el = this.goodList[i];
             if (el.name == product.name) {
                 el.count++;
                // break;
                  continue;
             };
         };
         this.goodList.push(Object.assign(product, {
             count: 1

         }));

     },
     conclusion() {

         let content = document.createElement('div');
         content.className = 'block2';
         let totalNumber = document.createElement('span');
         totalNumber.className = 'span_number';
         let totalPrise = document.createElement('span');
         totalPrise.className = 'span_prise';
         let txtNumber = document.createTextNode("Количество товара в корзине  - " + Basket.countTotalNumber());
         let txtPrise = document.createTextNode("Общая стоимость товара  - " + Basket.countTotalPrice() + ' руб.');
         totalNumber.appendChild(txtNumber);
         totalPrise.appendChild(txtPrise);
         content.appendChild(totalNumber);
         content.appendChild(totalPrise);
         basketDisplay.appendChild(content);

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

 for (let i = 0; i < a.length; i++) {

     let go = a[i];
     
     let placeOf_Goods = document.createElement('div');
     let input_add = document.createElement('input');
     placeOf_Goods.className = 'placeOf_Goods';
     placeOf_Goods.innerHTML = go.name + '  \n ' + ' ' + go.price + ' p.';
     input_add.className = 'input_add';
     input_add.value = ('Добавить');

     input_add.setAttribute("type", "button");
     input_add.addEventListener('click', function (event) {
         event.stopPropagation();
         event.preventDefault();
         Basket.putProduct(a[i])
         totalTotal.className = 'total_total_change_green';
         totalTotal.innerHTML = 'Добавлено товара в корзину : ' + Basket.countTotalNumber() + ' шт.';
     });

     placeOf_Goods.appendChild(input_add);
     basketArrey.appendChild(placeOf_Goods);



     continue;
 };

 console.log(Basket.goodList);
 console.log(Basket.countTotalNumber());
 console.log(Basket.countTotalPrice());