let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц","");
    }
}
start();    

let first, second, third;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {
        "1": first,
        "2": second,
        "3": third
    },
    income: [],
    savings: false
};

function chooseExpenses() {
    for (let i=0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце",""),
            b = prompt("Во сколько обойдется","");
    
        if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    };
};
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
};
detectDayBudget();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимльный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("произошла ошибка")
    }
};
detectLevel();


function chooseOptExpenses() {
    first = +prompt("Статья необязательных расходов?",""),
    second = +prompt("Статья необязательных расходов?",""),
    third = +prompt("Статья необязательных расходов?","");
};
chooseOptExpenses();
console.log(appData.optionalExpenses);



function checkSavings() {
    if (appData.savings == true){
        let save = +prompt("какова сумма накоплений?"),
            percent = +prompt("под какой процент");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего деозита: " + appData.monthIncome);
    }
};
checkSavings();