# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A designação do problema neste projeto foi consolidada através de uma pesquisa realizada com a participação de 133 pessoas, obtida pelos membros da equipe por meio de questionários. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários. 

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem. 

|  Persona    |  José Silva ![Persona](img/professor.png)|  Maria Oliveira ![Persona](img/menina.png)     |                             
|-------------|---------------|----------------------|
|  Idade: |  31 anos   |  19 anos  |
|  Estado: |  Minas Gerais  |  Rio de Janeiro  |
|  Ocupação:  |  Professor  |  Estudante |
|  Hábitos de Leitura: |  Lê com frequência.|  Lê algumas vezes ao ano  |
|  Costuma guardar livros já lidos:|  Não |  Sim |
|  O que te faz guardar um livro:   |  Guardo apenas os livros que gostei muito. |  Falta de opção prática para me desfazer|
|  Conhece alguma plataforma para troca de livros:|  Não, não conheço |  Sim, mas nunca utilizei. |

## Histórias de Usuários

A partir da compreensão dos hábitos de leitura e interesses das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários. 

|EU COMO... `PERSONA`|QUERO/PRECISO ... `FUNCIONALIDADE`                                 |PARA ... `MOTIVO/VALOR`                                                     |
|--------------------|-------------------------------------------------------------------|----------------------------------------------------------------------------|
|  José Silva        | Contar sobre sua experiência de leitura                           | Encontrar uma comunidade de fãs do seu escritor favorito.                  |
|  Maria Oliveira    |  Comentar resenhas de outros leitores                             |  Estabelecer conexões com outros leitores                                  |
|  José Silva        |  Me desfazer de livros que não leio mais ou que não gostei.       |  Liberar espaço na minha estante e adquirir novos livros                   |
|  Maria Oliveira    |Fazer minhas próprias resenhas de livros que já li                 |  Expor minhas opiniões e encontrar leitores com gostos e opiniões parecidas|
|  José Silva        | Fazer doações de livros                                           |  Promover a leitura e a alfabetização no Brasil                            |
|  Maria Oliveira    | Trocar livros que já li por livros novos                          |  Otimizar meu espaço físico e investimento em leitura                      |
|  José Silva        |  Adquirir novos livros com baixo custo                            |  Manter ávido o hábito de leitura com recursos limitados                   |
|  Maria Oliveira    |  Buscar referências e opiniões sobre um livro que deseja conhecer |  Ampliar o interesse em diferentes gêneros literários                      |

## Requisitos do Projeto 

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|  ID    |  Descrição do Requisito  |  Prioridade |
|--------|-----------------------------------------|----|
|  RF-001|  O site deve permitir que os usuários criem o seu perfil na página e acesso página de perfil. | ALTA | 
|  RF-002|  O site deve permitir que os usuários cadastrem os seus livros disponíveis para troca ou doação.   | ALTA |
|  RF-003|  O site deve apresentar na página principal tutorial de utilização do site e área de cadastro/login e esqueci minha senha. | ALTA | 
|  RF-004|  O site deve oferecer um menu com todos os livros cadastrados, separados por categoria.  | MÉDIA |
|  RF-005|  O site deve oferecer um sistema de pontuação para troca de livros, um livro enviado é igual a um ponto que você poderá utilizar para adquirir outro.  | MÉDIA| 
|  RF-006|  O site deve permitir a criação de resenhas de livros já lidos, assim como avaliá-los.  | MÉDIA |
|  RF-007|  O site deve permitir marcar como favoritos, item sobre nós, formas de contato e política de privacidade. | BAIXA | 
|  RF-008|  O site deve permitir a busca por usuário cadastrado e caixa de entrada para troca de mensagens. | BAIXA | 
|  RF-009|  O site deve indicar ao remetente o endereço da pessoa que adquiriu aquele livro para o envio. O custo será arcado pelo remetente que irá “recuperar” esse valor quando adquirir outro livro que será enviado por outra pessoa.  | ALTA |

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);  | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada. |  ALTA | 
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade.   | MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge). |  ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 11/12/2022. |
|RE-02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend. |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho.  |




