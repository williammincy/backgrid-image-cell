/*
  backgrid-image-cell
  http://github.com/williammincy/backgrid-image-cell
*/
(function (root, factory) {

  // CommonJS
  if (typeof exports == "object") {
    module.exports = factory(require("underscore"),
                             require("backbone"),
                             require("backgrid"));
  }
  // Browser
  else {
    factory(root._, root.Backbone, root.Backgrid);
  }

}(this, function (_, Backbone, Backgrid) {

  "use strict";
  
  var ImageCell = Backgrid.ImageCell = Backgrid.Cell.extend({

	  /** @property */
	  className: "image-cell",

	  render: function () {
		this.$el.empty();
		this.$el.html( this.renderImage( this.model ) );
		this.delegateEvents();
		return this;
	  },

	  renderImage: function(model) {
	  	var img = this.model.attributes.image;
	  	if(img.length>1) {
		  	return '<img src="'+img+'" width="50" alt="" />';
		}
		return '';
	  }

	});
}));