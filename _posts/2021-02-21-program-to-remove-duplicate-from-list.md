---
id: 1265
title: 'Program To  Remove Duplicate From List'
date: 2021-02-21T06:11:29+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1265
permalink: /program-to-remove-duplicate-from-list/
rank_math_seo_score:
  - "5"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "38"
categories:
  - Python
---
<pre class="wp-block-code"><code># Write a program to  remove duplicate from list
list1=&#91;5,1,2,3,4,5,6,7,8,1,2,3,0,9,8,6,4,3]
print(list(dict.fromkeys(list1)))</code></pre>

<pre class="wp-block-code"><code>Output:
&#91;5, 1, 2, 3, 4, 6, 7, 8, 0, 9]
</code></pre>