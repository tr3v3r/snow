var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs")
// создаём Express-приложение
var app = express();

// создаём маршрут для главной страницы
// http://localhost:8080/
app.get('/', function(req, res) {
  res.sendfile('index.html');
});

//Подключаем middleware для того, что бы в req добавилось body
app.use(bodyParser.urlencoded());
//Обрабатываем наш запрос
app.use(express.static('public'));
app.post('/', function (req, res, next) {
    fs.appendFile("1.txt",JSON.stringify(req.body)+"\r\n");
    res.end();
});

// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');