const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://data.whicdn.com/images/325773611/original.gif',
  'https://i.pinimg.com/originals/f4/40/d3/f440d36b1cf0ffa1a0a5f09c2fde4648.gif',
  'https://64.media.tumblr.com/tumblr_m502z0gTCz1rum37jo1_500.gif',
  'https://uploads.spiritfanfiction.com/fanfics/capitulos/201712/pequena-felina-11358009-201220172346.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para mamar!');
}
/*
message.channel.send(`${message.author.username} **acaba de mamar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('mamada')
        .setColor('#27F5EC')
        .setDescription(`${message.author} acaba de mamar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('mamadu mamadu mamadu')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}