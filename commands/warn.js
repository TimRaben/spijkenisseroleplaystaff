const discord = require("discord.js");
const fs = require("fs");
const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (client, message, args) => {

    // !warn spelerNaam redenen hier.

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("sorry jij kan dit niet");

    if (!args[0]) return message.reply("Geen gebruiker opgegeven.");

    if (!args[1]) return message.reply("Gelieve een redenen op te geven.");

    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("Geen perms");

    var warnUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    var reason = args.slice(1).join(" ");

    if (!warnUser) return message.reply("Kan de gebruiker niet vinden.");

    if (warnUser.hasPermission("KICK_MEMBERS")) return message.reply("Sorry je kunt deze gebruiker niet warnen");

    if (!warns[warnUser.id]) warns[warnUser.id] = {
        warns: 0
    };

    warns[warnUser.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Spijkenisse Roleplay - Warnings")
        .setFooter(message.member.displayName, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Persoon:** ${warnUser} **-** ${args[0].displayName}\n**Warning door:** ${message.author}\n**Reden: ** ${reason}`)
        .addField("Aantal warns", warns[warnUser.id].warns);

    var channel = message.member.guild.channels.cache.get("866337102185365504");

    if (!channel) return;

    channel.send(embed);

    if (warns[warnUser.id].warns == 8) {

        var embed = new discord.MessageEmbed()
            .setColor("#ff0000")
            .setDescription("PAS OP")
            .addField("Bericht", "Je hebt nog een waarschuwing voor een kick.");

        message.channel.send(embed);

    } else if (warns[warnUser.id].warns == 8) {
        message.guild.member(warnUser).ban(reason);
        message.channel.send(`${warnUser} is gekickt omdat hij te veel Warnings had!`);
    
    } else if (warns[warnUser.id].warns == 15) {
    message.guild.member(warnUser).ban(reason);
    message.channel.send(`${warnUser} is verbannen omdat hij te veel Warnings had!`);
    }
}

module.exports.help = {
    name: "warn"
}