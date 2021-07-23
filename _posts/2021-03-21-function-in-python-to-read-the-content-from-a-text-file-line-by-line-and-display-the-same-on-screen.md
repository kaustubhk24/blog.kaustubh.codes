---
id: 1441
title: function in python to read the content from a text file line by line and display the same on screen
date: 2021-03-21T06:06:06+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1441
permalink: /function-in-python-to-read-the-content-from-a-text-file-line-by-line-and-display-the-same-on-screen/
rank_math_seo_score:
  - "58"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - function in python to read the content from a text file line by line and display the same on screen
saswp_custom_schema_field:
  - ""
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "9"
categories:
  - Python
tags:
  - function in python to read the content from a text file line by line and display the same on screen
---
 

<pre class="wp-block-preformatted"><em>Write a function in python to read the content from a text file line by line and display the same on screen</em>
</pre>

<pre class="wp-block-code"><code># function Defination
def LineByLine(file_name):
    file=open(file_name)
    print("Data in {} is below\n".format(file_name))
    lines=file.readlines()
    for line in lines:
        print(line)
# Function call
LineByLine("file.txt")</code></pre>

output:

<pre class="wp-block-code"><code>Data in file.txt is below
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 A iaculis at erat pellentesque adipiscing commodo elit at.
 Purus faucibus ornare suspendisse sed. Python
 Tortor Python vitae purus faucibus ornare suspendisse.
 Etiam non quam lacus suspendisse faucibus interdum posuere.
 Pellentesque Python dignissim enim sit amet venenatis urna cursus eget.
 Feugiat nisl pretium fusce id velit ut tortor pretium viverra.
Leo duis ut diam quam nulla porttitor massa. Varius sit amet mattis vulputate enim nulla.
Interdum varius sit amet mattis vulputate enim. Sagittis vitae et leo duis ut diam.
Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.  Python</code></pre>