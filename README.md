# discord-mirror
A simple function that mirror posts in a public channel into your own channel.

Use the follow environment variables (with .env file or like your deploy server guide says):

DISCORD_TOKEN=<your_logged_authorized_token>
CHANNEL_ID=<channel_id_you_want_mirror>
WEBHOOK_URL=<webhook_link_of_the_channel_you_want_post>

## How to use

1. Install dependences:

```
npm install
```

2. Criate a .env file in the root directory.

3. Add your values on .env file. Something like:

```
DISCORD_TOKEN=MzYwMTQyN...
CHANNEL_ID=123997...
WEBHOOK_URL=https://discord.com/api/webhooks/12393...
```

4. Execute:

```
npm start
```
