const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "pruebaa",
  alias: ["gifing"],

execute (client, message, args){
 
  let random1 = ["https://static.wixstatic.com/media/d65639_3b92b16534974f5cacfff0cfe63ab60f~mv2.gif",
                   "https://m.gifmania.com/Gif-Animados-Paisajes/Imagenes-Elementos-Naturales/Hielo/Hielo-Derritiendose-67725.gif"]

    // Enviamos el mensaje aplicando Math.random() que nos dara una respuesta aleatoria de la matriz.
    const embed = new Discord.MessageEmbed()
    .setImage(" "+random1[Math.floor(Math.random() * random1.length)]+"")
    message.channel.send(embed)
  
 }
 
}