var myImage = document.querySelector('img');
var tales = ['microtale1.png', 'microtale2.png', 'microtale3.png', 'microtale4.png', 'microtale5.png', 'microtale6.png', 'microtale7.png', 'microtale8.png', 'microtale9.png', 'microtale10.png', 'microtale11.png', 'microtale12.png', 'microtale13.png', 'microtale14.png', 'microtale15.png']


myImage.onclick = function() {
    var pathString = ''
    var mySrc = myImage.getAttribute('src');
    var currentIndex = tales.indexOf(mySrc.slice(7));
console.log(currentIndex);
    pathString += ('images/' + tales[(currentIndex + 1) % tales.length]);
    myImage.setAttribute ('src',pathString);
}
