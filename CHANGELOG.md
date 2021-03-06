# Changelog

## 0.0.20
* Number components - Remove dependency on lodash.isfinite.
* Tooltip - Remove dependency on lodash.isfinite.
* Remove HMRE since it blew up the bundle.
* Fix update of styleguidist.

## 0.0.19 - *Depracted, use 0.0.20 instead*
* Add new component type HOC.
* HOCs: Add new onClickOutside component. [robineng](https://github.com/robineng)
* Documentation: Migrate to react-styleguidist 4.

## 0.0.18
* Fixed webpack bundle output.

## 0.0.17 - *Depracted, use 0.0.18 instead*
* Added new peerDependency `nordnet-ui-kit` to externals to reduce bundle size.

## 0.0.16 - *Depracted, use 0.0.18 instead*
* FreshnessIndicator - Added a new component to indicate data freshness. [robineng](https://github.com/robineng)
* Added more default props to some components.

## 0.0.15
* Number components - Make tick in the tick size table optional.
* Development - Add explicit width to the SVG arrow (Fixes issues in IE).

## 0.0.14
* Added changelog.
* Fix documentation.
* Number components - Added hover texts for value [anneback](https://github.com/anneback).
* Changed travis build target.

## 0.0.13
* Watching files in `src` when running TDD [gish](https://github.com/gish).
* Number components - Added support for min and max decimals [gish](https://github.com/gish).
* Number components - Prioritizing between `decimals`, `minDecimals`, `maxDecimals` & `ticks`.

## 0.0.12
* Fixed `ticks` prop when decimals = 0.

## 0.0.11
* Number components - Added support for `ticks`.
* Added new examples with new `ticks` prop.
* Consolidated examples.

## 0.0.10
* Development - Replaced unicode arrows with SVG's.
* Development - Removed arrow on neutral direction.
* Development - Added possibility to color development arrow with css.

## 0.0.9
* Development - Added possibility to override direction [magzak](https://github.com/magzak).

## 0.0.8
* Cached node_modules on Travis.
* Updated eslint.
* Refactored code examples.
* Added `npm start` script for local development.

## 0.0.7
* Made documentation work in Safari.
* Fixed name typo (NordnetFormatter to NordnetComponentKit).

## 0.0.6
* Updated styling of documentation.
* Removed examples and move to react-styleguidist documentation.

## 0.0.5
* Added greenkeeper.
* Now deploying gh-pages on publish.
* Made prop validation more helpful (use oneOf).
* DateTime - Added type `time`.
* Added Value component.

## 0.0.4
* Initial version.
* Documentation set up.
* Added tests.
* Added Number components.
* DateTime components - added iso support.
