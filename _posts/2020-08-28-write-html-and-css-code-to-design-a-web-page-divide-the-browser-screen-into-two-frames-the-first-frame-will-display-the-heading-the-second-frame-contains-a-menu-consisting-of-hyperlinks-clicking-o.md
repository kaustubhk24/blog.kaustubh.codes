---
id: 514
title: Write HTML and CSS code to design a web page. Divide the browser screen into two frames. The first frame will display the heading. The second frame contains a menu consisting of hyperlinks. Clicking on any one of these hyperlinks will display related information in a new page as shown below. Use Internal style sheet with appropriate attributes to display information of each frame
date: 2020-08-28T15:47:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-html-and-css-code-to-design-a-web-page-divide-the-browser-screen-into-two-frames-the-first-frame-will-display-the-heading-the-second-frame-contains-a-menu-consisting-of-hyperlinks-clicking-o/
permalink: /write-html-and-css-code-to-design-a-web-page-divide-the-browser-screen-into-two-frames-the-first-frame-will-display-the-heading-the-second-frame-contains-a-menu-consisting-of-hyperlinks-clicking-o/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-html-and-css-code-to-design-web.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/5883428730934214256
rank_math_analytic_object_id:
  - "118"
categories:
  - HTML
---
Write HTML and CSS code to design a web page. Divide the browser screen into two frames. The first frame will display the heading. The second frame contains a menu consisting of hyperlinks. Clicking on any one of these hyperlinks will display related information in a new page as shown below. Use Internal style sheet with appropriate attributes to display information of each frame 

<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-mVPacr4VnGQ/X0klCW9Y9DI/AAAAAAAAfhY/d2WRJv0SOJs26cgaJPdeF7M5FJWdpfX3wCLcBGAsYHQ/s735/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="286" data-original-width="735" src="https://1.bp.blogspot.com/-mVPacr4VnGQ/X0klCW9Y9DI/AAAAAAAAfhY/d2WRJv0SOJs26cgaJPdeF7M5FJWdpfX3wCLcBGAsYHQ/s400/1.png" /></a>
</div>

<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-L4l47fCcAuA/X0klCRT9ZYI/AAAAAAAAfhc/O9ejLyPmGNoGa1cllgOdqhKWQwldO1LAwCLcBGAsYHQ/s734/2.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="317" data-original-width="734" src="https://1.bp.blogspot.com/-L4l47fCcAuA/X0klCRT9ZYI/AAAAAAAAfhc/O9ejLyPmGNoGa1cllgOdqhKWQwldO1LAwCLcBGAsYHQ/s400/2.png" /></a>
</div>

<pre>file1.html</pre>

<pre><br /><br />&lt;html><br />&lt;head>&lt;title>&lt;/title>&lt;/head><br />&lt;body><br />&lt;table border="1"><br />&lt;caption style="color:red";font-family:arial>F.Y.B.C.A. Exam Time Table &lt;/font>&lt;/caption><br />&lt;tr><br />&lt;th>Date&lt;/th><br />&lt;th>Time&lt;/th><br />&lt;th>Subject Code&lt;/th><br />&lt;th>Subject Name&lt;/th><br />&lt;/tr><br />&lt;tr><br />&lt;td>10/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>101&lt;/td><br />&lt;td>PPA&lt;/td><br />&lt;/tr><br />&lt;tr><br />&lt;td>13/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>102&lt;/td><br />&lt;td>MOE&lt;/td><br />&lt;/tr><br />&lt;tr><br />&lt;td>14/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>103&lt;/td><br />&lt;td>BC&lt;/td><br />&lt;/tr><br />&lt;tr><br />&lt;td>15/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>104&lt;/td><br />&lt;td>PM&lt;/td><br />&lt;/tr><br />&lt;tr><br />&lt;td>16/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>105&lt;/td><br />&lt;td>FA&lt;/td><br />&lt;/tr><br />&lt;/table><br />&lt;/body><br />&lt;/html><br /><br /></pre>

Output:  


<table border="1">
  <caption style="color:red";font-family:arial>F.Y.B.C.A. Exam Time Table </font></caption> 
  
  <tr>
    <th>
      Date
    </th>
    
    <th>
      Time
    </th>
    
    <th>
      Subject Code
    </th>
    
    <th>
      Subject Name
    </th>
  </tr>
  
  <tr>
    <td>
      10/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      101
    </td>
    
    <td>
      PPA
    </td>
  </tr>
  
  <tr>
    <td>
      13/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      102
    </td>
    
    <td>
      MOE
    </td>
  </tr>
  
  <tr>
    <td>
      14/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      103
    </td>
    
    <td>
      BC
    </td>
  </tr>
  
  <tr>
    <td>
      15/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      104
    </td>
    
    <td>
      PM
    </td>
  </tr>
  
  <tr>
    <td>
      16/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      105
    </td>
    
    <td>
      FA
    </td>
  </tr>
