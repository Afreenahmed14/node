public class StringConverter {
    public static void main(String[] args){
        String str = "heLLo";
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if(ch < 97){ 
                char a = (char)(ch + 32); 
                System.out.print(a);
            } else {
                System.out.print(ch);
            }
        }
    }
}
