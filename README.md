## Installation

```
// Clone repo
git clone https://tf-cloudfabric.visualstudio.com/CloudFabric.Microservice.Web/_git/CloudFabric.Microservice.Web

// Install dependencies
npm install

// Run development server with react hot-reload, uses (ts-loader)
npm run dev
```

---


#### - Development

`npm run dev` - start dev-server with hot-reload (ts-loader)

`npm run dev:dashboard` - start dev-server with `webpack-dashboard`

`npm run dev:awesome` - start dev-server with `awesome-typescript-loader`

#### - Type checking

`npm run tsc` - entire project type-check

`npm run tsc:watch` - fast incremental type-checking in watch mode

#### - Production Bundling (`dist/` folder)

`npm run clean` - clean dist

`npm run build` - build dist bundle

#### - Install http-server globally to test production build

`npm install http-server -g` 

`http-server ./dist` - to serve the dist folder

#### - Utility & Git Hooks

`npm run reinstall` - reinstall all dependencies (useful when switching branch) (note: use `reinstall:win` on Windows)

`npm run lint` - run linter (tslint)

`npm run test` - run tests with jest runner

`npm run test:update` - update jest snapshots

`npm run precommit` - pre commit git hook - linter

`npm run prepush` - pre push git hook - linter, tests and check types

#### - Deployment

~~`npm run deploy` - commit and push all changes found in `/dist` folder to "gh-pages" branch~~

---

## Adding Folders

Add folder to the following files for path:

`webpack.config.js`
`tsconfig.json`
