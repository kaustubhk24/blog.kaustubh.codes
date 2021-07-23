---
id: 561
title: Design the digital watch using Timer Control.
date: 2020-08-28T14:34:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/design-the-digital-watch-using-timer-control/
permalink: /design-the-digital-watch-using-timer-control/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/design-digital-watch-using-timer-control.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4822375574986046874
rank_math_analytic_object_id:
  - "165"
categories:
  - VB.NET
---
<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-sfOmIHLdXSg/X0kVwsRWs7I/AAAAAAAAfgk/KiMH72LT6rkTcjQ-dc75Gtq-1ldbNe1LQCLcBGAsYHQ/s280/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="171" data-original-width="280" src="https://1.bp.blogspot.com/-sfOmIHLdXSg/X0kVwsRWs7I/AAAAAAAAfgk/KiMH72LT6rkTcjQ-dc75Gtq-1ldbNe1LQCLcBGAsYHQ/s400/1.png" /></a>
</div>

<pre><br /><br />Private Sub Command1_Click()<br />	Timer1.Enabled = True<br /><br /><br />	<br />End Sub<br /><br />Private Sub Command2_Click()<br />	Timer1.Enabled = False<br />	<br />End Sub<br /><br />Private Sub Timer1_Timer()<br />	Label1.Caption = Time<br />	<br />End Sub<br /> <br /><br /><br /><br /><br /><br /></pre>