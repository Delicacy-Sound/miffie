module.exports = {
  Admins: ["528930032823959562"],
  ExpressServer: true,
  DefaultPrefix: process.env.Prefix || "m/",
  Port: 3000,
  SupportServer: "https://discord.gg/pMahg5Aama",
  Token: process.env["TOKEN"],
  ClientID: process.env.Discord_ClientID || "874396158741594113",
  ClientSecret: process.env.ClientSecret || process.env['ClientSecret'],
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true,
  DefaultVolume: 100,
  CallbackURL: "/api/callback",
  "24/7": false,
  CookieSecret: "Pikachu is sick",
  IconURL: "https://media.discordapp.net/attachments/924403120098934835/937471229147902042/PicsArt_01-30-02.29.14.jpg",
  EmbedColor: "#303237",
  Permissions: 8,
  Website: process.env.Website || "https://miffie.natedev.tk",

  locale: "en", // in developing

  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass",
    secure: false,
  },

  Spotify: {
    ClientID: process.env["$Spotify_ClientID"],
    ClientSecret: process.env["$ClientSercretSP"],
  }
};
