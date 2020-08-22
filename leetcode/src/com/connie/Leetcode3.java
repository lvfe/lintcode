package com.connie;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class Leetcode3 {

    public static void main(String[] args) {
	// write your code here
      System.out.print(longSubString("pwwkew")+","+longSubString("abcabcbb"));
    }
    private static int longSubString(String str) {
      int longest = 1, i = 0, j = 1;
      Map subStr = new HashMap();
      subStr.put(str.charAt(i), i);
      while(i<str.length() && j<str.length()) {
        if(subStr.containsKey(str.charAt(j))) {
          i = (Integer) subStr.get(str.charAt(j))+1;
        }
        subStr.put(str.charAt(j), j);
        j++;
        longest = Math.max(longest, j-i);
      }
      return longest;
    }
}
