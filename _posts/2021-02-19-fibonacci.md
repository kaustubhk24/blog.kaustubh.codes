---
id: 1256
title: Fibonacci
date: 2021-02-19T02:19:45+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1256
permalink: /fibonacci/
rank_math_seo_score:
  - "9"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "41"
categories:
  - Python
---
The Fibonacci sequence is one of the most famous formulas in mathematics.  
Each number in the sequence is the&nbsp;**sum of the two numbers that precede it**.  
For example, here is the Fibonacci sequence for 10 numbers, starting from 0: 0,1,1,2,3,5,8,13,21,34.

Write a program to take N (variable num in code template) positive numbers as input, and recursively calculate and output the first N numbers of the Fibonacci sequence (starting from 0).

**Sample Input**  
6

**Sample Output**  
  
1  
1  
2  
3  
5

<div class="wp-block-coblocks-alert">
  <p class="wp-block-coblocks-alert__title">
    If you are making the Fibonacci sequence for n numbers, you should use n<=1 condition as the <strong>base case</strong>.<br />
  </p>
</div>

<pre class="wp-block-code"><code>#Program
nterms = int(input())
def recur_fibo(n):
   if n &lt;= 1:
       return n
   else:
       return(recur_fibo(n-1) + recur_fibo(n-2))
if nterms &lt;= 0:
   print("Plese enter a positive integer")
else:
   for i in range(nterms):
       print(recur_fibo(i))</code></pre>

<pre class="wp-block-code"><code>Input:
7
Output:
1
1
2
3
5
8</code></pre>