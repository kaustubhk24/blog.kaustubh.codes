---
id: 532
title: Design a Vb.net form to pick a date from DateTimePicker Control and display day, month and year in separate text boxes.
date: 2020-08-28T15:13:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/design-a-vb-net-form-to-pick-a-date-from-datetimepicker-control-and-display-day-month-and-year-in-separate-text-boxes/
permalink: /design-a-vb-net-form-to-pick-a-date-from-datetimepicker-control-and-display-day-month-and-year-in-separate-text-boxes/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/design-vbnet-form-to-pick-date-from.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4331484430648521144
rank_math_analytic_object_id:
  - "136"
categories:
  - VB.NET
---
<pre><br />Public Class Form1<br />PrivateSub Button2_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button2.Click<br /> TextBox2.Text = Format(DateTimePicker1.Value, "dd")<br /> TextBox3.Text = DateTimePicker1.Value.Month<br /> TextBox4.Text = DateTimePicker1.Value.Year<br />EndSub<br />EndClass<br /><br /><br /></pre>