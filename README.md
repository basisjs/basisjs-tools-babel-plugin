Babel plugin for basisjs-tools

## Install

```
npm install basisjs-tools-babel-plugin babel-core babel-preset-es2015
```

## Usage
Add to basis.config these settings:
```json
{
  "plugins": [
    {
      "name": "basisjs-tools-babel-plugin",
      "options": {
        "presets": ["es2015"]
      },
      "ignore": [
        "build/**",
        "node_modules/**"
      ]
    }
  ]
}
```
