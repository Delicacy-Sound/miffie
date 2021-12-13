module.exports = async (client) => {
  client.Manager.init(client.user.id);
  client.log("Successfully Logged in as " + client.user.tag); 
  client.RegisterSlashCommands();
};
