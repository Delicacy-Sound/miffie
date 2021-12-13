const { Message } = require("discord.js");
const { Structure } = require("erela.js");

Structure.extend(
  "Player",
  (Player) =>
    class extends Player {
      setNowplayingMessage(message) {
        if (this.nowPlayingMessage && !this.nowPlayingMessage.deleted)
          this.nowPlayingMessage.delete();
        return (this.nowPlayingMessage = message);
      }
    }
);
