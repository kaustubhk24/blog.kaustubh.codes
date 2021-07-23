---
id: 976
title: Write a program for Thread creation by extending Thread class
date: 2020-11-27T18:15:56+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=918
permalink: /write-a-program-for-thread-creation-by-extending-thread-class/
rank_math_seo_score:
  - "68"
rank_math_description:
  - Write a program for Thread creation by extending Thread class
rank_math_focus_keyword:
  - Write a program for Thread creation by extending Thread class
rank_math_primary_category:
  - "27"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "72"
categories:
  - Java
---
Write a program for Thread creation by extending Thread class

<pre class="wp-block-code"><code>package com.practical;
public class example_Thread extends Thread{
public static void main(String&#91;] args) {
Thread te = new Thread();
Thread t1 = new Thread(te,"MCA");
Thread t2 = new Thread(te,"BCA");
Thread t3 = new Thread(te,"MBA");
t1.setPriority(Thread.NORM_PRIORITY);
t2.setPriority(Thread.MIN_PRIORITY);
t3.setPriority(Thread.MAX_PRIORITY);
t1.start();
t2.start();
t3.start();
}
public void run() {
System.out.println("Current Thread ID- " + Thread.currentThread().getId() + " For Thread- " +
Thread.currentThread().getName());
}
}</code></pre>

Output:<figure class="wp-block-image size-large">

<img src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/11/image-24.png" alt="" class="wp-image-919" /> 