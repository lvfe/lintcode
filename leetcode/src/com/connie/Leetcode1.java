package com.connie;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by lenovo on 01/05/2019.
 */
public class Leetcode1 {
  public static void main(String[] args) {
    int[] array = new int[]{2,7,10,13};
    int target = 12;
    System.out.println(Arrays.toString(twoSum(array, target)));
  }

  private static int[] twoSum(int[] array, int target) throws IllegalArgumentException {
    Map arrays = new HashMap<Integer, Integer>();
    for(int i=0; i< array.length; i++) {
      arrays.put(array[i], i);
      if(arrays.containsKey(target - array[i])) {
        return new int[]{(Integer) arrays.get(target - array[i]), i};
      }
    }
    throw new IllegalArgumentException("no such data");
  }
  private static int[] twoSumold(int[] array, int target) throws IllegalArgumentException {
    Map arrays = new HashMap();
    for(int i=0; i<array.length;i++) {
      arrays.put(array[i], i);
    }
    for(int i=0; i<array.length;i++) {
      int rest = target - array[i];
      if(arrays.containsKey(rest) && (Integer)arrays.get(rest)!=i) {
        return new int[]{i, (Integer) arrays.get(rest)};
      }
    }
    throw new IllegalArgumentException("no such data");
  }
}
