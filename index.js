const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});



client.on('message', msg => {

  if (msg.content === 'hai acchan') {

    msg.reply('Hai... apa kabar? Semoga betah di Nippon Teikoku ya :innocent:');

  }

  if (msg.content === 'konnichiwa') {
      
    msg.reply('Konnichiwa, kyou wa ii tenki desu ne :grin:');

  }

  if (msg.content === 'ohayou'){

    msg.reply('ohayou gozaimasu, waduh... masih pagi udah main Discord aja :rofl:');

  }

  if (msg.content === 'fuck'){

    msg.reply('aduh... anak kecil gak boleh ngomong gitu :rage:');
    
  }

  if (msg.content === 'Mari mengenang Kaori'){

    msg.reply('https://www.youtube.com/watch?v=e7q38DZPE9I');
    
  }
  
});



client.login(process.env.BOT_TOKEN);
