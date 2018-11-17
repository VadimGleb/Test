'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет за месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "")
    while (isNaN(money) || money == "" || money == null);
    money = +prompt("Ваш бюджет за месяц?", "");
   
}

start()

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function choseExpenses() {
    for (let i = 0; i < 2; i++) {

        let a = prompt("Введите обязательную статью расходов", ""),
            b = prompt("Во сколько обойдётся", "");
        if (typeof (a) === "string" && typeof (a) != null && a != "" && b != "" && a.length < 50)

        {
            console.log("done");
            appData.expenses[a] = b;

        } else {
            console.log("bad resullt"),
                i--;
        }
    }
};

choseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш бюджет на день = " + appData.moneyPerDay + "руб.");
}

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log("Малый уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    };
}

detectDayBudget();
detectLevel ();

function chekSaving() {
    if (appData.savings == true) {

        let save = +prompt("Какова сумма накоплений?",""),
            persent = +prompt("Под какой процент?", "");

        appData.monthIncome = save / 100 / 12 * persent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome + " руб.");
    }
}

chekSaving();

function chooseOptExpenses(){
    for (let i = 1; i < 4; i++) {
        let questionOptExpenses = prompt ("Введите статью необязательных расходов: ");
    
        appData.optionalExpenses [i] = questionOptExpenses;
       
    }
}
chooseOptExpenses(); 
console.log (appData);