const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port);