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
* [`oclif-example active-stream`](#oclif-example-active-stream)

## `oclif-example active-stream`

create a comment

```
USAGE
  $ oclif-example active-stream

OPTIONS
  -d, --domain=domain  (required) domain for tenant to run command against
  --file=file          (required) a file with text
  --interval=interval  Interval for posting comments
  --storyID=storyID    (required) the ID of the story to add a comment to
```

_See code: [src/commands/active-stream.ts](https://github.com/voxmedia/coral-cli-plugin-simulate-activity/blob/v0.0.0/src/commands/active-stream.ts)_
<!-- commandsstop -->

- [`coral-cli active-stream`](#coral-cli-active-stream)

## `coral-cli active-stream`

simulates commenter activity by inserting one line from a specified file every n milliseconds.

```
USAGE
  $ coral-cli active-stream

OPTIONS
  -d, --domain=domain  (required) domain to create the tenant for
  --storyID (required) story to insert comments for
  --file (required) file to read text from (text will be split on line breaks)
  --interval (optional) interval in ms at which to post comments (default is 5000)
```

# Contributing

You can add a new command in the `src/commands` folder. When you have modified
or added a command you need to run `npm run prepack` before committing.
