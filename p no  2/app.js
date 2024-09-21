let input = document.querySelector("#date");
const button = document.querySelector('#btn');
let answer = document.querySelector('#answer');
let calculate =() =>{
    let inputval = input.value;
    let date = new Date();
let birthday = new Date(inputval);
let year = date.getFullYear()- birthday.getFullYear();
let month = date.getMonth()-birthday.getMonth();
if(month<0 || month === 0 && date.getDate()< birthday.getDate()){
    year--
    let ans =year;
}
answer.innerHTML=`Your Age is : ${year}`

button.Disable= true

}
button.addEventListener('click',calculate);