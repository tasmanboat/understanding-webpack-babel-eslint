import _ from 'lodash';
import './style.css';

// js common error
// https://www.runoob.com/js/js-strict.html

function component(){
  let n = 3;
  n = 5.4;
  // ----- try eslint with lines below ----
  // a = 10; // This can be ignored like below:
  // aa= 10; // eslint-disable-line no-undef
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack', n], ' ');
  element.classList.add('hello');
  return element;
}
document.body.appendChild(component());

