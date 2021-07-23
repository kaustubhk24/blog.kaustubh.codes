---
id: 1449
title: Function display_words() in python to read lines from a text file, and display those words, which are less than 4 characters.
date: 2021-03-21T06:12:41+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1449
permalink: /function-display-words-in-python-to-read-lines-from-a-text-file-and-display-those-words-which-are-less-than-4-characters/
rank_math_seo_score:
  - "51"
rank_math_focus_keyword:
  - Function display_words() in python to read lines from a text file,and display those words,which are less than 4 characters.
saswp_custom_schema_field:
  - ""
rank_math_internal_links_processed:
  - "1"
rank_math_primary_category:
  - "85"
rank_math_analytic_object_id:
  - "6"
categories:
  - Python
---
<pre class="wp-block-preformatted"><em># Write a function display_words() in python to read lines from a text file, and display those words, which are less than 4 characters</em></pre>

<pre class="wp-block-preformatted"><strong>def</strong> wordSizeChecker(file_name,wordSize):
    count=0
    file=open(file_name)
    lines=file.readlines()
    <strong>for</strong> line <strong>in</strong> lines:
        words=line.split()
        <strong>for</strong> word <strong>in</strong> words:
            <strong>if</strong> (len(word)&lt;wordSize):
                count+=1
                print("Word : <strong>{}</strong> , Length : <strong>{}</strong>".format(word,str(len(word))))
wordSizeChecker("file.txt",4)</pre>

Output:

<pre class="wp-block-code"><code>
Word : sit , Length : 3
Word : sed , Length : 3
Word : do , Length : 2
Word : ut , Length : 2
Word : et , Length : 2
Word : A , Length : 1
Word : at , Length : 2
Word : at. , Length : 3
Word : non , Length : 3
Word : sit , Length : 3
Word : id , Length : 2
Word : ut , Length : 2
Word : Leo , Length : 3
Word : ut , Length : 2
Word : sit , Length : 3
Word : sit , Length : 3
Word : et , Length : 2
Word : leo , Length : 3
Word : ut , Length : 2
Word : sed , Length : 3
Word : id , Length : 2</code></pre>