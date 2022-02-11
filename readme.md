config step

npm install -g typescript
npm install -g ts-node
tsc --init
npm init -y
npm i express @types/express @types/node redis
npm i ts-node-dev --save-dev

run
npx ts-node-dev src/app.ts
