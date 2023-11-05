let minValue = -999;
let maxValue = 999;
function Open () { //Функция для запуска игры
    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    if (maxValue < minValue) {
        [maxValue, minValue] = [minValue, maxValue]; // Если max меньше min, значения меняются местами
     }

    if (Number.isNaN(maxValue) || Number.isNaN(minValue)) { //проверка введения чисел в заданном диапазоне
        minValue = -999;
        maxValue = 999;
    }
    minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue; //если мин число меньше чем -999, выводится -999, если мин больше чем 999, выводится 999, если не выполняется ни одно ни другое условие выводится введенное пользователем число 
    maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue; //если макс число больше чем 999, выводится 999, если мин больше чем -999, выводится -999, если не выполняется ни одно ни другое условие выводится введенное пользователем число

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, и я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1; //номер первого вопроса
    gameRun = true;
    const orderNumberField = document.getElementById('orderNumberField');
    const answerField = document.getElementById('answerField');
    orderNumberField.innerText = orderNumber;
    answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ?
     `Вы загадали число ${numberToText()}?` : 
     `Вы загадали число ${answerNumber}?` : 
     numberToText().length < 20 ? 
     `Вы загадали число минус ${numberToText()}?` : 
     `Вы загадали число ${answerNumber}?`;

}

window.onload = Open; //вызов функции при загрузке страницы
document.getElementById('btnRetry').addEventListener('click', Open) // вызов функции при нажжатии на кнопку Заново


document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` : 
                (phraseRandom === 2) ? `Я пас..\n\u{1F92F}` :
                (phraseRandom === 3) ?`Невозможно угадать..\n\u{1F620}` :
                `С меня хватит\n\u{1F644}`;  

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2); //округление к меньшему целому
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionRandom = Math.round( Math.random()*3);
            const answerQuestionPos = (questionRandom === 1) ?
                `Вы загадали число ${numberToText() }?` : 
                (questionRandom === 2) ? `Это ведь ${numberToText() }?` :
                (questionRandom === 3) ? `Да это легко, это ${numberToText() }?` :
                `Наверное это ${numberToText() }?` ;
             const answerQuestionNeg = (questionRandom === 1) ?
                `Вы загадали число минус ${numberToText() }?` : 
                (questionRandom === 2) ? `Это ведь минус ${numberToText() }?` :
                (questionRandom === 3) ? `Да это легко, это минус ${numberToText() }?` :
                `Наверное это минус ${numberToText() }?`;  
                answerField.innerText = (answerNumber > 0) ? numberToText().length < 20 && (answerNumber > 0) ? answerQuestionPos :`Вы загадали число ${answerNumber}?`:
                 numberToText().length < 20 ?  answerQuestionNeg : `Вы загадали число ${answerNumber}?` ;
        }
     }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` : 
                (phraseRandom === 2) ? `Я пас..\n\u{1F92F}` :
                (phraseRandom === 3) ?`Невозможно угадать..\n\u{1F620}` :
                `С меня хватит\n\u{1F644}`;  

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2); //округление к большему целому
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionRandom = Math.round( Math.random()*3);
            const answerQuestionPos = (questionRandom === 1) ?
                `Вы загадали число ${numberToText() }?` : 
                (questionRandom === 2) ? `Это ведь ${numberToText() }?` :
                (questionRandom === 3) ? `Да это легко, это ${numberToText() }?` :
                `Наверное это ${numberToText() }?` ;
             const answerQuestionNeg = (questionRandom === 1) ?
                `Вы загадали число минус ${numberToText() }?` : 
                (questionRandom === 2) ? `Это ведь минус ${numberToText() }?` :
                (questionRandom === 3) ? `Да это легко, это минус ${numberToText() }?` :
                `Наверное это минус ${numberToText() }?`;  
                answerField.innerText = (answerNumber > 0) ? numberToText().length < 20 && (answerNumber > 0) ? answerQuestionPos :`Вы загадали число ${answerNumber}?`:
                numberToText().length < 20 ?  answerQuestionNeg : `Вы загадали число ${answerNumber}?`;
                //answerField.innerText =(answerNumber > 0) ? answerQuestionPos : answerQuestionNeg ; запись ответа прописью полностью
        }

    }
})
document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
            const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (phraseRandom === 1) ?
                `Я всегда угадываю \n\u{1F60E}` : 
                (phraseRandom === 2) ? `Проще простого \n\u{1F60F}` :
                (phraseRandom === 3) ? `В следующий раз загадай посложнее \n\u{1F60E}` :
                `Легкотня \n\u{1F644}`;  
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

    let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
    let teens = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    function numberToText() { // Функция преобразования числа из цифр в слова (числа от -999 до 999).
        let number = Math.abs(answerNumber);
        let text = '';

        if (number == 0) {
            text = '0';
            return text;
        }
            
        if (number <= 9) {
            return units[Math.floor(Math.abs(number) % 10)];
        }
        if (number >= 10 && number <= 19) {
            return teens[Math.floor(number / 10 + number % 10)];
        }

        if (number >= 20 && number <= 99) {
            return dozens[(Math.floor(number / 10)) - 1] + " " + units[Math.floor(number % 10)];
        }
        

        if (number >= 100 && number <= 999) {
            return hundreds[Math.floor(number / 100)] + " " + score();
        }
    }
    function score (){
        let number = Math.abs(answerNumber) % 100 ;

        if (number <= 9) {
            return units[Math.floor(Math.abs(number) % 10)];
        }
        if (number >= 10 && number <= 19) {
            return teens[Math.floor(number / 10 + number % 10)];
        }

         if (number >= 20 && number <= 99) {
            return dozens[(Math.floor(number / 10)) - 1] + " " + units[Math.floor(number % 10)];
        }
    else {
    return '';
}
}
    

//.length < 20