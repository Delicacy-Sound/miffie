const Miffie = require("./structures/Miffie");
const Discord = require('discord.js');
const client = new Miffie();

client.build();

client.on("guildCreate", guild => {
  let channelID;
  let channels = guild.channels.cache;

  channelLoop:
  for (let key in channels) {
    let c = channels[key];
    if (c[1].type === "text") {
      channelID = c[0];
      break channelLoop;
    }
  }
  let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
  const miffie = new Discord.MessageEmbed()
    .setColor(client.botconfig.EmbedColor)
    .setTitle('💜 | Thank You for choosing **Miffie**!')
    .setDescription('⭐ Miffie is a good tool to customise your music to suit your mood. Use all the features of the bot to cheer yourself up 🌺')
    .addField('To list all available bot commands use `m/help` or `/help`', `[Support Server](${client.botconfig.SupportServer}) • [VK Page](https://vk.com/delicacystudios) • [Website](https://miffie.tk) • [GitHub](https://github.com/Delicacy-Sound/miffie)`)
    .setThumbnail('https://media.discordapp.net/attachments/914242243659968545/919733958550388756/PicsArt_12-12-02.29.02.png')

  channel.send(miffie);
});

client.on("message", message => {
    if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;

    if (message.mentions.has(client.user.id)) {
        const mention = new Discord.MessageEmbed()
          .setTitle('My default prefix is `m/`')
          .setDescription('You can change the default prefix to whatever You want with the command `m/config` (Prefix on your server could be changed)')
          .setColor(client.botconfig.EmbedColor)
        message.channel.send(mention);
    };
});


const activities = [
  "NateAles's Cafe",
  "m/help | /help"
];
  
client.on("ready", () => {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];
    client.user.setActivity(newActivity);
  }, 5000);
});

module.exports = client;

/*\/*\\\\\\\\\\\\\\\\\\\\\\
      Made by NateAles
  For Delicacy Studios Inc.
\*/////////////////////////
