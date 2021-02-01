const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("mega-dtbs")
const request = require("request");
const cheerio = require("cheerio");
const ytdl = require('ytdl-core');
const ytsearcher = require('ytsearcher');
const dbb = require("megadb");
const profile = new dbb.crearDB("pofile")
const easymaty = require("easymaty");
const Gamedig = require("gamedig");
const vip = new dbb.crearDB('vip');
require('dotenv').config();
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const ms = require('ms');
const star = require('star-labs');
const snekfetch = require('snekfetch');
const Youtube = require('youtube-node');
let youTube = new Youtube();
const cooldown = require("./cooldown.js");
const mongoose = require("mongoose");
const YouTube = require("simple-youtube-api");
const config = require("./config.json");
const { GOOGLE_API_KEY } = require("./config");
const queue = new Map();
const youtube = new YouTube(GOOGLE_API_KEY);
const { Client, Util, Collection, Guild } = require("discord.js");




/////MuSiCCLIENT//////



//////BOT//////////

client.snipes = new Map();

client.on("messageDelete", (message) => {

  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel
  });

});

const fs = require('fs')

let prefix_db = new db.crearDB("prefixes");

///////HANDLER///////

let { readdirSync } = require('fs'); 

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command)
}


///////PRESENCIA///////


const estados = [
  "Queen - Radio Ga Ga",
  "Queen - Don't Stop Me Now",
  "Queen - Love Of My Life",
  "Queen - Bohemian Rhapsody",
  "Queen - Somebody To Love",
  "Queen - Another One Bites The Dust"
];

/*

client.on("ready", () => {
  console.log("Encendido Correctamente");
  setInterval(() => {
    const index = Math.floor(Math.random() * (estados.length - 1) + 1);
    client.user.setPresence({
      status: "online",
      activity: {
        name: estados[index],
        type: "LISTENING"
      }
    });
  }, ms('5s'));
});
*/

client.on("ready", async () => {
  console.log("NO ES MI VIEJA!!!");
  ////encendi2

  const channelid = '804942476652970004';
  const channel = client.channels.cache.get(channelid);
  const upembed = new Discord.MessageEmbed()
  .setTitle('El bot se encendio!')
  .setColor('RANDOM')
  .setDescription('Me acabas de encender<3')
  .setThumbnail('https://i.giphy.com/xT0BKmnD1WVyPA88hy.gif')
  .setFooter(`Ahora mismo estoy en ${client.guilds.cache.size} servers`)
  .setTimestamp()
  channel.send(upembed)

  ////presencia
  setInterval(() => {
    const index = Math.floor(Math.random() * (estados.length - 1) + 1);
    client.user.setPresence({
      status: "online",
      activity: {
        name: "al amor de mi vida🥰",
        type: "WATCHING"
      }
    });
  });
});


/*

function presence() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: `Queen - Radio Ga Ga`,
      type: "LISTENING"
    }
  })
}
client.on("ready", () => {
  console.log("Presenciandoo on");
  presence();
});

*/






///////COMANDOS///////

