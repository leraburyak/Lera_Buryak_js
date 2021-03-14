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


// let button = document.querySelector("#button");

// function addButton() {
//     button +5;
//     console.log(7);

// }
// button.addEventListener('click', addButton)
// let button = document.querySelector("#button");
//     let result = 0;
//      function addButton() {
//     result += 5;
//     document.querySelector("#volume").value= result;
// }
//     button.addEventListener('click', addButton);

let url = fetch('https://jsonplaceholder.typicode.com/users');
url
    .then(result => result.json())
    .then(users => printUsers(users))
    .catch(error => (error));


let ul = document.createElement('ul');
document.body.appendChild(ul);

function printUsers(arr) {
    arr.forEach(el => {
        let li = document.createElement('li');
        li.innerHTML = el.id + ' ' + el.name;
        ul.appendChild(li);
    })
}
    
let object = [
    {name: "AQA", enrollment: 100},
    {name: "ARA", enrollment: 50},
    {name: "ABA", enrollment: 100},
    {name: "AJA", enrollment: 150},
    {name: "ATA", enrollment: 50},
];

let obj = {
    50: [{name: "ARA", enrollment: 50},
         {name: "ARA", enrollment: 50}
],
    100: [{name: "AQA", enrollment: 100},
          {name: "ABA", enrollment: 100}]
}
function createEl(arr) {
    return arr.reduce((acc, item) => {
        if(item.enrollment)
        acc[item.inrollment] = item;
        return acc;
    }, {})
}
console.log(createEl(object));