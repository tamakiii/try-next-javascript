YARN_CACHE_DIR ?= $(shell docker-compose run --rm node yarn cache dir | sed $$'s/\e\\[[[:digit:]][KG]//g')

setup:
	docker-compose run --rm node yarn install
	$(MAKE) .env

dev:
	docker-compose up

.env:
	@echo 'YARN_CACHE_DIR=$(YARN_CACHE_DIR)'  > $(@F)

