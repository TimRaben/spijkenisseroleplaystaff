const discord = require("discord.js");
const botConfig = require("./botconfig.json");

//  Command handler
const fs = require("fs");
const { isFunction } = require("util");
const { MessageButton } = require("discord-buttons");

const client = new discord.Client();

//  Command handler
client.commands = new discord.Collection();

client.login(process.env.token);


//  Command handler
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`✅ De file ${f} is geladen!`);

        client.commands.set(fileGet.help.name, fileGet);
    });

});

client.on("ready", async () => {

    console.log(`${client.user.username} is herstart.`);

    setInterval(() => {
        const statuses = [
            `🎫 - Tickets`,
            `💬 - Tekst Berichten`,
            `💳 - ID's | spn/id`,
            `🔰 - 14 Staffleden`,
            `👥 - 920+ Leden`,
        ]
    
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) // Can Be WATCHING, STREAMING, LISTENING
    }, 4500) // Second You Want to Change Status, This Cahnges Every 2 Seconds

});

client.on('guildMemberAdd', member => {

    let button = new MessageButton()
            .setStyle('url')
            .setURL('https://sway.office.com/QJVFr8icY5GWzJgd?ref=Link2')
            .setLabel('📚 Regels')
            .setID('click_to_function');

    let button1 = new MessageButton()
            .setStyle('url')
            .setURL('https://spijkenisseroleplay.craftingstore.net/')
            .setLabel('🛒 Store')
            .setID('click_to_function');

    var embed = new discord.MessageEmbed()
        .setTitle(`Welkom <@${guildMember.user.id}>`)
        .setAuthor("Spijkenisse Roleplay")
        .setDescription(`Hey <@${guildMember.user.id}>, leuk dat je onze Server bent gejoined! Hopelijk heb je een fijne en leuke tijd op onze Server!\n\nLees wel even snel de regels door :wink:\n\n**Totale Members:** ${message.guild.memberCount}`)
        .setThumbnail("https://media.discordapp.net/attachments/866336989891264532/905036514910695454/static_15.png?width=205&height=205")
        .setFooter("Spijkenisse Roleplay • Welkom • Alle Rechten Voorbehoud")
        .setTimestamp();

        var channel = message.guild.channels.cache.get("902193674576863292");

    channel.send(embed, button, button1);

})

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type === "dm") return;


    // var msg = message.content.toLowerCase();

    // for (let i = 0; i < swearWords["vloekwoorden"].length; i++) {

    //     if (msg.includes(swearWords["vloekwoorden"][i])) {

    //         message.delete();

    //         return message.reply("Gelieve niet te vloeken").then(msg => msg.delete({ timeout: 3000 }));

    //     }

    // }


    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");


    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    //  Command handler
    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));


    if (commands) commands.run(client, message, arguments);

});

