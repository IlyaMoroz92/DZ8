alert('If you want to check DZ8, press CTRL + SHIFT + J');

console.log('Array.prototype.length:----------------------------------------------------------------');
let cars = ['Ford', 'Opel', 'BMW', 'Suzuki', 'Renault'];
console.log(cars);
console.log(cars.length);
cars.length = 6;     
console.log(cars[5]);
cars[5] = 'GMC';
console.log(cars);   


/* ------------------------------------------------------------------------------------------------- */

let numbers = [1, 2, 3, 4, 5];
for (let n = 0;  n < numbers.length; n++) {
    numbers[n] = Math.pow(numbers[n],3);
    console.log(numbers[n]);
}
console.log(numbers);

/* ------------------------------------------------------------------------------------------------- */

numbers = [1, 2, 3, 4, 5];
if (numbers.length > 3) {
    numbers.length = 3;
}
console.log('Результат:')
console.log(numbers);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype[@@iterator]():----------------------------------------------------------');
cars = ['Ford', 'Opel', 'BMW', 'Suzuki', 'Renault'];  // For of
for (let car of cars) {
    console.log(car);
}

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.concat():---------------------------------------------------------------');
cars = ['Ford', 'Opel', 'BMW', 'Suzuki', 'Renault'];
numbers = [1, 2, 3, 4, 5];
let carsNumbers = cars.concat(numbers);
console.log(carsNumbers);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.copyWithin():-----------------------------------------------------------');
numbers = [1, 2, 3, 4, 5]; /// сделаем все эл-ты 3
numbers.copyWithin(4, 2, 3);
numbers.copyWithin(3, 2, 3);
numbers.copyWithin(1, -3, -2);
numbers.copyWithin(0, -3, -2);
/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.entries():--------------------------------------------------------------');
cars = ['Ford', 'Opel', 'BMW', 'Suzuki', 'Renault'];
car = cars.entries();
for (i=0; i< cars.length; i++) {
console.log(car.next().value);
}

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.ever):------------------------------------------------------------------')
function more(element, index, array) {
    return element >=20;
}
let numbers2 = [ 3, 100, 23, 4, 19];
let numbers3 = [21, 64, 45, 78, 35];
console.log(numbers2.every(more));
console.log(numbers3.every(more));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.fill():-----------------------------------------------------------------')
numbers = [1, 2, 3, 4, 5];
for (k=0; k<numbers.length; k++ ) {
    numbers.fill(0, k, k+1);
}
console.log(numbers);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.filter():---------------------------------------------------------------')
function isEven(value) {
    return (value % 2)==0;
}
let even = [12, 8, 5, 13, 2];
console.log(even.filter(isEven));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.find():-----------------------------------------------------------------')
numbers = [1, 2, 3, -4, -2];
function isTwo(element, index, array) {
    if (element ==-2) {
        return true;
    }
}
console.log(numbers.find(isTwo));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.findIndex():------------------------------------------------------------')
numbers = [10, 20, 30, 40, 50, 60, 70, 60];
let findNumbers = numbers.findIndex(element =>{
    if (element >29 && element < 69) {
        return true
    }
})
console.log(findNumbers);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.lastIndexOf():----------------------------------------------------------')
let findLastNumbers = numbers.lastIndexOf(60)
console.log(findLastNumbers);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.flat():-----------------------------------------------------------------')
let arrFlat = [1, 2, [4, [5, [6], 7], 8], 9];
let flatCheck = arrFlat.flat(3);
console.log(flatCheck);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.flatMap():--------------------------------------------------------------')
numbers = [1, 3, 5, 7];
let masive = a =>[a, a];
console.log(numbers.flatMap(masive));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.map():------------------------------------------------------------------')
numbers = [10, 10, 30, 30, 50, 50, 70, 70];
let ten = numbers.map(function(num) {
    return num/10;
});
console.log(ten);



