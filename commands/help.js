const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd"],

  run: async (client, message, args, { GuildDB }) => {
    let Commands = client.commands.map(
      (cmd) =>
        `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
          cmd.name
        }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
    );

    let Embed = new MessageEmbed()
      .setAuthor(`♡ Commands of ${client.user.username} ♡`, client.user.displayAvatarURL()
      )
      .setColor(client.botconfig.EmbedColor)
      .setFooter(
        `To get info of each command type ${
          GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
        }help [Command] | NateDev!`
      ).setDescription(`${Commands.join("\n")}
  
  Miffie Version: v${require("../package.json").version}
  [Support Server](${
    client.botconfig.SupportServer
  }) • [VK Page](https://vk.com/delicacystudios) • [Website](https://miffie.natedev.tk) • [GitHub](https://github.com/Delicacy-Sound/miffie)`);
    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(
          message.channel,
          `❌ | Unable to access this command due to *Unkown command*.`
        );

      let embed = new MessageEmbed()
        .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
        .setDescription(cmd.description)
        .setColor("GREEN")
        //.addField("Name", cmd.name, true)
        .addField("Aliases", `\`${cmd.aliases.join(", ")}\``, true)
        .addField(
          "Usage",
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\``,
          true
        )
        .addField(
          "Permissions",
          "Member: " +
            cmd.permissions.member.join(", ") +
            "\nBot: " +
            cmd.permissions.channel.join(", "),
          true
        )
        .setFooter(
          `Prefix - ${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }`
        );

      message.channel.send(embed);
    }
  },

  SlashCommand: {
    options: [
      {
        name: "command",
        description: "Get information on a specific command",
        value: "command",
        type: 3,
        required: false,
      },
    ],

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
        (cmd) =>
          `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
      );

      let Embed1 = new MessageEmbed()
        .setAuthor(
          `♡ Commands of ${client.user.username} ♡`,
          client.botconfig.IconURL
        )
        .setColor(client.botconfig.EmbedColor)
        .setFooter(
          `To get info of each command type ${
            GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
          }help [Command] | NateDev!`
        ).setDescription(`${Commands.join("\n")}
  
  Miffie Version: v${require("../package.json").version}
  [Support Server](${
    client.botconfig.SupportServer
  }) • [VK Page](https://vk.com/delicacystudios) • [Website](https://miffie.natedev.tk) • [GitHub](https://github.com/Delicacy-Sound/miffie)`);
      if (!args) return interaction.send(Embed1);
      else {
        let cmd =
          client.commands.get(args[0].value) ||
          client.commands.find(
            (x) => x.aliases && x.aliases.includes(args[0].value)
          );
        if (!cmd)
          return client.sendTime(
            interaction,
            `❌ | Unable to access this command due to *Unkown command*.`
          );

        let embed1 = new MessageEmbed()
          .setAuthor(`Command: ${cmd.name}`, client.botconfig.IconURL)
          .setDescription(cmd.description)
          .setColor("GREEN")
          .addField("Name", cmd.name, true)
          .addField("Aliases", cmd.aliases.join(", "), true)
          .addField(
            "Usage",
            `\`${GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix}${
              cmd.name
            }\`${cmd.usage ? " " + cmd.usage : ""}`,
            true
          )
          .addField(
            "Permissions",
            "Member: " +
              cmd.permissions.member.join(", ") +
              "\nBot: " +
              cmd.permissions.channel.join(", "),
            true
          )
          .setFooter(
            `Prefix - ${
              GuildDB ? GuildDB.prefix : client.botconfig.DefaultPrefix
            }`
          );

        interaction.send(embed1);
      }
    },
  },
}; 

