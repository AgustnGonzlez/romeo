const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const dbb = require("megadb");


module.exports = {
  name: "delvip",
  alias: ["removevip"],

execute (client, message, args){

  var id = ["701430454523265260"]
 
  let vip = new dbb.crearDB('vip');

  if(!id.some(id => message.author.id == id)) return message.channel.send("No tienes acceso a este comando.")

  let user = message.mentions.members.first();

  if(message.mentions.users.size < 1 || !user) return message.channel.send("**__Menciona a una persona primero!__**");

  if(!vip.tiene(`${user.id}`)) return message.reply("Ese usuario no es VIP.")

  vip.eliminar(`${user.id}`)
  return message.channel.send("<@"+user + ">"+" ha sido eliminado de la lista vip!.");
  
 }
 
}