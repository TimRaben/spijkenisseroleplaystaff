const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Zie hier de Informatie van deze Server")
            .setColor("#kleur")
            .setThumbnail("https://images-ext-2.discordapp.net/external/SFscr8WncU5Q09kCmenZ0gvMDK7FEdNRPDlAlIyuygg/%3Fsize%3D128/https/cdn.discordapp.com/icons/866238268277784586/a_a9ba29c9c1642df288042842c0070818.png")
            .addField("**Custom BOT**", client.user.username)
            .addField("**Je bent deze server gejoind op:**", message.member.joinedAt)
            .addField("**Totale Members:**", message.guild.memberCount)
            .addField("**Server Gemaakt op:**\n18 July 2021")
            .addField("**Server Owner:**\nRecon Pro NL#1000")
            .addField("**Server ID:**\n866238268277784586")
            .setFooter("Spijkenisse Roleplay")
            .setTimestamp()

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "info"
}