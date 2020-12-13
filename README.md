<h1 align="center">Welcome to leave a comment 💬</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/JamesSingleton/leave-comment#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JamesSingleton/leave-comment/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JamesSingleton/leave-comment/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/JamesSingleton/leave-comment" />
  </a>
</p>

> A GitHub Action to leave a comment on a PR or an Issue

## Usage

```yml
name: Leave A Comment Example

on:
  issues:
    types: opened

jobs:
  example:
    name: Example
    runs-on: ubuntu-latest
    steps:
      - name: Create Example Comment
        uses: jamessingleton/leave-a-comment@v1.0.0
        with:
          issue_number: ${{ github.event.issue.number }}
          comment: 'Your Comment Here'
          token: ${{ secrets.BOT_TOKEN }}
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/JamesSingleton/leave-a-comment/issues). You can also take a look at the [contributing guide](https://github.com/JamesSingleton/leave-a-comment/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [James Singleton](https://github.com/JamesSingleton).<br />
This project is [MIT](https://github.com/JamesSingleton/leave-a-comment/blob/master/LICENSE) licensed.
