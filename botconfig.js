module.exports = {
  Admins: ["528930032823959562"],
  ExpressServer: true,
  DefaultPrefix: process.env.Prefix || "m/",
  Port: 3000,
  SupportServer: "https://discord.gg/pMahg5Aama",
  Token: process.env["TOKEN"],
  ClientID: process.env.Discord_ClientID || "874396158741594113",
  ClientSecret: process.env.ClientSecret || "PlvGXFnGlMgeqJxJyj7x7jGUuzM4mAyp",
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true,
  DefaultVolume: 100,
  CallbackURL: "/api/callback",
  "24/7": false,
  CookieSecret: "Pikachu is sick",
  IconURL: "https://media.discordapp.net/attachments/910378735998496808/913609767199588382/PicsArt_11-25-06.56.44.png",
  EmbedColor: "RANDOM",
  Permissions: 2205281600,
  Website: process.env.Website || "https://miffie.tk",

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
  },
};
