
var listElm = document.querySelector('#scrolleffect');

var counter = 1;
var scrolling = function() {
  for (var i = 0; i < 25; i++) {
    var li = document.createElement('li');
    li.innerText = 'Masai Student ' + counter++;
    listElm.appendChild(li);
  }
}
listElm.addEventListener('scroll', function() {
  if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
    scrolling();
  }
});

scrolling();