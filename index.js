const match = {
  '(': ')',
  '[': ']',
  '{': '}'
};
  
function isBalanced(str) {
  const s = str.split('');
  let i = 0;
  let allBalanced = false;
  
  while(i < s.length - 1 && !allBalanced) {
    if (nextMatch(i, s)) {
      i = 0;
      s.splice(i, 2);
      if (s.length === 0) allBalanced = true;
    } else if (outerMatch(s)) {
      i = 0;
      s.shift();
      s.pop();
      if (s.length === 0) allBalanced = true
    } else {
      i++;
    }
  } 
  
  return allBalanced;
}

function nextMatch(i, str) {
  return match[str[i]] === str[i + 1];
}

function outerMatch(str) {
  return match[str[0]] === str[str.length - 1];
}