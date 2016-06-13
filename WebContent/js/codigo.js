/**
 * 
 */
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
   
    if(scroll < 83){
    	$("#menu2").fadeOut(0);
    }
    else{

    	$("#menu2").fadeIn(500);
    }
    	
});

function displaySearchBox() {
	if(document.getElementById('searchBox').style.display != "visible"){
	   document.getElementById('searchBox').style.display = "block";
	   document.getElementById('mGlass').style.left= "150px";
	   document.getElementById('mGlass').style.top= "-23px";
	   document.getElementById('whiteX').style.display= "block";
	   document.getElementById('whiteX').style.left= "175px";
	   document.getElementById('whiteX').style.top= "-53px";
	   }
	
	}
function closeSearchBox() {
	document.getElementById('searchBox').style.display = "none";
	   document.getElementById('mGlass').style.left= "0px";
	   document.getElementById('mGlass').style.top= "0px";
	   document.getElementById('whiteX').style.display= "none";
}




