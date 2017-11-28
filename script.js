module.exports = function (context, cb) {
  const fetch = require('node-fetch');

  const botToken = context.secrets.BOT_TOKEN;
  const chatID = context.secrets.CHAT_ID;
  const text = context.secrets.MESSAGE_TEXT;

  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatID,
      text,
    }),
  }).then((response) => response.json()).then((data) => {
    cd(null, data);
  }).catch(err => cb(err));
};