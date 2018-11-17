'use strict';


var money = +prompt("Ваш бюджет за месяц?", ""),
    // + ставиться для того что бы введённое значение приобрело числовой тип данных
    time = prompt("Введите дату в формате YYYY-MM-DD", "")
// Тип данных объект

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
for (let i = 0; i < 2; i++) {
    // Задаём переменную i равную нулю, и запускаем цикл при котором i будет прибавляться еденица до тех пор пока i будет не равна 2.
    let a = prompt("Введите обязательную статью расходов", ""),
        b = prompt("Во сколько обойдётся", "");
    if (typeof (a) === "string" && typeof (a) != null && a != "" && b != "" && a.length < 50)
    /*задаём условия в которых a должна быть строковым типом данных, а и b не должны быть отменены и не должна быть
    пустыми строками, длина строки в переменной а не должна превышать 50 символов.
    */
    {
        console.log("done");
        appData.expenses[a] = b;

    } else {
        console.log("bad resullt"),
            i--;
    }
};


/*Цикл while
let i = 0;
while (i < 2) {
    
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
    i++;;
};*/

/*let i = 0;
do {
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
    i++;
}
while (i < 2); */



appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на день = " + appData.moneyPerDay + "руб.");

if (appData.moneyPerDay < 100) {
    console.log("Малый уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");

} else if (appData.moneyPerDay > 2000) {

    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};