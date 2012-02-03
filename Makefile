test:
	@./node_modules/.bin/mocha \
		-r should \
		-R spec \
		./conditional-contiunation/test/conditional-contiunation.js

.PHONY: test