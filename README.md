# Facebook's [css-layout](https://github.com/facebook/css-layout) for Titanium

Exploring how it could be used to have a more iOS-autolayout-like layout system on Titanium.

Related JIRA ticket: [TIMOB-18479](https://jira.appcelerator.org/browse/TIMOB-18479)

## How I made it work for Titanim via JS

1. Put [Layout.js](https://github.com/facebook/css-layout/blob/master/src/Layout.js) in [Resources/Layout.js](Resources/Layout.js)
2. Add [Resources/computeLayout.js](Resources/computeLayout.js) to fix [css-layout #24](https://github.com/facebook/css-layout/issues/24).
3. Add [Resources/Template.js](Resources/Template.js) to translate between ListView-like templates, css-layout and then to actual Titanium views.
4. Play with it in [Resources/app.js](Resources/app.js)

## How it might be useful for Titanium

Idealy this would replace the existing layout system. Whenever a view is added/changed/removed it would then use the C/Java version of css-layout to compute the top/left/width/height instead of Ti's own system. If Facebook makes css-layout stable it would give us a flexbox layout system much like iOS's autolayout, more flexible then our current one.

Other ideas:

* The Alloy view compiler could run the TSS/inline properties of a full view hierarchy through `computeLayout` before using them in the `create*()` statements. The advantage would be that the changes are JS-only, but that would come at a price.
* React (Native)'s way to batch the creation of UI is very similar to how we now use templates for ListView and to what [Carbon](http://carbon.appersonlabs.com/api-documentation/) did as well. Would be nice to have something like `Ti.UI.create(<hierarchy>)`.
