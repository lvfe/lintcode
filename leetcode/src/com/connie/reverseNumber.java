package com.connie;

/**
 * Created by lenovo on 01/05/2019.
 */
public class reverseNumber {
  public static void main(String[] args) {
    System.out.print(reverseMethod(-1234));
  }

  private static int reverseMethod(int i) {
//    char[] returns = new char[]{};
    int sign = i<0? -1: 1;
    int returns = 0;
    i = Math.abs(i);

    while(i>0) {
      returns=returns*10 + i%10;
      i = i/10;
    }
    return sign*returns;
  }
}
