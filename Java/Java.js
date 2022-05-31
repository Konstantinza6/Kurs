//курс валют
function CBR_XML_Daily_Ru(rates) {
    function trend(current, previous) { 
        if (current > previous) return ' ▲';
        if (current < previous) return ' ▼';
        return '';
    }

    var USDrate = rates.Valute.USD.Value.toFixed(4).replace('.', ','); //Вызов функции, выбор типа валют, постановку фиксированного значения после запятой, замена значений с . на ,
    var USD = document.getElementById('USD'); //Выбор элемента по идентификатору id
        USD.innerHTML = USD.innerHTML.replace('00,0000', USDrate); // innerHTML - позволяет получить HTML-содержимое элемента в виде строки, замена базовых данных на информацию курса валют
        USD.innerHTML += trend(rates.Valute.USD.Value, rates.Valute.USD.Previous); //записывает значения курса доллара США и сравнивает текущий курс с прошлым для работы функции trend()
    var EURrate = rates.Valute.EUR.Value.toFixed(4).replace('.', ',');
    var EUR = document.getElementById('EUR');
        EUR.innerHTML = EUR.innerHTML.replace('00,0000', EURrate);
        EUR.innerHTML += trend(rates.Valute.EUR.Value, rates.Valute.EUR.Previous);
}