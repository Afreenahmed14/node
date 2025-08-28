int[] n = {1, 2, 3, 4, 5};
int sum = 0;

for(int i = 0; i < n.length; i++) {
    sum += n[i];
}
double avg = (double) sum/n.length;
System.out.println("Average of array elements: " + avg);