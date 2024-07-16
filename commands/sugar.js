const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/450ff970315375b5ebbb7fe835d4d6f7/tenor.gif',
  'https://media.tenor.com/images/4995025d2192519d3d2f847a726f8e46/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para sugar!');
}
/*
message.channel.send(`${message.author.username} **acaba de sugar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('SGUAR')
        .setColor('#27F5EC')
        .setDescription(`${message.author} acaba de sugar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('SUGAR')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}