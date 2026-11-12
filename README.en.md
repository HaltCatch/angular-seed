# Angular Seed

[中文](README.md) · [English](README.en.md)

A starting point for Angular 16 applications and component libraries. Application structure, library packaging, linting and commit conventions live together, providing a consistent foundation for projects that target this Angular version.

## Features

- Application and library targets, including an ng-packagr package.
- Standard Angular/RxJS tooling for routing, styling and component development.
- Shared conventions through ESLint, Prettier, Husky, lint-staged and Commitlint.
- Reproducible dependencies through a committed pnpm lockfile and project scripts.

## Quick start

A Node.js environment compatible with Angular 16, such as Node.js 18.19, plus the pnpm version specified in `package.json`.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm start
```

## Configuration

| Setting | Purpose |
| --- | --- |
| `angular.json` | Application, library and build targets. |
| `src/app/` | Application features and routes. |
| `projects/` | Component-library projects. |
| `package.json` | Scripts, dependencies and package-manager version. |

## Usage

The development server defaults to `http://localhost:4200`. Use `pnpm build` to build the application and `pnpm lint` to check source. Library target names are defined in `angular.json`. Upgrade Angular, CLI, TypeScript and library dependencies together when moving to a newer framework version.

## Project structure

- `src/` — Application source
- `projects/` — Component libraries

## License

[PolyForm Noncommercial 1.0.0](LICENSE). See [LICENSE_SCOPE.md](LICENSE_SCOPE.md) for the scope of original material and third-party components, and the accompanying notices for third-party copyrights and licenses.
