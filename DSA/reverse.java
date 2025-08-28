public class reverse {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.print("Original array: ");
        for (int number : numbers) {
            System.out.print(number + " ");
        }

        System.out.print("Reversed array: ");
        for (int i = numbers.length - 1; i >= 0; i--) {
            System.out.print(numbers[i] + " ");
        }
        System.out.println();
    }
    
}
