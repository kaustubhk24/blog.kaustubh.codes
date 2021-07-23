---
id: 1828
title: 'Read Age From File and check  vote eligibility'
date: 2021-06-12T01:06:54+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1828
permalink: /read-age-from-file-and-check-vote-eligibility/
rank_math_seo_score:
  - "10"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Read Age From File And Check  Vote Eligibility
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
  - "274"
categories:
  - Python
---
 

Que > Write a program to read Name and age of person from file named &#8216;file.txt' and print if person is eligible for voting or not.

file.txt

<pre class="wp-block-code"><code>Your Name,24</code></pre>

check-age.py

<pre class="wp-block-code"><code>def checkAge(name,age):
    if (int(age)>18):
        print(name+" is eligible for voting")
    else:
        print(name+" is not eligible for voting")
f=open("file.txt")
content=f.read()
data=content.split(",")
checkAge(data&#91;0],data&#91;1])</code></pre>

Output ><figure class="wp-block-image size-large">

<img loading="lazy" width="827" height="114" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/06/image.png" alt="" class="wp-image-1829" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/06/image.png 827w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/06/image-300x41.png 300w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2021/06/image-768x106.png 768w" sizes="(max-width: 827px) 100vw, 827px" /> 