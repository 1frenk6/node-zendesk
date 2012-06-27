var zd = require('../lib/client'),
    fs = require('fs');

var client = zd.createClient({
  //debug:     true,
  username:  'username',
  password:  'password',
  remoteUri: 'https://remote.zendesk.com/api/v2'
});

client.users.auth(function (err, res, result) {
  if (err) {
    //console.log(err);
    return;
  }
  console.log(JSON.stringify(result.user.verified, null, 2, true));
});
