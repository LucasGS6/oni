const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/8f7b25ee13cfd669418c78cd50431de3/tenor.gif',
  'https://i.pinimg.com/originals/ac/48/22/ac4822aefaec274c6c5dc99b54034596.gif',
  'https://media1.tenor.com/images/c620eb864fc8dc80804c36b72eb0d9e1/tenor.gif',
  'https://media1.tenor.com/images/ec921e096081a1e2e4459165f42657f0/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para estourar no KA ME HA ME HAAAA!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('KA ME HA ME HAAAAA')
        .setColor('#27F5EC')
        .setDescription(`${message.author} acaba de estourar no kamehameha ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('kamehameha')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}