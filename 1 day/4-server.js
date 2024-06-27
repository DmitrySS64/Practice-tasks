const express = require('express');
const app = express();
const port = 3000;

const data = {
  address: {
    city2: 'Москва',
    street2: 'Тверская',
    house2: '10'
  },
  personLastName: 'Иванов',
  personFirstName: 'Иван',
  product: {
    name: 'банан'
  }
};

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
