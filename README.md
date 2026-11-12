# Angular Seed

[中文](README.md) · [English](README.en.md)

面向 Angular 16 应用与组件库开发的起步工程。把应用结构、库打包、代码检查和提交约定放在一起，适合在固定版本的 Angular 项目中快速建立一致的开发基础。

## 功能

- 应用与组件库：同时提供应用入口和 ng-packagr 库工程。
- Angular/RxJS：路由、样式与组件开发使用标准 Angular 工具链。
- 开发约定：ESLint、Prettier、Husky、lint-staged 与 Commitlint。
- 可重复依赖：使用固定的 pnpm 锁文件与项目脚本。

## 快速开始

Angular 16 兼容的 Node.js 环境（如 Node.js 18.19），以及 `package.json` 指定的 pnpm。

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm start
```

## 配置

| 配置项 | 说明 |
| --- | --- |
| `angular.json` | 应用、库与构建目标。 |
| `src/app/` | 应用功能与路由入口。 |
| `projects/` | 组件库工程。 |
| `package.json` | 脚本、依赖与包管理器版本。 |

## 使用

开发服务器默认在 `http://localhost:4200`。使用 `pnpm build` 构建应用，`pnpm lint` 检查代码；库目标名称见 `angular.json`。项目面向 Angular 16，升级框架时应一起调整 CLI、TypeScript 与库依赖。

## 项目结构

- `src/` — 应用源码
- `projects/` — 组件库

## 许可

[PolyForm Noncommercial 1.0.0](LICENSE)。原创部分与第三方组件的适用范围见 [LICENSE_SCOPE.md](LICENSE_SCOPE.md)；各第三方版权和许可见相应声明文件。
