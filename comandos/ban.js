const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban",
  alias: ["vetar"],

execute (client, message, args){
 
 if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No puedo hacer eso")

 let user = message.mentions.members.first();

 let banReason = args.join(' ').slice(2);

 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tenes vela en este entierro!")

 if(!user) return message.channel.send("A quien queres banear pa!")

 if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');

 if(!user === message.author) return message.channel.send("Ves que sos un idiota!")

 if(!banReason) return message.channel.send("Por que queres banear a este gato")

 user.ban({ reason: banReason})

 message.channel.send(`El gato de ${user} se fue baneadaso por **${banReason}`)
  
 }
 
}