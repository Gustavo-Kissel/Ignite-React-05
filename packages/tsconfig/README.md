 ## Introduction

This monorepo contains the shared TypeScript configuration for all packages in the Ignite UI library. It includes a base configuration that is used by all packages, as well as a React-specific configuration that is used by packages that target the React platform.

## Base Configuration

The base configuration is defined in the `base.json` file. It includes the following options:

* `composite`: false
* `declaration`: true
* `declarationMap`: true
* `esModuleInterop`: true
* `forceConsistentCasingInFileNames`: true
* `inlineSources`: false
* `isolatedModules`: true
* `moduleResolution`: "node"
* `noUnusedLocals`: false
* `preserveWatchOutput`: true
* `skipLibCheck`: true
* `strict`: true

These options are designed to provide a consistent and robust TypeScript configuration for all packages in the Ignite UI library.

## React Configuration

The React-specific configuration is defined in the `react.json` file. It extends the base configuration and includes the following additional options:

* `jsx`: "react-jsx"
* `lib`: ["dom", "ES2015"]
* `module`: "ESNext"
* `target`: "es6"

These options are designed to enable the use of React-specific features in TypeScript, such as JSX and ES6 modules.

## Usage

To use this configuration, simply add the following line to your `package.json` file:

```json
"tsconfig": "./node_modules/@gustavokissel-ignite-ui/ts-config/base.json"
```

You can also use the React-specific configuration by adding the following line to your `package.json` file:

```json
"tsconfig": "./node_modules/@gustavokissel-ignite-ui/ts-config/react.json"
```

## Conclusion

This monorepo provides a shared TypeScript configuration for all packages in the Ignite UI library. It includes a base configuration that is used by all packages, as well as a React-specific configuration that is used by packages that target the React platform. By using this configuration, you can ensure that your TypeScript code is consistent and robust.
