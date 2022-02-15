# madge-path-filter

[![Node CI](https://github.com/mikhin/madge-path-filter/workflows/Node%20CI/badge.svg)](https://github.com/mikhin/madge-path-filter/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/c09689b0948d9ef69a97/maintainability)](https://codeclimate.com/github/mikhin/madge-path-filter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c09689b0948d9ef69a97/test_coverage)](https://codeclimate.com/github/mikhin/madge-path-filter/test_coverage)

Dependency filter for [madge](https://github.com/pahen/madge). Filters the dependency tree for the given module.

## Installation

```sh
$ npm -g install madge-path-filter
```

### Example: piping madge output through madge-path-filter

```sh
madge --json App.jsx | madge-path-filter --entry 'App.jsx' --target 'hooks/useAuth' | madge --stdin -i "image.png"
```

![Madge filtered dependency tree example](./example-screenshot.png)
