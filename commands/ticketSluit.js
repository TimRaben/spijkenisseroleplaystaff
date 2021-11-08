const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

if(!args[0]) return message.channel.send(":X: **|** Geef een reden op!")
if(!message.channel.name.includes("algemeen-", "overig-", "staffklachten-", "lead-")) return message.channel.send(":x: **|** Ticket niet gevonden in de Database voer dit commando uit in een officële ticket.")
message.channel.delete();

}

module.exports.help = {
    name: "sluit"
} 