function codePointLength(text){
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0
}
