$( document ).ready(function() {

function change_page(page){
    document.location.href = page+".html"
}

$( "#left" ).click(function() {

  setTimeout(function(){ document.location.href = "utopia.html"}, 2000)
    
});

$( "#right" ).click(function() {

  setTimeout(function(){ document.location.href = "dystopia.html"}, 2000)

});
});