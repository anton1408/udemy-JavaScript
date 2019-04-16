let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц","");
    time = prompt("Введите дату в формате YYYY-MM-DD","");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц","");
    }
}
start();    

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);    
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Минимльный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("произошла ошибка")
        }
    },
    checkSavings: function() {
        if (appData.savings == true){
            let save = +prompt("какова сумма накоплений?"),
                percent = +prompt("под какой процент");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего деозита: " + appData.monthIncome);
        }
    },
    chooseOptExpense: function() {
        for (let i=0; i<3; i++) {
            let optExp = +prompt("Статья необязательных расходов?","");
            appData.optionalExpenses[i] = optExp;
        }
    },
    chooseIncome: function() {
        let items;
        while ( !(isNaN(items)) || items == "" || items == null ) {
            items = prompt("Что принесет дополнительный доход (перечислите через запятую)", "");
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может быть что-то еще?"));
        appData.income.sort();
    }
};
appData.detectDayBudget();
appData.chooseIncome();
