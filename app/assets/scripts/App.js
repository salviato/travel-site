// TGO: Do not use the extention .js //
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();

// TGO Start: Plugins! //
new RevealOnScroll($(".feature-item"), "85%"); // TGO: Creating object with exist class //
new RevealOnScroll($(".testimonials"), "60%");
// TGO End: Plugins! //

var stickyHeader = new StickyHeader();
var modal = new Modal();