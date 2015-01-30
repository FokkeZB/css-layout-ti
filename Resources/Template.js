var computeLayout = require('computeLayout');

exports.computeTemplate = computeTemplate;
exports.createViews = createViews;

function computeTemplate(rootNode) {

  var layout = templateToLayout(rootNode);

  // console.debug('layout', layout);

  var computed = computeLayout(layout);

  // console.debug('computed', computed);

  mergeComputedLayout(computed, rootNode);

  // console.debug('merged', rootNode);
}

function createViews(rootNode) {

  // HACK: Assuming Ti.UI
  var fn = 'create' + rootNode.type.substr(rootNode.type.lastIndexOf('.') + 1);

  // translate width/height of 0 to auto SIZE/FILL
  (rootNode.properties.width === 0) && (delete rootNode.properties.width);
  (rootNode.properties.height === 0) && (delete rootNode.properties.height);

  var view = Ti.UI[fn](rootNode.properties);

  rootNode.childTemplates && rootNode.childTemplates.forEach(function(childNode) {
    view.add(createViews(childNode));
  });

  return view;
}

function templateToLayout(rootNode) {
  var layout = {
    style: {}
  };

  for (var key in rootNode.properties) {
    layout.style[key] = rootNode.properties[key];
  }

  if (rootNode.childTemplates) {
    layout.children = [];

    rootNode.childTemplates.forEach(function(childNode) {
      layout.children.push(templateToLayout(childNode));
    });

  }

  return layout;
}

function mergeComputedLayout(computedLayout, rootNode) {

  for (var key in computedLayout) {

    if (key === 'children') {

      computedLayout.children.forEach(function(childLayout, childIndex) {
        mergeComputedLayout(childLayout, rootNode.childTemplates[childIndex]);
      });

    } else {
      rootNode.properties[key] = computedLayout[key];
    }
  }
}