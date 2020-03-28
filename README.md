# Console commands

Example to manage a TODO task list.

## Includes
- Commands configuration (Using yargs)
- Input parameters configuration
- Read / Write files
- Convert string to json
- Find values in array

## Requirements

```
npm install --save yargs colors
```

## Commands

#### List Tasks

```
node app list
```
```
node app create -d Task1
```
```
node app update -d Task1 -c true
```
```
node app delete -d Task1
```