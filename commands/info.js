const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Zie hier de Informatie van deze Server!\n\n__Custom BOT:__ \nSpijkenisse Roleplay - Staff\n\n__Server ID:__\n866238268277784586\n\n__Server Eigenaar:__\nRecon Pro NL#1000\n\n__Server Aangemaakt op:__\n18 July 2021\n\n")
            .setColor("#kleur")
            .setThumbnail("https://images-ext-2.discordapp.net/external/SFscr8WncU5Q09kCmenZ0gvMDK7FEdNRPDlAlIyuygg/%3Fsize%3D128/https/cdn.discordapp.com/icons/866238268277784586/a_a9ba29c9c1642df288042842c0070818.png")
            .addField("**Je bent deze server gejoind op:**", message.member.joinedAt)
            .addField("**Totale Members:**", message.guild.memberCount)
            .setFooter("Spijkenisse Roleplay")
            .setTimestamp()

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "info"
}