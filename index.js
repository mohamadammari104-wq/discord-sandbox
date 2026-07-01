import { Client, GatewayIntentBits } from 'discord.js';
import { routeQuestion } from './router.js';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  const result = routeQuestion(message.content);

  if (result) {
    message.reply(result.response);
  }
});

client.login('YOUR_BOT_TOKEN');