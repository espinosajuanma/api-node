# Node API

This Node app is intended to learn the `http` node module making an
simple API Rest without using `express`.

Keep it in the backend. I'll just consume the API using `curl` and
`bash` commands.

> Note: This is no intended to be in production. There is for sure
> safety reasons to use common and popular libraries. This is just a
> practice to learn deep Node in the hard way.

## Goals

- Only `node` modules (no express or third party)
- Handling errors
- Implement a database connection
  - Choose Relational or No Relational
- Authentication and Authorization
- Implement caching with Redis
- Unit testing
- Dockerize the app
- Documentation: Use `JSDocs`
  - Write installation steps
  - Write common `curl` commands to consume the API

## Challenges

To make it a little bit more challenging I decided to make some rules
for me.

- Only Node documentation
  - No `stackoverflow` 
- Use Vim as text editor
  - No linter nor auto-completer
- No Postman or GUI Apps
  - Just terminal and `bash` scripts

## Alternatives

- `nodemon` use `entr` UNIX utility
  - Why? No reason at all.

## Installation

You need to have `node`, `npm` and `git` installed in your device.

```bash
git clone git@github.com:espinosajuanma/api-node.git
cd api-node
npm install
```

To run the application

```bash
node app.js
```

To run in dev mode you need to have the `entr` UNIX utility. Instead if
you have `nodemon` installed you can use it with `nodemon app.js`.

```bash
npm run dev
```

Test:

```bash
curl -s http://localhost:3000
```
