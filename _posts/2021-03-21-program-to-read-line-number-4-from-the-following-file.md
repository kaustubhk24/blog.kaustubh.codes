---
id: 1455
title: Program to read line number 4 from the following file
date: 2021-03-21T06:18:29+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1455
permalink: /program-to-read-line-number-4-from-the-following-file/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "60"
rank_math_focus_keyword:
  - Program to read line number 4 from the following file
saswp_custom_schema_field:
  - ""
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "3"
categories:
  - Python
---
<pre class="wp-block-preformatted"><em># Write a program to read line number 4 from the following file</em>
<em># Line1</em>
<em># Line2</em>
<em># Line3</em>
<em># Line4</em>
<em># Line5</em>
<em># Line6</em>
</pre>

<pre class="wp-block-code"><code>def findInFile(file_name,line_no):
    count=0
    file=open(file_name)
    lines=file.readlines()
    print(lines&#91;line_no+1])
findInFile("file.txt",4)</code></pre>

output:

<pre class="wp-block-code"><code> Etiam non quam lacus suspendisse faucibus interdum posuere.
</code></pre>

_  
_