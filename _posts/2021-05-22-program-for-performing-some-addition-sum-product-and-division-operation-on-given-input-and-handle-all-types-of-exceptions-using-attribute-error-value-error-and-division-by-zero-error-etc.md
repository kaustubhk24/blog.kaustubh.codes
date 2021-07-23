---
id: 1692
title: Program for performing some addition, sum, product and division operation on given input and handle all types of Exceptions using Attribute Error, Value Error and Division by Zero Error, etc
date: 2021-05-22T01:49:24+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1692
permalink: /program-for-performing-some-addition-sum-product-and-division-operation-on-given-input-and-handle-all-types-of-exceptions-using-attribute-error-value-error-and-division-by-zero-error-etc/
ocean_gallery_link_images:
  - 'off'
rank_math_internal_links_processed:
  - "1"
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
  - "256"
rank_math_seo_score:
  - "7"
rank_math_primary_category:
  - "85"
categories:
  - Python
---
Que > Program for performing some addition, sum, product and division operation on given input and handle all types of Exceptions using Attribute Error, Value Error and Division by Zero Error, etc

<pre class="wp-block-code"><code>try:
  n1=int(input("Enter Integer 1:"))
  n2=int(input("Enter Integer 2:"))
  print(" N1 * N2 = ", n1*n2)
  print(" N1 / N2 =",n1/n2)
  print(" N1 + N2 =",n1+n2)
  print(" N1 - N2 =",n1-n2)
except ValueError:
  print("ValueError- Please enter valid number")
except ZeroDivisionError:
  print("ZeroDivisionError: You can not divide number by 0")
except AttributeError:
  print("AttributeError: Attribute is not valid")
except e as Exception:
  print("Unhandled Exception Ocurred : ",e)
finally:
  print("Program terminated")</code></pre>

<pre class="wp-block-code"><code>Enter Integer 1:6
Enter Integer 2:0
 N1 * N2 =  0
ZeroDivisionError: You can not divide number by 0
Program terminated</code></pre>