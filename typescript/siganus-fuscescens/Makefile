DIR_YARN_CACHE := /usr/local/share/.cache/yarn/v1
PORT_STORYBOOK := 6006

setup: .env
	docker-compose run --rm node yarn install

dev:
	docker-compose up

.env:
	@echo "making .env"
	@echo 'DIR_YARN_CACHE=$(DIR_YARN_CACHE)'  > $(@F)
	@echo 'PORT_STORYBOOK=$(PORT_STORYBOOK)' >> $(@F)

