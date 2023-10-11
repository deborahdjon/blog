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
