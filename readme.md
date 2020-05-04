# Deployd template

Deployd is the simplest way to build realtime APIs for web and mobile apps. Ready-made, configurable Resources add common functionality to a Deployd backend, which can be further customized with JavaScript Events.

# Important

- Official repository [https://github.com/deployd/deployd] is not maintained any more.
- There are several issues but I can do it !!

# Simple start

- mongo database is required
  - https://mlab.com/ or [with docker](https://gist.github.com/jrichardsz/3f5ab6cffb2a4393fda331315469ad83)
- npm install
- export this variables

```
export databaseHost='123.mlab.com'
export databasePort=43461
export databaseName=some_db
export databaseUser=jane
export databasePassword=changeme
export NODE_ENV=production
```
- replace changeme word in **.dpd/keys.json**
- npm run start
- go to http://localhost:2403

# Usage

- Create your collection
- Add properties
- Create an entry

```
curl http://localhost:2403/my_collection_name \
 -d '{"title":"pascal3","author":"jrichardsz3"}' \
 -H "Content-Type:application/json"
```

# How to use in Heroku

Just click in this button
[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/rad-frameworks/deployd-heroku-template)


# How it works in Heroku ?

- This template add a mongo database to your heroku
- And shows your the required variables


# Roadmap

- [ ] Add security for api rest
- [ ] Parametrization using env var to replace hardcoded value in **.dpd/keys.json**
- [ ] Fork official repository and fix it https://github.com/deployd/deployd/issues
