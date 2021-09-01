const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    message.delete();

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: **-** Sorry, jij kan geen Roleplay Hosten!");

    if (!args[0]) return message.reply(":x: **-** Gebruik: ``spn/roleplay-host (Datum) (Tijd) (Host) (Co Host) (PSN Naam) (Tags) (Toevoegingen)``");

    if (!args[1]) return message.reply(":x: **-** Gebruik: ``spn/roleplay-host (Datum) (Tijd) (Host) (Co Host) (PSN Naam) (Tags) (Toevoegingen)``");

    if (!args[2]) return message.reply(":x: **-** Gebruik: ``spn/roleplay-host (Datum) (Tijd) (Host) (Co Host) (PSN Naam) (Tags) (Toevoegingen)``");

    if (!args[3]) return message.reply(":x: **-** Gebruik: ``spn/roleplay-host (Datum) (Tijd) (Host) (Co Host) (PSN Naam) (Tags) (Toevoegingen)``");

    if (!args[4]) return message.reply(":x: **-** Gebruik: ``spn/roleplay-host (Datum) (Tijd) (Host) (Co Host) (PSN Naam) (Tags) (Toevoegingen)``");

    if (!args[5]) return message.reply(":x: **-** Gebruik: ``spn/roleplay-host (Datum) (Tijd) (Host) (Co Host) (PSN Naam) (Tags) (Toevoegingen)``");

    if (!args[6]) return message.reply(":x: **-** Gebruik: ``spn/roleplay-host (Datum) (Tijd) (Host) (Co Host) (PSN Naam) (Tags) (Toevoegingen)``");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var embed = new discord.MessageEmbed()
            .setThumbnail("https://images-ext-2.discordapp.net/external/SFscr8WncU5Q09kCmenZ0gvMDK7FEdNRPDlAlIyuygg/%3Fsize%3D128/https/cdn.discordapp.com/icons/866238268277784586/a_a9ba29c9c1642df288042842c0070818.png")
            .setTitle("Spijkenisse Roleplay - Roleplays")
            .setDescription(`**\n• Datum:** ${args[0]}\n**• Tijd:** ${args[1]}\n\n**• Host:** ${args[2]}\n**• Co Host:** ${args[3]}\n\n**• Playstation Naam:** ${args[4]}\n\n**• Toevoegingen:** ${args.slice(6).join(" ")}\n\nTags: ${args[5]}`)
            .setColor("AQUA")
            .setFooter(`${message.member.displayName} • Spijkenisse Roleplay`)
            .setTimestamp()

        var channel = message.member.guild.channels.cache.get("866379875904520202");
 
        if (!channel) return;

    channel.send(embed);

    var msg = await message.channel.send(embed)

    await msg.react('✅');
    await msg.react('⏰');
    await msg.react('❌');

}


module.exports.help = {
    name: "roleplay-host"
}