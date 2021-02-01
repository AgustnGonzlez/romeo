const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "avatar",
  alias: ["av"],

async execute (client, message, args){
 
 let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} avatar`)
  .setDescription(`[Avatar URL of ${user.tag}](${avatar})`)
  .setColor(0x1d1d1d)
  .setImage(avatar)
  
  return message.channel.send(embed);
  
 }
 
}