---
id: 1451
title: 'function in Python to count words in a text file those are ending with alphabet "e"'
date: 2021-03-21T06:14:16+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1451
permalink: /python-to-count-words-in-a-text-file-those-are-ending-with-alphabet-e/
rank_math_seo_score:
  - "10"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Python to count words in a text file those are ending with alphabet e
saswp_custom_schema_field:
  - ""
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "5"
categories:
  - Python
tags:
  - 'Python to count words in a text file those are ending with alphabet &quot;e&quot;'
---
<pre class="wp-block-code"><code>def checkLastChar(file_name,last):
    count=0
    print("Words Ending with "+last)
    file=open(file_name)
    lines=file.readlines()
    for line in lines:
        words=line.split()
        for word in words:
            if word&#91;-1]==last:
                count+=1
                print("Word : {}".format(word))
checkLastChar("file.txt","e")</code></pre>

output:

<pre class="wp-block-code"><code>
Words Ending with e
Word : labore
Word : dolore
Word : pellentesque
Word : ornare
Word : suspendisse
Word : vitae
Word : ornare
Word : suspendisse
Word : Pellentesque
Word : fusce
Word : vulputate
Word : vulputate
Word : vitae</code></pre>