# Mitsunee's Astro Preact Template

This repository is a template [Astro] websites using [Preact] for interactive components and full [TypeScript] support out of the box.

## Getting Started

Make sure you have [node.js] (version 20) and [pnpm] (version 9) installed. Install all dependencies and start the Development server:

```shell
pnpm install
./scripts/install-sharp.sh
pnpm dev # or pnpm build:types
```

## Testing

These are the same commands also run in CI on every push:

```shell
pnpm lint:strict
pnpm format:check
pnpm build:types && pnpm typecheck
```

<details>
<summary>Full list of commands</summary>

```shell
pnpm format # formats entire codebase
pnpm format:check # checks formatting on entire codebase
pnpm lint # standard lint check on entire codebase
pnpm lint:fix # standard lint check on entire codebase with autofix enabled
pnpm lint:strict # strict lint check on entire codebase
pnpm dev # start dev server
pnpm typecheck # run typechecks on entire codebase
pnpm build:types # generates content/data collection types
pnpm build # create production build
```

</details>

## Themeing and Metadata

This repository comes with a [Preact] component and init script to handle themeing. All themeing related variables are set in `src/styles/theme.css`. Pages are expected to use a layout from the `src/layouts` directly either based on `BaseLayout.astro` or using it directly. This makes sure the theme varaibles are available globally and all pages have a complete set of metadata.

### Favicons

It is recommended that your page uses a favicon in the SVG vector format, which allows you to create the rest of the icons as needed. Recommendations for icon sizes taken from ["How to Favicon in 2024: Six files that fit most needs"](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs).

Tip: You can use inkscape to render your svg icon into PNG files like this:

```shell
inkscape -w 512 -o ./public/icons/icon-512.png ./public/favicon.svg
inkscape -w 192 -o ./public/icons/icon-192.png ./public/favicon.svg
inkscape -w 180 -o ./public/icons/apple-touch-icon.png ./public/favicon.svg
```

## Tools

### ESLint

[ESLint] is the go-to linter for JavaScript and TypeScript and is configured using [eslint-config-foxkit] and [eslint-config-prettier]. The config file uses the old config system for now (still waiting for updates for some of the used plugins) and is pre-configured with strict rulesets for JS and TS.

Run the `pnpm lint` or `pnpm lint:strict` scripts or install the editor integration for your code editor, such as the [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to run ESLint.

### Prettier

[Prettier] is an automatic code-formatter and is configured to auto-format all appropriate file types when creating a commit with git through [simple-git-hooks] and [nano-staged]. Note that a plugin is needed (see package.json for example) to format Astro files!

If you would like to remove git hooks simply uninstall the packages, remove their settings and the `"prepare"` script from package.json and delete the git hook file:

```sh
pnpm remove simple-git-hooks nano-staged
rm .git/hooks/pre-commit
```

Installing the editor integration for your code editor, such as the [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), is strongly recommended. You can also manually call prettier for the entire codebase with the `pnpm format` script or check for formatting errors with the `pnpm format:check` script.

### uvu

This repository comes with the test runner [uvu] set up to run from the `"tests"` directory. You can add any testing utilities in `"tests/utils"` (the `utils` directory is ignored by uvu). Test files fully support TypeScript thanks to `esbuild-register`. To run your tests simply run the command `pnpm test`.

## Production build

Simply run the build script:

```shell
pnpm build
```

To test a production build locally use `pnpm astro preview`.

[astro]: https://docs.astro.build/en/getting-started/
[preact]: https://preactjs.com/guide/v10/getting-started
[TypeScript]: https://www.typescriptlang.org/
[node.js]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/
[ESLint]: https://eslint.org/
[eslint-config-foxkit]: https://github.com/foxkit-js/eslint-config-foxkit
[eslint-config-prettier]: https://github.com/prettier/eslint-config-prettier
[Prettier]: https://prettier.io/
[simple-git-hooks]: https://github.com/toplenboren/simple-git-hooks
[nano-staged]: https://github.com/usmanyunusov/nano-staged
[uvu]: https://github.com/lukeed/uvu
