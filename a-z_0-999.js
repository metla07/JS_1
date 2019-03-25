"use strict"

// Я взял пример из гугла и модифицировал его - для того чтобы показать, что всё понял...
        
let max = 999;
let digit = {
  number: prompt('Введите число от 0 до 999'), 
  hundreds: 0,
  tens: 0,
  units: 0,
  fractional: 0 // я добавил для дробного числа
  
};
if ( digit.number > 0 && digit.number >= 0.01 && digit.number < 1 ){
    digit.fractional = digit.number;


}else if (digit.number <= -0.01 && digit.number > -0.99 ){
    digit.fractional = digit.number;


}else if (digit.number <= -0.0 && digit.number == 0 ){
    digit.number = 0; // при нуле мы будем получать 0 ))


}else if (digit.number <= 9 && digit.number >= 0){
  digit.units = digit.number;


} else if (digit.number <= 999 && digit.number >= 0){
    digit.hundreds = Math.floor(digit.number / 100 % 10); // Тут мы получаем число перед точкой, которое получилось от деления на 100 и остатка от деления, так мы получили сотни. 
    digit.tens = Math.floor(digit.number / 10 % 10); // Тут мы получаем число перед точкой, которое получилось от деления на 10 и остатка от деления, так мы получили десятки.
    digit.units = Math.floor(digit.number % 10); // Тут мы получаем число перед точкой, которое получилось от деления, так мы получили единицы.
  
  
}else if (digit.number <= -1 && digit.number >= -999) {
    digit.hundreds = Math.ceil(digit.number / 100 % 10);
    digit.tens = Math.ceil(digit.number / 10 % 10);
    digit.units = Math.ceil(digit.number % 10);
    
    // в этом блоке вычисляем отрицательные числа и методом Math.ceil мы получаем корректную отрицательную единицу === введённой 

}else if ( isNaN(digit.number)) {
    digit.number = 0;
     console.log('Ошибка : введите корректно, целое число от 0 до 999 !'); // проверка на не число
    

}else  {
    digit.number = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');  // всё остальное 
}
console.log(digit);


//  Math.round(Math.random() * max) x = Math.round(1.005*100)/100;