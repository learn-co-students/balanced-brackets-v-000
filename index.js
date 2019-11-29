function isBalanced(str) {
  const match = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  if (str.length === 0) { return true }
  if (str.length%2 === 1) { return false }
  let s = str.split();
  if (match[s[0]] === s[1]) {
    return isBalanced(s.splice(0,2));
  }
  if (match[s[0]] === s[s.length-1]) {
    s.pop();
    s.shift();
    return isBalanced(s);
  }
  return false;
}