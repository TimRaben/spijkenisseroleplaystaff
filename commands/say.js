module.exports.run = async (client, message, args) => {

    return message.channel.send(":x: **|** Dit Commando is momenteel nog niet in Werking!\nDeze Command is mogelijk beschikbaar over: *Niet bekend!*");

}

module.exports.help = {
    name: "say",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
}