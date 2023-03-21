function extract(content) {
    const element = document.getElementById(content);
    const text = element.textContent;
    const textSplitByOpeningBrackets = text.split('(');
    textSplitByOpeningBrackets.shift();
    let words = [];
    for (const part of textSplitByOpeningBrackets) {
        let closingBracketIndex = part.indexOf(')');
        let word = part.slice(0, closingBracketIndex);
        words.push(word);
    }
    const output = words.join('; ');
    return output;
}