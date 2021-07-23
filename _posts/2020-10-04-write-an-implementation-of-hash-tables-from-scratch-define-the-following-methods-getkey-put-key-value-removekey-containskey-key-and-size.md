---
id: 497
title: 'Write an implementation of hash tables from scratch. Define the  following methods: get(key), put( key, value ), remove(key), containsKey  (key), and size()'
date: 2020-10-04T12:42:00+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/write-an-implementation-of-hash-tables-from-scratch-define-the-following-methods-getkey-put-key-value-removekey-containskey-key-and-size/
permalink: /write-an-implementation-of-hash-tables-from-scratch-define-the-following-methods-getkey-put-key-value-removekey-containskey-key-and-size/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/10/write-implementation-of-hash-tables.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2806688680840215139
rank_math_analytic_object_id:
  - "101"
categories:
  - Java
---
<pre><br />/**<br />* Q 1) Write an implementation of hash tables from scratch. Define the<br />* following methods: get(key), put( key, value ), remove(key), containsKey<br />* (key), and size().<br />*/<br />import java.util.Hashtable;<br />public class hashtable<br />{<br />public static void main(String[] args) {<br />Hashtable hashTable=new Hashtable&lt;>();<br />//put(key,value)<br />hashTable.put(1,"Kaustubh");<br />hashTable.put(2,"Mahesh");<br />hashTable.put(3,"Angad");<br />hashTable.put(4,"Sagar");<br />//printing complete hashTable<br />System.out.println(hashTable);<br />//get(key) method<br />System.out.println(hashTable.get(1));<br />//remove(key)<br />hashTable.remove(3);<br />System.out.println(hashTable);<br />//contains(key)<br />System.out.println(hashTable.containsKey(3)); //false<br />System.out.println(hashTable.containsKey(1));//True<br />//size<br />System.out.println(hashTable.size());<br />}<br />}<br /></pre>

Output: 

<pre><br />{1=Kaustubh, 2=Mahesh, 3=Angad, 4=Sagar}<br />Kaustubh<br />{1=Kaustubh, 2=Mahesh, 4=Sagar}<br />false<br />true<br />3<br /></pre>

