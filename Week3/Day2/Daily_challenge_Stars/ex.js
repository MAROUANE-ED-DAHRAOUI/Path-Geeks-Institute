let chara = '*';

for(let i = 1; i < 7; i++)
{
    let line = '';
    for(let j = 1; j <= i; j++)
    {
        line += chara + ' ';
    }
    console.log(line);
}