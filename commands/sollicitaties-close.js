const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if(!message.channel.name.includes("politie-", "dsi-", "brandweer-", "anwb-", "ambulance-")) return message.channel.send("Je kan dit momenteel niet gebruiken!")
    message.channel.delete();
}

module.exports.help = {
    name: "done"
}