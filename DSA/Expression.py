def evaluate_postfix(expression):
    stack = []
    for token in expression:
        if token.isdigit() or (token[0] == '-' and token[1:].isdigit()):
            stack.append(int(token))
        else:
            b = stack.pop()
            a = stack.pop()
            if token == '*':
                stack.append(a * b)
            elif token == '+':
                stack.append(a + b)
            elif token == '-':
                stack.append(a - b)
            elif token == '/':
                stack.append(a // b)  # Integer division
    return stack.pop()
expr = ["23", "5", "*"]
result = evaluate_postfix(expr)
print("Result:", result)
