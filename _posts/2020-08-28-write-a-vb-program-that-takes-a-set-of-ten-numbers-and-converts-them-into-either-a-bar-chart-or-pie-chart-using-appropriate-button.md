---
id: 546
title: 'Write a VB program that takes a set of ten numbers and converts them into either a bar      chart or pie chart using appropriate button.'
date: 2020-08-28T14:46:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-that-takes-a-set-of-ten-numbers-and-converts-them-into-either-a-bar-chart-or-pie-chart-using-appropriate-button/
permalink: /write-a-vb-program-that-takes-a-set-of-ten-numbers-and-converts-them-into-either-a-bar-chart-or-pie-chart-using-appropriate-button/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-that-takes-set-of-ten.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8408348182549147701
rank_math_analytic_object_id:
  - "150"
categories:
  - VB.NET
---
<pre><br />Private Sub cmdbar_Click()<br /><br />If Option1.Value Then<br /><br />MSChart1.chartType = VtChChartType2dBar<br /><br />Else<br /><br />MSChart1.chartType = VtChChartType3dBar<br /><br />End If<br /><br />MSChart1.RowCount = 10<br /><br />MSChart1.ColumnCount = 1<br /><br />For i = 1 To 10<br /><br />MSChart1.Row = i<br /><br />MSChart1.Column = 1<br /><br />MSChart1.Data = InputBox("Enter Data : " + Str(i) + " : ", "Data")<br /><br />MSChart1.RowLabel = "D" + Str(i)<br /><br />Next<br /><br />End Sub<br /><br />Private Sub cmdexit_Click()<br /><br />End<br /><br />End Sub<br /><br />Private Sub cmdpie_Click()<br /><br />MSChart1.chartType = VtChChartType2dPie<br /><br />MSChart1.RowCount = 1<br /><br />MSChart1.ColumnCount = 10<br /><br />For i = 1 To 10<br /><br />MSChart1.Row = 1<br /><br />MSChart1.Column = i<br /><br />MSChart1.Data = InputBox("Enter Data : " + Str(i) + " : ", "Data")<br /><br />Next<br /><br />End Sub<br /><br />Private Sub Form_Load()<br /><br />MSChart1.Visible = True<br /><br />End Sub<br /><br /><br /></pre>