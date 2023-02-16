console.log("Hello world")
function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.classname += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}