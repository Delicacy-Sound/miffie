module.exports = {
  Admins: ["528930032823959562"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "m/", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/pMahg5Aama", //Support Server Link
  Token: process.env["TOKEN"], //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "874396158741594113", //Discord Client ID
  ClientSecret: process.env["$СlientSecret"], //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is sick", //A Secret like a password
  IconURL:
    "https://media.discordapp.net/attachments/910378735998496808/913609767199588382/PicsArt_11-25-06.56.44.png",
  EmbedColor: "RANDOM",
  Permissions: 2205281600,
  Website: process.env.Website || "https://miffie.delicacysound.repl.co",

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  Spotify: {
    ClientID: process.env["$Spotify_ClientID"],
    ClientSecret: process.env["$ClientSercretSP"],
  },
};
