'use strict';

const router = require('../lib/router.js');

const getHTMLResponse = (res) => {
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
  let idNum = req.query.id;
  if(idNum === null || idNum === undefined) {
    res.statusCode = 404;
    res.statusMessage = 'Not Found';
    res.write('Not Found');
    res.end();
  }
  if(idNum === '') {
    res.statusCode = 400;
    res.statusMessage = 'Bad Request';
    res.write('Bad Request');
    res.end();
  }
  else {
    getHTMLResponse(res);
    res.write(`ID: ${idNum} was requested`);
    res.end();
  }
});

//post data as stringified JSON
router.post('/api/v1/students', (req, res) => {
  if(!req.body || req.body === '') {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.write(err);
    res.end();
  }
  else {
    getHTMLResponse(res);
    res.write(JSON.stringify(req.body));
    res.end();
  }
});

//put ?id=(uuid) as string parameter to find specfic resource
router.put('/api/v1/students', (req, res) => {
  let idNum = req.query.id;
  if(!idNum) {
    res.statusCode = 400;
    res.statusMessage = 'bad request';
    res.write(err);
    res.end();
  }
  else {
    getHTMLResponse(res);
    res.write(JSON.stringify(req.body));
    res.end();
  }
});


//delete by passing ?id=(uuid)
//return message 'ID was deleted'
router.delete('/api/v1/students', (req, res) => {
  let idNum = req.query.id;
  getHTMLResponse(res);
  //need to figure out code to remove id.
  res.write(`ID: ${idNum} was deleted.`);
  res.end();
});



module.exports = {};