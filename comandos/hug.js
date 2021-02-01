const Discord = require('discord.js');
const client = new Discord.Client();
const star = require('star-labs');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "hug",
  alias: ["abrazo"],

execute (client, message, args){
 
  let aA = message.author
  let aB = message.mentions.users.first()
  if(!aB) return message.channel.send('Menciona al usuario que quieras abrazar');
  const aC = new Discord.MessageEmbed()
  .setDescription(aA.tag+' abrazó a '+aB.tag)
  .setImage(star.hug())
  .setFooter(" RomeoBot | Abrazo", client.user.displayAvatarURL())
  .setColor("RANDOM")
  .setTimestamp();
  message.channel.send(aC)
  
 }
 
}