// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const yts = require('yt-search')
const client = new Discord.Client();


function isValidHttpUrl(string) {
	let url;

	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}

	return true;
}
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("reconnecting", () => {
	console.log("Reconnecting!");
});

client.on("disconnect", () => {
	console.log("Disconnect!");
});



client.on('message', message => {
	if (message.content === 'ping') {
		message.channel.send("hello");
		message.channel.send(message.author.tag);
		message.channel.send(message.author.cache);
	}
	if (message.content.toLowerCase() === 'avatar') {
		message.reply('Nice Avatar\n' + message.author.displayAvatarURL());
	}
	if (message.content.startsWith('>kick') && message.author.tag === "") {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			if (member) {
				member
					.kick('Optional reason that will display in the audit logs')
					.then(() => {
						message.reply(`Successfully kicked ${user.tag}`);
					})
					.catch(err => {
						message.reply('I was unable to kick the member');
						console.error(err);
					});
			} else {
				message.reply("That user isn't in this guild!");
			}
		} else {
			message.reply("You didn't mention the user to kick!");
		}
	}
});

client.on('message', async message => {
	if (!message.guild) return;

	if (message.content.startsWith('>play') && !message.author.bot) {
		if (message.member.voice.channel) {
			const connection = await message.member.voice.channel.join();
			const song = message.content
			await message.channel.send(song.toString().split(">play"));
			if (isValidHttpUrl(song)) {
				connection.play(ytdl(song, { filter: 'audioonly' }));
			} else {

				const r = await yts(song);

				await message.channel.send(r.videos[0].url);
				connection.play(ytdl(r.videos[0].url, { filter: 'audioonly' }));
			}

		} else {
			message.reply('You need to join a voice channel first!');
		}
	}
	if (message.content.startsWith('>stop')) {
		if (message.member.voice.channel) {
			const connection = message.member.voice.channel.leave();
		}
	}
});
client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	if (!channel) return;
	channel.send(`Welcome to the server, ${member}`);
});

client.login(process.env.DISCORD_TOKEN);
