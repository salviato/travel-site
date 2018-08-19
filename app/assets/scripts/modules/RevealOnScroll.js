import $ from 'jquery';
// TGO: Waypoints is necessary to tell the specific folder to import //
	import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {

	constructor(els, offset) { // TGO: els / offset are dynamic elements from App.js //
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		var that = this; // TGO: Creating variable to take the this value into the createWaypoints() method //
		this.itemsToReveal.each(function() { // TGO: Its using the each method witch execute for each item selected //
			var currentItem = this; // TGO: Variable to take the this element //
			// TGO: Waypoint() is a class from the Waypoints package //
			new Waypoint({
				element: currentItem, // TGO waypoint property //
				handler: function() {  // TGO waypoint property //
					$(currentItem).addClass("reveal-item--is-visible");
				},
				// TGO: By default offset is zero. The action occurs on the very top of the page //
				// TGO: that.offsetPercentage contains the this and the offset dynamic property //
				offset: that.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;