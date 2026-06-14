let chart;

function drawChart(categoryTotals){

    const labels = [];
    const data = [];

    for(let category in categoryTotals){

        if(categoryTotals[category] > 0){

            labels.push(category);
            data.push(categoryTotals[category]);

        }
    }

    const ctx = document.getElementById('expenseChart');

    if(chart){
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data
            }]
        }
    });
}

function updatePercentages(categoryTotals){

    const percentageList = document.getElementById("percentage-list");
    percentageList.innerHTML = "";

    const categoryNames = {
        food: "Food",
        travel: "Travel",
        entertainment: "Entertainment",
        health: "Health",
        other: "Other",
        groceries: "Groceries",
        education: "Education",
        rent: "Rent",
        emi: "EMI",
        subscriptions: "Subscription",
        petrol: "Petrol",
        shopping: "Shopping"
    };

    const categoryColors = {
        food: "#36A2EB",
        travel: "#FF6384",
        entertainment: "#9966FF",
        health: "#FF9F40",
        other: "#808080",
        groceries: "#FFCD56",
        education: "#4BC0C0",
        rent: "#8A2BE2",
        emi: "#7B68EE",
        subscriptions: "#20B2AA",
        petrol: "#C9CBCF",
        shopping: "#1E90FF"
    };

    let total = 0;

    for(let category in categoryTotals){
        total += categoryTotals[category];
    }

    for(let category in categoryTotals){

        if(categoryTotals[category] > 0){

            const percentage =
            ((categoryTotals[category] / total) * 100).toFixed(1);

            const li = document.createElement("li");

           li.innerHTML = `
    <div class="category-info">
        <span class="color-dot"
        style="background:${categoryColors[category]}"></span>

        <span>${categoryNames[category]}</span>
    </div>

    <span class="percentage-value">${percentage}%</span>
`;

            percentageList.appendChild(li);
        }
    }
}

let selectedDate = new Date();

const previousBtn = document.getElementById('previous-date');
const nextBtn = document.getElementById('next-date');
const currentPeriod = document.getElementById('current-period');

currentPeriod.textContent = selectedDate.toDateString();

previousBtn.addEventListener('click', () => {

    selectedDate.setDate(selectedDate.getDate() - 1);

    currentPeriod.textContent = selectedDate.toDateString();

    showDayExpenses();

});

nextBtn.addEventListener('click', () => {

    selectedDate.setDate(selectedDate.getDate() + 1);

    currentPeriod.textContent = selectedDate.toDateString();

    showDayExpenses();

});





const categoryElements = {
    food: document.getElementById('totalfood'),
    travel: document.getElementById('totaltravel'),
    entertainment: document.getElementById('totalentertainment'),
    health: document.getElementById('totalhealth'),
    other: document.getElementById('totalother'),
    groceries: document.getElementById('totalgroceries'),
    education: document.getElementById('totaleducation'),
    rent: document.getElementById('totalrent'),
    emi: document.getElementById('totalemi'),
    subscriptions: document.getElementById('totalsubscription'),
    petrol: document.getElementById('totalpetrol'),
    shopping: document.getElementById('totalshopping')
};

function updateCategoryBreakdown(categoryTotals){

    for(let category in categoryTotals){

        categoryElements[category].textContent =
        `₹${categoryTotals[category]}`;

    }
}


const totalexpense = document.getElementById('total-expense');



const weekbtn = document.getElementById('week-btn');
const totalexpense1 = document.getElementById('total-expense');
function showWeekExpenses(){

    const savedexpense = localStorage.getItem('expenses');

    let expenses;

    if(savedexpense === null){
        expenses = [];
    }
    else{
        expenses = JSON.parse(savedexpense);
    }
    
const today = new Date(selectedDate);
let total = 0;
const categoryTotals = {
    food: 0,
    travel: 0,
    entertainment: 0,
    health: 0,
    other: 0,
    groceries: 0,
    education: 0,
    rent: 0,
    emi: 0,
    subscriptions: 0,
    petrol: 0,
    shopping: 0
};
const sevenDaysAgo = new Date(selectedDate);
sevenDaysAgo.setDate(today.getDate() - 7);

for(let i = 0; i < expenses.length; i++){

    const expense = expenses[i];

    const expenseDate = new Date(expense.date);

    if(expenseDate >= sevenDaysAgo && expenseDate <= today){

        const amount = Number(expense.amount);

total += amount;

if(categoryTotals.hasOwnProperty(expense.category)){
    categoryTotals[expense.category] += amount;
}

    }
}
totalexpense1.textContent = `₹${total}`;
updateCategoryBreakdown(categoryTotals);
drawChart(categoryTotals);
updatePercentages(categoryTotals);
}

