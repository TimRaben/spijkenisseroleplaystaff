const discord = require("discord.js");

module.exports.run = async (message, args) => {

if(command == "close", "behandeld") {
    if(!message.channel.name.includes("politie-", "ambulance-", "brandweer-", "dsi-", "anwb-")) return message.channel.send("Je kan dit momenteel niet gebruiken!")
    message.channel.delete();
}
};

module.exports.help = {
    name: "behandeld",
    description: "Geeft al de verschillende commands",
    category: "Sluit een Sollicitatie"
}