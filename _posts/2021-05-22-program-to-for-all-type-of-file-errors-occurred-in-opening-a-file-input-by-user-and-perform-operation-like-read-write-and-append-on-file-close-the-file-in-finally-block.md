---
id: 1696
title: Program to for all type of file Errors occurred in opening a file input by user and perform operation like read write and append on file, close the file in finally block.
date: 2021-05-22T01:51:06+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1696
permalink: /program-to-for-all-type-of-file-errors-occurred-in-opening-a-file-input-by-user-and-perform-operation-like-read-write-and-append-on-file-close-the-file-in-finally-block/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "59"
rank_math_focus_keyword:
  - Program to for all type of file Errors occurred in opening a file input by user and perform operation like read write and append on file,close the file in finally block.
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
  - "257"
categories:
  - Python
---
Que > Program to for all type of file Errors occurred in opening a file input by user and perform operation like read write and append on file, close the file in finally block.

<pre class="wp-block-code"><code>file_name=str(input('Please enter valid file name :'))
try:
  f=open(file_name)
  n=input("Enter content to write on file :")
  f.write(n)
  f.close()
except ValueError:
  print("ValueError- Please enter valid File Name")
except OSError:
    print ("Could not open/read file:", file_name)
except FileNotFoundError:
  print ("File does not exists:", file_name)
except IOError:
    print('file not found', file_name)
except e as Exception:
  print("Exception occured ",e)
finally:
#  f.close()
  print("Program terminated")</code></pre>

<pre class="wp-block-code"><code>
Please enter valid file name :k
Could not open/read file: k
Program terminated</code></pre>