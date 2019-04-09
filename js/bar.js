function tooMuchWord() {
    let text = document.getElementsByClassName("hotIssueBoxContText").innerText;
    //let textNum = text.substring(0, 20)
    console.log(text);
}
window.addEventListener('load',tooMuchWord());