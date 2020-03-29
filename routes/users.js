var express = require('express');
var router = express.Router();
const axios = require('axios');
/* GET users listing. */
router.get('/', async function(req, res, next) {
  // console.log(req.query);
  try{
    const urlResult = await axios.get(Buffer.from(req.query.url, 'base64').toString('ascii'),{
      headers: {
        'User-Agent': req.headers['user-agent'],
        'Content-Language': 'en-US',
        'host': 'www.instagram.com'
      }
    })
    // console.log(urlResult);
    res.send(urlResult.data);
  }catch(err){
    res.send(err.message);
  }
});

module.exports = router;



