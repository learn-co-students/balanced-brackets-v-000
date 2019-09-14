function isBalanced(str) {
  const charObj = {
    '(': ')',
    '{': '}',
    '[': ']',
    ')': ')',
    '}': '}',
    ']': ']'
  };
  let openCharsStack = new Array();

  if (str.length <= 1) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] in charObj) {
      // if key === value, it's a closing bracket
      if (charObj[str[i]] !== str[i]) {
        openCharsStack.push(str[i]);
        // if the closing bracket (str[i]) matches the last stack of
        // open bracket (opensCharsStack[openCharsStack.length - 1])
      } else if (
        charObj[str[i]] === charObj[openCharsStack[openCharsStack.length - 1]]
      ) {
        // remove last element of openChars stack which matches the closing char
        openCharsStack.splice(-1);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
