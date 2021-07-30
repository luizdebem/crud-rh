### Objetivo

O seu desafio é desenvolver um aplicativo que suporte a listagem, inserção e edição de registros referentes a um sistema de recursos humanos. Você deve utilizar Angular 2+ para a realização desse projeto.

É permitido utilizar bibliotecas de estilização e de componentes que você acredite aumentarem a sua produtividade.

Na pasta `/design` você encontra os protótipos para o aplicativo. Esses protótipos são apenas ideias que você pode seguir. Caso desejar, fique à vontade para implementar o visual das páginas da maneira que você preferir. Use sua criatividade para aprimorar a experiência do usuário ao desenvolver as telas do sistema.

Na pasta `/server` você encontrará a biblioteca que usaremos para simular um serviço de `backend` com uma base de dados para nossa aplicação. A explicação de utilização da biblioteca você encontra no arquivo `/server/README.md`.

### Resumo

Nesse projeto buscamos entender melhor o seu conhecimento em desenvolvimento de aplicações WEB que realizem ações de `CRUD`.

Esse sistema solicitado é um aplicativo responsável pelo gerenciamento de colaboradores de uma empresa fictícia. Para atender essa necessidade, você deverá desenvolver uma aplicação que atenda os requisitos descritos e que permita ao usuário realizar todas as suas obrigações para garantir que os colaboradores estejam corretamente em sua base de dados.

### Comportamentos

O aplicativo deverá disponibilizar ao usuários duas páginas: uma que possua a listagem dos colaboradores da base de dados e outra que forneça um formulário de inserção, edição e visualização ao usuário do sistema.

A tela de listagem dos colaboradores deve atender os seguintes requisitos:

- Deve apresentar as seguintes informações do colaborador: código de cadastro, nome e data de nascimento;
- Cada item referente a um colaborador deve permitir ao usuário visualizar, editar e excluir o registro;
- Se o usuário clicar no botão "visualizar", devemos redirecionar o usuário à tela de formulário e os campos devem vir corretamente preenchidos e desabilitados para edição;
- Se o usuário clicar no botão "editar", devemos redirecionar o usuário à tela de formulário e os campos devem vir corretamente preenchidos e habilitados para edição;
- Se o usuário clicar no botão "excluir", devemos excluir o registro da base de dados e atualizar a lista.

Já para a tela de formulário, devem ser atendidos os seguintes requisitos:

- O usuário deve ser capaz de inserir as seguintes informações do colaborador: código, nome completo, apelido, nome do pai / mãe, CPF, data de nascimento e cargo;
- Na parte inferior da página, devem ser apresentados os seguintes botões: salvar, limpar e cancelar;
- Ao clicar no botão "salvar", as informações preenchidas devem ser enviadas à base de dados e o usuário deve ser redirecionado para a tela de listagem de colaboradores atualizada;
- Ao clicar no botão "limpar", o formulário deve ser reiniciado ao seu estado inicial;
- Ao clicar no botão "cancelar", o usuário deve ser redirecionado para a tela de listagem de colaboradores e nenhuma informação preenchida deve ser enviada à base de dados.

O usuário também deve ser capaz de navegar entre a tela de listagem e de formulário para inserir um novo colaborador. Para isso, você pode implementar um menu (no protótipo disponibilizado, a navegação seria através do cabeçalho com o `link` para as páginas da aplicação).

### Critérios de Avaliação

- Boas práticas de desenvolvimento em Angular e Typescript
- Uso correto do histórico de `commits` para mostrar a evolução do seu trabalho
- Estamos buscando avaliar um projeto que possua código que funcione, com espaço para você demonstrar como você organiza e estrutura componentes em um projeto pequeno
- Responsividade: as páginas se adequam corretamente a diferentes tamanhos de resolução?
- Funcionalidades: todas as funcionalidades foram implementadas?
- Tolerância: as funcionalidades funcionam normalmente em cenários não planejados?
- Manutenibilidade: o código foi escrito de forma limpa e bem estruturado a fim de simplificar a adição de funcionalidades e manutenção do projeto?

### Entrega

Favor nos enviar o link do seu projeto que deve estar hospedado em um repositório do seu perfil no GitHub.

### Bônus

Caso você queira aprimorar a experiência do desafio, seguem algumas sugestões de melhorias que podem ser adicionadas:

- Implementar validações para os campos do formulário
- Implementar testes unitários para os componentes
- Adicionar `Loading State` e `Error State` nas páginas da aplicação
- Teve ideias de novas funcionalidades para o projeto? Vale também!

### Equipe Senior

Desejamos a você um ótimo desafio!

Em caso de dúvidas, favor entrar em contato com o responsável por seu processo seletivo.

A nossa equipe está à disposição para apoiar você durante o desenvolvimento desse desafio.
