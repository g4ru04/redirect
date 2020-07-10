var express = require('express');
var router = express.Router();
const axios = require('axios');
/* GET users listing. */
axios.defaults.validateStatus = function validateStatus(){
  return true;
}
router.get('/', async function(req, res, next) {
  // console.log(req.query);
  try{
    const transUrl = Buffer.from(req.query.url, 'base64').toString('ascii');
    console.log(transUrl);
    if (transUrl.includes('whatismyip')) {
      let ipRes = await axios.get(transUrl);
      res.send(ipRes.data);
      return ;
    }

    const urlResult = await axios.get(transUrl,{
      headers: {
        'User-Agent': req.headers['user-agent'],
        'Content-Language': req.headers['Content-Language'] || req.headers['content-language'] || 'en-US',
        'host': 'www.instagram.com'
      }
    });
    // console.log(urlResult.status);
    res.status(urlResult.status).send(urlResult.data);
  }catch(err){
    res.send(err.message);
  }
});

module.exports = router;
