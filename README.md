# 📡 Respper

A simple response wrapper, best used in NodeJS.

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

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/helderburato/respper/tags).

## License

[MIT License](./LICENSE) © Helder Burato
