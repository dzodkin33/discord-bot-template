# This is a file that users will interact with

# Init's the template in an empty directory
init:
	npm init -y
	npm install discord.js
	npm install --save-dev eslint
	npm install @discordjs/rest
# Setups a bot by creating a global  token
setup:
	sh run.sh
# Run the bot
run:
	node src/index.js