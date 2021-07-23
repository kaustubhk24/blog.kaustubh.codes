---
id: 1539
title: Write a program to implement abstraction.
date: 2021-04-24T06:24:54+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1539
permalink: /write-a-program-to-implement-abstraction/
rank_math_seo_score:
  - "44"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Write a program to implement abstraction.
gnpub_modified_count:
  - "1"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "238"
categories:
  - Python
---
<pre class="wp-block-code"><code>class One:
    def disp(self):
        pass
class Two(One):
    def disp(self):
        print("Abstract method body in sub Class")
obj = Two()
obj.disp()</code></pre>

output:

<pre class="wp-block-code"><code>Abstract method body in sub Class
</code></pre>