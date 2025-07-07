function removecolor()
{
    const select = document.getElementById('colorSelect');
    select.remove(select.selectedIndex);
}

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', removecolor);