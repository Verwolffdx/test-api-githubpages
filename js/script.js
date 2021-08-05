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
    // xhr.withCredentials = true;
    // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");


    // xhr.open('GET', 'https://patient-api-simed.herokuapp.com/all-patients', true);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        // alert(xhr.responseText); // responseText -- текст ответа.



        var myObj = JSON.parse(xhr.responseText);
        document.getElementById("demo").innerHTML = xhr.responseText;
        // console.log("myObj len " + myObj.length);
        // for(var  i = 0; i < myObj.length; i++) {
        //     // console.log("el " + el);
        //     var str = JSON.stringify(myObj[i]);
        //     // console.log("str " + str);
        //     var str2 = JSON.parse(str);
        //     // console.log("str2 " + str2);

        //     document.getElementById("demo").innerHTML += JSON.stringify(str2) + "</br>";
        // }

        // console.log("str2 " + str2["title"]);



        
    }
}