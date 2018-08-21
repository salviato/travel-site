import $ from 'jquery';
// TGO: Waypoints is necessary to tell the specific folder to import //
	import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {

	constructor() {
		this.lazyImages = $('.lazyload'); // TGO: Lazy load avoinding conflict with waypoits //
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.createHeaderWaypoint();
		this.pageSection = $(".page-section");
		this.headerLinks = $(".primary-nav a");
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	// TGO: Function to make waypoint updated every lazyload execution, avoinding conflict //
	refreshWaypoints() {
		this.lazyImages.on('load', function() { // TGO: parameters 1: event "load", 2: action "function()" //
			Waypoint.refreshAll(); // TGO: Method refresh all of jquery //
		});
	}

	addSmoothScrolling() { // TGO: Method to smooth the scroll animation. Its a npm package //
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0], // TGO: element needs the DOM element and jquery has the jquery selecton. The [0] take the first position on array witch is the DOM element //
			handler: function(direction) { // TGO: Direction is a property witch tells if the scroll is down or up //
				if (direction == "down") {
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			}
		});
	}

	createPageSectionWaypoints() {
		var that = this;
		this.pageSection.each(function() {
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link"); // TGO: Getting the attribute to match the link from html //
						that.headerLinks.removeClass("is-current-link"); // TGO: Remove the class from the links who is not target //
						$(matchingHeaderLink).addClass("is-current-link"); // TGO: jquery selector to get the current class //
					}
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link"); // TGO: Getting the attribute to match the link from html //
						that.headerLinks.removeClass("is-current-link"); // TGO: Remove the class from the links who is not target //
						$(matchingHeaderLink).addClass("is-current-link"); // TGO: jquery selector to get the current class //
					}
				},
				offset: "-40%"
			});
		});

	}
}

export default StickyHeader;