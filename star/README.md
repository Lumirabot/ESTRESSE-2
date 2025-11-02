# Star Bot - Discord Economy System

Este projeto é um bot para Discord chamado "star", que implementa um sistema de economia com várias funcionalidades interativas. Os usuários podem ganhar, transferir e gerenciar suas moedas virtuais chamadas "starcoin".

## Funcionalidades

- **Economia**: Os usuários podem verificar seu saldo, transferir starcoins, e ganhar moedas através de trabalho, pesca, roubos e assaltos.
- **Administração**: Administradores têm acesso a comandos especiais para adicionar starcoins e criar embeds personalizados.
- **Recompensas Diárias**: Os usuários podem reivindicar recompensas diárias em starcoins.
- **Sistema de Comandos**: O bot utiliza um prefixo de comando de "!" para interagir com os usuários.

## Estrutura do Projeto

```
star
├── src
│   ├── index.ts                # Ponto de entrada do bot
│   ├── config
│   │   └── index.ts            # Configurações do bot
│   ├── commands
│   │   ├── economy
│   │   │   ├── balance.ts       # Verificar saldo
│   │   │   ├── transfer.ts      # Transferir starcoins
│   │   │   ├── add.ts           # Adicionar starcoins (admin)
│   │   │   └── daily.ts         # Recompensas diárias
│   │   ├── actions
│   │   │   ├── steal.ts         # Roubar starcoins
│   │   │   ├── rob.ts           # Assaltar para ganhar starcoins
│   │   │   ├── work.ts          # Trabalhar para ganhar starcoins
│   │   │   └── fish.ts          # Pescar para ganhar starcoins
│   │   └── admin
│   │       └── embed.ts         # Criar embeds (admin)
│   ├── events
│   │   ├── ready.ts             # Evento de inicialização do bot
│   │   └── messageCreate.ts      # Processar mensagens
│   ├── services
│   │   └── economyService.ts     # Lógica de negócios da economia
│   ├── models
│   │   └── user.ts               # Modelo de usuário
│   └── utils
│       └── helpers.ts            # Funções utilitárias
├── tests
│   └── economy.test.ts           # Testes do sistema de economia
├── .env.example                   # Exemplo de variáveis de ambiente
├── package.json                   # Configuração do npm
├── tsconfig.json                  # Configuração do TypeScript
├── .eslintrc.json                 # Configuração do ESLint
└── README.md                      # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd star
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure suas variáveis de ambiente copiando o arquivo `.env.example` para `.env` e preenchendo as informações necessárias.

4. Inicie o bot:
   ```
   npm start
   ```

## Uso

- Para verificar seu saldo: `!balance`
- Para transferir starcoins: `!transfer <quantidade> <usuário>`
- Para adicionar starcoins (admin): `!add <usuário> <quantidade>`
- Para reivindicar recompensas diárias: `!daily`
- Para roubar starcoins: `!steal <usuário>`
- Para assaltar: `!rob`
- Para trabalhar: `!work`
- Para pescar: `!fish`
- Para criar um embed (admin): `!embed <conteúdo>`

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.