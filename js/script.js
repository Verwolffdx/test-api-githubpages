function func() {
    let num = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = parseInt(num) + 1;
}

function requestTry() {
    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    // xhr.open('GET', 'https://patient.simplex48.ru/api/Web/medorglist/', false);
    xhr.open('GET', 'https://patient-api-simed.herokuapp.com/all-patients', false);
    // xhr.open('GET', 'https://patient-api-simed.herokuapp.com/all-patients', true);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {

        var myObj = JSON.parse(xhr.responseText);

        for(var  i = 0; i < myObj.length; i++) {
            var str = JSON.stringify(myObj[i]);
            var str2 = JSON.parse(str);
            console.log("str2 len " + str2);

            document.getElementById("demo").innerHTML += "cardNumber: " + JSON.stringify(str2.cardNumber) + "</br>";
            document.getElementById("demo").innerHTML += "patient_name: " + JSON.stringify(str2.patient_name) + "</br>";
        }
        
    }
}