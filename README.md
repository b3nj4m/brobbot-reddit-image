# brobbot-reddit-image

A brobbot plugin for image searches.

```
brobbot image <query>
```

Searches Reddit for `query` and returns an image result's URL.

## Configuration

This plugin requires a Reddit app of type 'script' to be configured.

### App ID

```bash
BROBBOT_REDDIT_IMAGE_APP_ID=ID
```

Set the app ID used to connect to the Reddit API.
See https://github.com/reddit-archive/reddit/wiki/OAuth2

### App secret

```bash
BROBBOT_REDDIT_IMAGE_APP_SECRET=SECRET
```

Set the app secret used to connect to the Reddit API.
See https://github.com/reddit-archive/reddit/wiki/OAuth2

### Username

```bash
BROBBOT_REDDIT_IMAGE_USERNAME=USERNAME
```

Set the username used to connect to the Reddit API.
See https://github.com/reddit-archive/reddit/wiki/OAuth2

### Password

```bash
BROBBOT_REDDIT_IMAGE_PASSWORD=PASSWORD
```

Set the password used to connect to the Reddit API.
See https://github.com/reddit-archive/reddit/wiki/OAuth2

### Sort (optional)

```bash
BROBBOT_REDDIT_IMAGE_SORT=SORT
```

Set the sort method passed to the Reddit API. E.g. `hot`, `new`, `relevance`. Default is `relevance`.

