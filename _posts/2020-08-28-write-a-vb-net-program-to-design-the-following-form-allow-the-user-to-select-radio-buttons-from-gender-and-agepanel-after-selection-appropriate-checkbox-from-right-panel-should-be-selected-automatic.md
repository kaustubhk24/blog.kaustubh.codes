---
id: 528
title: Write a Vb.net program to design the following form, allow the user to select radio buttons from Gender and AgePanel. After Selection appropriate CheckBox from Right Panel should be selected automatically. Display appropriate message into the MessageBox by clicking on Ok button.
date: 2020-08-28T15:16:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-design-the-following-form-allow-the-user-to-select-radio-buttons-from-gender-and-agepanel-after-selection-appropriate-checkbox-from-right-panel-should-be-selected-automatic/
permalink: /write-a-vb-net-program-to-design-the-following-form-allow-the-user-to-select-radio-buttons-from-gender-and-agepanel-after-selection-appropriate-checkbox-from-right-panel-should-be-selected-automatic/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-design-following_30.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7203113282790316942
rank_math_analytic_object_id:
  - "132"
categories:
  - VB.NET
---
<pre><br /><br />PublicClass Form1<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br />If RadioButton1.Checked = TrueAnd RadioButton3.Checked = TrueOr<br />RadioButton2.Checked = TrueAnd RadioButton3.Checked = TrueThen<br /> CheckBox2.Checked = True<br /> MsgBox(TextBox1.Text &" Sorry You Dont Drive Car")<br />ElseIf RadioButton1.Checked = TrueAnd RadioButton4.Checked = TrueOr<br />RadioButton2.Checked = TrueAnd RadioButton4.Checked = TrueThen<br /> CheckBox1.Checked = True<br /> MsgBox(TextBox1.Text &" You can Drive Car")<br />Else<br /> CheckBox3.Checked = True<br /> MsgBox(TextBox1.Text &" It's All Right")<br />EndIf<br />EndSub<br />EndClass<br /></pre>