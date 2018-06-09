'use strict';

const router = require('../lib/router.js');

const getHTMLResponse = (res) => {
  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.statusMessage = 'OK';
};

//home route
router.get('/', (req, res) => {
  getHTMLResponse(res);
  res.write('home');
  res.end();
});

//get resource name of specified id (?id=(uuid))
router.get('/api/v1/students', (req, res) => {
  getHTMLResponse(res);
  let idNum = req.query.id;
  res.write(`ID: ${idNum} was requested`);
  res.end();
});

//post data as stringified JSON
router.post('/api/v1/students', (req, res) => {
  getHTMLResponse(res);
  res.write(JSON.stringify(req.body));
  res.end();
});

//put ?id=(uuid) as string parameter to find specfic resource
router.put('/update', (req, res) => {
  getHTMLResponse(res);
  //need to figure out code for put and if this is correct data format
  let jaysonS = JSON.stringify(req.body);
  console.log(jaysonS);
  res.write(jaysonS);
  res.end();
});


//delete by passing ?id=(uuid)
//return message 'ID was deleted'
router.delete('api/v1/delete', (req, res) => {
  getHTMLResponse(res);
  let idNum = 'fake';
  //need to figure out code to remove id.
  res.write(`ID: ${idNum} was deleted.`);
  res.end();
});



module.exports = {};