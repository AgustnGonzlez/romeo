const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "12345",
  alias: ["67890"],

execute (client, message, args){
 
  const [first, second] = `<@${message.mentions.users.keyArray()}>`

  if (!first || !second)
  return message.channel.send('You need to mention two users!');

  message.channel.send(`Welcome, ${first} and ${second}, enjoy your stay!`);
  
 }
 
}