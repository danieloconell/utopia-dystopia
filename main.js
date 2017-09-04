$( document ).ready(function() {

function change_page(page){
    document.location.href = page+".html"
}

$( "#left" ).click(function() {

document.location.href = "utopia.html"
    
});

$( "#right" ).click(function() {

document.location.href = "dystopia.html"

});
});