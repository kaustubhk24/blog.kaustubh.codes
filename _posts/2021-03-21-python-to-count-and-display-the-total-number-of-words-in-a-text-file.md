---
id: 1443
title: Python to count and display the total number of words in a text file.
date: 2021-03-21T06:07:21+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1443
permalink: /python-to-count-and-display-the-total-number-of-words-in-a-text-file/
rank_math_seo_score:
  - "58"
rank_math_focus_keyword:
  - Python to count and display the total number of words in a text file.
rank_math_primary_category:
  - "85"
saswp_custom_schema_field:
  - ""
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "8"
categories:
  - Python
---
<pre class="wp-block-preformatted"><em>#  Write a function in Python to count and display the total number of words in a text file.</em>
</pre>

<pre class="wp-block-code"><code>def countWords(file_name):
    file=open(file_name)
    lines=file.readlines()
    count=0
    for line in lines:
        words=line.split()
        count+=len(words)
    return count
  #calling function
print("Number of words in file = ",countWords("file.txt"))</code></pre>

output:

<pre class="wp-block-code"><code>Number of words in file =  108
</code></pre>