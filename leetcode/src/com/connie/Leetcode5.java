package com.connie;

/**
 * Created by lenovo on 02/05/2019.
 */
public class Leetcode5 {
  public static void main(String[] args) {
    String inputString = "baaabd";
    System.out.print(palindronmic(inputString));
  }
  public static int palindronmic(String inputstring) {
    int maxLength = 1;
    for(int m=0;m<inputstring.length();m++) {
      int gap = 0, n = 0;
      while(m+1+n<inputstring.length() && inputstring.charAt(m+n) == inputstring.charAt(m+1+n)){
        n++;

      }
      while(m-gap>=0 && (m+n+gap)<inputstring.length()&& (inputstring.charAt(m-gap) == inputstring.charAt(m+n+gap))) {
        maxLength = Math.max(maxLength, gap*2+n+1);
        gap++;
      }
    }
    return maxLength;
  }
}
