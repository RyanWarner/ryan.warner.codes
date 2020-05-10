# Ryan Warner's Website

[https://warner.ryan.codes](https://warner.ryan.codes)

This repo holds the code for my personal site. This site is a playground. I often try new things, implement half baked ideas, and ignore tech debt. You may find code smells, mistakes, or other issues.

### Running locally

1. `git clone git@github.com:RyanWarner/ryan.warner.codes.git`
1. `cd ryan.warner.codes`
1. `npm install`
1. `npm start`

### Deployment

Deployment is handled by [CircleCI](https://circleci.com/).

Pushing to the branches `staging` or `master` will trigger deploys to the staging or production environment, respectively. See `.circleci/config.yml` to modify deployment steps.

### Hosting

The app is hosted on [Firebase](https://firebase.google.com/). You will need user permissions to access the Firebase projects.

- [Production project](https://console.firebase.google.com/u/0/project/warner-codes/overview)
- [Staging project](https://console.firebase.google.com/u/0/project/warner-codes-staging/overview)

### Generate code with [Hygen](https://hygen.io)

To create a new component, run `npx hygen component new --name MyComponent`

### Style

Code style is enforced by ESLint and follows the [Standard](https://standardjs.com/) style guide.

### Analytics

[Amplitude Analytics](https://amplitude.com/) is implemented using `gatsby-plugin-amplitude-analytics`

### Tech stack

- [Gatsby](https://gatsbyjs.org) (React, Webpack, Babel)
- [MDX](https://mdxjs.com/)
- [Styled Components](https://styled-components.com)
- Hosted on [Firebase](https://firebase.google.com/)
- [Hygen](https://hygen.io)

### Todo

- [ ] Dynamic social share images
- [ ] Abstract into a Gatsby starter
- [ ] Add Storybook
- [ ] Searchable tags
- [ ] Add a resume
