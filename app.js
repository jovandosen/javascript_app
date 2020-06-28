var x = 0;
var timerData = 0;
var totalImages = 0;

function slider()
{
    var images = ['bar.jpg', 'baz.jpg', 'bird.jpg', 'dev.jpg', 'example.jpg', 'foo.jpg', 'rocks.jpg', 'test.jpg'];
    var imageCount = images.length;
    totalImages = images.length;
    var img = document.getElementById("app-img");
    if(x === imageCount){
        x = 0;
    }
    if(x === 0){
        img.src = 'images/' + images[x];
    } else {
        img.src = 'images/' + images[x];
    }
    x++;
    var timer = setTimeout(slider, 2000);
    timerData = timer;
}

slider();

function stop()
{
    clearTimeout(timerData);
    console.log('Stopped at: ' + timerData);
    var startButton = document.getElementById("start-slider");
    startButton.style.display = 'inline-block';
}

function start()
{
    slider();
    console.log('Started at: ' + timerData);
    var stopButton = document.getElementById("start-slider");
    stopButton.style.display = 'none';
}

function previous()
{
    clearTimeout(timerData);
    x = x - 2;
    if(x < 0){
        x = totalImages - 1;
    }
    slider();
}

function next()
{
    clearTimeout(timerData);
    slider();
}