package com.connie;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by lenovo on 01/05/2019.
 */
public class medianofsortarray {
  public static void main(String[] args) {
  int[] arrayA = {1,6}, arrayB = {2, 4, 7};
    System.out.println(Arrays.toString(mediansortarray(arrayA, arrayB)));
  }

  private static int [] mediansortarray(int[] arrayA, int[] arrayB) {
    int a_length = arrayA.length;
    int b_length = arrayB.length;
    int N = a_length+b_length;
    int[] array = new int[N];
    int i = 0, j = 0, k = 0;
    while(i <a_length && j <b_length) {
      if(arrayA[i]<arrayB[j]) {
        array[k++] = arrayA[i++];
      } else {
        array[k++] = arrayB[j++];
      }
    }
    while(i != a_length) array[k++] = arrayA[i++];
    while(j != b_length) array[k++] = arrayB[j++];
    return array;
  }
}
