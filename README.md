A static resume generator I use to update and maintain mine in multiple languages. The main idea is that it can be both accessed online and printed/saved as PDF easily.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000), hot reload is on. To add a language, you can copy/paste one of the JSON file in the "lang/" folder. The name of the file defines the online path it will have once it's builded.

## Build/Export

If you want to host it on GitHub Pages or on a subpath on your own server, you should change the prefix in "next.config.js" file with the said path or repository name. Do the same in the "pages/index.js" file, so that the root path can be redirected to the language you want. Then simply run :

```bash
yarn build
```

The static files are generated in the "docs/" folder to take advantage of GitHub Pages basic configuration.
