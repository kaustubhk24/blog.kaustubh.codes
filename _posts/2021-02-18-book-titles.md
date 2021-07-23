---
id: 1250
title: Book Titles
date: 2021-02-18T07:41:06+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1250
permalink: /book-titles/
rank_math_seo_score:
  - "9"
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "43"
categories:
  - Python
---
You have been asked to make a special book categorization program, which assigns each book a special code based on its title.  
The code is equal to the first letter of the book, followed by the number of characters in the title.  
For example, for the book &#8220;Harry Potter&#8221;, the code would be: **H12**, as it contains 12 characters (including the space).  
  
You are provided a **books.txt **file, which includes the book titles, each one written on a separate line.  
Read the title one by one and output the code for each book on a separate line.  
  
For example, if the books.txt file contains:  
Some book  
Another book  
  
Your program should output:  
S9  
A12

<div class="wp-block-coblocks-alert is-style-success" style="background-color:;color:">
  <p class="wp-block-coblocks-alert__title">
    Recall the <strong>readlines()</strong> method, which returns a list containing the lines of the file.<br />Also, remember that all lines, except the last one, contain a <strong>\n</strong> at the end, which should not be included in the character count.
  </p>
</div>

<pre class="wp-block-code"><code>Program :
file = open("/usercode/files/books.txt", "r")
#your code goes here
a=file.readlines();
for b in a:
    if not a&#91;-1]==b:
        print(b&#91;0]+str(len(b)-1))
print (a&#91;-1]&#91;0]+str(len(b)))
file.close()</code></pre>

<pre class="wp-block-code"><code>Output:
H12
T16
P19
G18
</code></pre>