---
id: 523
title: Develop the menu based Vb.net application to implement a text editor with cut, copy, paste, save, close operations.
date: 2020-08-28T15:21:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/develop-the-menu-based-vb-net-application-to-implement-a-text-editor-with-cut-copy-paste-save-close-operations/
permalink: /develop-the-menu-based-vb-net-application-to-implement-a-text-editor-with-cut-copy-paste-save-close-operations/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/develop-menu-based-vbnet-application-to.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2133086680210890263
rank_math_analytic_object_id:
  - "126"
categories:
  - VB.NET
---
<pre><br />Imports System.IO<br />PublicClass Form1<br />Dim s AsNew SaveFileDialog<br />Dim sw As StreamWriter<br />Dim filename AsString<br />PrivateSub CloseToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles CloseToolStripMenuItem.Click<br />End<br />EndSub<br />PrivateSub CutToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles CutToolStripMenuItem.Click<br /> RichTextBox1.Cut()<br />EndSub<br /><br /><br />PrivateSub PasteToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles PasteToolStripMenuItem.Click<br /> RichTextBox2.Paste()<br />EndSub<br />PrivateSub CopyToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles CopyToolStripMenuItem.Click<br /> RichTextBox1.Copy()<br />EndSub<br />PrivateSub SaveToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles SaveToolStripMenuItem.Click<br />If s.ShowDialog = Windows.Forms.DialogResult.OK Then<br /> filename = s.FileName<br /> sw = New StreamWriter(filename)<br /> sw.Write(RichTextBox1.Text)<br /> sw.Close()<br />EndIf<br />EndSub<br />EndClass<br /></pre>