var Template = require('Template');

var template = {
  type: 'Ti.UI.Window',
  properties: {
    width: Ti.Platform.displayCaps.platformWidth,
    height: Ti.Platform.displayCaps.platformHeight,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  childTemplates: [{
    type: 'Ti.UI.View',
    properties: {
      height: 100,
      backgroundColor: '#eee',
      flexDirection: 'row',
      alignItems: 'center'
    },
    childTemplates: [{
      type: 'Ti.UI.ImageView',
      properties: {
        height: 100,
        width: 75,

        image: 'http://gdj.gdj.netdna-cdn.com/wp-content/uploads/2011/12/grey-movie-poster.jpg'
      }
    }, {
      type: 'Ti.UI.Label',
      properties: {
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 1
        height: 20,

        text: 'Hello World'
      }
    }]
  }]
};

// console.debug('template', template);

Template.computeTemplate(template);

console.debug('computeTemplate', template);

var view = Template.createViews(template);

view.open();