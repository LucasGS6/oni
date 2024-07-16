const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('Regras')
 .setColor("#5704e9")
.setDescription("As únicas coisas impostas aqui, é que por favor, `NÃO SEJA TOXICO`☣️ \nnós só queremos nos divertir e abusar da criatividade \nNenhum tipo de preconceito é toleravel \nCaso não queira levar um `BAN🚫`, não seja um `BABACA` que isso não irá acontecer com você.")
 .setTimestamp()
 .setImage('https://i.ibb.co/nPbjRPZ/Pics-Art-09-15-01-39-07.jpg')
 .setAuthor(message.author.tag)
);  
}
}