client.on('message', async message => {

  var prefix;
  if(prefix_db.tiene(`${message.guild.id}`)) {
    prefix = await prefix_db.obtener(`${message.guild.id}`)
  }else{
    prefix = "r!"
  }

  let RegMention = new RegExp(`^<@!?${client.user.id}>( |)$`); //Este es el RegExp que utilizaremos

  if (message.content.match(RegMention)) { 
    message.channel.send(`Mi prefix es ${prefix}`)
  }

  if (message.content.toLowerCase().startsWith("candela")) {
    message.channel.send("YO NO TE PIDO PACK, a menos que quieras")
  }

  if (message.content.toLowerCase().includes("Diego")) {
    message.channel.send("El peor pj del mundo")
  }

  /*

  if (message.content.toLowerCase().includes('gracias')) {

    let randomgracias = ["De nada, ndeah re metido",
                   "No es nada hombre!",
                   "De nada, pa eso estamos",
                   "No hay de que :wink:"]

    // Enviamos el mensaje aplicando Math.random() que nos dara una respuesta aleatoria de la matriz.
    message.reply(" "+randomgracias[Math.floor(Math.random() * randomgracias.length)]+"")
    
  }

  */

  if (message.content.toLowerCase().includes('beti')) {

    const embeti = new Discord.MessageEmbed()
    .setTitle('VAMOO BETIIIH')
    .setImage('https://pbs.twimg.com/profile_images/1220416528400756738/Uk21f5nu_400x400.jpg')
    .setColor("0x00ff5d")
    message.channel.send(embeti)

  }

  if (message.content.toLowerCase().includes('diego')) {

    message.channel.send('Pedazo de puto ese PJ')

  }

  if (message.content.toLowerCase().startsWith('te')) {
    if(message.content.slice(prefix.length).trim().split(/ +/g)[0] == 'quiero') {
      return message.channel.send('Yo a vos Bb :heart:')
    } else {
      return;
    }
  }

  if (message.content.toLowerCase().startsWith('messirve')) {
    message.channel.send("https://media1.tenor.com/images/d0e51619353acbfb89a4d485dc9bdd32/tenor.gif")
  }

  if (message.content.toLowerCase().startsWith('nomessirve')) {

    message.channel.send("https://media.tenor.com/images/f9b57026e059f799ec5b4681977a36b4/tenor.gif")

  }
  
  if (message.content.startsWith("...")) {
    message.channel.send("que silencio aqui")
  }

  if (message.content.startsWith("Follamos?")) {
    message.channel.send("Ejem, cuando quieras mi amor :heart:")
  }

  if (message.content.startsWith("Hot?")) {
    message.channel.send("Contigo siempre bebe")
  }
  
  /*

  if (message.content.startsWith("Porque")) {
    message.channel.send("Por que si")
  }
  
  */
  
  if (!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  ////MUSICA!////




  //PRESENCIA//
  
  /*

  if(command === 'presencia') {

    let estado = ["dnd","online","offline","idle"]//Array de estados
    let tipo = ["PLAYING", "WATCHING", "STREAMING", "LISTENING"]//Array de tipos
    if(!estado.includes(args[0])) return message.channel.send("escribe un estado valido: dnd, online, offline, idle")
    if(!tipo.includes(args[1])) return message.channel.send("escribe un estado valido: PLAYING, WATCHING, STREAMING, LISTENING")
    if (!args.slice(2).join(" ")) return message.channel.send("te falta el texto")

    client.user.setPresence({
      status: args[0],
      activity: {
        name: args.slice(2).join(" "),
        type: args[1]
      }
    });

    message.channel.send("Cambiado a: `"+ args.slice(2).join(" ")+ "` con estado `"+args[0]+"` y el tipo ` "+args[1]+"`");

  }
  
  */

  //PRESENCIA//

  ////SNIPE////

  if(command === 'spam') {

    message.channel.send('Prueba @everyone')

  }

  if(command === "snipe") {

    const channel = message.mentions.channels.first() || message.channel;
    const msg = client.snipes.get(channel.id);

    if (!msg) {
      message.channel.send("No se ha borrado recientemente ningun mensaje").then(m => m.delete({timeout: 5000}));
    }else{

      const main = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`Mensaje Borrado de ${msg.delete.tag}`, msg.delete.displayAvatarURL())
      .addField("Canal", `<#${msg.canal.id}>`)
      .setDescription(`${msg.content}`)
      message.channel.send(main);

    }

  }

  ////SNIPE////

  if(command === 'pruebahref') {
    const emhref = new Discord.MessageEmbed()
    .setTitle('Vamo a proba')
    .addField('Prueba 3', 'Aqui como entrar a [Youtube](https://www.youtube.com/)')
    message.channel.send(emhref)
  }

  ////PLAY////

  /*

  if(command === 'play') {

    let url = args[1];
    const searchString = args.slice(1).join(" ");
    let serverQueue = queue.get(message.guild.id);

    const voiceChannel = message.member.voiceChannel;
    
    if (!voiceChannel) return message.channel.send("Necesitas estar en un canal de voz para reproducir música!")
    
    const permissions = voiceChannel.permissionsFor(message.client.user); 
    if (!permissions.has('CONNECT')) {
      return message.channel.send("No puedo conectarme a tu canal de voz, ¡asegúrate de tener los permisos adecuados!")
    }
    if (!permissions.has('SPEAK')) {
      return message.channel.send("No puedo conectarme a tu canal de voz, ¡asegúrate de tener los permisos adecuados!")
    }
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

      let playlist = await youtube.getPlaylist(url);
      let videos = await playlist.getVideos();
      for (let video of Object.values(videos)) {
        let video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }

      let embedplay4 = new Discord.MessageEmbed()
      .setTitle(`**Playlist: ${playlist.title} puesto en cola!**`)
      .setColor("0x36393f");
      message.channel.send(embedplay4)

    } else {
      try {
        let video = await youtube.getVideo(url);
        return handleVideo(video, message, voiceChannel);
      } catch (err) {
        try {
          let videos = await youtube.searchVideos(searchString, 10);
          const embedqueue = new Discord.MessageEmbed()
          .setTitle(`Selección de canciones`)
          .setColor("0x36393f")
          .addField(
            `Resultados Encontrados:`,
            `${videos
              .map((video, i) => `**[${i + 1}]-** ${video.title}`)
              .join("\n")}
                            **Proporcione un numero para seleccionar una cancion del 1-8**`
          )
          .setFooter(`Tienes 20 segundos para escojer una cancion. | Este mensaje se borrara en 30 segundos.`)
          message.channel.send(embedqueue).then(x => x.delete(50000));

          try {
            let res = await message.channel.awaitMessages(
              message_ =>
                parseInt(message_.content) &&
                parseInt(message_.content) > 0 &&
                parseInt(message_.content) < videos.length,

              {
                maxMatches: 1,
                time: 5000, //tiempo para que se caduque la busqueda
                errors: ["time"]
              }
            );

            let videoIndex = parseInt(res.first().content);
            let video = await youtube.getVideoByID(videos[videoIndex - 1].id);
            return handleVideo(video, message, voiceChannel);
          } catch (err) {
            const embedplay6 = new Discord.MessageEmbed()
            .setColor("0x36393f")
            .setDescription(`No se ingresó ningún valor o no es válido.`);
            message.channel.send(embedplay6)
          }
        } catch (err) {
          const embedplay7 = new Discord.MessageEmbed()
          .setColor("0x36393f")
          .setDescripcion(`No pude obtener ningún resultado de búsqueda.`)
          message.channel.send(embedplay7)
        }
      }
        }
  }

  */

  ////PLAY////

  if(command === 'server'){

    var server = message.guild;
  
    const embed = new Discord.MessageEmbed()
    .addField('Dueño del Servidor', message.guild.owner.user.username, true)
    
   message.channel.send(embed);

  }


  if (command === "candela") {

    message.channel.send(":heart_eyes: Mi amor :heart_eyes:")

  } 

  if (command === "perfil") {

    let user = message.mentions.members.first() || message.member;

    if(!profile.has(`${message.guild.id}.${user.id}`)) {
      await profile.set(`${message.guild.id}.${user.id}`, {
        desc: "No definida",
        color: "",
        titulo: "No definida"
      })
    }

    let dep = await profile.get(`${message.guild.id}.${user.id}.desc`)
    let titu = await profile.get(`${message.guild.id}.${user.id}.titulo`)
    let colors = await profile.get(`${message.guild.id}.${user.id}.color`)

    let prefil = new Discord.MessageEmbed()

    .setColor(colors)
    .setAuthor(user.username, user.user.displayAvatarURL())
    .setThumbnail(user.user.displayAvatarURL())
    .setTitle(titu)
    .setDescription(dep)

    message.channel.send(prefil)

  }

  if (command === "zai") {
    message.channel.send("Cacho simp que es ese, pero lo amamos :heart:")
  }

  if (command === "me-llaman-romeo") {

    const embemeo = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/792892361230778388/792892396214943774/20201227_201037.jpg')
    .setColor("0x928a8a")
    message.channel.send(embemeo)

  }

  if(command === 'poll') {

    //Lo siento por los simbolos raros :(
    const split = args
      .slice(1)
      .join(" ")
      .split("/"); // Los argumentos, separando con "/"

    const aceptenmeloplis = new Discord.MessageEmbed() //El embed
      .setTitle("? Encuesta!") //El titulo es personalizable
      .setDescription("**" + split[1] + "**") //La pregunta
      .addField(":one: Opcion 1", "**" + split[2] + "**") //Primera opcion
      .addField(":two: Opcion 2", "**" + split[3] + "**") //Segunda opcion
      .setColor("RANDOM") //Color azul
      .setFooter(
        "Encuesta por " + message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp(); //Timestamp, es opcional


    let canal = message.mentions.channels.first() // Mencionar canales
    || message.guild.channels.cache.get(split[0]); // ID del canal


    if (!message.member.permissions.has("MANAGE_GUILD")) //Si no tiene permisos
      return message.reply("Necesitas permisos de gestionar servidor"); //Retorna


    if (!split[2] || !canal) // Si no hizo 3 separaciones, o si no menciono el canal

      return message.reply(
        "<a:Mal:792018568006729728> `|` Uso: `" +
          prefix +
          "encuesta (pregunta / opcion1 / opcion2 / opcion3 [opcional] / opcion4 [opcional] / opcion5 [opcional])`"
      ); //Retorna


    if (split[3]) // Si hizo una tercera separacion
      aceptenmeloplis.addField(":three: Tercera opcion", "**" + split[4] + "**"); //A�adimos un campo con la tercera opcion al embed


    if (split[4]) aceptenmeloplis.addField(":four: Cuarta option", "**" + split[5] + "**"); // Lo mismo


    if (split[5]) aceptenmeloplis.addField(":five: Quinta opcion", "**" + split[6] + "**"); // Lo mismo


    if (split[6]) // Esto por si hizo demasiadas opciones
      return message.reply(
        "<a:Mal:792018568006729728> `|` Demasiadas opciones"
      ); //Retorna

    if (!split[3]) //Si no hizo una tercera opcion
      canal.send(aceptenmeloplis) /* Mandamos el mensaje*/.then(async function(message) {
        message.react("1??"); // Reaccionamos a 1
        message.react("2??"); // Reaccionamos a 2
      });

    else if (!split[4])
      canal.send(aceptenmeloplis).then(async function(message) {
        message.react("1??");
        message.react("2??");
        message.react("3??");
      }); // Lo mismo, solo que con la reaccion 3

    else if (!split[5])
      canal.send(aceptenmeloplis).then(async function(message) {
        message.react("1??");
        message.react("2??");
        message.react("3??");
        message.react("4??");
      }); // Lo mismo, solo que con la reaccion 3 y 4

    else if (!split[6])
      canal.send(aceptenmeloplis).then(async function(message) {
        message.react("1??");
        message.react("2??");
        message.react("3??");
        message.react("4??");
        message.react("5??");
      });

  }



  /////YOUTUBE////

  if (command === "youtube") {
    const Youtube = require('youtube-node');
    let youTube = new Youtube();

    youTube.setKey('AIzaSyDz1pc_66TrDQgUKr1UpC1-bEItd-2HI4w'); //Acá ponen su API-KEY

    let nombreyt = args.join(" ") //Definimos: nombreyt
    if(!nombreyt) return  message.channel.send('Debe proporcionar algo para buscar'); //Si no tiene un nombre de vídeo en yt, retornar.

    message.channel.send(':arrows_counterclockwise: Buscando..!') 
    .then(m => {
      youTube.search(args.join(' '), 2, function(err, result){
        if(err){
            return console.log(err); 

        }
        if(result.items[0]["id"].videoId == undefined){
            return message.channel.send('¡No se han encontrado resultados!'); //Si el vídeo no existe, retornar

        } else{
            let link = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
            m.edit(link); //Editar el mensaje ''Búscando'' por el link del vídeo

        }
    })
 })
 }
  
  if (command === "xmas") {
    const embedx = new Discord.MessageEmbed()
    .addField('Felices fiestas 🎉', 'Les desamos desde el unico desarrollador')
    .setImage('https://i.gifer.com/PMKx.gif')
    .setColor("RANDOM")
    
   message.channel.send(embedx)
  }

  if (command === "bailar") {

    const embedbaile = new Discord.MessageEmbed()
    .setTitle("Estas bailando con Romeo")
    .setImage("https://thumbs.gfycat.com/HeartyPlainDeviltasmanian-max-14mb.gif")
    .setColor("RANDOM")
    message.channel.send(embedbaile)

  }

  if (command === "menfis") {
    message.channel.send("Amor de mi vida")
  }
  
  if (command === "ig") {
    message.channel.send("de la minita pls :wink:")
  }

  if (command === "hola") {
    message.channel.send("Hola mi amor :heart:")
  }

  ////VIP////


  ////VIP////

  /////CAMBIAR PREFIX/////

  if (command === "setprefix") {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No podes cambiar el prefix :wink:")
    if(!args[0]) return message.channel.send("Que prefix queres?")
    prefix_db.agregar(`${message.guild.id}`, args[0])

     const embed = new Discord.MessageEmbed()
     .addField('Nuevo prefix!', 'Ahora el prefix es '+ args[0])
     .setColor("RANDOM")

     message.channel.send({ embed });

  }

  ///


  ///////HANDLER///////

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if (cmd) {
    cmd.execute(client, message, args)
  }

});

const keepAlive = require('./server.js')
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: 'https://RomeoBot.agustngonzlez.repl.co',
    title: 'Secundario',
    interval: 5 // minutes
});

///////MONITOR/////////

monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));

console.log('NO ES MI VIEJA!')

client.login(process.env.TOKEN)