---
id: 511
title: Write a Java program to find the second smallest element in an array.
date: 2020-08-28T15:57:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-java-program-to-find-the-second-smallest-element-in-an-array/
permalink: /write-a-java-program-to-find-the-second-smallest-element-in-an-array/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-java-program-to-find-second.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2777273364718832452
rank_math_analytic_object_id:
  - "115"
categories:
  - Java
---
<pre><br />public class SecondSmallestInArray{  <br />public static int getSecondSmallest(int[] a, int total){  <br />int temp;  <br />for (int i = 0; i &lt; total; i++)   <br />        {  <br />            for (int j = i + 1; j &lt; total; j++)   <br />            {  <br />                if (a[i] > a[j])   <br />                {  <br />                    temp = a[i];  <br />                    a[i] = a[j];  <br />                    a[j] = temp;  <br />                }  <br />            }  <br />        }  <br />       return a[1];<br />}  <br />public static void main(String args[]){  <br />int a[]={1,2,5,6,3,2};  <br />System.out.println("Second smallest: "+getSecondSmallest(a,6));  <br />}}<br /><br /></pre>

OutPut: 

<pre><br />$ java second_smallest_element_in_array.java<br />Second smallest: 2<br />Second smallest: 33<br /><br /></pre>