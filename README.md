<h1 align="center"><img src="./assets/logo.jpg" width="250px"></h1>

<img width="170" height="170" align="left" style="float: left; margin: 0 10px 0 0; border-radius: 50%;" alt="Miffie's logo" src="./assets/logo.jpg">  

# Miffie
🇺🇸 | Miffie is a good tool to customise your music to suit your mood. Use all the features of the bot to cheer yourself up


## The lastest update

• Embed color changes

• Absolutely new dashboard / Modifying web

• Migrating to new [web address](https://miffie.natedev.tk)

• Release of all commands

• Major bug fixes, new feautures in commands

## 🚧 | Requirements

- [Node.js 14+](https://nodejs.org/en/download/)
- Discord.js@12.5.3
- [Lavalink Server](https://github.com/freyacodes/Lavalink#server-configuration)

> Примечание: Lavalink необходим для работы с музыкой. У вас должен быть рабочий сервер Lavalink, чтобы бот работал.

## **♡** | Miffie's Futures

`Bassboost`: Basboost effect

`Bump`: Move now-playing song at the top

`Clear`: Clear queue

`Config`: Set up a prefix and DJ role for your server

`Disconnect`: Disconnect Miffie from Voice Channel

`Grab`: Move the track at the specific place

`Help`: The main command. Includes info about other commands

`Invite`: Get Miffie's invite link

`Loop`: Loop a track 

`LoopQueue`: Loop a queue

`Lyrics`: See lyrics of now-playing track

`Move`: Move now-playing track above or below

`nowplaying`: See what's on now

`pause`: Pause a track

`play`: Start playing a track (provide a song)

... And a lot of different commands ...

## **♡** | Installation

1. `$ git clone https://github.com/Delicacy-Sound/miffie.git`

2. `$ cd miffie`

3. `$ bash replit.sh (If you are hosting on Replit) | npm i`

4. `$ npm start`



## ✨ | Config

```javascript
module.exports = {
  Admins: ["528930032823959562"],
  ExpressServer: true,
  DefaultPrefix: process.env.Prefix || "", // your prefix
  Port: 3000,
  SupportServer: "https://discord.gg/pMahg5Aama", 
  Token: process.env["TOKEN"], // change it if you are self-hosting it
  ClientID: process.env.Discord_ClientID || "874396158741594113",
  ClientSecret: process.env.ClientSecret || "", // Your bot's secret
  Scopes: ["identify", "guilds", "applications.commands"],
  ServerDeafen: true,
  DefaultVolume: 100,
  CallbackURL: "/api/callback",
  "24/7": false, // if you need radio
  CookieSecret: "", // put whatever you want
  IconURL: "",
  EmbedColor: "#303237", //do not change it if you want your bot to be better
  Permissions: 8,
  Website: process.env.Website || "https://miffie.natedev.tk", //your website

  locale: "en", // still in developing

  Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,              // dont touch these fields
    pass: "youshallnotpass",
    secure: false,
  },

  Spotify: {
    ClientID: process.env["$Spotify_ClientID"],
    ClientSecret: process.env["$ClientSercretSP"], // put your values
  }
};
```

Made with :heart: and Node JS!

## Copyrights and License

LICENSE: [**MIT**](LICENSE)
> **Copyright Miffie © 2021**
