# Ryan Warner's Website

[https://warner.ryan.codes](https://warner.ryan.codes)

### Running locally

1. `git clone git@github.com:RyanWarner/portfolio.git`
1. `cd portfolio`
1. `npm install`
1. `npm start`

### Deployment

Deployment is handled by CircleCI.

Pushing to the branches `staging` or `master` will trigger deploys to the staging or production environment, respectively. See `.circleci/config.yml` to modify deployment steps.

### Hosting

The app is hosted on Firebase. You will need user permissions to access the Firebase projects.

[Production project](https://console.firebase.google.com/u/0/project/warner-codes/overview)
[Staging project](https://console.firebase.google.com/u/0/project/warner-codes-staging/overview)

### Generate code with [Hygen](hygen.io)

To create a new component, run `npx hygen component new --name MyComponent`

### Style

Code style is enforced by ESLint and follows the [Standard](https://standardjs.com/) style guide.

### Analytics

[Amplitude Analytics](https://amplitude.com/) is implemented using `gatsby-plugin-amplitude-analytics`

### Tech stack

- [Gatsby](gatsbyjs.org) (React, Webpack, Babel)
- [MDX](https://mdxjs.com/)
- [Styled Components](styled-components.com)
- Hosted on [Firebase](https://firebase.google.com/)
- [Hygen](hygen.io)


### Todo

- [ ] Pagination for articles, snippets, etc.
- [ ] Better styling solution. [Theme UI](https://theme-ui.com/)? [Styled System](https://styled-system.com/)?
- [ ] Abstract into a Gatsby starter
- [ ] Add Storybook
- [ ] Add Cypress
- [ ] Searchable tags
- [ ] Use a form instead of a `mailto` link
- [ ] Add a resume?
