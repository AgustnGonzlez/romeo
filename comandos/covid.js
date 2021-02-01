const Discord = require('discord.js');
const client = new Discord.Client();
const superagent = require('superagent');
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "covid",
  alias: ["covidcasos", "covid-casos", "coronavirus"],

async execute (client, message, args){
 
  let pais = args[0]
  if(!pais) return message.channel.send("¡Escribe el nombre del Pais a buscar información sobre el `COVID-19`! :x:")

  superagent
  .get(`https://corona.lmao.ninja/v2/countries/${pais}`)
  .end((err,res) => {
    let body = res.body

    if(body.message) return message.channel.send("¡El nombre del pais es invalido! :x:")

    const embed = new Discord.MessageEmbed()
    .setAuthor(`Casos del pais ${body.country}`)
    .addField("**Casos Totales**", `${body.cases}`, true) // Casos totales de ese pais
    .addField("**Casos Críticos**", `${body.critical}`, true) // Casos criticos de ese pais
    .addField("**Casos Hoy**", `${body.todayCases}`, true) // Casos de "HOY" de ese pais
    .addField("**Muertes Totales**", `${body.deaths}`, true) // Muertes por el COVID-19 de ese pais
    .addField("**Muertes Hoy**", `${body.todayDeaths}`, true) // Muertes de hoy por el COVID-19 ese pais
    .addField("**Recuperados**", `${body.recovered}`, true) // Recuperados del COVID-19
    .addField("**Medidas de Prevención**", ":small_blue_diamond: Lavarse las manos frecuentemente \n:small_blue_diamond: Usar Gel Antibacterial\n:small_blue_diamond: Usar Alcohol\n:small_blue_diamond: Para Toser o estornudar usar un pañuelo \n:small_blue_diamond: Evitar contacto directo de personas con sintoma de Tos y Gripe\n:small_blue_diamond: Quedarse en Casa", true) 
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter("#QuedateEnCasa", "https://fems-microbiology.org/wp-content/uploads/2020/03/2019-nCoV-CDC-23312_without_background-pubic-domain.png")
    .setThumbnail("https://www.elindependiente.com/wp-content/uploads/2020/03/gif-mapa-internacional.gif")
    message.channel.send(embed)
  })
  
 }
 
}