const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();

{
const msg = await message.channel.send(
 new Discord.MessageEmbed() 
 .setTitle('O que é RPG ?')
 .setColor("#5704e9")
.setDescription("Role-playing game, também conhecido como RPG é um tipo de jogo em que os jogadores assumem papéis de personagens e criam narrativas colaborativamente. O progresso de um jogo se dá de acordo com um sistema de regras predeterminado, dentro das quais os jogadores podem improvisar livremente. As escolhas dos jogadores determinam a direção que o jogo irá tomar.")
 .setTimestamp()
 .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Wuerfel5.jpg/300px-Wuerfel5.jpg')
 .setAuthor(message.author.tag)
);  
}
}