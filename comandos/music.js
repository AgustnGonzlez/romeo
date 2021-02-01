/*
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "play",
  alias: ["escuchar"],

async execute (client, message, args){
   
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel) {
    let embedplay1 = new Discord.MessageEmbed()
    .setTitle(
      `Necesitas estar en un canal de voz!.`
    ); return message.channel.send(embedplay1);
    
  }

  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT")) {
    let embedplay2 = new Discord.MessageEmbed()
    .setTitle(
      `**<a:9876_attention:631323087610052608> | No puedo entrar a tu canal de voz`
    );
    return message.channel.send(embedplay2);
  }

  var opts = {
    maxResults: 1,
    key: 'AIzaSyDz1pc_66TrDQgUKr1UpC1-bEItd-2HI4w',
    type: "video"
  };

  const songArg = await search(args.join(' '), opts);
  const songURL = songArg.results[0].link;
  const songInfo = await ytdl.getInfo(songURL);

  const song = {
    title: songInfo.title,
    url: songInfo.video_url,
    author: message.author.tag
  };

  if (!serverQueue) {
    const queueObject = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 60,
      playing: true,
    };

    queue.set(message.guild.id, queueObject);

    queueObject.songs.push(song);

    try {

      var connection = await voiceChannel.join();
      queueObject.connection = connection;
      var fetchVideoInfo = require('youtube-info');
      let data = await fetchVideoInfo(queueObject.songs[0].url.slice(32))
      console.log(data)
      let embedfunction1 = new Discord.MessageEmbed()
      .setTitle(`<a:discord:641378813087055892> | Escuchando`)
      .addField(`Cancion:`,`**${song.title}**`)
      .addField(`Duracion:`,`**${new Date(data.duration*1000).toISOString().substr(11, 8)}**`)
      .addField(`Vistas:`,`**${data.views.toLocaleString()}**`)
      .setThumbnail(data.thumbnailUrl.toLocaleString())
      .setFooter(`RomeoBot | Escuchando musica`)
      message.channel.send(embedfunction1)

      play(message.guild, queueObject.songs[0]);

    } catch (err) {

      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);

    }


  }else {

    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    let embedqueue3 = new Discord.MessageEmbed()
    .setTitle(`**${song.title}** Fue añadido a la cola, por: __${message.author.tag}__`);
    message.channel.send(embedqueue3).then(x => x.delete(40000))

  }
  
 }
 
}
*/