</table>

<pre>file2.html</pre>

<pre><br />&lt;html><br />&lt;head>&lt;title>&lt;/title>&lt;/head><br />&lt;body><br />&lt;table border="1"><br />&lt;caption style="color:blue";font-family:arial> S.Y.B.C.A. Exam Time Table &lt;/caption><br />&lt;tr><br />&lt;th>Date&lt;/th><br />&lt;th>Time&lt;/th><br />&lt;th>Subject Code&lt;/th><br />&lt;th>Subject Name&lt;/th><br />&lt;/tr><br />&lt;tr><br />&lt;td>10/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>201&lt;/td><br />&lt;td>RD&lt;/td><br />&lt;/tr><br />&lt;tr><br />&lt;td>13/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>202&lt;/td><br />&lt;td>DS&lt;/td><br />&lt;/tr><br />&lt;tr><br />&lt;td>14/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>203&lt;/td><br />&lt;td>OS&lt;/td><br />&lt;/tr><br />&lt;tr><br />&lt;td>15/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>204&lt;/td><br />&lt;td>BM&lt;/td><br />&lt;/tr><br />&lt;tr><br />&lt;td>16/10/2018&lt;/td><br />&lt;td>10:30am-01:30pm&lt;/td><br />&lt;td>205&lt;/td><br />&lt;td>SE&lt;/td><br />&lt;/tr><br />&lt;/table><br />&lt;/body><br />&lt;/html><br /><br /></pre>

Output: 

<table border="1">
  <caption style="color:blue";font-family:arial> S.Y.B.C.A. Exam Time Table </caption> 
  
  <tr>
    <th>
      Date
    </th>
    
    <th>
      Time
    </th>
    
    <th>
      Subject Code
    </th>
    
    <th>
      Subject Name
    </th>
  </tr>
  
  <tr>
    <td>
      10/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      201
    </td>
    
    <td>
      RD
    </td>
  </tr>
  
  <tr>
    <td>
      13/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      202
    </td>
    
    <td>
      DS
    </td>
  </tr>
  
  <tr>
    <td>
      14/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      203
    </td>
    
    <td>
      OS
    </td>
  </tr>
  
  <tr>
    <td>
      15/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      204
    </td>
    
    <td>
      BM
    </td>
  </tr>
  
  <tr>
    <td>
      16/10/2018
    </td>
    
    <td>
      10:30am-01:30pm
    </td>
    
    <td>
      205
    </td>
    
    <td>
      SE
    </td>
  </tr>
</table>

<pre>file3.html</pre>

<pre><br /><br />&lt;html><br />&lt;head>&lt;title> &lt;/title>&lt;/head><br />&lt;body><br />&lt;a href="file1.html">FYBCA&lt;/a>&lt;br><br />&lt;a href="file2.html">SYBCA&lt;/a><br />&lt;/body><br />&lt;/html><br /><br /></pre>

Output: [FYBCA](http://swayalgo.com/timetable_fy.html)  
[SYBCA](http://swayalgo.com/timetable_sy.html) 

<pre>file4.html</pre>

<pre><br />&lt;html><br />&lt;head><br />&lt;/head><br />&lt;body><br />&lt;h1 style="color:red";font-family:arial>&lt;b>COMPUTER SCIENCE &lt;br>DEPARTMENT &lt;/b>&lt;/h1><br />&lt;/body><br />&lt;/html><br /><br /></pre>

Output: <h1 style="color:red";font-family:arial>

**COMPUTER SCIENCE  
DEPARTMENT** </h1> 

<pre>file5.html</pre>

<pre><br />&lt;html><br />&lt;frameset cols="30%,70%"><br />&lt;frame src=comp_sci.html><br />&lt;frame src=menu.html><br />&lt;/frameset><br />&lt;/html><br /><br /></pre>

Output: 

<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-JES1P4VuIjY/X0km9jYO-hI/AAAAAAAAfhs/kvKD7PVuOEA64RRTHvndl0P1iaplnVkqgCLcBGAsYHQ/s734/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="317" data-original-width="734" src="https://1.bp.blogspot.com/-JES1P4VuIjY/X0km9jYO-hI/AAAAAAAAfhs/kvKD7PVuOEA64RRTHvndl0P1iaplnVkqgCLcBGAsYHQ/s400/1.png" /></a>
</div>