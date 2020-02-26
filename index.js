function isBalanced(str) {
  const charObj = {
    '(': ')',
    '{': '}',
    '[': ']',
    ')': ')',
    '}': '}',
    ']': ']'
  };
  let openCharStack = new Array();

  if (str.length <= 1) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] in charObj) {
      // if key === value, it's a closing bracket
      if (charObj[str[i]] !== str[i]) {
        openCharStack.push(str[i]);
      } else if (
        charObj[str[i]] === charObj[openCharStack[openCharStack.length - 1]]
      ) {
        // if the closing bracket (charObj[str[i]]) matches the last stack of
        // open bracket (opensCharsStack[openCharStack.length - 1])
        // remove last element of openChar stack which matches the closing char
        openCharStack.splice(-1, 1);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
