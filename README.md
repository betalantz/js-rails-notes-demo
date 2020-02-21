# js-rails-notes-demo

A simple demo of a vanilla JS frontend SPA which consumes a Rails API. 
It has a lightweight (insecure) user login which persists a user in `localstorage`.
Intended to be run in local dev environment only.

## Installation

You'll need to have Postgresql installed and a postgres server running.

```bash
cd notes-api
bundle install
rails db:create
rails db:migrate
rails db:seed [optional]
rails s
```
Then open `js-frontend/index.html` in a browser.

## Usage

If you seeded the database, you can login users `Simon` or `Miyuki` to view seeded Notes.
Otherwise, enter any username for a fresh login.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
