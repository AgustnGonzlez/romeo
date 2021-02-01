const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "botstats",
  alias: ["bstats"],

execute (client, message, args){
 
  const embed = new Discord.MessageEmbed()
  .setAuthor("RomeoBot", client.user.avatarURL())
  .addField("Desarrollador", `El niño#3763`)
  .addField('Servidores', ` ${client.guilds.cache.size}`)
  .addField("Usuarios", ` ${client.users.cache.size}`)
  .addField("Ram", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .addField("Lenguaje", " JavaScript")
  .addField("Libreria", " Discord.js v12.5.1")
  .setImage("https://i.giphy.com/xT0BKmnD1WVyPA88hy.gif")
  .setColor("RANDOM")
  message.channel.send(embed)
  
 }
 
}