Running TS
================================
### Initialization
```bash
    npm init -y
```
```bash
    npm i typescript @types/node
```
```bash
    npx tsc -init
```
### Setup
- in `package.json` commonjs -> module 
```json
    "type": "module",
```
- in `tsconfig.json` uncomment
```json
    "rootDir": "./src",
    "outDir": "./dist",
    "types": ["node"],
```
- in `/` create 2 new folders `dist/` and `src/` and `index.html` file
### Executing
- creates/reloads js files in `dist/`
```bash
    npx tsc -w
```
- runs specific file
```bash
    node ./dist/[FILENAME].js
```
