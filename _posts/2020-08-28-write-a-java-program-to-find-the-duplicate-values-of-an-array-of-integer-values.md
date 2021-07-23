---
id: 513
title: Write a Java program to find the duplicate values of an array of integer values.
date: 2020-08-28T15:56:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-java-program-to-find-the-duplicate-values-of-an-array-of-integer-values/
permalink: /write-a-java-program-to-find-the-duplicate-values-of-an-array-of-integer-values/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-java-program-to-find-duplicate.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4496959472600691902
rank_math_analytic_object_id:
  - "117"
categories:
  - Java
---
<pre><br />import java.util.Arrays; <br />public class duplicate{<br />  public static void main(String[] args) <br />    {<br />        int[] arr = {1, 2, 5, 5, 6, 6, 7, 2};<br /> <br />        for (int i = 0; i < arr.length-1; i++)<br />        {<br />            for (int j = i+1; j < arr.length; j++)<br />            {<br />                if ((arr[i] == arr[j]) && (i != j))<br />                {<br />                    System.out.println("Duplicate Element : "+arr[j]);<br />                }<br />            }<br />        }<br />    }    <br />}<br /><br /><br />

<pre><br /><br />Output:<br /><br />

<pre><br />LENOVO@DESKTOP-U7S0DTI MINGW64 /e/H-drive/Practicals/MCA/SEM III/JAVA/Practicals/assignment no1<br />$ java find_duplicate_values_in_array.java<br />Duplicate Element : 2<br />Duplicate Element : 5<br />Duplicate Element : 6<br /><br /></pre>