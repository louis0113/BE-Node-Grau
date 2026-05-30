name=app

${name}.js: 
	@if [ -f ${name}.js ]; then \
		echo "The file ${name}.js already exists."; \
		else \
		touch ${name}.js; \
		fi
run: ${name}.js
	bun start
setup:
	bun i
clean:
	rm -rf node_modules/ ${name}.log
test:
	bun test
log:
	touch ${name}.log
