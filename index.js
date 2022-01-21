const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiEndPoint = 'https://api.mockytonk.com/proxy/ab2198a3-cafd-49d5-8ace-baac64e72222';

app.post('/api/add', async (req, res) => {
   const { includedAt, employeeId, employerId } = req.body;
   const response = await fetch(apiEndPoint,
      {
         method: 'POST', body: { includedAt, employeeId, employerId }
      });
   const data = await response.json();
   console.log(data);
   res.status(200).send({
      'data': {
         'includedAt': includedAt,
         'employeeId': employeeId,
         'employerId': employerId,
      },
      'response': {
         'message': 'Comsusessos!',
         'status': 200
      }
   });

});
app.listen(port);
console.log('Server started at http://localhost:' + port);