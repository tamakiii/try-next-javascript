YARN_CACHE_DIR ?= $(shell docker-compose run --rm node yarn cache dir | sed -e $$'s/[^[:blank:][:print:]]//g' | sed -e 's/\[2K\[1G//')

setup:
	docker-compose run --rm node yarn install
	$(MAKE) .env

dev:
	docker-compose up

.env:
	@echo 'YARN_CACHE_DIR=$(YARN_CACHE_DIR)'  > $(@F)

