const Discord = require("discord.js");
const config = require("./config.json");
let xp = require("./xp.json");

const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const comando = args.shift().toLowerCase();


module.exports.run = async (bot, message, args) => {

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;
if(comando === "level"){
  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .addField("Nível", curlvl, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP para subir de nível`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed);
}
}

module.exports.help = {
  name: "level"
}