project=financial
now=$(shell date +'%d-%m-%Y')

up: infra-up

down: infra-down

infra-up:
	docker-compose -f ./docker-compose.yml -p $(project) up -d

infra-build:
	docker-compose -f ./docker-compose.yml -p $(project) build

infra-down:
	docker-compose -f ./docker-compose.yml -p $(project) down --remove-orphans

infra-logs:
	docker-compose -f ./docker-compose.yml -p $(project) logs -t -f
