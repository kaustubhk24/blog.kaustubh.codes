---
id: 526
title: Write a Vb.net program to design the following form, select the question number from combo box that question will be displayed into textbox and the options for that question will be displayed on four radio buttons, select option and click on submit button result should be displayed in another textbox
date: 2020-08-28T15:18:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-design-the-following-form-select-the-question-number-from-combo-box-that-question-will-be-displayed-into-textbox-and-the-options-for-that-question-will-be-displayed-on-four/
permalink: /write-a-vb-net-program-to-design-the-following-form-select-the-question-number-from-combo-box-that-question-will-be-displayed-into-textbox-and-the-options-for-that-question-will-be-displayed-on-four/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-design-following_89.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7907025059557199507
rank_math_analytic_object_id:
  - "130"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />PrivateSub ComboBox1_SelectedIndexChanged(ByVal sender As System.Object, ByVal e<br />As System.EventArgs) Handles ComboBox1.SelectedIndexChanged<br />If ComboBox1.Text = "Question 1"Then<br /> RichTextBox1.Text = "Which is capital of India?"<br /> RadioButton1.Text = "Delhi"<br /> RadioButton2.Text = "Mumbai"<br /> RadioButton3.Text = "Pune"<br /> RadioButton4.Text = "Chennai"<br /> ElseIf ComboBox1.Text = "Question 2"Then<br /> RichTextBox1.Text = "Which is capital of Maharashtra?"<br /> RadioButton1.Text = "Delhi"<br /> RadioButton2.Text = "Mumbai"<br /> RadioButton3.Text = "Nagpur"<br /> RadioButton4.Text = "Chennai"<br />EndIf<br />EndSub<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br />'MsgBox(RadioButton1.Checked)<br /> MsgBox(ComboBox1.SelectedItem)<br />If ComboBox1.Text = "Question 1"And RadioButton1.Checked Then<br /> TextBox1.Text = "Answer is correct"<br />ElseIf ComboBox1.Text = "Question 2"And RadioButton3.Checked Then<br /> TextBox1.Text = "Answer is correct"<br />Else<br /> TextBox1.Text = "Answer is Wrong"<br />EndIf<br />EndSub<br />EndClass<br /><br /><br /></pre>