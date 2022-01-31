exports.canModifyQueue = (member) => member.voice.channelID === member.guild.voice.channelID;

let config;
try {
  config = require("../botconfig.js");
} catch (error) {
  config = null;
}

exports.Locale = (config ? config.locale : process.env.LOCALE) || "en";