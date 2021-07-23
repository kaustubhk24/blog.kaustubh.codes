---
id: 1847
title: write a python program to create file and write 1 to 100 numbers
date: 2021-06-12T01:52:22+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1831
permalink: /write-a-python-program-to-create-file-and-write-1-to-100-numbers/
rank_math_seo_score:
  - "58"
rank_math_focus_keyword:
  - Write A Python Program To Create File And Write 1 To 100 Numbers
rank_math_primary_category:
  - "85"
rank_math_internal_links_processed:
  - "1"
ocean_gallery_link_images:
  - 'off'
ocean_sidebar:
  - "0"
ocean_second_sidebar:
  - "0"
ocean_disable_margins:
  - enable
ocean_display_top_bar:
  - default
ocean_display_header:
  - default
ocean_center_header_left_menu:
  - "0"
ocean_custom_header_template:
  - "0"
ocean_header_custom_menu:
  - "0"
ocean_menu_typo_font_family:
  - "0"
ocean_disable_title:
  - default
ocean_disable_heading:
  - default
ocean_disable_breadcrumbs:
  - default
ocean_display_footer_widgets:
  - default
ocean_display_footer_bottom:
  - default
ocean_custom_footer_template:
  - "0"
ocean_link_format_target:
  - self
ocean_quote_format_link:
  - post
rank_math_analytic_object_id:
  - "275"
categories:
  - Python
---
 

Que > Write A Python Program To Create File And Write 1 To 100 Numbers, print each number on new line

Program >

write-numbers.py

<pre class="wp-block-code"><code>def writeNumbers(F):
    temp=""
    for i in range(1,101):
        temp+=str(i)+"\n"
    F.write(temp)
f=open('text.txt','w')
writeNumbers(f)</code></pre>

Execution >

<pre class="wp-block-code"><code>$ python write-numbers.py </code></pre>

Output >

text.txt

<pre class="wp-block-code"><code>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
</code></pre>