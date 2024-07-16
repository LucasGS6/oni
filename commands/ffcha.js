const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('Não sabe como preencher uma ficha ?')
 .setColor("#5704e9")
.setDescription("Confira o `Livro do jogador` no canal de texto `#🎲aprenda-a-jogar-rpg🎲` lá você vai conseguir entender muitas coisas sobre RPG em si.\nCaso não consiga entender confira esse video do canal `RPG Planet` \nhttps://www.youtube.com/watch?v=k1E-PQPOk3c&t=639s&ab_channel=RPGPlanet \nGaranto que vai conseguir entender ")
 .setTimestamp()
 .setImage('https://i.ibb.co/nPbjRPZ/Pics-Art-09-15-01-39-07.jpg')
 .setAuthor(message.author.tag)
);  
}
}