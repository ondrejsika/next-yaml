# next-yaml - Next.js + YAML

![npm](https://img.shields.io/npm/dm/next-yaml.svg)
![npm](https://img.shields.io/npm/l/next-yaml.svg)
![npm](https://img.shields.io/david/ondrejsika/next-yaml.svg)


The easiest way, how to import YAML (`.yml`, `.yaml`) files in [Next.js](https://github.com/zeit/next.js)


## Installation

```
yarn add next-yaml
```

or

```
npm install --save next-yaml
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withYAML = require('next-yaml')
module.exports = withYAML()
```

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
module.exports = {
  webpack(config, options) {
    return config
  }
}

const withYAML = require('next-yaml')
module.exports = withYAML(module.exports)
```

And in your JS can import `.yaml` files. Create `data.yml`:

```yaml
# data.yml
name: Ondrej Sika
location:
  city: Prague
  country: Czech Republic
```

And page:

```js
import yaml from './data.yml'

export default () => <p>
  <b>{yaml.name}</b>
  <br />{yaml.location.city}, {yaml.location.country}
</p>
```

## Example Project

Example usage in Next.js project is [ondrejsika/next-yaml--example](https://github.com/ondrejsika/next-yaml--example).

