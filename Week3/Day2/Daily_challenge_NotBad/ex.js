const sentence = "The movie is not that yyes bad, I like it";

const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

if(wordNot && wordBad && wordNot < wordBad)
{
    const sentences = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(sentences);
}
else
{
    console.log(sentence);
}
