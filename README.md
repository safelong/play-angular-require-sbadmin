# Example application for Play+AngularJS+RequireJS+SB Admin Bootstrap Template.

## Intro

This template application shows how to organize your application with
[Playframework 2](http://www.playframework.com), [WebJars](http://www.webjars.org),
[RequireJS](http://www.requirejs.org) and [AngularJS](http://www.angularjs.org).

This is based on the seed application (https://github.com/mariussoutier/play-angular-require-seed), which shows an alternative way of organizing modules than the official
[Angular-Play-Seed](https://github.com/typesafehub/angular-seed-play).

## Demo
https://play-angular-require-sbadmin.herokuapp.com/

## Code Organization

The JavaScript modules are organized as follows:

    |- app
    |-- assets
    |--- js             <- contains all the JavaScript/CoffeeScript modules
    |---- app.js        <- app module, wires everything together
    |---- main.js       <- tells RequireJS how to load modules and bootstraps the app
    |---- common/       <- a module, in this case
    |----- main.js      <- main file of the module, loads all sub-files in this folder
    |----- filters.js   <- common's filters
    |----- directives/  <- common's directives
    |----- services/    <- common's services
    |---- ...


## Trying It Out

### Dev Mode

* Load dependencies via `sbt update`
* Run via `sbt ~run`
* Go to [localhost:9000](http://localhost:9000)

This uses the normal JavaScript files and loads libraries from the downloaded WebJars.

### Compile RequireJS Modules
```
> web-stage
```

### Prod Mode

Running:

* Run `sbt start -Dconfig.resource=prod.conf`

Deployment:

* Produce executable via `sbt clean dist`
* Extract `unzip target/universal/play-angular-require-seed-2.x.x.zip`
* Run `play-angular-require-seed-2.x.x/bin/play-angular-require-seed -Dhttp.port=9000 -Dconfig.resource=prod.conf`


This uses the uglified JavaScript files, versioned and compressed assets, and loads WebJars resources from the jsDelivr CDN.
