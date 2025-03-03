# ApricodeTask

## Описание

Этот проект представляет собой приложение для управления задачами, разработанное с использованием следующих технологий:

- Сборщик: Vite
- Язык: TypeScript
- Библиотека для UI: React
- Менеджер состояния: MobX
- Стилизация: styled-components

### Основные файлы

- TaskItem.tsx: Создает интерфейс для отображения задач с возможностью отмечать их как завершенные и добавлять подзадачи.
- Task.ts: Представляет всю задачу и управляет ее состоянием, завершенностью, подзадачами и их состоянием.
- TaskStore.ts: Позволяет добавлять задачи и проверяет, завершены ли все задачи.

## Версии

- Node.js: v22.14.0
- npm: 10.9.2
- Vite: ^6.2.0
- React: ^19.0.0
- MobX: ^6.13.6
- mobx-react-lite: ^4.1.0
- styled-components: ^6.1.15

## Требования к запуску

1. Операционная система: Windows или macOS
2. Установленный Node.js. Ссылка на скачивание: [Node.js](https://nodejs.org/en/download)

## Инструкция по использованию

1. Перейдите в папку, где будет размещен проект (используйте команду cd ..).
2. Склонируйте репозиторий:
   git clone https://github.com/ваш-репозиторий.git

3. После того, как склонировали, надо перейти в папку.(cd и название созданной папки).
4. Откройте терминал и выполните команду:
   npm install
5. После установки:
   npm run dev
6. После выполнения команды npm run dev в вашем браузере откроется страница с задачами.
7. На этой странице вы сможете:

- Добавлять задачи.
- Добавлять к ним подзадачи и к подзадачам добавлять их подзадачи.
- Отмечать задачи как завершенные.

8. При отметке задачи все ее подзадачи будут автоматически отмечены.
9. Вы также можете отметить подзадачу, и все другие ее подзадачи тоже будут отмечены.
