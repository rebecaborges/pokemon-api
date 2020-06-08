.DEFAULT-GOAL := default

defaul: up api migrate

up:
	@docker-compose up -d postgres

test:
	npm test

lint:
	npm run eslint

migrate:
	npm run migrate

down:
	@docker-compose down

build:
	@docker-compose build

api:
	echo timeout 10
	@docker-compose up api