function isBalanced(str) {
  const brackets = []
  const opposites = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
      brackets.push(str[i])
    } else {
      const last = brackets.pop()
      if (str[i] !== opposites[last]) return false
    }
  }

  return brackets.length ? false : true
}

// --- slow ---
// function isBalanced(str) {
//   let opposites = {
//     '[': ']',
//     '(': ')',
//     '{': '}'
//   }
//
//   let bracketsArr = str.split('')
//   let bracketSets = []
//   while (bracketsArr.length) {
//     let oppositeIndex = bracketsArr.indexOf(opposites[bracketsArr[0]])
//     bracketSets.push(bracketsArr.splice(0, oppositeIndex + 1).join(''))
//     if (oppositeIndex === -1) return false
//   }
//
//   bracketSets.forEach(bracketSet => {
//     for (let i = 0; i < str.length / 2; i++) {
//       let oppositeIndex = (str.length - 1) - i
//       if (opposites[str[i]] != str[oppositeIndex]) {
//         return false
//       }
//     }
//   })
//   return true
// }
