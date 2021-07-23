---
id: 521
title: Write a VB.NET program to do the following operations on RichTextBox values i) Font Style ii) Font Color iii) Save iv) Open
date: 2020-08-28T15:22:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-do-the-following-operations-on-richtextbox-values-i-font-style-ii-font-color-iii-save-iv-open/
permalink: /write-a-vb-net-program-to-do-the-following-operations-on-richtextbox-values-i-font-style-ii-font-color-iii-save-iv-open/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-do-following.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/4275212729962787267
rank_math_analytic_object_id:
  - "125"
categories:
  - VB.NET
---
Write a VB.NET program to do the following operations on RichTextBox values i) Font Style ii) Font Color iii) Save iv) Open 

<pre><br />Imports System.IO<br />PublicClass Form1<br />Dim f AsNew FontDialog<br />Dim c AsNew ColorDialog<br />Dim s AsNew SaveFileDialog<br />Dim op AsNew OpenFileDialog<br />Dim filename AsString<br />Dim searh AsString<br />Dim sw As StreamWriter<br />Dim sr As StreamReader<br />PrivateSub Form1_Resize(ByVal sender AsObject, ByVal e As System.EventArgs)<br />HandlesMe.Resize<br /> RichTextBox1.Size = Me.Size<br />EndSub<br />PrivateSub FontStyleToolStripMenuItem_Click(ByVal sender As System.Object, ByVal<br />e As System.EventArgs) Handles FontStyleToolStripMenuItem.Click<br />If f.ShowDialog() = Windows.Forms.DialogResult.OK Then<br /> RichTextBox1.Font = f.Font<br />EndIf<br />EndSub<br />PrivateSub FontColorToolStripMenuItem_Click(ByVal sender As System.Object, ByVal<br />e As System.EventArgs) Handles FontColorToolStripMenuItem.Click<br />If c.ShowDialog() = Windows.Forms.DialogResult.OK Then<br /> RichTextBox1.ForeColor = c.Color<br />EndIf<br />EndSub<br />PrivateSub SaveToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles SaveToolStripMenuItem.Click<br />If s.ShowDialog = Windows.Forms.DialogResult.OK Then<br />filename = s.FileName<br /> sw = New StreamWriter(filename)<br /> sw.Write(RichTextBox1.Text)<br /> sw.Close()<br />EndIf<br />EndSub<br />PrivateSub OpenToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles OpenToolStripMenuItem.Click<br />If op.ShowDialog = Windows.Forms.DialogResult.OK Then<br />'Process.Start(op.FileName)<br /> sr = New StreamReader(op.OpenFile)<br /> RichTextBox1.Text = sr.ReadToEnd()<br /> sr.Close()<br />EndIf<br />EndSub<br />EndClass<br /></pre>