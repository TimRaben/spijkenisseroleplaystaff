const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!args[0]) return message.reply(":x: **-** Geef een bericht op!");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var embed = new discord.MessageEmbed()
            .setTitle("Spijkenisse Roleplay")
            .setDescription(`${args.slice(0).join(" ")}`)
            .setColor("BLUE")
            .setFooter(`${message.member.displayName} • Spijkenisse Roleplay`)
            .setTimestamp()

            return message.channel.send(embed);       

}

   


module.exports.help = {
    name: "say"
}