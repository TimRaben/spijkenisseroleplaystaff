const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **-** Sorry, jij kan geen Roleplay Hosten!");

    if (!args[0]) return message.reply(":x: **-** Geef een suggestie op!");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var embed = new discord.MessageEmbed()
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
            .setTitle("Spijkenisse Roleplay - Suggesties")
            .setDescription(`**Suggestie:**\n ${args.slice(0).join(" ")}\n**Ingezonden door:**\n${message.member}\n\n*Laat jou suggestie achter met* spn/suggestie (suggestie)`)
            .setColor("AQUA")
            .setFooter(`https://images-ext-2.discordapp.net/external/SFscr8WncU5Q09kCmenZ0gvMDK7FEdNRPDlAlIyuygg/%3Fsize%3D128/https/cdn.discordapp.com/icons/866238268277784586/a_a9ba29c9c1642df288042842c0070818.png${message.member.displayName} • Spijkenisse Roleplay`)
            .setTimestamp()

        var channel = message.member.guild.channels.cache.get("866337040759783454");
 
        if (!channel) return;

    channel.send(embed);

    var msg = await message.channel.send(embed)

    await msg.react('✅');
    await msg.react('❌');

}


module.exports.help = {
    name: "suggestie"
}