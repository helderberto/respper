# 📡 Respper

A simple response wrapper, best used in NodeJS.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Requirements

* [NodeJS](https://nodejs.org/en/).

## Installation

You can get it on npm.
```
npm install respper --save
```
Or if you`re not into package management, just [download a ZIP](https://github.com/helderburato/respper/archive/master.zip) file.

## Usage

```
router.get('/', (req, res) => {
  Respper.wrapper(res, Model.findAll(req.query));
});
```

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

# Change Log

This project adheres to [Semantic Versioning](https://semver.org/).
Every release, along with the migration instructions, is documented on the Github [Releases](https://github.com/helderburato/respper/releases) page.

# Author

[Helder Burato](https://twitter.com/helderburato)

## License

[MIT License](./LICENSE) © Helder Burato
