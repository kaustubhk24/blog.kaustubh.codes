---
id: 524
title: Write a Vb.net program to design the following form, this program shows the details of students in the form of form (use split container or Groupbox control to separate the input and output session).
date: 2020-08-28T15:20:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-design-the-following-form-this-program-shows-the-details-of-students-in-the-form-of-form-use-split-container-or-groupbox-control-to-separate-the-input-and-output-session/
permalink: /write-a-vb-net-program-to-design-the-following-form-this-program-shows-the-details-of-students-in-the-form-of-form-use-split-container-or-groupbox-control-to-separate-the-input-and-output-session/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-design-following_98.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7423844687765773234
rank_math_analytic_object_id:
  - "128"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub btnSubmit_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles btnSubmit.Click<br /> Label1.Text = txtName.Text<br /> Label2.Text = txtFathersName.Text<br /> Label3.Text = txtMothersName.Text<br /> Label4.Text = cmbCourse.Text<br />If optMale.Checked = TrueThen<br /> Label5.Text = "Male"<br />Else<br /> Label5.Text = "Female"<br />EndIf<br /> Label6.Text = DateTimePicker1.Value<br /> Label7.Text = txtHobbies.Text<br /> Label8.Text = txtContact.Text<br /> EndSub<br />EndClass<br /></pre>