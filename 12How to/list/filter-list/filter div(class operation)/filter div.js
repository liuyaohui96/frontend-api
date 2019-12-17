filterDiv('all');

const buttonGroup = document.querySelectorAll('button');
for (let i = 0; i < buttonGroup.length; i++) {
  buttonGroup[i].addEventListener('click', function() {
    // 将唯一一个active删除
    let active = document.querySelector('.active');
    active.className = active.className.replace(' active', '');
    this.className += ' active';
  });
}

function filterDiv(target) {
  const divs = document.querySelectorAll('.filterdiv');
  [...divs].forEach(item => {
    // 移除所有show
    removeClass(item, 'show');
    if (target == 'all') target = '';
    // 如果有目标类，给目标增加show类
    if (item.className.indexOf(target) > -1) addClass(item, 'show');
  });
}

function removeClass(element, name) {
  let classArr = element.className.split(' ');
  let nameArr = name.split(' ');
  nameArr.forEach(item => {
    if (classArr.indexOf(item) > -1) classArr.splice(classArr.indexOf(item), 1);
  });
  element.className = classArr.join(' ');
}

// 需要保证类是正确书写的
function addClass(element, name) {
  let classArr = element.className.split(' ');
  let nameArr = name.split(' ');
  nameArr.forEach(item => {
    // 如果没有show，就添加
    if (classArr.indexOf(item) == -1) element.className += ` ${item}`;
  });
}
