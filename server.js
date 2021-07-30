const express = require('express');
const path = require('path');
const port = process.env.PORT || 3001;

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// Express serve up index.html file if it doesn't recognize route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
})

app.listen(port);