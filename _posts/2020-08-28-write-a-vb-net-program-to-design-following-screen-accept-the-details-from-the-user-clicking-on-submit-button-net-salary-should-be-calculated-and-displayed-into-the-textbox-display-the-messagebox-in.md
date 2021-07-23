---
id: 533
title: Write a Vb.net program to design following screen, accept the details from the user. Clicking on Submit button Net Salary should be calculated and displayed into the TextBox. Display the MessageBox informing the Name and Net Salary of employee.
date: 2020-08-28T15:12:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-design-following-screen-accept-the-details-from-the-user-clicking-on-submit-button-net-salary-should-be-calculated-and-displayed-into-the-textbox-display-the-messagebox-in/
permalink: /write-a-vb-net-program-to-design-following-screen-accept-the-details-from-the-user-clicking-on-submit-button-net-salary-should-be-calculated-and-displayed-into-the-textbox-display-the-messagebox-in/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-design-following.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/5945754563491272039
rank_math_analytic_object_id:
  - "137"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br /> txtNetSal.Text = CInt(txtBasic.Text) + CInt(txtDA.Text) +<br />CInt(txtHRA.Text) + CInt(txtMA.Text) + CInt(txtPF.Text) - CInt(txtPT.Text) -<br />CInt(txtIT.Text)<br /> MsgBox(txtName.Text & txtNetSal.Text)<br /> EndSub<br />EndClass<br /><br /><br /></pre>