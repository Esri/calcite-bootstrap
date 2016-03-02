# Calcite+Bootstrap CHANGELOG
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

For information about how to add entries to this file, please read [Keep a CHANGELOG](http://keepachangelog.com/)

## v0.2.10
### Changed
- Removed scss file for Calcite fonts and replaced import with direct fast.fonts url.
- Color for links was too dark to pass accessibility. Value for `$link-color` variable was changed.
- Custom Cards pattern added. [Example](http://esri.github.io/calcite-bootstrap/examples/#card)

## v0.2.9 
### Added
- Calcite Dark colors finalized
- Consolidated custom variable definitions into `_variables.scss` file.
### Changed
- Class to center text in the footer now works in both container types.

## v0.2.8 -- YANKED

## v0.2.7 -- YANKED

## v0.2.6
### Changed
- Bug causing primary typeface in body font stack to be dropped in both builds.

## v0.2.5
### Added
- Compiled Calcite variables files into a single _variables.scss file.
- Added Calcite-Web loading animation
- added opensans font files
- added build process for *-open.css files
- renamed `calcite-custom.scss` to `components.scss` because that's what it is.

## v0.2.4
### Changed
- updated the very old grunt-sass which was using a very old node-sass which could not handle @at-root and thus passed it thru into the css... breaking the glyphicons. 

## v0.2.3
### Changed
- bumped version to address bizzaro caching @ github or proxies or whatever.

## v0.2.2
### Changed
- added build-*.scss files that include bootstrap
- removed the bootstrap include from the .scss files that ship in dist.
- made `bootstrap-sass@3.3.5` a dependancy of this project so it will be auto-installed
- added missing bootstrap vars into calcite files
- distibutions will have the combined & minified bootstrap javascript
- added docs describing this
- added a better example page and the example page markup to the static section so people can copy-paste and be working with calcite-bootstrap.
- added missing /dist/sass/calcite folder to the build process

## v0.2.1
### Changed
- swapped acetate for assemble
- converted minimal docs to acetate
- added deploy.js which builds the json files needed for the Patterns site

## v0.2.0

### Changed
- project structure so we have `./bin`, `./docs` and `./lib`. Source js and sass live in lib, the docs are in doc and bin has a script for releasing.

### Added
- `grunt build:sass` to build the css and package the sass files in `./dist` in prep of a release
