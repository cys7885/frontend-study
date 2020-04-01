let text = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

for(let i = 0; i < text.length; i++){
    if(!(text[i].search(/[aeiou]/i)))
        console.log("위치 = " + i + ", 문자 = " + text[i]);
}