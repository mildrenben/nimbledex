// Search
var searchBtn   = document.getElementsByClassName('Search_Btn')[0];
var searchInput = document.getElementsByClassName('Search_Input')[0];

function checkEnter (event) {
    if (event.which == 13 || event.keyCode == 13) {
        return true;
    }
    return false;
};

function changeUrl () {
  document.location.href = document.location.origin + '/' + searchInput.value;
}

searchBtn.addEventListener('click',function(){
  changeUrl();
});

searchInput.addEventListener('keyup',function(e){
  if(checkEnter(e)){
    changeUrl();
  }
});

// Back to top button
var BackToTopBtn = document.getElementsByClassName('BackToTop')[0];

if (BackToTopBtn) {
  function isScrolled() {
    return window.scrollY > 300 ? true : false;
  }

  window.addEventListener('scroll', function() {
    if (isScrolled(BackToTopBtn)) {
      BackToTopBtn.classList.add('visible');
    } else if (BackToTopBtn.classList.contains('visible')) {
      BackToTopBtn.classList.remove('visible');
    }
  });

  BackToTopBtn.addEventListener('click', function(){
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0;
  });
}

var searchOffset = searchInput.getClientRects()[0].top < 16 ? 16 : searchInput.getClientRects()[0].top;
// Sticky header
window.addEventListener('scroll', function(){
  if (window.scrollY > searchOffset) {
    document.body.classList.add('fixed-header');
  } else if (document.body.classList.contains('fixed-header')) {
    document.body.classList.remove('fixed-header');
  }
});

// Info
var infoToggle = document.getElementsByClassName('Info_Toggle')[0];
var infoPopup = document.getElementsByClassName('Info_Popup')[0];

infoToggle.addEventListener('click', function() {
  infoPopup.classList.toggle('visible');
});

setTimeout(() => {
  window.location.href = parseInt(window.location.href.slice(window.location.href.indexOf('com') + 4, window.location.href.length)) + 1;
}, 1000);
