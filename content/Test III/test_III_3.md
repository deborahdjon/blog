<button id="myButton">Click me</button>
<div id="myPopover" style="display: none; position: absolute; width: 200px; height: 100px; background: lightgray;">
    <p>This is a popover!</p>
</div>
<script>
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
</script>
