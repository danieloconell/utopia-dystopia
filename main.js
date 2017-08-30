$( document ).ready(function() {

function change_page(page){
    document.location.href = page+".html"
}

$( "#left" ).click(function() {
    // $('.transform1').toggleClass('transform-active');
    $( ".transform1" ).animate({
    width: "5000px"
  }, 2000);
    setTimeout(function(){ document.location.href = "utopia.html"}, 2000)
    
});

$( "#right" ).click(function() {
     $( ".transform2" ).animate({   
    width: "5000px"
  }, 2000);
    setTimeout(function(){ document.location.href = "dystopia.html"}, 2000)

});


});
