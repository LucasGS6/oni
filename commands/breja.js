const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var list = [
  'https://64.media.tumblr.com/b3092b3a993219b794d965210c2cdc6a/tumblr_p2c7cxVuCA1u86t2qo1_500.gif',
  'https://pa1.narvii.com/7572/59e4441dd0000fe2cc10010cff342aeec0ec76f2r1-496-278_hq.gif',
  'https://media1.tenor.com/images/280007616661a1014e1292a2aa18c80c/tenor.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('cerveja gelada !!!')
.setColor("#5704e9")
.setDescription(`${message.author} **acaba de se deliciar com uma cerveja gelada** `)
 .setImage(rand)
 .setTimestamp()
 .setAuthor(message.author.tag)
);  
}
}