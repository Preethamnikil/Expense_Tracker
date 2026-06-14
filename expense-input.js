const category = localStorage.getItem('category');
if(category === 'food'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '🍴';
    categoryname.textContent = 'Food';
}
if(category === 'travel'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '✈️';
    categoryname.textContent = 'Travel';
}
if(category === 'entertainment'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '🎬';
    categoryname.textContent = 'Entertainment';
}
if(category === 'health'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '🏥';
    categoryname.textContent = 'Health';
}   
if(category === 'other'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '…';
    categoryname.textContent = 'Other';
}
if(category === 'groceries'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '🛒';
    categoryname.textContent = 'Groceries';
}
if(category === 'education'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '🎓';
    categoryname.textContent = 'Education';
    
}
if(category === 'rent'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '🏠';
    categoryname.textContent = 'Rent';
}   
if(category === 'emi'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '💳';
    categoryname.textContent = 'EMI';
}
if(category === 'subscriptions'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '📱';
    categoryname.textContent = 'Subscription';
}
if(category === 'petrol'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '⛽';
    categoryname.textContent = 'Petrol';
}
if(category === 'shopping'){
    const categoryicon = document.getElementById('category-icon');
    const categoryname = document.getElementById('category-name');
    categoryicon.textContent = '🛍️';
    categoryname.textContent = 'Shopping';
}
console.log(category);

const item = document.getElementById("item");
const amount = document.getElementById("amount");
const date = document.getElementById("expense-date");
const addbutton = document.getElementById("add-expense");


addbutton.addEventListener('click', () => {

    const itemtext = item.value.trim();
    const amounttext = amount.value.trim();
    const datetext = date.value.trim();

    if(itemtext === ''){
        alert("Enter Item Name");
    }
    else if(amounttext === ''){
        alert("Enter Amount");
    }
    else if(datetext === ''){
        alert("Enter Date");
    }
    else{

        const expense = {
            category: category,
            item: itemtext,
            amount: amounttext,
            date: datetext
        };

        const savedexpense = localStorage.getItem('expenses');

        let expenses;

        if(savedexpense === null){
            expenses = [];
        }
        else{
            expenses = JSON.parse(savedexpense);
        }

        expenses.push(expense);

        localStorage.setItem('expenses',JSON.stringify(expenses));
        
        item.value = '';
        amount.value = '';
        date.value = '';

        location.reload();

        console.log(expenses);

        alert("Expense Added Successfully");
    }

});

const expenselist = document.getElementById('expense-list');


const savedexpense = localStorage.getItem('expenses');

let expenses;

        if(savedexpense === null){
            expenses = [];
        }
        else{
            expenses = JSON.parse(savedexpense);
        }

 let total = 0;
 const totalexpense = document.getElementById('total-expense');
const today = new Date().toISOString().split('T')[0];
for(let i = 0 ; i < expenses.length ; i++){
           const expense = expenses[i];

            if(expense.category === category && expense.date === today){

                total += Number(expense.amount);

                const li = document.createElement('li');


                li.textContent = `${expense.item} - ₹${expense.amount}`;

                expenselist.appendChild(li);
                

            }
}
totalexpense.textContent = `  = ₹${total}`;