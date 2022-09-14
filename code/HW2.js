exports.isPalindorme = (text) =>{
    text = text.toLowerCase().split("");
    let ans = true
    let last_index = text.length - 1;

    text.forEach((element, index) =>  {
        if(element != text[last_index-index])ans=false
    })
    return ans ? "Es palindromo" : "No es Palindromo"
}

exports.translateF = (text) => {
    const vowels = ["a", "e", "i", "o", "u", "é", "ó", "á", "í", "ú", "ü"]
    text = text.toLowerCase()
    let ans = ""
    for (let curr_pos = 0; curr_pos< text.length; curr_pos++){
        const prev_is_vowel = vowels.includes(text[curr_pos-1])
        const prev_next_is_eq = text[curr_pos-1] == text[curr_pos+1]
        const curr_is_f = text[curr_pos] == "f"

        if ( curr_is_f && prev_is_vowel && prev_next_is_eq) curr_pos += 2
        if (curr_pos < text.length) ans += text[curr_pos]
    }
    return ans;
}