module.exports = async (client) => {
  (client.Ready = true),
    client.user.setActivity(`${client.botconfig.DefaultPrefix}help | /help`, {type: "WATCHING"});
  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  client.RegisterSlashCommands();
};
