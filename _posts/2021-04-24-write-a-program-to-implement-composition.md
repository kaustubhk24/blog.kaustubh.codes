---
id: 1535
title: Write a program to implement composition
date: 2021-04-24T06:22:57+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1535
permalink: /write-a-program-to-implement-composition/
rank_math_seo_score:
  - "44"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Write a program to implement composition
gnpub_modified_count:
  - "1"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "236"
categories:
  - Python
---
<pre class="wp-block-code"><code>class A:
    def __init__(self):
        print('Class - A Contructor')
    def m1(self):
        print('M1 method of Class - A.')
class B:
    def __init__(self):
        print('Class - B Constructor.')
    def m2(self):
        obj = A()
        obj.m1()
        print('M2 method of Class - B.')
obj = B()
obj.m2()</code></pre>

output:

<pre class="wp-block-code"><code>Class - B Constructor.
Class - A Contructor
M1 method of Class - A.
M2 method of Class - B.</code></pre>