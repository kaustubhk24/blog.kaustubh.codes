---
id: 522
title: Write a Vb.net program to design the following form, accept all details from user and display the details through message box
date: 2020-08-28T15:21:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-design-the-following-form-accept-all-details-from-user-and-display-the-details-through-message-box/
permalink: /write-a-vb-net-program-to-design-the-following-form-accept-all-details-from-user-and-display-the-details-through-message-box/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-design-following_4.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8467056204668629547
rank_math_analytic_object_id:
  - "127"
categories:
  - VB.NET
---
<pre><br /><br />PublicClass Form1<br />PrivateSub btnOk_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles btnOk.Click<br />Dim nm AsString<br />Dim post AsString<br />Dim qual AsString = ""<br /> nm = TextBox1.Text<br />If opManager.Checked = TrueThen<br /> post = "Manager"<br />ElseIf opEng.Checked = TrueThen<br /> post = "Engineer"<br />ElseIf opAcc.Checked = TrueThen<br /> post = "Accountant"<br />Else<br /> post = "Clerk"<br />EndIf<br />If chkBE.Checked Then<br /> qual = qual &"BE, "<br />EndIf<br />If chkMBA.Checked Then<br /> qual = qual &"MBA, "<br />EndIf<br />If chkCA.Checked Then<br /> qual = qual &"CA, "<br />EndIf<br />If chkGraduate.Checked Then<br /> qual = qual &"Graduate"<br />EndIf<br /> MessageBox.Show("Name: "& nm &" Post: "& post &" Qualification: "& qual,<br />"Details", MessageBoxButtons.OK, MessageBoxIcon.Information)<br />EndSub<br />EndClass<br /></pre>