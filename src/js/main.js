import './slider';
import modals from './modules/modal';
import tab from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    tab('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
    tab('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});
