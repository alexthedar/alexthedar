$(function(){


  [].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el) {
    el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
  } );

  wow = new WOW(
    {
      animateClass: 'animated fadeInUp',
      offset:       50,
      mobile:       true,  // false
      callback: function(box){ }
    }
  );

  wow.init();

});
