name=servidor

${name}.js: 
	@if [ -f ${name}.js ]; then \
		echo "The file ${name}.js already exists."; \
		else \
		touch ${name}.js; \
		fi
run: ${name}.js
	pnpm start
