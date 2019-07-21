function isBalanced(str){
  let stack = []
  let char
  for (let i = 0; i < str.length; i++){
    char = str.charAt(i)
    if (openBracket(char)) {
      stack.push(char)
    } else if (stack.length > 0) {
      stack[stack.length -1] === matchingBracket(char) ? stack.pop() : stack.push(char)
    } else {
      return false
    }
  }

  return stack.length === 0 ? true : false
}

function openBracket(ch) {
  if (ch === '[') {return true}
  if (ch === '{') {return true}
  if (ch === '(') {return true}
}

function matchingBracket(ch) {
  if (ch === ']') {return '['}
  if (ch === '}') {return '{'}
  if (ch === ')') {return '('}
}
