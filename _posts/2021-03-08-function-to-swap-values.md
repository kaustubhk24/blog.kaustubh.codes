---
id: 1398
title: 'Write a Function To Swap Values - Python'
date: 2021-03-08T06:47:21+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1398
permalink: /function-to-swap-values/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "67"
rank_math_focus_keyword:
  - Function To Swap Values
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "15"
categories:
  - Python
---
Let us see program to Function To Swap Values,

## Using Temporary Variable

<pre class="wp-block-code"><code># method  Using Temporary Variable
def swap(a,b):
    temp=a
    a=b
    b=temp
    return a,b</code></pre>

Output

<pre class="wp-block-code"><code>print(swap(7,3))
>> (3,7)</code></pre>

## Direct Method

<pre class="wp-block-code"><code>
def swap(a,b):
    return b,a</code></pre>

Output:

<pre class="wp-block-code"><code>print(swap(3,7))
>>(7,3)</code></pre>

## Without Using Temporary Variable

<pre class="wp-block-code"><code>def swap(a,b):
    a=b+a
    b=a-b
    a=a-b
    return a,b</code></pre>

<pre class="wp-block-code"><code>print(swap(5,7))
>>(7,5)
</code></pre>