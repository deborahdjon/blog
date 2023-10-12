<button id="myButton">Click me</button>
<div id="myPopover" style="display: none; position: absolute; width: 200px; height: 100px; background: lightgray;">
    <p>This is a popover!</p>
</div>
<script>
console.log("Hello World")
var button = document.getElementById('myButton');
var popover = document.getElementById('myPopover');
button.addEventListener('click', function(event) {
    console.log("Hovered over the icon")
    event.stopPropagation();
    if (popover.style.display === 'none') {
        popover.style.display = 'block';
    } else {
        popover.style.display = 'none';
    }
});
document.addEventListener('click', function() {
    popover.style.display = 'none';
});
</script>




var pin = document.getElementById('myButton');
var popover = document.getElementById('myPopover');
button.addEventListener('mouseover', function(event) {
    event.stopPropagation();
    if (popover.style.display === 'none') {
        popover.style.display = 'block';
    } else {
        popover.style.display = 'none';
    }
});
document.addEventListener('mouseout', function() {
    popover.style.display = 'none';
});



    import "./style.css";

    const setSeabornSVG = async() =>{
    const html = await fetch("/assets/seaborn.svg").then((data) => data.text());
    let sb_container = document.getElementById("seaborn-svg");
    sb_container.innerHTML = html+"<p class='tb-desc'>Seaborn</p>";
    let svg =  sb_container.querySelector("svg");
    let paths = svg.querySelectorAll("path");

    // ???
    svg.getElementById("PathCollection_1").querySelectorAll("path").forEach(element =>{
        element.removeAttribute("style")
        element.setAttribute("class", "fill1")
    })

    // Top wave
    svg.getElementById("PolyCollection_2").querySelectorAll("path").forEach(element =>{
        element.removeAttribute("style")
        element.setAttribute("class", "fill2")
    })


    // Bottom wave
    svg.getElementById("PolyCollection_1").querySelectorAll("path").forEach(element =>{
        element.removeAttribute("style")
        element.setAttribute("class", "fillbg")
    })
    
    // smaller cicle around everything
    svg.getElementById("patch_2").querySelectorAll("path").forEach(element =>{
        element.removeAttribute("style")
        element.setAttribute("class", "fillbg strokebg")    
    })

    // Cicle around everything
    svg.getElementById("patch_3").querySelectorAll("path").forEach(element =>{
        element.removeAttribute("style")
        element.setAttribute("class", "fill3 stroke3")    
    })

    // Histogram bars 
    for(let i=4; i<=12; i++){
        svg.getElementById("patch_"+String(i)).querySelectorAll("path").forEach(element =>{
            element.removeAttribute("style")
            element.setAttribute("class", "fill3 strokebg")    
        })
    }

}

const path = window.location.pathname;
const route = routes[path] || routes[404];
// Load the html for the given route
const html = await fetch(route).then((data) => data.text());
document.getElementById("main-page").innerHTML = html;
if(path==="/"){
    setSeabornSVG();
}

setSeabornSVG();



.map-pin{
  fill: #7c776d;
  position: relative;
}

.map-pin:hover{
  fill: #ffd078;
}

.map-popover{
  position: absolute;
  top: 100px;
}


<script>
console.log("Hello");

var button = document.getElementById('myButton');
var popover = document.getElementById('myPopover');
button.addEventListener('mouseover', function(event) {
    event.stopPropagation();
    
    if (popover.style.display === 'none') {
        popover.style.display = 'block';
    } else {
        popover.style.display = 'none';
    }
});
document.addEventListener('mouseout', function() {
    popover.style.display = 'none';
});

var pins = document.getElementsByClassName('map-pin');
console.log("Hello");

// Loop through each pin
for (var i = 0; i < pins.length; i++) {
  
    var pin = pins[i];

    // Get the associated div
    var divId = pin.id + '-desc';
    var div = document.getElementById(divId);

    if (div) {
        // Get the position of the pin
        var rect = pin.getBoundingClientRect();

        // Position the div above the pin
        div.style.position = 'absolute';
        div.style.left = rect.left + 'px';
        div.style.top = (rect.top - div.offsetHeight) + 'px';
    }
}

</script>



// RM event listener once done 
function checkScroll() {
  var triggerElement = document.getElementById('trigger');
  var animatedElement = document.getElementById('animated-element');
  
  var triggerElementPosition = triggerElement.getBoundingClientRect().top + window.scrollY;
  
  if (window.scrollY > triggerElementPosition && !animatedElement.classList.contains('animate')) {
    animatedElement.classList.add('animate');
    // Remove the event listener after the animation has been triggered
    window.removeEventListener('scroll', checkScroll);
  }
}

// Add the event listener
window.addEventListener('scroll', checkScroll);