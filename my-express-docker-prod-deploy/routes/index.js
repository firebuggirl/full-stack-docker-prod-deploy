const express = require('express');
const router = express.Router();
const Redis = require('ioredis');
const uuidv1 = require('uuid/v1');

const client = new Redis(6379, 'redis');

/* GET just of posted headers */
router.get('/', function(req, res, next) {
  client.keys('headers:*', (err, ids) => {
    if(err) return next(err);
    return res.send(JSON.stringify(ids)).end()
  });
});
/* GET specifice posted header */
router.get('/:id', function(req, res, next) {
  client.get('headers:' + req.params.id, (err, headers) => {
    if(err) return next(err);
    if(!headers) return req.status(404).end();
    return res.send(headers).end();
  });
});
/* post headers */
router.post('/', function(req, res) {
  let body = JSON.stringify(req.headers);
  client.set('headers:' + uuidv1(), body);
  return res.send(body).end();
});

module.exports = router;
