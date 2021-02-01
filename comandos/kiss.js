const Discord = require('discord.js');
const client = new Discord.Client();
const star = require('star-labs');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "kiss",
  alias: ["beso"],

execute (client, message, args){
 
  let aA = message.author
  let aB = message.mentions.users.first()
  if(!aB) return message.channel.send('Menciona al usuario que quieras besar');
  const aC = new Discord.MessageEmbed()
  .setDescription(aA.tag+' le dio un beso a '+aB.tag)
  .setImage(star.kiss())
  .setFooter(" RomeoBot | Beso", client.user.displayAvatarURL())
  .setColor("RANDOM")
  .setTimestamp();
  message.channel.send(aC)
  
 }
 
}