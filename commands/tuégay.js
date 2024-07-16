const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/519afb13f50dee1be1788bb7b16a4501/tenor.gif',
  'https://media.tenor.com/images/fa9bcb698a7514a23cad228620ece21e/tenor.gif'
  
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para perguntar se ele é!');
}
/*
message.channel.send(`${message.author.username} **acaba de mamar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('MANO ?')
        .setColor('#27F5EC')
        .setDescription(`${message.author} tu é gay mano ? ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('mano ?')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}