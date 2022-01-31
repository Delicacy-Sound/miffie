/* const Discord = require ('discord.js')
const { MessageEmbed, Embed } = require ('discord.js')
const config = require('../botconfig.js')

module.exports = {
  name: "bugreport",
  description: 'This command will allow you to report a bug to the developer. Explain the bug you found and the information will be sent to the developer!',
  usage: "[Describe a bug]",
  aliases: ["bug"],

  run: async (client, message, args) => {
    const channel = client.channels.cache.get('935002436135972975')

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, size: 512 }))
      .setColor(config.EmbedColor)
      .setTimestamp()
      .setFooter(`Reporter: <@${message.author.id}>`)
      .addFields(
        {
          name: 'Bug Reported', 
          value: `${args.join(" ")}`
        }
      )
    channel.send(embed)
  }
} */