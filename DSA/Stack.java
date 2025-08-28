public class Stack {
    int maxSize = 5;
    int[] stack = new int[maxSize];
    int top = -1;
   public void push(int value) {
        if (top == maxSize - 1) {
            System.out.println("Stack Overflow");
        } else {
            top++;
            stack[top] = value;
            System.out.println(value + " pushed to stack");
        }
    }
    public void pop() {
        if (top == -1) {
            System.out.println("Stack Underflow");
        } else {
            int poppedValue = stack[top];
            top--;
            System.out.println(poppedValue + " popped from stack");
        }
    }
    public void display() {
        if (top == -1) {
            System.out.println("Stack is empty");
        } else {
            System.out.print("Stack elements: ");
            for (int i = 0; i <= top; i++) {
                System.out.print(stack[i] + " ");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(10);
        s.push(20);
        s.push(30);
        
        s.display();
        s.pop();
        s.display();
    }
}

