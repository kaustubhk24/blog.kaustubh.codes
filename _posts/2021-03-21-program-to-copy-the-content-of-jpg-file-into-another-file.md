---
id: 1459
title: Program to copy the content of .jpg file into another file
date: 2021-03-21T06:20:50+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1459
permalink: /program-to-copy-the-content-of-jpg-file-into-another-file/
rank_math_seo_score:
  - "50"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Program to copy the content of .jpg file into another file
saswp_custom_schema_field:
  - ""
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "1"
categories:
  - Python
---
<pre class="wp-block-code"><code>with open('download.jpg','rb') as firstfile, open('1.jpg','wb') as secondfile:
    # read content from first file
    for line in firstfile:
             # append content to second file
             secondfile.write(line)
print("file copied successfully")</code></pre>

output:

<pre class="wp-block-code"><code>file copied successfully
</code></pre>