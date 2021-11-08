const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const mongoose = require("mongoose");

//  Command handler
const fs = require("fs");
const { isFunction } = require("util");

const client = new discord.Client();

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/TimRaben', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log("Geconnecteerd met de MongoDB Database!");
}).catch((err) => {
  console.log(err);
});

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

console.log(process.env.MONGODB_URL);

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