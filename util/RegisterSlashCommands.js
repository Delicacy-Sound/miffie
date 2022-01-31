const fs = require("fs");
const path = require("path");

module.exports = (client, guild) => {
  client.log("Registering slash commands for " + guild);

  let commandsDir = path.join(__dirname, "..", "commands");

  fs.readdir(commandsDir, (err, files) => {
    if (err) throw err;
    files.forEach(async (file) => {
      let cmd = require(commandsDir + "/" + file);
      if (!cmd.SlashCommand || !cmd.SlashCommand.run) return;
      let dataStuff = {
        name: cmd.name,
        description: cmd.description,
        options: cmd.SlashCommand.options,
      };

      let ClientAPI = client.api.applications(client.user.id);
      let GuildAPI = ClientAPI.guilds(guild);

      client.log(
        "[Slash]: [✅] Guild " +
          guild +
          ", Command: " +
          dataStuff.name
      );
      try {
        await GuildAPI.commands.post({ data: dataStuff });
      } catch (e) {
        client.log(
          "[Slash]: [❌] Guild " +
            guild +
            ", Command: " +
            dataStuff.name
        );
        console.log(e);
      }
    });
  });
};
