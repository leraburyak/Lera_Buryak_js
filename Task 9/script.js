// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// xhr.send();

// xhr.onload = function() {
//     if(xhr.status == '200') {
//     createList(JSON.parse(xhr.response));
//     } else {
//         console.log('error');
//     }
// };

// let result = 0;
// function createLike() {
// let button = document.querySelector('.like')
// button.value = result;
// result++;
// }


let button = document.querySelector("#button");

function addButton() {
    button +5;
    console.log(7);

}
button.addEventListener('click', addButton)