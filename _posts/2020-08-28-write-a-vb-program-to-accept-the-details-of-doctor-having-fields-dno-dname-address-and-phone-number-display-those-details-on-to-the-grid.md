---
id: 573
title: Write a VB program to accept the details of doctor having field’s dno, dname, address, and phone number. Display those details on to the grid.
date: 2020-08-28T14:23:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-accept-the-details-of-doctor-having-fields-dno-dname-address-and-phone-number-display-those-details-on-to-the-grid/
permalink: /write-a-vb-program-to-accept-the-details-of-doctor-having-fields-dno-dname-address-and-phone-number-display-those-details-on-to-the-grid/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-details-of_54.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/1561039823964085706
rank_math_analytic_object_id:
  - "177"
categories:
  - VB.NET
---
<pre><br />Private Sub Command1_Click()<br />Static i As Integer<br />For j = 1 To MSFlexGrid1.Cols – 1<br />MSFlexGrid1.Row = i + 13<br />MSFlexGrid1.Col = j<br />MSFlexGrid1.Text = Text1.Item(j)<br />Text1.Item(j) = “”<br />Next<br />i = i + 1<br />End Sub<br /><br />Private Sub Command2_Click()<br />Unload Me<br />End Sub<br />Private Sub Form_Load()<br /><br />Dim Items(6) As String<br />Dim i As Integer<br />MSFlexGrid1.Col = 0<br />MSFlexGrid1.Row = 0<br />MSFlexGrid1.Text = “Sr.No”<br />For i = 1 To MSFlexGrid1.Rows – 1<br />MSFlexGrid1.Col = 0<br />MSFlexGrid1.Row = i<br />MSFlexGrid1.Text = i<br />Next<br /><br />MSFlexGrid1.Row = 0<br />MSFlexGrid1.Col = 1<br />MSFlexGrid1.Text = “Doctor No”<br />MSFlexGrid1.Col = 2<br />MSFlexGrid1.Text = “Doctor Name”<br />MSFlexGrid1.Col = 3<br />MSFlexGrid1.Text = “Address”<br />MSFlexGrid1.Col = 4<br />MSFlexGrid1.Text = “Phone Number”<br /><br />For i = 1 To MSFlexGrid1.Cols – 1<br />MSFlexGrid1.ColWidth(i) = 1300<br />Next<br />End Sub<br /><br /><br /><br /><br /><br /><br /><br /><br /></pre>