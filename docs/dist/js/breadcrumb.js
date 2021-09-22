// imports element selector functions
import { __, _ } from './elementSelector.js';

const breadcrumb = _('.breadcrumb');
const breadcrumbSteps = __('.breadcrumb-step');
[].forEach.call(breadcrumbSteps, (item, index, array) => {
    if (item.classList.contains('active')) {
        for (let i = 0, l = array.length; i < l; i++) {
            if (index >= i) {
                array[i].classList.add('activated');
            }
            else {
                array[i].classList.remove('activated');
            }
        }
    };
    item.classList.remove('activated');
});