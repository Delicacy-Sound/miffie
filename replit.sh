echo Successfully! Give me a few minutes to install all packages
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH #Installing
npm i
echo ---------------------------
echo |  Your bot is starting.  |
echo ---------------------------
echo      Made by NateAles
echo     https://natedev.tk
node index.js