// This is a file that setups a bot by creating a config.json file, which contains the public variable - token.
const fs = require('node:fs');

// Creates a config object that is then parsed to json
// process.env.DISCORD_TOKEN is a runtime variable that is
// inputed by user through run.sh command
const config = { 'token' : process.env.DISCORD_TOKEN };
const configstring = JSON.stringify(config);


// eslint-disable-next-line no-unused-vars
fs.writeFile('src/config.json', configstring, function(err, _result) {
	if (err) console.log('error', err);
});
