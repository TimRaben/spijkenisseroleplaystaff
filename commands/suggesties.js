const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **-** Sorry, jij kan geen Suggestie aanmaken!");

    if (!args[0]) return message.reply(":x: **-** Geef een suggestie op!``");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var embed = new discord.MessageEmbed()
            .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true})}`)
            .setTitle("Spijkenisse Roleplay - Suggesties")
            .setDescription(`**Suggestie:**\n ${args.slice(0).join(" ")}\n**Ingezonden door:**\n${message.author}`)
            .setColor("RANDOM")
            .setFooter(`${message.member.displayName} • Spijkenisse Roleplay`)
            .setTimestamp()

        var channel = message.member.guild.channels.cache.get("866337040759783454");

    channel.send(embed);

    var msg = await message.channel.send(embed)

    await msg.react('✅');
    await msg.react('❌');

}


module.exports.help = {
    name: "suggestie"
}