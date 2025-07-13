(function(userName){
    const user = document.getElementById(container);
    const dev = document.createElement('div');

    dev.className = 'info_user';
     dev.innerHTML = `
                <span>Welcome, ${userName}!</span>
                <img src="https://i.pravatar.cc/150?u=${userName}" alt="${userName}'s profile">
            `; 
            user.appendChild(userDiv);
})(Jhon);
