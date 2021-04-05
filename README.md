# Discord-bot [Link](https://discord.com/developers/applications)
# JavaScript
## Requirements

### Install nodejs

  * Download latest version and install it:
  
    [node-v14.13.1-linux-x64.tar.xz](https://nodejs.org/dist/v14.13.1/node-v14.13.1-linux-x64.tar.xz)
```sh
      >> sudo mkdir -p /usr/local/lib/nodejs
      >> DISTRO=linux-x64
      >> VERSION=v14.13.1
      >> sudo tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs
```

  * Add these lines in your ~/.profile
  
```sh
      # Nodejs
      VERSION=v14.13.1
      DISTRO=linux-x64
      export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH
```
  
### Install ffmpeg

```sh
  >> sudo apt install ffmpeg
```

## Create Project File

```sh
  >>  mkdir discord-greeter-bot/
  >>  cd discord-greeter-bot/
  >>  npm init -y
  >>  npm install --save discord.js dotenv ytdl yt-search
  >>  touch .env bot.js
```

  Put your bot Token in the .env file like this
```env
  DISCORD_TOKEN=Your_Token
```
  After that put your code in the bot.js then:
  
```sh
  >> node bot.js
```
  
# Python

## Requirements

### Install Packeges 

```sh
  pip3 install -U discord.py
  pip3 install python-dotenv
```