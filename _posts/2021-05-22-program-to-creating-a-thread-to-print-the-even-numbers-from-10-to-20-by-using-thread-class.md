---
id: 1700
title: 'Program to creating a thread to print the even numbers from 10 to 20  by using Thread Class'
date: 2021-05-22T01:53:18+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1700
permalink: /program-to-creating-a-thread-to-print-the-even-numbers-from-10-to-20-by-using-thread-class/
rank_math_seo_score:
  - "45"
rank_math_focus_keyword:
  - Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class
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
  - "259"
categories:
  - Python
---
Que > Program to creating a thread to print the even numbers from 10 to 20 by using Thread Class

<pre class="wp-block-code"><code>from _thread import *
import threading as thread
def even(name,timer):
  for i in range(10,20):
    if i%2==0:
      print(name+" : "+str(i))
try:
   thread.start_new_thread( even, ("Thread", 2, ) )
except Exception as e:
   print ("Error: ",e)</code></pre>

<pre class="wp-block-code"><code>Thread : 10
Thread : 12
Thread : 14
Thread : 16
Thread : 18</code></pre>