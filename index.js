function isBalanced(str) {
  const brackets = [];
  const opposites = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      brackets.push(str[i]);
    } else {
      const last = brackets.pop();
      if (str[i] !== opposites[last]) return false;
    }
  }

  return brackets.length ? false : true;
}
