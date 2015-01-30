# Facebook's css-layout for Titanium

Exploring how it could be used to have a more iOS-autolayout-like layout system on Titanium.

## Getting the script to work

1. Put [Layout.js](https://github.com/facebook/css-layout/blob/master/src/Layout.js) in [Resources/Layout.js](Resources/Layout.js)
2. Add [Resources/computeLayout.js](Resources/computeLayout.js) to fix [css-layout #24](https://github.com/facebook/css-layout/issues/24).
3. Add [Resources/Template.js](Resources/Template.js) to translate between ListView-like templates, css-layout and then to actual Titanium views.
4. Play with it in [Resources/app.js](Resources/app.js)

## Thoughts about how this could be useful

* The Alloy view compiler could run the TSS/inline properties of a full view hierarchy through `computeLayout` before using them in the `create*()` statements.
* If Titanium would allow to batch-create views like [Carbon](http://carbon.appersonlabs.com/api-documentation/) promised it could use the Obj-C/JAVA versions of CSS-layout on the native side, for both new and updated views.
* Even without the above the flexbox properties could be added as supported layout properties and on each change the Obj-C/JAVA versions of CSS-layout could be used to re-layout.