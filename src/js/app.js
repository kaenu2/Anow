import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/


const menuIcon = document.querySelector('.menu__icon');

if (menuIcon) {
	const menuitems = document.querySelector('.menu-header__items')
	menuIcon.addEventListener('click', function (e) {
		menuIcon.classList.toggle('_active');
		menuitems.classList.toggle('_active');
	});
}