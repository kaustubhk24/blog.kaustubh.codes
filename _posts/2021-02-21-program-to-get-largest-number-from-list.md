---
id: 1263
title: Program To Get Largest Number From List
date: 2021-02-21T06:06:04+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1263
permalink: /program-to-get-largest-number-from-list/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "6"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "39"
categories:
  - Python
---
<pre class="wp-block-code"><code># Write a program to get largest number from list
list1=&#91;*range(1,50)]
print(max(list1))
#alternate method
largest=0
for i in list1:
    if i>largest:
        largest=i
print(largest)</code></pre>

<pre class="wp-block-code"><code>Output:
49
49</code></pre>