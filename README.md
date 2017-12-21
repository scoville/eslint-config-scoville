# eslint-config-scoville


## Installation

### npm
```
$ npm install --save-dev eslint eslint-config-scoville
```

### yarn
```
$ yarn add --dev eslint eslint-config-scoville
```


## Usage

Once the `eslint-config-scoville` package is installed, you can use it by specifying `scoville` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "scoville",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `scoville` config

```js
{
  "extends": ["scoville"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License
