import _ from 'lodash';
import './style.css';

// js common error
// https://www.runoob.com/js/js-strict.html

function component(){
  let n = 3;
  n = 5.4;
  // a = 10;
  const element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack', n], ' ');
  element.classList.add('hello');
  return element;
}
document.body.appendChild(component());

