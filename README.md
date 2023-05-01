# Cab Story Monorepo 🥬 🚕

Cab Story is a web app for mobile devices that helps taxi drivers keep track of fares, expenses, and earnings data. It is made using Next.JS 13 and Material UI. The app is made to be easily scalable and portable using micro-frontends, and uses component-driven development with Storybook.

## Documentation

## Tech Stack

- **Next.js 13**: A React framework for building server-side rendered and statically generated websites.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Material UI**: A React component library that implements Google's Material Design.
- **Firebase**: A Google serverless architecture to provide authentication, data storage, backend services and tools.

## Tools

- **Storybook**: An open source tool for building UI components and pages in isolation.
- **ESLint**: A static analysis tool for identifying and reporting on patterns found in JavaScript code.
- **Prettier**: A code formatter that enforces a consistent style across your codebase.
- **Husky**: A Git hook manager that enables running scripts in response to Git events.
- **Changeset**: A tool for managing changelogs and versioning in monorepos.re
- **Commitlint**: A tool for linting commit messages against a set of predefined rules.
- **Commitizen**: A command-line tool for creating commit messages following a standard format.
- **pnpm**: A fast, disk space efficient package manager that uses hardlinks and symlinks to save disk space.

## Getting Started

### Install `cabstory` with pnpm

```bash
  git clone git@github.com:shipmunkdev/cabstory.git
  cd cabstory
```

### Install `pnpm` or `yarn` on your local machine

- [Visit pnpm.io](https://pnpm.io/installation)
- [Visit yarnpkg.com](https://yarnpkg.com/)

## Initialize the project

```bash
  pnpm install
  yarn install
```

Use `pnpm` or `yarn` command at the root of the project.

| `pnpm` or `yarn`  | Descriptions                                                            |
| ----------------- | ----------------------------------------------------------------------- |
| `install`         | installs all the required dependencies                                  |
| `build`           | builds optimized production build                                       |
| `dev`             | starts development server without cache                                 |
| `release`         | release major, minor or patch semantic version release                  |
| `lint`            | runs ESLint and Prettier to scan and format codes                       |
| `clean`           | removes temporary files and node_module directories                     |
| `commit`          | prompts the user to create a commit message following a standard format |
| `storybook:dev`   | starts all the Storybook instances in development mode                  |
| `storybook:build` | builds the Storybook static assets for production                       |

## Authors

- [@shipmunkdev](https://github.com/shipmunkdev)
- [@seintun](https://github.com/seintun)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
