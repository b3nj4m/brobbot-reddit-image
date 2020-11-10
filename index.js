const Reddit = require('reddit');

// Description:
//    Search Reddit posts for images. Uses the 'script' type of reddit application, which requires user credentials
//
// Configuration:
//   BROBBOT_REDDIT_IMAGE_APP_ID - the app ID to pass to reddit
//   BROBBOT_REDDIT_IMAGE_APP_SECRET - the app secret to pass to reddit
//   BROBBOT_REDDIT_IMAGE_USERNAME - the username to pass to reddit
//   BROBBOT_REDDIT_IMAGE_PASSWORD - the user password to pass to reddit
//   BROBBOT_REDDIT_IMAGE_SORT - the sort type to pass to reddit (e.g. new, hot, relevance). default is 'relevance'

const APP_ID = process.env.BROBBOT_REDDIT_IMAGE_APP_ID;
const APP_SECRET = process.env.BROBBOT_REDDIT_IMAGE_APP_SECRET;
const USERNAME = process.env.BROBBOT_REDDIT_IMAGE_USERNAME;
const PASSWORD = process.env.BROBBOT_REDDIT_IMAGE_PASSWORD;
const SORT = process.env.BROBBOT_REDDIT_IMAGE_SORT || 'relevance';

module.exports = function(robot) {
  robot.helpCommand("brobbot image `query`", "Searches Reddit for `query` and returns an image result's URL.");

  robot.respond(/^(image|img) (.*)/i, async function(msg) {
    let url;
    try {
      url = await image(msg.match[2]);
    }
    catch (err) {
      console.error(`Reddit image error: ${err}`);
    }
    return msg.send(url || 'No result :(');
  });
};

async function image(q) {
  var reddit = new Reddit({
    username: USERNAME,
    password: PASSWORD,
    appId: APP_ID,
    appSecret: APP_SECRET,
  });

  const {data} = await reddit.get('/search', {q, limit: 20, type: 'link', sort: SORT});
  const items = data.children.map(({data: {url, post_hint}}) => ({url, post_hint})).filter(({post_hint}) => post_hint === 'image');
  return items.length > 0 ? items[Math.floor(Math.random() * items.length)].url : null;
}
