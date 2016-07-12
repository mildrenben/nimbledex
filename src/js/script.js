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
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}

var searchOffset = searchInput.getClientRects()[0].top < 16 ? 16 : searchInput.getClientRects()[0].top;
var allHeader = document.getElementsByClassName('AllListHeader')[0];
if (allHeader) {
  var allHeaderOffset = allHeader.getClientRects()[0].top < 64 ? 64 : allHeader.getClientRects()[0].top;
}

// Sticky headers
window.addEventListener('scroll', function(){
  if (window.scrollY > searchOffset) {
    document.body.classList.add('fixed-header');
  } else if (document.body.classList.contains('fixed-header')) {
    document.body.classList.remove('fixed-header');
  }
  if (allHeader) {
    if (window.scrollY > allHeaderOffset) {
      document.body.classList.add('fixed-allHeader');
    } else if (document.body.classList.contains('fixed-allHeader')) {
      document.body.classList.remove('fixed-allHeader');
    }
  }
});

// Anchor ID links on All page
if (window.location.pathname === '/all') {
  var sideNavLinks = document.querySelectorAll('.SideNav_Link');
  for (var i = 0; i < sideNavLinks.length; i++) {
    sideNavLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      var linkTarget = document.getElementById(this.textContent.slice(1));
      var linkTargetOffset = linkTarget.offsetTop - 80;
      document.documentElement.scrollTop = linkTargetOffset;
      document.body.scrollTop = linkTargetOffset;
    });
  }
}

// Info
var infoToggle = document.getElementsByClassName('Info_Toggle')[0];
var infoPopup = document.getElementsByClassName('Info_Popup')[0];

infoToggle.addEventListener('click', function() {
  infoPopup.classList.toggle('visible');
});
