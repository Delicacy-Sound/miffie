module.exports = {
    conf: {
        name: "setlang",
        description: "setlang",
        usage: "setlang <en/ru>",
        aliases: ["sl", "lang"],
    }, 
    run: async (client, message, args) => {
        const db = require("quick.db");

        if(!args[0]) return message.channel.send(client.language.SETLANG_ERR)

        let lang;
        if(args[0] === "en") {
            db.set(`lang_${message.guild.id}`, "en")
            message.channel.send(client.language.SETLANG_SUCCESS[1])
        }
        
        if(args[0] === "ru") {
            db.set(`lang_${message.guild.id}`, null)
        message.channel.send(client.language.SETLANG_SUCCESS[0])
        }
    }
}