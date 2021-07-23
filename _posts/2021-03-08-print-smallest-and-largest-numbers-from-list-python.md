---
id: 1400
title: 'Print Smallest And Largest Numbers From List &#8211; Python'
date: 2021-03-08T06:52:21+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1400
permalink: /print-smallest-and-largest-numbers-from-list-python/
rank_math_seo_score:
  - "54"
rank_math_focus_keyword:
  - 'Print Smallest And Largest Numbers From List - Python'
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "14"
categories:
  - Python
tags:
  - 'Print Smallest And Largest Numbers From List - Python'
---
<pre class="wp-block-code"><code>list1=&#91;]
n=int(input("Enter Number of elements :"))
for i in range(1,n+1):
    list1.append(int(input("Enter Element : ")))
print(list1)
print("Max is :"+str(max(list1)))
print("Min is :"+str(min(list1)))
</code></pre>

Output:

<pre class="wp-block-code"><code>Enter Number of elements :4
Enter Element : 5
Enter Element : 6
Enter Element : 7
Enter Element : 8
&#91;5, 6, 7, 8]
Max is :8
Min is :5</code></pre>