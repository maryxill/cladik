// Получить случайное число в зависимости от размера игрового поля
var getRandomNumber = function (size) {
    return Math.floor(Math.random()*size);
};
// Вычислить расстояние от клика(event) до клада (target) 
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;// вычисляем расстояние 
    var diffY = event.offsetY - target.y;// вычисляем расстояние 
    return Math.sqrt((diffX * diffX)+(diffY*diffY));// вычисляем по теореме пифагора дистанцию
};
// Получить для расстояния строку подсказки 
var getDistanceHint = function (distance){
    if (distance < 10){
        return "Обожжешься! "+ clicks;// В зависимости от расстояния выводится сообщение о приближении к цели, при расстоянии 10
    } else if (distance < 20){
        return "Очень горячо " + clicks;// при расстоянии 20
    } else if (distance < 40){
        return "Горячо" + clicks;// при расстоянии 40
    } else if (distance < 80){
        return "Тепло " + clicks;// при расстоянии 80
    } else if (distance < 160){
        return "Холодно" + clicks;// при расстоянии 160
    } else if (distance < 320){
        return "Очень холодно "+ clicks;// при расстоянии 320
    } else if (distance < 640){
        return "Безумно холодно! " + clicks;// при расстоянии 640
    } else {
        return "Замерзнешь! " + clicks;
    }
};
// Создаем переменные
var width = 800;//Ширина поля
var height = 800;//Высота поля
var clicks = 50;//Число кликов

// Случайная позиция клада
var target = {
    x: getRandomNumber(width),// случайное число по оси х
    y: getRandomNumber(height)// случайное число по оси y
};

// Добавляем элементу img обработчик клика
$("#map").click(function (event){
    clicks--;
    if (clicks === 0){
        alert ("Конец игры");  
        location.reload();           
    }
    // Получаем расстояние от места клика до клада
    var distance = getDistance (event, target);
    // Преобразуем расстояние в подсказку
    var distanceHint = getDistanceHint(distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint);
    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 8){
        alert ("Поздравляю, Вы нашли клад! Сделано кликов: "+ clicks);
    }
});