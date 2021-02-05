# coral-cli-plugin-simulate-activity

Simulate activity plugin for the Coral CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

<!-- toc -->
* [coral-cli-plugin-simulate-activity](#coral-cli-plugin-simulate-activity)
* [Usage](#usage)
* [Commands](#commands)
* [Contributing](#contributing)
<!-- tocstop -->

# Usage

To install:

```sh-session
$ git clone git@github.com:coralproject/coral-cli-plugin-simulate-activity.git
$ cd coral-cli-plugin-simulate-activity
$ npm install
$ coral-cli plugins:link .
```

To update:

```sh-session
$ cd coral-cli-plugin-simulate-activity
$ git pull
$ coral-cli plugins:link .
```

# Commands

<!-- commands -->
* [`coral-cli active-stream`](#coral-cli-active-stream)

## `coral-cli active-stream`

simulate activity by posting a comment every n milliseconds

```
USAGE
  $ coral-cli active-stream

OPTIONS
  -d, --domain=domain      (required) domain for tenant to run command against
  -f, --file=file          (required) a file with text
  -i, --interval=interval  Interval for posting comments
  -s, --storyID=storyID    (required) the ID of the story to add a comment to
```

_See code: [src/commands/active-stream.ts](https://github.com/voxmedia/coral-cli-plugin-simulate-activity/blob/v0.0.0/src/commands/active-stream.ts)_
<!-- commandsstop -->

- [`coral-cli active-stream`](#coral-cli-active-stream)

# Contributing

You can add a new command in the `src/commands` folder. When you have modified
or added a command you need to run `npm run prepack` before committing.
