name=index
run: ${name}.js
	@if [ -f ${name}.js ]; then \
		node ${name}.js; \
		else \
		echo "Error: The file ${name}.js does not exist. Run 'make setup' first."; \
		exit 1; \
		fi
setup:
	@if [ -f ${name}.js ]; then \
		echo "The file ${name}.js already exists."; \
		else \
		touch ${name}.js; \
		fi
	@pnpm i
	@echo "Project ${name}.js has been set up"
clean:
	rm -rf node_modules/
test:
	pnpm test
