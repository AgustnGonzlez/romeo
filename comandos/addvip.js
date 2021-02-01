const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const dbb = require("megadb");


module.exports = {
  name: "addvip",
  alias: ["vipadd"],

execute (client, message, args){

  var id = ["701430454523265260"]
 
  let vip = new dbb.crearDB('vip');

  if(!id.some(id => message.author.id === id)) return message.channel.send("No tenes acceso a este comando.")
  let user = message.mentions.members.first();

  if(!user) return message.channel.send ("__¡Debes mencionar a un usuario!__")

  if(vip.has(user.id))return message.channel.send("__**Este usuario ya esta registrado.**__")

  vip.establecer(user.id, user.user.tag);
  message.channel.send(
    new Discord.MessageEmbed()
    .setDescription("__"+user.user.tag+"__ **ha sido añadido a los usuarios VIP.**")
    .setColor("RANDOM")
  )
  
 }
 
}