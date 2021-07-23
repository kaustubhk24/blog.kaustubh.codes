---
id: 1445
title: 'Python to read lines from a text file and function should find and display the occurrence of the word &#8220;Python&#8221;.'
date: 2021-03-21T06:09:01+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1445
permalink: /python-to-read-lines-from-a-text-file-and-function-should-find-and-display-the-occurrence-of-the-word-python/
rank_math_seo_score:
  - "6"
rank_math_focus_keyword:
  - Python to read lines from a text file and function should find and display the occurrence of the word Python.
rank_math_primary_category:
  - "85"
saswp_custom_schema_field:
  - ""
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "7"
categories:
  - Python
tags:
  - 'Python to read lines from a text file and function should find and display the occurrence of the word &quot;Python&quot;.'
---
<pre class="wp-block-preformatted"><em># Write a function in Python to read lines from a text file and function should find and display the occurrence of the word "Python".</em>
</pre>

<pre class="wp-block-code"><code>def findInFile(file_name,wordToFind):
    count=0
    file=open(file_name)
    lines=file.readlines()
    for line in lines:
        words=line.split()
        for word in words:
            if (word==wordToFind):
                count+=1
                print(wordToFind+" Found "+str(count)+" times, Line Number : "+str(lines.index(line)))
findInFile("file.txt","Python")</code></pre>

output:

<pre class="wp-block-code"><code>
Python Found 1 times, Line Number : 3
Python Found 2 times, Line Number : 4
Python Found 3 times, Line Number : 6
Python Found 4 times, Line Number : 10</code></pre>