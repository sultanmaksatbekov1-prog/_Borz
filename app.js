
const containsOnlyDigits = (str) => {

    return /^\d+$/.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false  


// //2

// const interval = setInterval(() => {
//     console.log("Прошла секунда!") 
// }, 1000)

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)

// 3

// const intervalTwo = setInterval(() => {
//     console.log("Прошла секунда!") 
// }, 1000)

// setTimeout(() => {
//     clearInterval(intervalTwo)
// }, 10000)
 // 4 

// const button = document.querySelector(".block")

// button.onclick = (event) => {
//     event.target.classList.toggle('green')
// }

// 5

// const xhr = new XMLHttpRequest();

// xhr.open("GET", "test.json")
//  xhr.setRequestHeader ('Content-type', 'aplication/json')
// xhr.send()

// xhr.onload = () => {
//     if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText)
//         console.log(data);    
//     }
//     else {
//         console.log("error");
        
//     }
// }