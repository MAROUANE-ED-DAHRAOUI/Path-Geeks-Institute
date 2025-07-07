const form = document.getElementById('libform');
const storySpan = document.getElementById('story');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from inputs
    const noun = document.getElementById('noun').value.trim();
    const adjective = document.getElementById('adjective').value.trim();
    const person = document.getElementById('person').value.trim();
    const verb = document.getElementById('verb').value.trim();
    const place = document.getElementById('place').value.trim();

    // Check that none are empty
    if (!noun || !adjective || !person || !verb || !place) {
        storySpan.textContent = "Please fill in all fields!";
        return;
    }

    // Write a story using the values
    const story = `${person} went to ${place} with a ${adjective} ${noun} and decided to ${verb} all day.`;
    storySpan.textContent = story;
});
