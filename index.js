const Discord = require('discord.js');
const client = new Discord.Client();
const token = '';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('NzQ5NTM4MTM0NjY0MTUxMDQw.X0tbyQ.Epm7yw7BM3r97cmcnXOs7fC_Ao8');
