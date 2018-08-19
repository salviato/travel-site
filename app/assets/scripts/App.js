import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();

// TGO Start: Plugins! //
new RevealOnScroll($(".feature-item"), "85%"); // TGO: Creating object with exist class //
new RevealOnScroll($(".testimonials"), "60%");
// TGO End: Plugins! //