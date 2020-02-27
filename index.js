function isBalanced (string) {

    let stack = []

    for (var i = 0; i < string.length; i++) {
        let current = string.charAt(i);

        if (current == '(' || current == '{' || current == '['){
            stack.push(current)
        } else {

            if (current == '}' || current == ']' || current == ')'){         

                switch(stack[stack.length-1]){        
                // basically just have to pop off when it matches
                    case '(':
                    if (current == ')'){
                        stack.pop()  
                    }
                    break;
                    case '{':
                    if (current =='}'){
                        stack.pop() 
                    }
                    break;
                    case '[':
                    if (current == ']'){
                        stack.pop() 
                    }
                    break;
                    default:
                    // to account for when you've got a lot of starting end brackets
                    if (stack.length == 0){
                        return false 
                    }
                    break;
                }
            }

        }
    }


    if (stack.length == 0){
        // you've done it -- you've popped off all of the remaining bracket ends
        return true 
    } else {
        // you've got some remaining brackets so they're unbalanced.
        return false 
    }
}
