Babel plugin for basisjs-tools

## Install

### Install plugin
```
npm install --save-dev basisjs-tools-babel-plugin
```
### Install babel and plugins or presets you want
```
npm install --save-dev babel-core babel-preset-es2015 
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
        "node_modules/**"
      ]
    }
  ]
}
```
