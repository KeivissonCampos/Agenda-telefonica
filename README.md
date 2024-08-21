# Cadastro de Contato

Este é um projeto simples de cadastro de contatos usando HTML, CSS e JavaScript. O formulário permite que os usuários insiram um nome e um número de telefone, que são então validados e exibidos em uma lista. Cada contato é mostrado com um ícone colorido aleatório.

## Funcionalidades

- **Cadastro de Contatos**: Permite que o usuário insira um nome e um número de telefone.
- **Validação de Telefone**: Valida o número de telefone com um formato específico.
- **Lista de Contatos**: Exibe os contatos cadastrados com um ícone colorido aleatório ao lado de cada um.

## Tecnologias Utilizadas

- **HTML5**: Para a estrutura básica da página.
- **CSS3**: Para estilizar a página e os ícones.
- **JavaScript**: Para adicionar a lógica de validação, manipulação do DOM, e interação com o usuário.

## Estrutura do Projeto

- `index.html`: Arquivo principal contendo o formulário de cadastro e a lógica JavaScript.
- `img/icon.png`: Ícone usado para representar os contatos na lista.
- `styles.css`: (Opcional) Arquivo de estilo, caso você deseje separar o CSS do HTML.

## Como Usar

1. **Clonar o Repositório**:
    ```bash
    git clone https://github.com/KeivissonCampos/Agenda-telefonica.git
    ```

2. **Abrir o Arquivo `index.html`**:
   - Navegue até a pasta do projeto e abra o arquivo `index.html` em seu navegador.

3. **Cadastrar um Contato**:
   - Preencha o campo "Nome" com o nome do contato.
   - Preencha o campo "Telefone" com um número de telefone válido (formato aceito: `(11) 91234-5678` ou `11912345678`).
   - Clique em "Cadastrar" para adicionar o contato à lista.

## Formatos de Telefone Aceitos

- `(11) 91234-5678`
- `11912345678`
- `11 91234 5678`
- `1123456789`

## Personalização

- **Cores dos Ícones**: Você pode alterar as cores dos ícones editando a variável `colorIcone` no script JavaScript.
- **Validação do Telefone
