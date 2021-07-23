---
id: 508
title: 'Write a program to insert the specified element at the end of this list. [Tip: use java.util.LinkedList.addLast()'
date: 2020-09-01T08:40:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-program-to-insert-the-specified-element-at-the-end-of-this-list-tip-use-java-util-linkedlist-addlast/
permalink: /write-a-program-to-insert-the-specified-element-at-the-end-of-this-list-tip-use-java-util-linkedlist-addlast/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/09/write-program-to-insert-specified.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6468994937530684559
rank_math_analytic_object_id:
  - "112"
categories:
  - Java
---
<pre><br />/**<br /> * <br /> *  Write a program to insert the specified element at the end of this list.<br />[Tip: use java.util.LinkedList.addLast() ]<br /> */<br /><br />import java.util.*;<br /><br /> public class addInEndOfList {<br />    public static void main(String[] args) {<br />        LinkedList&lt;string> list = new LinkedList&lt;string>();<br /><br />        list.add("One");<br />        list.add("Two");<br />        list.add("Three");<br /><br />        System.out.println("List :"+list);<br /><br />        list.add("Four");<br /><br />        System.out.println("After Adding Element :"+list);<br /><br />    }<br />    <br />}<br /><br /></pre>

Output: 

<pre><br />LENOVO@DESKTOP-U7S0\assignment no2_8be11fb<br />List :[One, Two, Three]<br />After Adding Element :[One, Two, Three, Four]<br /></pre>