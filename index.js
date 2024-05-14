import selfcore from 'selfcore';
import 'dotenv/config';

const client = new selfcore();
const gateway = new selfcore.Gateway(process.env.DISCORD_TOKEN);

gateway.on('message', (m) => {
    if (m.channel_id === process.env.CHANNEL_ID) {
        client.sendWebhook(process.env.WEBHOOK_URL, m.content);
    }
});