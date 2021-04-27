import tweepy

api_key = "eZfTQDM3po2jZdnLYEsWnW1wb"

api_secret_key = "LdawV6MvXlYkAnKgJ6KpdrvbJZztdffdFCUaGPc6PE7Gc0aCaD"

access_token = "3277317068-Xr7UEVjY5UE2oUPv4wMyxWCJaC5qP6zjiRt8YLk"

access_token_secret = "hYTg2OkOKgbiqcxnQ8wY6ZjLNLLzp9HZeLZqf138dtCaN"

auth = tweepy.OAuthHandler(api_key, api_secret_key)

auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth, wait_on_rate_limit=True)

for tweet in tweepy.Cursor(api.search, q='#MuscariServer' + '-filter:retweets').items(10):

    print(f'https://twitter.com/user/status/{tweet.id}')  