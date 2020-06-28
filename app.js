var x = timerData = totalImages = 0;
var selectorsDisplayed = false;

function slider()
{
    var images = ['bar.jpg', 'baz.jpg', 'bird.jpg', 'dev.jpg', 'example.jpg', 'foo.jpg', 'rocks.jpg', 'test.jpg'];
    var img = document.getElementById("app-img");
    var specificImageBox = document.getElementById("specific-image-box");
    totalImages = images.length;
    if(x === totalImages) x = 0;
    img.src = 'images/' + images[x];
    x++;
    if(!selectorsDisplayed){
        selectorsDisplayed = true;
        for(var i = 0; i < totalImages; i++){
            var div = document.createElement("div");
            div.setAttribute("class", "specific-image");
            div.setAttribute("id", i);
            div.addEventListener("click", change);
            specificImageBox.appendChild(div);
        }
    }
    timerData = setTimeout(slider, 2000);
}

slider();

function stop()
{
    clearTimeout(timerData);
    var startButton = document.getElementById("start-slider");
    startButton.style.display = 'inline-block';
}

function start()
{
    x = x - 1;
    slider();
    var stopButton = document.getElementById("start-slider");
    stopButton.style.display = 'none';
}

function previous()
{
    clearTimeout(timerData);
    x = x - 2;
    if(x < 0) x = totalImages - 1;
    slider();
}

function next()
{
    clearTimeout(timerData);
    slider();
}

function change()
{
    clearTimeout(timerData);
    x = parseInt(this.id);
    slider();
}