weekbtn.addEventListener('click', () => {
    showWeekExpenses();
});

const daybtn = document.getElementById('day-btn');

function showDayExpenses(){

    const savedexpense = localStorage.getItem('expenses');

    let expenses;

    if(savedexpense === null){
        expenses = [];
    }
    else{
        expenses = JSON.parse(savedexpense);
    }

    let total = 0;

    const categoryTotals = {
        food: 0,
        travel: 0,
        entertainment: 0,
        health: 0,
        other: 0,
        groceries: 0,
        education: 0,
        rent: 0,
        emi: 0,
        subscriptions: 0,
        petrol: 0,
        shopping: 0
    };

    const selectedDay =
    selectedDate.toISOString().split('T')[0];

    for(let i = 0; i < expenses.length; i++){

        const expense = expenses[i];

        if(expense.date === selectedDay){

            const amount = Number(expense.amount);

            total += amount;

            if(categoryTotals.hasOwnProperty(expense.category)){
                categoryTotals[expense.category] += amount;
            }

        }
    }

    totalexpense.textContent = `₹${total}`;

    updateCategoryBreakdown(categoryTotals);
drawChart(categoryTotals);
updatePercentages(categoryTotals);
}

daybtn.addEventListener('click', () => {

    showDayExpenses();

});

showDayExpenses();

const monthbtn = document.getElementById('month-btn');

function showMonthExpenses(){

    const savedexpense = localStorage.getItem('expenses');

    let expenses;

    if(savedexpense === null){
        expenses = [];
    }
    else{
        expenses = JSON.parse(savedexpense);
    }

    let total = 0;
    const categoryTotals = {
    food: 0,
    travel: 0,
    entertainment: 0,
    health: 0,
    other: 0,
    groceries: 0,
    education: 0,
    rent: 0,
    emi: 0,
    subscriptions: 0,
    petrol: 0,
    shopping: 0
};

    const today = new Date(selectedDate);

    for(let i = 0; i < expenses.length; i++){

        const expense = expenses[i];

        const expenseDate = new Date(expense.date);

        if(
            expenseDate.getMonth() === today.getMonth() &&
            expenseDate.getFullYear() === today.getFullYear()
        ){

            const amount = Number(expense.amount);

total += amount;

if(categoryTotals.hasOwnProperty(expense.category)){
    categoryTotals[expense.category] += amount;
}

        }
    }

    totalexpense.textContent = `₹${total}`;
    updateCategoryBreakdown(categoryTotals);
drawChart(categoryTotals);
updatePercentages(categoryTotals);
}

monthbtn.addEventListener('click', () => {

    showMonthExpenses();

});

const yearbtn = document.getElementById('year-btn');

function showYearExpenses(){

    const savedexpense = localStorage.getItem('expenses');

    let expenses;

    if(savedexpense === null){
        expenses = [];
    }
    else{
        expenses = JSON.parse(savedexpense);
    }

    let total = 0;
       const categoryTotals = {
    food: 0,
    travel: 0,
    entertainment: 0,
    health: 0,
    other: 0,
    groceries: 0,
    education: 0,
    rent: 0,
    emi: 0,
    subscriptions: 0,
    petrol: 0,
    shopping: 0
};

    const today = new Date();

    for(let i = 0; i < expenses.length; i++){

        const expense = expenses[i];

        const expenseDate = new Date(expense.date);

        if(
            expenseDate.getFullYear() === today.getFullYear()
        ){

           const amount = Number(expense.amount);

total += amount;

if(categoryTotals.hasOwnProperty(expense.category)){
    categoryTotals[expense.category] += amount;
}

        }
    }

    totalexpense.textContent = `₹${total}`;
    updateCategoryBreakdown(categoryTotals);
drawChart(categoryTotals);
updatePercentages(categoryTotals);
}

yearbtn.addEventListener('click', () => {

    showYearExpenses();

});

