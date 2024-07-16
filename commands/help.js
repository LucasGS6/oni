const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('Oni ao seu dispor ｡◕‿◕｡')
 .setColor("#5704e9")
.setDescription("(っ◔◡◔)っ ♥ esses sao meus comandos ♥\nmeu prefixo é `o!`\nduvidas em um comando ? info [**comando**] para saber como funciona!\n👿 comandos para diversão: \n `avatar`, `beijar`, `mamar`,  `sugar`, `atirar`, `explodir`, `breja`, `café`, `coquinha`, `kamehameha`, `loli`, `tuégay`, `cantar` \noutros comandos: \n`info`, `oni`, `dev`")
 .setTimestamp()
 .setImage('https://cdn.discordapp.com/attachments/787677860558667797/810540379409219604/1613314444163.png')
 .setAuthor(message.author.tag)
);  
}
}