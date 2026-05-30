name=login
${name}.js: 
	@if [ -f ${name}.js ]; then \
		echo "The file ${name}.js already exists."; \
		else \
		touch ${name}.js; \
		touch ${name}.test.js;\
		fi
run: ${name}.js
	bun start
setup:
	bun i
clean:
	rm -rf node_modules/
test:
	bun test
