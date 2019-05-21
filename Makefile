install:
	npm install

start:
	npx babel-node src/bin/brain-games.js

publish:
		npm publish --dry-run

check:
	./node_modules/.bin/eslint ./src
