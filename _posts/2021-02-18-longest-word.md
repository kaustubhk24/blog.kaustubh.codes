---
id: 1253
title: Longest Word
date: 2021-02-18T13:01:08+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1253
permalink: /longest-word/
rank_math_seo_score:
  - "9"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "42"
categories:
  - Python
---
Given a text as input, find and output the longest word.  
  
**Sample Input**  
this is an awesome text  
  
**Sample Output**  
awesome

<div class="wp-block-coblocks-alert">
  <p class="wp-block-coblocks-alert__title">
    Recall the <strong>split(&#8216; &#8216;)</strong> method, which returns a list of words of the string.
  </p>
</div>

<pre class="wp-block-code"><code>Program
txt = input()
arr=txt.split(' ')
print(max(arr, key=len))</code></pre>

<pre class="wp-block-code"><code>Input:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
Output:
consectetur
</code></pre>