const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

// 1-> Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
let sentence = '';
for(const key in details){
    sentence += `${key} ${details[key]} `;
}
console.log(sentence);
