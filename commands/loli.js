const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var list = [
  'https://media1.tenor.com/images/17434a56024cec3b8c2b2b532136360b/tenor.gif',
  'https://i.pinimg.com/originals/3a/74/84/3a74845179ca479e08d835740ca6a48c.gif',
  'https://i.pinimg.com/originals/e1/c6/9e/e1c69ebb1bcc9e8b319e584abe4b61a9.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('FBI OPEN UP !!!')
.setColor("#5704e9")
.setDescription(`${message.author} **VOCE FOI PEGO PELA FBI LOLICON, SUA RAÇA SERA EXTERMINADA** `)
 .setImage(rand)
 .setTimestamp()
 .setAuthor(message.author.tag)
);  
}
}