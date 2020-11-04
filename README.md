## nest-i18n demo

This project makes use of the `nest-i18n` library. It shows you how to implement `i18n` functionallity in your project.

## Start
To start the project run

```
npm run start:dev
```

For the purpose of this demo I implemented 3 routes. 

- `http://localhost:3000/hello`
- `http://localhost:3000/goodbye`
- `http://localhost:3000/:lang/path`

This demo implements 3 different types over resolvers.

- `PathResolver` (custom) this resolves the language based on the url. `http://localhost:3000/nl/path` or `http://localhost:3000/en/path`
- `QueryResolver` This resolver tries to collect the data based on the query parameters. This is usefull so that you can easily override the language of the response you want. `http://localhost:3000/hello?lang=en` or `http://localhost:3000/hello?lang=nl`
- `AcceptLanguageResolver` This resolver grabs the language based on the `accept-language` header. (language of you browser)