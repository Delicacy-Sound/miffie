const api = require('novelcovid');
const moment = require('moment');
const { CanvasRenderService } = require('chartjs-node-canvas');
const Discord = require("discord.js");
const config = require('../botconfig.js')
const i18n = require("../util/i18n.js");


module.exports = {
  name: "covid",
  aliases: ['covid-news', 'covid19'],
  description: i18n.__("covid.desc"),
  usage: "[country]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },

  run: async(client, message, args) => {
    if(!args[0]) {
      const coronaEmbed = new Discord.MessageEmbed()
      const data = await api.all()
        coronaEmbed.setColor(config.EmbedColor)
          .setTitle(i18n.__("covid.world"))
          .setDescription(i18n.__("covid.description"))
          .addField(i18n.__("covid.field1"), data.cases, true)
          .addField(i18n.__("covid.field2"), data.active, true)
          .addField(i18n.__("covid.field3"), data.todayCases, true)
          .addField(i18n.__("covid.field4"), data.critical, true)
          .addField(i18n.__("covid.field5"), data.deaths, true)
          .addField(i18n.__("covid.field6"), data.recovered, true)
          .setFooter(i18n.__("covid.footer"), message.author.displayAvatarURL())
          .setTimestamp()
        message.channel.send(coronaEmbed);
    } else {
      if(args[0]) {
        const countrycovid = args.join(" ");
        const countrydata = await api.countries({country: countrycovid})

        const countryEmbed = new Discord.MessageEmbed()
          .setColor(config.EmbedColor)
          .setTitle(`${countrycovid}`)
          .setDescription(i18n.__("covid.description"))
          .addField(i18n.__("covid.field1"), countrydata.cases, true)
          .addField(i18n.__("covid.field2"), countrydata.active, true)
          .addField(i18n.__("covid.field3"), countrydata.todayCases, true)
          .addField(i18n.__("covid.field4"), countrydata.critical, true)
          .addField(i18n.__("covid.field5"), countrydata.deaths, true)
          .addField(i18n.__("covid.field6"), countrydata.recovered, true)
          .setFooter(i18n.__("covid.footer"), message.author.displayAvatarURL())
          .setTimestamp()
        message.channel.send(countryEmbed)

      }
    }
  }
}