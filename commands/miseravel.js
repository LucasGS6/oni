const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.makeagif.com/media/10-05-2019/a4mWWx.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para chamar de genio!');
}
/*
message.channel.send(`${message.author.username} **acaba de mamar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('O MISERAVEL É UM GENIO !!!')
        .setColor('#27F5EC')
        .setDescription(`${message.author} GENIO ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('GENIO')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}