# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.16.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building in the Hermes sandbox (container quirks)

The sandbox workspace filesystem does **not** support symlinks and the container
has a **5 GB memory cgroup limit**. The standard `npm run build` will fail
(EPERM on `.bin` links, or OOM-kill). Use this recipe instead:

```bash
# install without .bin symlinks
npm install --no-bin-links --no-audit --no-fund

# build via node directly, constrained to 2 cores + capped heap
NODE_OPTIONS="--max-old-space-size=2048" taskset -c 0-1 \
  node node_modules/@angular/cli/bin/ng.js build

# serve the production build
PORT=4200 node dist/portfolio/server/server.mjs
```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
