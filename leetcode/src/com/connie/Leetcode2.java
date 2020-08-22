package com.connie;

/**
 * Created by lenovo on 01/05/2019.
 */
public class Leetcode2 {
  public static void main(String[] args) {
    ListNode list1 = new ListNode(2,null);
    list1.setNext(new ListNode(4, new ListNode(3, null)));

    int[] a = new int[]{5,6,4};
    ListNode head= new ListNode(0,null);
    ListNode list2 = head;
    for(int num:a) {
      ListNode newnode = new ListNode(0, null);
      head.setCurrentValue(num);
      head.setNext(newnode);
      head = head.next;
    }
    ListNode result= addTwoNumber(list1, list2);
  }

  private static ListNode addTwoNumber(ListNode list1, ListNode list2) {
    ListNode list3 = new ListNode(0, null);
    ListNode head = list3;
    int flag = 0;
    while(list1!=null && list2!=null) {
      int value = list1.getCurrentValue()+list2.getCurrentValue()+flag;
      if(value>=10) flag = 1;
      else flag = 0;
      value = value%10;
      ListNode newnode = new ListNode(0, null);
      head.setCurrentValue(value);
      head.setNext(newnode);
      head = head.next;
      list1 = list1.next;
      list2 = list2.next;
    }
    while(list1 != null||list2 !=null) {
      int value = (list1!=null)?list1.getCurrentValue()+flag : list2.getCurrentValue()+flag;
      if(value>=10) flag = 1;
      else flag = 0;
      value = value%10;
      ListNode newnode = new ListNode(0, null);
      head.setCurrentValue(value);
      head.setNext(newnode);
      head = head.next;
      if(list1!=null) {
        list1 = list1.next;
      }else list2 = list2.next;
    }

    return list3;
  }


}
class ListNode {
  int currentValue;
  ListNode next;

  public ListNode(int currentValue, ListNode next) {
    this.currentValue = currentValue;
    this.next = next;
  }

  public int getCurrentValue() {
    return currentValue;
  }

  public void setCurrentValue(int currentValue) {
    this.currentValue = currentValue;
  }

  public ListNode getNext() {
    return next;
  }

  public void setNext(ListNode next) {
    this.next = next;
  }
}
