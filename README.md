![recommended node version](https://img.shields.io/badge/node-v22-green)

# Nuxt.js + ButterCMS Starter Project

This Nuxt.js starter project fully integrates with dynamic sample content from your ButterCMS account, including main menu, pages, blog posts, categories, and tags, all with a beautiful, custom theme with already-implemented search functionality. All of the included sample content is automatically created in your account dashboard when you sign up for a free trial of ButterCMS.

You can view a [live demo hosted on Vercel](http://nuxtjs-starter-buttercms.vercel.app/), or you can click the button below to deploy your own copy of our starter project to the provider of your choice.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FButterCMS%2Fnuxtjs-starter-buttercms&env=NUXT_ENV_BUTTER_API_TOKEN&envDescription=Your%20ButterCMS%20API%20Token&envLink=https%3A%2F%2Fbuttercms.com%2Fsettings%2F&project-name=nuxtjs-starter-buttercms&repo-name=nuxtjs-starter-buttercms&redirect-url=https%3A%2F%2Fbuttercms.com%2Fonboarding%2Fvercel-starter-deploy-callback%2F&production-deploy-hook=Deploy%20Triggered%20from%20ButterCMS&demo-title=ButterCMS%20Nuxt.js%20Starter%20Demo&demo-description=Fully%20integrated%20with%20your%20ButterCMS%20account&demo-url=http%3A%2F%2Fnuxtjs-starter-buttercms.vercel.app%2F&repository-name=nuxtjs-starter-buttercms&demo-image=https://cdn.buttercms.com/r0tGK8xFRti2iRKBJ0eY)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ButterCMS/nuxtjs-starter-buttercms&env%NUXT_ENV_BUTTER_API_TOKEN%5D=check%20https://buttercms.com/settings)

## 1. Installation

First, clone the repo and install the dependencies by running `npm install`
```shell
git clone https://github.com/ButterCMS/nuxtjs-starter-buttercms
cd nuxtjs-starter-buttercms
npm install
```

### 2. Set API Token

To fetch your ButterCMS content, add your API token as an environment variable.

```bash
$ echo 'NUXT_ENV_BUTTER_API_TOKEN=<Your API Token>' >> .env
```

### 3. Run local server

To view the app in the browser, you'll need to run the local development server:

```bash
$ npm run dev
```

Congratulations! Your starter project is now live at [http://localhost:3000/](http://localhost:3000/).

## 4. Deploy
Deploy your Nuxt.js app using Vercel, the creators of Next.js, or with Heroku. With the click of a button, you'll create a copy of our starter project in your Git provider account, instantly deploy it, and institute a full content workflow connected to your ButterCMS account. Smooth.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FButterCMS%2Fnuxtjs-starter-buttercms&env=NUXT_ENV_BUTTER_API_TOKEN&envDescription=Your%20ButterCMS%20API%20Token&envLink=https%3A%2F%2Fbuttercms.com%2Fsettings%2F&project-name=nuxtjs-starter-buttercms&repo-name=nuxtjs-starter-buttercms&redirect-url=https%3A%2F%2Fbuttercms.com%2Fonboarding%2Fvercel-starter-deploy-callback%2F&production-deploy-hook=Deploy%20Triggered%20from%20ButterCMS&demo-title=ButterCMS%20Nuxt.js%20Starter%20Demo&demo-description=Fully%20integrated%20with%20your%20ButterCMS%20account&demo-url=http%3A%2F%2Fnuxtjs-starter-buttercms.vercel.app%2F&repository-name=nuxtjs-starter-buttercms&demo-image=https://cdn.buttercms.com/r0tGK8xFRti2iRKBJ0eY)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ButterCMS/nuxtjs-starter-buttercms&env%NUXT_ENV_BUTTER_API_TOKEN%5D=check%20https://buttercms.com/settings)

## 5. Previewing Draft Changes
By default, your starter project is set up to allow previewing of draft changes saved in your ButterCMS.com account. To disable this functionality, set the following value in your .env file: NUXT_ENV_BUTTER_PREVIEW=false

## 6. Project Dependencies

The project uses the following key dependencies:

- **Nuxt**: ^3.16.2 - Modern, performant Vue framework
- **Vue**: ^3.5.13 - Progressive JavaScript framework
- **ButterCMS**: ^3.0.1 - Headless CMS
- **tiny-slider**: ^2.9.4 - Lightweight slider library

### Node.js Compatibility

This project requires Node.js v22 or newer.

## 7. TypeScript Support

TypeScript is supported in this project through Nuxt's built-in TypeScript integration. A custom type declaration file (`nuxt-types.d.ts`) provides type hints for Nuxt's auto-imported composables.

## 8. Development Notes

- The project uses Nuxt 3's auto-import feature for composables (useRoute, useRouter, etc.)
- Compatibility date is set to ensure consistent behavior across different Nuxt versions
- ButterCMS integration is configured in `plugins/ButterCMS.ts`

## 9. Versioning

This project follows [Semantic Versioning](https://semver.org/) (SemVer). The current version is 2.0.0.

Versioning information is maintained in multiple places:
- `package.json` - Contains the current version number
- `CHANGELOG.md` - Documents changes between versions
- Git tags - Each release is tagged with its version number
- `nuxt.config.ts` - Exports APP_VERSION constant and makes it available via runtimeConfig

To access the version in your components:
```js
const config = useRuntimeConfig();
console.log(config.public.APP_VERSION); // "2.0.0"
```