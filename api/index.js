export default async function handler(req, res) {
  const body = req.body;

  if (body && body.inline_query) {
    const inlineQueryId = body.inline_query.id;
    const BOT_TOKEN = "8996872203:AAHitNB0r1J63Tus0CWgUr2SfkFP4nqNI-U";
    const GAME_URL = "https://bingo-tic-tac-toe.vercel.app";

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerInlineQuery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        inline_query_id: inlineQueryId,
        results: [{
          type: 'article',
          id: '1',
          title: '🎮 Play Tic Tac Toe',
          description: 'Click here to send game in group',
          input_message_content: {
            message_text: '❌ *Tic Tac Toe Game* ○\nClick below to start playing!',
            parse_mode: 'Markdown'
          },
          reply_markup: {
            inline_keyboard: [[
              { text: '🎮 PLAY GAME NOW', web_app: { url: GAME_URL } }
            ]]
          }
        }]
      })
    });
  }

  res.status(200).send('OK');
}
