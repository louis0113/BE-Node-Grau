# Lista de subdiretórios (expansão manual)
SUBDIRS := Objetos\ Iteraveis \
           Requisicoes/Exercicio1 \
           Requisicoes/Exercicio2 \
           Requisicoes/Exercicio3 \
           Requisicoes/Exercicio4 \
           Requisicoes/Exercicio5 \
           Requisicoes/Exercicio6 \
           Requisicoes/Exercicio7 \
           Requisicoes/Exercicio8 \
					 Express \
					 Node \
					 Express\ Validator \
					 Banco \
					 Erros

setup:
	@for d in $(SUBDIRS); do \
		echo "Verificando $$d..."; \
		if [ -d "$$d" ]; then \
			echo "Executando setup em $$d"; \
			$(MAKE) -C "$$d" setup; \
		else \
			echo "Diretório $$d não encontrado!"; \
		fi; \
	done

clean:
	@for d in $(SUBDIRS); do \
		echo "Verificando $$d..."; \
		if [ -d "$$d" ]; then \
			echo "Executando clean em $$d"; \
			$(MAKE) -C "$$d" clean; \
		else \
			echo "Diretório $$d não encontrado!"; \
		fi; \
	done

# O alvo all irá executar setup e clean
all: clean setup

