function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase("Hello!"));
}
function logWhisper(string) {
    console.log(string.toLowerCase("Hello!"));
}
function sayHiToGrandma(string) {
    const input = string;
    if (string === string.toLowerCase()){
        return 'I can\'t hear you!';}
    if (string === string.toUpperCase()){
        return 'YES INDEED!';}
    if (string === 'I love you, Grandma.'){
        return "I love you, too.";
    }
}