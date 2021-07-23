---
id: 1457
title: Program to accept the folder name from user and print the list of files and folders from the given folder.
date: 2021-03-21T06:19:54+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1457
permalink: /program-to-accept-the-folder-name-from-user-and-print-the-list-of-files-and-folders-from-the-given-folder/
rank_math_seo_score:
  - "50"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Program to accept the folder name from user and print the list of files and folders from the given folder.
saswp_custom_schema_field:
  - ""
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "2"
categories:
  - Python
---
<pre class="wp-block-code"><code>import os
filenames = next(os.walk(input("Please copy paste path of folder : ")))&#91;2]
print("Following are the files in folder\n")
print("-----------------------------------------------")
print("File Number      File Names ")
print("-----------------------------------------------")
for file in filenames:
    print(str(filenames.index(file)+1)+"                  "+ str(file))
print("-----------------------------------------------")</code></pre>

output:

<pre class="wp-block-code"><code>
Please copy paste path of folder : C:\Users\SwayAlgo\Downloads\Python\LAB 2
Following are the files in folder
-----------------------------------------------
File Number      File Names
-----------------------------------------------
1                  1.jpg
2                  download.jpg
3                  File.txt
4                  LAB 2 16-03-2021.ipynb
5                  LAB 2 Python_File Handling.pdf
6                  student.dat
-----------------------------------------------</code></pre>