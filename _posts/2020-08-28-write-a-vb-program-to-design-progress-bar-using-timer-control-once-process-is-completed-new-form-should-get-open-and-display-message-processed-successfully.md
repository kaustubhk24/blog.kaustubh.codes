---
id: 557
title: 'Write a VB program to design progress bar using Timer control. Once process is    completed new form should get open and display message “Processed Successfully”'
date: 2020-08-28T14:37:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-design-progress-bar-using-timer-control-once-process-is-completed-new-form-should-get-open-and-display-message-processed-successfully/
permalink: /write-a-vb-program-to-design-progress-bar-using-timer-control-once-process-is-completed-new-form-should-get-open-and-display-message-processed-successfully/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-design-progress-bar.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2725849858998095332
rank_math_analytic_object_id:
  - "160"
categories:
  - VB.NET
---
Write a VB program to design progress bar using Timer control. Once process is completed new form should get open and display message “Processed Successfully” 

<pre><br />Private Sub Timer1_Timer()<br /><br />	ProgressBar1.Value = ProgressBar1.Value + 10<br />	If ProgressBar1.Value = 100 Then<br />		Form2.Show<br />		Timer1.Enabled = False<br />	End If<br />End Sub<br /><br /><br /><br /></pre>