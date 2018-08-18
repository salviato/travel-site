import $ from 'jquery';

class MobileMenu { //TGO: ES6

	// TGO Start: The code is the same of java spaghetti //
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();

	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this)); //TGO: bind is used to keep the property this with original content //
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
	// TGO End: The code is the same of java spaghetti //
}

export default MobileMenu; //TGO: ES6