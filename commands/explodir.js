const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://thumbs.gfycat.com/QuarterlyLoathsomeDog-max-1mb.gif',
  'https://i.pinimg.com/originals/e6/08/b1/e608b10051589cba8f8164a952c54c76.gif',
  'https://i.pinimg.com/originals/b2/47/df/b247dfc239ea15e382dfee809ffac3ea.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para explodir!');
}
/*
message.channel.send(`${message.author.username} **acaba de explodir** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('explosão do kct')
        .setColor('#27F5EC')
        .setDescription(`${message.author} acaba de explodir ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('expire')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}