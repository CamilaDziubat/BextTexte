# Projeto Front-End com Vue.js e TypeScript  

Este é um projeto front-end moderno e escalável desenvolvido com **Vue.js** e **TypeScript**, utilizando **Vue Router** para navegação, **Tailwind CSS** para estilização e **Vite** para build e desenvolvimento rápido.  
## Tela de Login
![image](https://github.com/user-attachments/assets/09101ade-3d2d-4e83-af4d-4af0bcad8df6)

## Tela Home 
![image](https://github.com/user-attachments/assets/b0401107-d2db-45d7-b580-c16e707f5427)

## Tela Tarefas 
![image](https://github.com/user-attachments/assets/ca49c7a1-9c18-4e7e-9be3-599dab8ea412)

## Editando as Tarefas 
![image](https://github.com/user-attachments/assets/46b5fa0b-694b-4f9d-a806-6521894ec4ae)





## Funcionalidades Principais  
- **Painel de Controle de E-commerce**: Interface intuitiva para gerenciar tarefas e prioridades.  
- **Perfil de Usuário**: Informações pessoais e configurações do usuário.  
- **Dashboard de Tarefas**: Gerenciamento de tarefas com indicadores visuais.  
- **Página de Login**: Autenticação segura e estilizada.  
- **Navegação Suave**: Gerenciada pelo Vue Router, mantendo histórico e posição de rolagem.  
- **Título Dinâmico**: Atualização automática do título da página com base na rota ativa.
- **Autenticação Mockada**: Tela de login com autenticação simulada.
- **Gerenciamento de Tarefas**: Criação, edição e exclusão de tarefas.
- **Filtros**: Filtrar tarefas por categoria e prioridade.
- **Modal de Tarefa**: Modal para adicionar ou editar tarefas.
- **Responsividade**: A aplicação é responsiva e funciona bem em dispositivos móveis e desktops.

## Tecnologias Utilizadas  
- **Vue.js**: Framework JavaScript progressivo para criação de interfaces de usuário.  
- **TypeScript**: Superset do JavaScript com suporte a tipagem estática.  
- **Tailwind CSS**: Framework de CSS baseado em utilitários.  
- **Vite**: Ferramenta rápida para desenvolvimento e build.
- Vue Router
- Pinia (para gerenciamento de estado)
- JSON Server (para simulação de backend)

## Estrutura do Projeto  
```plaintext
Bext_Texte/
├── public/
│   ├── _redirects
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── favicon.ico
│   │   └── styles/
│   │       └── main.css
│   ├── components/
│   │   └── ExampleComponent.vue
│   ├── views/
│   │   └── Home.vue
│   ├── router/
│   │   └── index.ts
│   ├── store/
│   │   └── index.ts
│   ├── App.vue
│   ├── main.ts
│   └── shims-vue.d.ts
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

##Estrutura do Projeto
- **components:** Componentes reutilizáveis.
- **views:** Páginas principais da aplicação.
- **router:** Configuração das rotas.
- **stores:** Gerenciamento de estado com Pinia.

  
## Como Rodar o Projeto
1- Clone o repositório:

bash
git clone https://github.com/usuario/projeto.git

2-Instale as dependências:

npm install

3-Inicie o servidor de desenvolvimento:

bash
npm run dev

4-Acesse o projeto em http://localhost:3000.

## Scripts Disponíveis
- **npm run dev:** Inicia o servidor de desenvolvimento.
- **npm run build:** Gera o build para produção.
- **npm run lint:** Executa o linter para encontrar problemas no código.

