const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "magik",
  alias: ["what"],

execute (client, message, args){
 
  let persona = message.mentions.users.first() || message.author;

  if (!persona) persona = message.author;

  let link = `https://api.alexflipnote.dev/filter/magik?image=${persona.displayAvatarURL({ format: "png" })}`;

  const embed = new Discord.MessageEmbed()

  .setImage(link)
  .setColor("RANDOM")

  message.channel.send(embed)
  
 }
 
}