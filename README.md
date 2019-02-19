# lerna-poc
lerna proof of concept

Install lerna

npm install --global lerna

Install yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

Execute
lerna run transpile
lerna bootstrap

Enter on ./apps/kbe and run node .
