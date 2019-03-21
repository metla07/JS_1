   "use strict";

   // 1. Дан массив
   let arrObj = [
       [{
           name: 'Maryxxxx',
           age: 23
       }, {
           name: 'Mike',
           age: 45
       }, {
           name: 'Nick',
           age: 11
       }, {
           name: 'Nina',
           age: 11
       }],
       [{
           name: 'Adam',
           age: 56
       }, {
           name: 'Sara',
           age: 21
       }, {
           name: 'Don',
           age: 22
       }, {
           name: 'Max',
           age: 11
       }, {
           name: 'Miha',
           age: 11
       }],
       [{
           name: 'Karl',
           age: 34
       }, {
           name: 'Marta',
           age: 76
       }, {
           name: 'Vova',
           age: 19
       }]
   ];
   //    arrObj.forEach(function (element, index, array) {
   //        console.log(element);

   //    });
   //   let arrObj_b_copy = Object.assign([], arrObj);
   let b = [];
   arrObj.forEach(function (el, index) {
       b[index] = [];
       el.forEach(function (el2) {
           let neewObj = Object.assign({}, el2);
           b[index].push(neewObj);
       });
   });
   console.log(arrObj);
   console.log(b);
   // const arrObj_b_copy = arrObj.map(a => Object.assign({}, a));

   // const arrObj_b_copy = arrObj.map(a => ({...a}));

   // Цикл для вывода каждого обьекта из массива

   //    for (var i = 0; i < arrObj.length; i++) {
   //        for (var i2 = 0; i2 < arrObj[i].length; i2++) {
   //            console.log('Имя: ' + arrObj[i][i2].name + '; Возраст: ' + arrObj[i][i2].age);

   //        }
   //    }

   //Вывод конкретных обьектов из конкретного массива ---

   // Оригинальный массив
   //    console.log(arrObj);
   //    console.log('Имя: ' + arrObj[1][1].name + ' - Возраст - ' + arrObj[1][1].age);
   //    console.log('Имя: ' + arrObj[0][2].name + ' Возраст - ' + arrObj_b_copy[0][2].age);

   //    // Скопированный массив 
   //    console.log(arrObj_b_copy);
   //    console.log('Имя: ' + arrObj_b_copy[1][1].name + ' Возраст - ' + arrObj_b_copy[1][1].age);
   //    console.log('Имя: ' + arrObj_b_copy[0][2].name + ' Возраст - ' + arrObj_b_copy[0][2].age);

   // Скопируйте его в переменную b и выведите в консоль.


   //Татьяна, я испробовал многе , задание просто вывести его в лог - но поднялся разговор про независсимость и вот мои попытки это сделать