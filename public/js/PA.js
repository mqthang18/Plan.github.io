// Collapsible
{
    function collapsible() {
        var coll = document.getElementsByClassName("collapsible");
        var i;
        console.log(Array.from(coll));
        if (Array.from(coll).length == 0) {
            alert('Reload the page');
        }
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.display === "block") {
                content.style.display = "none";
                } else {
                content.style.display = "block";
                }
            });
        }
    } 
  }

$(document).ready(function(){
// Do stuff here, including _calling_ codeAddress(), but not _defining_ it!
    collapsible();
});