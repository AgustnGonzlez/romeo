const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')

module.exports = {
  name: "marihuana",
  alias: ["plantar"],

async execute (client, message, args){

  const member = message.mentions.members.first();
  if(!member) return message.channel.send('De quien va a ser la planta?')
 
  let msg;
  msg = await message.channel.send('🍁Plantando maria...');

  setTimeout(() => {
    msg.edit("📢Esperando a Germinacion (Recuerda poner agua con`R!agua`)")
  }, ms('5s'));

  setTimeout(() => {
    message.channel.send(`🌱 La planta de ${member} a Germinado`)
  }, ms('1h'));
  
 }
 
}