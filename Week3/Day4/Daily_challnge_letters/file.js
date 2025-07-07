const input = document.querySelector('input[type="text"]');

input.addEventListener('input', function() {
    // Replace any character that is not a letter (a-z or A-Z) with an empty string
    this.value = this.value.replace(/[^a-zA-Z]/g, '');
});