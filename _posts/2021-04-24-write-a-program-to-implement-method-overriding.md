---
id: 1533
title: Write a program to implement method overriding.
date: 2021-04-24T06:21:54+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1533
permalink: /write-a-program-to-implement-method-overriding/
rank_math_seo_score:
  - "48"
rank_math_focus_keyword:
  - Write a program to implement method overriding.
rank_math_primary_category:
  - "85"
gnpub_modified_count:
  - "1"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "235"
categories:
  - Python
---
<pre class="wp-block-code"><code>class Fruits:
    def show(self):
        print("This is Fruits class")
class Apple(Fruits):
    def show(self):
        print("Apple")
a=Apple()
a.show()
f=Fruits()
f.show()</code></pre>

output:

<pre class="wp-block-code"><code>Apple
This is Fruits class</code></pre>