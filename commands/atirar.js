const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.pinimg.com/originals/0d/ff/63/0dff63ddb1c91f4657a07372bf761e5d.gif',
  'https://media.tenor.com/images/a34dd7537be45df945cfd91eba72576c/tenor.gif',
  'https://media1.tenor.com/images/66243a0741303949fa6b3ac62bf6b017/tenor.gif',
  'https://media.tenor.com/images/6ef2b5ffc3e5011c770533922eb36192/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para atirar!');
}
/*
message.channel.send(`${message.author.username} **acaba de atiar em** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('abaixa é muito tiro!')
        .setColor('#27F5EC')
        .setDescription(`${message.author} acaba de atirar em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('atirar')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}