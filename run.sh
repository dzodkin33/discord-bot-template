# Reads user's token and runst a setup file
read -p "Enter bot token: " token
DISCORD_TOKEN=$token node src/setup.js