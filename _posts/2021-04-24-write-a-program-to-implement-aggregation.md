---
id: 1537
title: Write a program to implement aggregation
date: 2021-04-24T06:23:50+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1537
permalink: /write-a-program-to-implement-aggregation/
rank_math_seo_score:
  - "5"
rank_math_primary_category:
  - "85"
gnpub_modified_count:
  - "1"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "237"
categories:
  - Python
---
<pre class="wp-block-code"><code>class Heart:
    def __init__(self, heartValves):
        self.heartValves = heartValves
    def display(self):
        return self.heartValves
class Person:
    def __init__(self, fname, heartValves):
        self.fname = fname
        self.heartValves = heartValves # Aggregation
    def display(self):
        print("First Name: ", self.fname)
        print("No of Healthy Valves: ", hv.display())
hv = Heart(4)
p = Person("ABC", hv)
p.display()</code></pre>

output:

<pre class="wp-block-code"><code>
First Name:  ABC
No of Healthy Valves:  4</code></pre>