// function a(){
//     return b;
//     function b(){
//         return 'Hello World'
//     }
// }

// console.log(a());

// String.prototype.mySplit = function(seperator){
//    let arr = [];
//   let startIndex = 0;
//   let l = 1;
//   let i = 0;
//   let foundIndex = this.indexOf(seperator);
//   if(seperator==''){
//     while(i<this.length){
//         arr.push(this.substring(startIndex,l))
//         startIndex++;
//         l++;
//         i++;
//     }
//   }
// else{
//     while (foundIndex!==-1) {
//         arr.push(this.substring(startIndex,foundIndex))
//         startIndex = foundIndex+seperator.length;
//         foundIndex = this.indexOf(seperator,startIndex);
//       }
//       arr.push(this.substring(startIndex))
// }
//    return arr;
// }

// let str = "My name is Vikas.";


// console.log(str.mySplit(' '));


// let a = 100;
// let b = a++;
// let c = ++a;

// let d = (a==b)?c++:++c;
// console.log(d);


// const obj = {};

// obj.value = undefined;

// console.log(Object.hasOwn(obj,'value'));

const arr = [1,2,3,4,5]

// Array.prototype.myFilter = function(cb){
//    let newArr = [];
//    for(let element of this){
//     if(cb(element))
//     newArr.push(element)
//    }
//    return newArr;
// }


// Array.prototype.myMap = function(cb){
//    let newArr = [];
//    for(let element of this){
//       newArr.push(cb(element))
//    }
//    return newArr
// }

// let b = arr.myMap((a)=>a*3)

// console.log(b);

console.log(global);
