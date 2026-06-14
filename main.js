const date = document.getElementById("date");

function showDate() {
    const currentDate = new Date();

    const formattedDate = `Today ${currentDate.getDate()} ${ currentDate.toLocaleString("en-US", { month: "long" })} ${currentDate.getFullYear()}`;

    date.innerHTML = formattedDate;
}

showDate();



const categoryfood = document.getElementById('food');
const categorytravel = document.getElementById('travel');
const categoryentertainment = document.getElementById('entertainment');
const caregoryhealth = document.getElementById('health');
const categoryother = document.getElementById('other');
const categorygroceries = document.getElementById('groceries');
const categoryeducation = document.getElementById('education');
const categoryrent = document.getElementById('rent');
const categoryemi = document.getElementById('emi');
const categorysubscription = document.getElementById('subscriptions');
const categogorypetrol = document.getElementById('petrol');
const categoryshopping = document.getElementById('shopping');

categoryfood.addEventListener('click', () => {
    localStorage.setItem('category', 'food');
    window.location.href = 'expense-input.html';
});
categorytravel.addEventListener('click', () => {
    localStorage.setItem('category', 'travel');
    window.location.href = 'expense-input.html';
});
categoryentertainment.addEventListener('click', () => {
    localStorage.setItem('category', 'entertainment');
    window.location.href = 'expense-input.html';
});
caregoryhealth.addEventListener('click', () => {
    localStorage.setItem('category', 'health');
    window.location.href = 'expense-input.html';
});
categoryother.addEventListener('click', () => {
    localStorage.setItem('category', 'other');
    window.location.href = 'expense-input.html';
});
categorygroceries.addEventListener('click', () => {
    localStorage.setItem('category', 'groceries');
    window.location.href = 'expense-input.html';
});
categoryeducation.addEventListener('click', () => {
    localStorage.setItem('category', 'education');
    window.location.href = 'expense-input.html';
});
categoryrent.addEventListener('click', () => {
    localStorage.setItem('category', 'rent');
    window.location.href = 'expense-input.html';
});
categoryemi.addEventListener('click', () => {
    localStorage.setItem('category', 'emi');
    window.location.href = 'expense-input.html';
});
categorysubscription.addEventListener('click', () => {
    localStorage.setItem('category', 'subscriptions');
    window.location.href = 'expense-input.html';
});
categogorypetrol.addEventListener('click', () => {
    localStorage.setItem('category', 'petrol');
    window.location.href = 'expense-input.html';
});
categoryshopping.addEventListener('click', () => {
    localStorage.setItem('category', 'shopping');
    window.location.href = 'expense-input.html';
});

console.log('main.js loaded');

const todaystotal = document.getElementById('total-expenses');

const savedexpense = localStorage.getItem('expenses');

let expenses;

if(savedexpense === null){
    expenses = [];
}
else{
    expenses = JSON.parse(savedexpense);
}

let total = 0;

const today = new Date().toISOString().split('T')[0];

for(let i = 0; i < expenses.length; i++){

    const expense = expenses[i];

    if(expense.date === today){

        total += Number(expense.amount);

    }
}

todaystotal.textContent = `₹${total}`;