/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.forEach():--------------------------------------------------------------')
numbers = [5, 4, 3, 2, 1];
numbers.forEach((elem, i, arr) =>{
    console.log(arr);
    console.log(i);
    console.log(elem);
})

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.from():---------------------------------------------------------------------------')
let word = 'REVOLUTION';
console.log(Array.from(word));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.includes():-------------------------------------------------------------')
numbers = [5, 4, 3, 2, 1, 0, 1, 2, 3, 4];
console.log(numbers.includes(5));
console.log(numbers.includes(5,1));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.indexOf():--------------------------------------------------------------')
numbers = [5, 4, 3, 2, 1, 0, 1, 2, 3, 4];
console.log(numbers.indexOf(2, 5));
console.log(numbers.indexOf(5, 1));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.isArray():------------------------------------------------------------------------')
numbers = [5, 2, 4, 3, 2, 1, 0, 1, 2, 3, 4];
console.log(Array.isArray(numbers));
numbers2 = '2, 3, 4 ';
console.log(Array.isArray(numbers2));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.join():-----------------------------------------------------------------')
numbers = [5, 2, 4, 3, 2, 1, 0, 1, 2, 3, 4];
console.log(numbers.join(' - '));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.keys():-----------------------------------------------------------------')
cars = ['Ford', 'Opel', 'BMW', 'Suzuki', 'Renault'];
let iterator = cars.keys();
    for (key of iterator) {
        console.log(key);
}

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.of():-----------------------------------------------------------------------------')
let arr = Array(7);
console.log(arr);
let newArr = Array.of(7);
console.log(newArr);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.pop():------------------------------------------------------------------')
let cars22 = ['Ford', 'Opel', 'BMW', 'Suzuki', 'Renault'];
let cars33 = cars22.pop();
console.log(cars33);
console.log(cars22);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.push():-----------------------------------------------------------------')
let cars44 = cars22.push('Renault');
console.log(cars22);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.reduce():---------------------------------------------------------------')
numbers = [5, 4, 3, 2, 1];
let sum = numbers.reduce((a,b) =>  
    a + b
);
console.log(sum)

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.reduceRight():----------------------------------------------------------')
number = [[5, 5], [3, 3], [1, 1]];
let newNumber = number.reduceRight((a, b) => 
    a.concat(b)
);
console.log(newNumber);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.reverse():--------------------------------------------------------------')
let mas = ['T', 'P', 'I', 'R', 'C', 'S', 'A' , 'V', 'A', 'J'];
console.log(mas.reverse());

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.shift():----------------------------------------------------------------')
cars = ['Ford', 'Opel', 'BMW', 'Suzuki', 'Renault'];
let carShift = cars.shift();
console.log(carShift);
console.log(cars);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.unshift():--------------------------------------------------------------')
cars.unshift(carShift);
console.log(cars);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.slice():----------------------------------------------------------------')
cars = ['Ford', 'Opel', 'BMW', 'Suzuki', 'Renault'];
let carsSlice = cars.slice(2,-1);
console.log(carsSlice);
console.log(cars);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.splice()():-------------------------------------------------------------')
let carsSplice = cars.splice(0, 5, 'Toyota');
console.log(carsSplice);
console.log(cars)

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.some():-----------------------------------------------------------------')
arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
even = function(x) {
    return x % 2 === 0;
}
console.log(arr.some(even));

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.sort():-----------------------------------------------------------------')
arr = [1, 9, 112, 17, 16, 5, 1114, 3, 12, 10];
console.log(arr.sort());
let arrWord = ['abb', 'aab', 'baa', 'aaa', 'aba'];
console.log(arrWord.sort());

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.toLocaleString():-------------------------------------------------------')
let numbers1 = [1, 2, 3];
numbers2 = [4, 5, 6];
numbers3 = 7;
let allNumbers = [numbers1, numbers2, numbers3];
console.log(allNumbers);
let tls = allNumbers.toLocaleString();
console.log(tls);

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.toString():-------------------------------------------------------------')
let string = ['Это', ' просто', ' строка'];
console.log(string.toString());

/* ------------------------------------------------------------------------------------------------- */
console.log('Array.prototype.values():---------------------------------------------------------------')
mas = ['J', 'A', 'V', 'A', 'S', 'C', 'R' , 'I', 'P', 'T'];
let newMas = mas.values();
console.log(newMas);
for (let i of newMas) {
    console.log(i);
}

/* ------------------------------------------------------------------------------------------------- */


