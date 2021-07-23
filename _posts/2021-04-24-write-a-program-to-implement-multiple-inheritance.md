---
id: 1529
title: Write a program to implement multiple inheritance.
date: 2021-04-24T06:19:29+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1529
permalink: /write-a-program-to-implement-multiple-inheritance/
rank_math_seo_score:
  - "44"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Write a program to implement multiple inheritance
gnpub_modified_count:
  - "1"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "233"
categories:
  - Python
tags:
  - Write a program to implement multiple inheritances
---
<pre class="wp-block-code"><code>class Class1:
    def m(self):
        print("In Class1")
class Class2(Class1):
    def m(self):
        print("In Class2")
class Class3(Class1):
    def m(self):
        print("In Class3")
class Class4(Class2, Class3):
    pass
Class1.m(1)
Class2.m(1)
Class3.m(1)
Class4.m(1)</code></pre>

Output:

<pre class="wp-block-code"><code>In Class1
In Class2
In Class3
In Class2</code></pre>