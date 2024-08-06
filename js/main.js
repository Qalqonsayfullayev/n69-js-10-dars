//-----------------------2-misol---------------------

// const arr1 = [5, 6, true, null, 8];
// const arr2 = [0, 2, 5, false, 6];

// const combinedArr = arr1.concat(arr2);
// const sum = combinedArr.reduce((acc, val) => {
//     if (typeof val === 'number') return acc + val;
//     return acc;
// }, 0);

// console.log("yig'indi:", sum);

//-----------------------3-misol---------------------

// let arr = [34, 12, 5, 76, 22];
// let minIndex = arr.indexOf(Math.min(...arr));

// console.log("eng kichik son indeksi:", minIndex);

//-----------------------5-misol---------------------

// let arr1 = [5, 4, 3, 6, 3, 7, 1];
// let arr2 = [22, 1, 42, 34, 55, 67, 11, 32];

// let mergedArr = arr1.concat(arr2);
// mergedArr.sort((a, b) => a - b);

// console.log(mergedArr);

//-----------------------6-misol---------------------

// let carsArr = [
//     { 
//         name: "Lasetti", 
//         price: 9000 
//     },
//     { 
//         name: "Damas", 
//         price: 7800 
//     },
//     { 
//         name: "Cobalt", 
//         price: 12500 
//     },
//     { 
//         name: "Gentra", 
//         price: 14000 
//     },
//     { 
//         name: "Onix", 
//         price: 1700 
//     }
// ];

// carsArr.sort((a, b) => a.name.localeCompare(b.name));
// console.log("name si bo'yicha:", carsArr);

// carsArr.sort((a, b) => a.price - b.price);
// console.log("price si boyicha:", carsArr);

//-----------------------7-misol---------------------

// let arr = ["Salom", "Raxmat"];
// arr.splice(1, 0, "Yaxshi", "Yomon");

// arr.forEach(word => console.log(word));

//-----------------------8-misol---------------------

// let i = prompt("So'z kiriting:")
// let a = prompt("Raqam kiriting:")

// function reverseString(input) {
//     if (typeof input === 'string') {
//         return input.split('').reverse().join('');
//     } else if (typeof input === 'number') {
//         return parseInt(input.toString().split('').reverse().join(''), 10);
//     } else {
//         return "Invalid input";
//     }
// }

// console.log(reverseString(i)); 
// console.log(reverseString(a)); 


//-------------------------------------DOM------------------------------

// let speech = new webkitSpeechRecognition()
// let audio = new Audio
// speech.lang = "Uz-uz"


// speech.onresult = function(e){
//     let result = e. results[0][0].transcript 
//     if (result == "audio"){
//         audio.src = "./audio/audi.ogg" 
//         audio.play()
//     }
//     else if (result == "yetmadi") { 
//         audio.src = "./audio/buning-balandku.ogg" 
//         audio.play()
//     }
//     else if (result == "yordam"){
//         audio.src = "./audio/mahmutjon.ogg" 
//         audio.play()
//     }
// }

// function handleClickBtn(){
//     speech.start()
// }
