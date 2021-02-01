const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "canalprueba",
  alias: ["pruebacanal"],

async execute (client, message, args){
 
  await message.guild.channels.create("prueba", { type: "text"});
  
 }
 
}