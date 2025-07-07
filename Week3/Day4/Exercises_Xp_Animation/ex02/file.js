function myMove()
{
    const box = document.getElementById("animate");
    const container = document.getElementById("container");
    let pos = 0;
    const maxPos = container.offsetWidth - box.offsetWidth;
    const interval = setInterval(function() {
        if (pos >= maxPos)
        {
            clearInterval(interval);
        }
        else
        {
            pos++;
            box.style.left = pos + "px";
        }
    }, 1);
}
