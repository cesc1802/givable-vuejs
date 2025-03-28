# Structure Code

vue-vite-app/
├── src/
├── ├── main.ts
├── ├── App.vue
├── ├── assets/
├── ├── └── images/
├── ├── components/
├── ├── ├── base
├── ├── ├── ├── Input.vue
├── ├── ├── Header
├── ├── └── Sidebar
├── ├── layouts/
├── ├── └── MainLayout.vue
├── ├── store/
├── ├── └── index.ts
├── └── utils/
├── └── └── helpers.ts
├── └── stories/
├── └── └── Input.stories.ts
├── └── router/
├── └── └── index.ts
├── └── stories/
├── ├── └── Input.stories.ts
├── tests/
├── └── Input.spec.ts
└── .storybook/
├── ├── main.js
├── ├── preview.js

# Getting started

**install package**
`npm i`

**if u dont have docker**
download it from `https://www.docker.com/`

**run dev application**
window: `docker-compose -f docker-compose.local.yml up --build`
macos: `docker compose -f docker-compose.local.yml up --build`

url: `http://localhost:3000`

**run build application**
window:
`docker build -f Dockerfile.prod -t myapp:prod .`
`docker-compose -f docker-compose.prod.yml up -d`
macos:
`docker build -f Dockerfile.prod -t myapp:prod .`
`docker compose -f docker-compose.prod.yml up -d`

url: `http://localhost:80`
