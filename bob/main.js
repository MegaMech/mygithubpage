window.onload = function()
{
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    menus.style.height = "0px";
    footerLink();
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
     setTimeout(function(){
         document.getElementById("loadspin").style.opacity = 0;
         document.getElementById("logoImg").style.width = "450px";
         document.getElementById("logoImg").style.marginTop = "2%";
         document.getElementById("particles-js").style.opacity = 0;
         setTimeout(function(){
             document.getElementById("particles-js").style.display = "none";
             document.getElementsByTagName("body")[0].style.overflow = "auto";
         }, 1000);

     }, 1000);
}

function menu()
{
    var menus = document.getElementsByClassName("cellphoneMenuPanel")[0];
    if (menus.clientHeight == "375") {
        menus.style.height = "0px";
    }
    else {
        menus.style.height = "375px";
    }
    return true;
}
function footerLink()
{
    var o = "ew";
    var idf = "b";
    var c = "o";
    var efjei = "n";
    var idje = "nce"
    var ei = "s";
    var ehdidoe = "@";
    var a = "ma";
    var ioda = "a";
    var l = "e";
    var agh = "c"
    var edds = "u";
    var dats = ".";
    var mn = "t";
    var ied = "p";
    var d = "i";
    var ijd = "d";
    var z = "l";
    var x = "r";

    document.getElementsByClassName("footerLink")[0].href = a+d+z+c+":"+ei+ied+ioda+efjei+ijd+x+o+ehdidoe+edds+ioda+z+idf+l+x+mn+ioda+dats+agh+ioda;
    document.getElementsByClassName("footerLink")[1].href = a+d+z+c+":"+ei+ied+ioda+efjei+ijd+x+o+ehdidoe+edds+ioda+z+idf+l+x+mn+ioda+dats+agh+ioda;
    document.getElementsByClassName("footerLink")[0].innerHTML = ei+ied+ioda+efjei+ijd+x+o+ehdidoe+edds+ioda+z+idf+l+x+mn+ioda+dats+agh+ioda;
    document.getElementsByClassName("footerLink")[1].innerHTML = ei+ied+ioda+efjei+ijd+x+o+ehdidoe+edds+ioda+z+idf+l+x+mn+ioda+dats+agh+ioda;
}
