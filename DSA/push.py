class Stack:
    def __init__(self):
        self.stack = []
    def push(self, value):
        self.stack.append(value)
        print(f"{value} pushed to stack")
    def pop(self):
        if not self.stack:
            print("Stack Underflow")
        else:
            popped = self.stack.pop()
            print(f"{popped} popped from stack")
    def display(self):
        if not self.stack:
            print("Stack is empty")
        else:
            print("Stack elements:", self.stack)
s = Stack()
s.push(10)
s.push(20)
s.push(30)
s.display()
s.pop()
s.display()
