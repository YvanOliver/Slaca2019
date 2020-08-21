var btnSeeMore = document.querySelector('.btnSeeMore');
var resume = document.querySelector('.resume')

btnSeeMore.addEventListener('click', function() {
    resume.classList.add('resume-vm');
    btnSeeMore.classList.add('btnDisappear');
})

var contentDiscussion = document.querySelector('.content-discussion');
var newTopic = document.querySelector('.newTopic');
var btnNewTopic = document.querySelector('.btnNewTopic');
var btnNewTopic2 = document.querySelector('.new');

btnNewTopic.addEventListener('click', function() {
    contentDiscussion.classList.add('hide');
    newTopic.classList.remove('hide');
})

btnNewTopic2.addEventListener('click', function() {
    topicSend.classList.add('hide');
    newTopic.classList.remove('hide');
})

//tópico enviado
var form = document.querySelector('.topicForm');
var topicSend = document.querySelector('.topic-send');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    topicSend.classList.remove('hide');
    newTopic.classList.add('hide');
})

//expandir tópicos
var expand = document.querySelector('.expand-1');
var topicExpanded = document.querySelector('.topic-expanded-1');

expand.addEventListener('click',function() {
    expand.classList.add('hide');
    topicExpanded.classList.remove('hide');
})

var expandTwo = document.querySelector('.expand-2');
var topicExpandedTwo = document.querySelector('.topic-expanded-2');

expandTwo.addEventListener('click', function() {
    expandTwo.classList.add('hide');
    topicExpandedTwo.classList.remove('hide');
})

// menu responsivo

var mobileMenu = document.querySelector('mobileMenu');
var btnMenuOpen = document.querySelector('.btnMenu-open');
var btnMenuClose = document.querySelector('btnMenu-close');

btnMenuOpen.addEventListener('click', function() {
    mobileMenu.classList.add('menu-open');
})