---
id: 1702
title: Program to create following threads
date: 2021-05-22T01:54:51+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1702
permalink: /program-to-create-following-threads/
rank_math_seo_score:
  - "49"
rank_math_primary_category:
  - "85"
rank_math_focus_keyword:
  - Program To Create Following Threads
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
  - "260"
categories:
  - Python
---
# 1. First thread to print the square of a number entered by user,

# 2. Second thread to print the cube of a number and show the result. Use start and join operations.

<pre class="wp-block-code"><code>from _thread import *
import threading as thread
def sqr(name,num):
  print(name+" : ",num*num)
def cube(name,num):
  print(name+" : ",num*num*num)
try:
  no=int(input("enter number : "))
  thread.start_new_thread( sqr, ("\nThread - 1: Square:", no ) )
  thread.start_new_thread( cube, ("\nThread - 2: Cube :", no ) )
  #join()
  numTuple = &#91;'1', '2', '3', '4']
  print("#".join(numTuple))
except Exception as e:
   print ("Error: ",e)</code></pre>

<pre class="wp-block-code"><code>enter number : 9
1#2#3#4
Thread - 1: Square: :  81
Thread - 2: Cube : :  729
</code></pre>