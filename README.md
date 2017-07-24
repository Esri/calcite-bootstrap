# Calcite Bootstrap

**Calcite Bootstrap** is a custom theme and a custom build system for [Bootstrap](http://getbootstrap.com). The theme is based on **Calcite** - a geo-centric design framework created by ESRI. Calcite Bootstrap was built for developers who have experience working with Bootstrap and would like to integrate the Calcite theme and build system to their web pages and apps.

For more info about this framework, go to the **[documentation site](http://esri.github.io/calcite-bootstrap/)**

# Using Calcite Bootstrap

There are two main ways to use Calcite Boostrap:
- 1, Copying compiled css files into your project; or
- 2, Installing via a npm and using a SASS build step in your project.

## Bootstrap Javascript Components
Calcite Bootstrap does not include any javascript components itself - it simply provides a theme for Bootstrap components. If you elect to use any Bootstrap components that require javascript, you will need to include the Bootstrap javascript in your application.

For applications without a build system, we recommend loading the Bootstrap javascript from the [BootstrapCDN](https://www.bootstrapcdn.com/).

If you have a build step, and installed calcite-bootstrap via npm, then bootstrap-sass was also installed, and you can include the scripts you need from `node_modules/bootstrap-sass/assets/javascripts/...`


## Static Files

This is probably the easiest way. If you're looking to get up and running quickly, just [download the latest release](https://github.com/esri/calcite-bootstrap/releases) and move the zipped files to wherever you keep you assets. Be sure to use [the documentation site](http://esri.github.io/calcite-bootstrap/) and the main [Bootstrap](http://getbootstrap.com) to copy and paste patterns, components, and even a sample html boilerplate.

## NPM

To install Calcite Bootstrap with npm, type:

```
npm install --save-dev calcite-bootstrap
```

If you're using sass, be sure to add `node_modules/calcite-bootstrap/dist/sass/` to your load path. If you're using [`gulp-sass`](https://github.com/dlmanning/gulp-sass) you will add something like this:

```
gulp.task('sass', function () {
 return gulp.src('./sass/**/*.scss')
   .pipe(sass({
     includePaths: [
      './node_modules/bootstrap-sass/assets/stylesheets',
      './node_modules/calcite-bootstrap/dist/sass/'
     ]
    }).on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});
```

If you are using [`grunt-sass`](https://github.com/sindresorhus/grunt-sass), you should add it like this:

```
'sass': {
  options: {
    includePaths: [
      './node_modules/bootstrap-sass/assets/stylesheets',
      './node_modules/calcite-bootstrap/dist/sass/'
    ]
  },
  target: {
    files: {
      'path/to.css': 'path/to.scss'
    }
  }
}
```

Then in your main `.scss` file, you can just require the framework: `@import "calcite-bootstrap";`.

# Contributing to Calcite Bootstrap

Installing Calcite Bootstrap was designed to be fairly painless. If you have any problems, be sure to [submit an issue](https://github.com/Esri/calcite-bootstrap/issues/) and use the label `install issues`.


### Install Dependencies

Calcite-Boostrap has these main dependencies:

- node.js
- gulp

1. Open Terminal (or your favorite command line tool. For OSX, I recommend iTerm) and check to see if you have Git installed just by entering `$ git`. You should see a list of commands for git if it is. If Git is not installed, OSX will automatically prompt you to install the XCode Command Line Developers Tools. Follow the prompts to complete the install.
2. Visit [nodejs.org](http://nodejs.org/) to install Node. Check the install by entering `$ node -v` in Terminal
3. Install Grunt by entering `$ npm install -g gulp` in Terminal.

If you run into errors during the installs, Mac Users my want to try using `sudo`. For example:

`$ sudo npm install -g gulp`

### Fork the Repository

All the code for Calcite Bootstrap lives [on GitHub](https://github.com/Esri/calcite-bootstrap). We use the [fork and pull model](https://help.github.com/articles/using-pull-requests/) to manage contribution.

1. Fork the repository so you have your own copy (`$ your-username/calcite-bootstrap`)
2. Clone the repo locally with `$ git clone https://github.com/your-username/calcite-bootstrap`
3. Move into the clone repo:  `$ cd calcite-bootstrap`

### Setting up the Repository

1. Install npm modules: `$ npm install`

Again, if you run into errors during, Mac Users my want to try using `sudo`.

When the installs complete run `$ gulp serve` to start the application. Open a new browser and navigate to `http://localhost:9000`.

### Git Remote
You should also add `Esri/calcite-bootstrap` as a remote at this point. We generally call this remote branch 'upstream':

```
$ git remote add upstream https://github.com/Esri/calcite-bootstrap
```

Check your configuration: `$ git remote -v`

The results should look like:
```
origin	https://github.com/your-username/calcite-bootstrap.git (fetch)
origin	https://github.com/your-username/calcite-bootstrap.git (push)
upstream	https://github.com/Esri/calcite-bootstrap.git (fetch)
upstream	https://github.com/Esri/calcite-bootstrap.git (push)
```




### Releasing to NPM
To prepare a release, you need an NPM account (npmjs.org), and need to be running on a mac or linux.

Most of the process is automated, but we have left two manual steps to ensure that the actual publishing to NPM is not done accidentally.

1. increment the version number in `package.json` This will usually mean bumping the PATCH number (major.minor.patch). This version number will be used in the TAG that the next step will create @ github.
1. run `sh bin/release.sh` This will create a branch, build the css, and pushes a release. NOTE: You can only push to the same version once. Re-release on the same version, you must manually destroy the release @ github.
1. Got to the release @ github [https://github.com/Esri/calcite-bootstrap/releases](https://github.com/Esri/calcite-bootstrap/releases) and copy the url to the tar.gz source code file.
1. run `npm publish <url to tar.gz file>` - this will push the update to npm.

## Licensing
Copyright 2015 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](https://github.com/Esri/calcite-bootstrap/blob/master/license.txt) file.

[](Esri Tags: Web Mapping ArcGIS Design Basemaps Bootstrap Calcite JavaScript Calcite Bootstrap)
[](Esri Language: CSS)
