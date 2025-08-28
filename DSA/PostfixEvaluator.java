import java.util.Stack;
public class PostfixEvaluator {
    public static int evaluatePostfix(String expression) {
        Stack<Integer> stack = new Stack<>();
        for (int i = 0; i < expression.length(); i++) {
            char ch = expression.charAt(i);
            if (ch == ' ')
                continue;
            if (Character.isDigit(ch)) {
                stack.push(ch - '0');
            }
            else {
                int val2 = stack.pop();
                int val1 = stack.pop();

                switch (ch) {
                    case '+':
                        stack.push(val1 + val2);
                        break;
                    case '-':
                        stack.push(val1 - val2);
                        break;
                    case '*':
                        stack.push(val1 * val2);
                        break;
                    case '/':
                        stack.push(val1 / val2);
                        break;
                }
            }
        }

        return stack.pop();
    }

    public static void main(String[] args) {
        String postfix = "23+42-*";  
        int result = evaluatePostfix(postfix);
        System.out.println("Result of postfix expression: " + result);
    }
}