package com.connie;

import java.util.Arrays;

/**
 * Created by lenovo on 05/05/2019.
 */
public class leetcodeztransfer {
  public static void main(String[] args) {
    String input= "PAYPALISHRING";
    System.out.print(Arrays.toString(zigzag(input, 3)));
  }

  private static String [] zigzag(String input, int row) {
    String [] returns= new String [row];
    for(int i=0;i<row;i++)
      returns[i] = "";
    int count = 0;
    for(int i=0;i<input.length();i++){
//      returns[count]+=input.charAt(i);
//      if(i%4 == 1||i%4 == 3) {
//        returns[1] += input.charAt(i);
//      } else if(i%4 == 0) {
//        returns[0] += input.charAt(i);
//      } if(i%4 == 2) {
//        returns[2]+=input.charAt(i);
//      }
      int left = i%(2*row-2);
      if(left<=row-1) {
        returns[left] += input.charAt(i);
      } else {
        System.out.print(2*row-2-left);
        returns[2*row-2-left] += input.charAt(i);
      }
    }
    return returns;
  }
}
