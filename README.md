# Projeto de Lista de Clientes

Este projeto foi desenvolvido por **Wellerson Ferreira de Carvalho** e é uma aplicação React que consome uma API para listar clientes, interagir com um mapa, e exibir detalhes sobre cada cliente.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **SASS**: Pré-processador CSS para facilitar o estilo do projeto.
- **API Local**: A API utilizada no projeto está rodando localmente em `http://localhost:3001/api/clientes`.
- **API Via Cep**: Utiliza-se uma API para busca de dados de endereço a partir de um CEP.

## Funcionalidades

- **Formulário de Cadastro de Cliente**: Permite inserir informações do cliente, como nome, peso, e endereço com dados geográficos (latitude, longitude).
- **Lista de Clientes**: Exibe uma lista dos clientes cadastrados, com seus nomes e pesos.
- **Integração com Google Maps**: Exibe os clientes em um mapa interativo com um pin indicando a localização do cliente.
- **Validação de Formulário**: Valida as entradas do formulário para garantir que os dados inseridos sejam corretos.

## Instruções para Rodar o Projeto

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
