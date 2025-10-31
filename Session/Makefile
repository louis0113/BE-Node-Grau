name=server
${name}.js: 
	@if [ -f ${name}.js ]; then \
		echo "The file ${name}.js already exists."; \
		else \
		touch ${name}.js; \
		fi
run: ${name}.js
	pnpm start
setup:
	pnpm i
clean:
	rm -rf node_modules/ ${name}.log
