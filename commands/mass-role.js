const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let membersArray = message.mentions.members.array();
  
    for(var guildMemberId in membersArray) {
      await membersArray[guildMemberId].roles.add(message.mentions.roles.first());
    }
  
    message.channel.send("All members have received the role " + message.mentions.roles.first().name + ".");
  }

module.exports.help = {
    name: "mass-role"
}
