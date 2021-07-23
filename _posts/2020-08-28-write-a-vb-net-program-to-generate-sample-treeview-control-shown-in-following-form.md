---
id: 527
title: Write a Vb.net program to generate Sample TreeView control shown in following form
date: 2020-08-28T15:18:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-generate-sample-treeview-control-shown-in-following-form/
permalink: /write-a-vb-net-program-to-generate-sample-treeview-control-shown-in-following-form/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-generate-sample.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6835766649950811015
rank_math_analytic_object_id:
  - "131"
categories:
  - VB.NET
---
<pre><br /><br />public class Form1<br />Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br /> TreeView2.Nodes.Add("Computer Science")<br /> TreeView2.Nodes(0).Nodes.Add("BCA")<br /> TreeView2.Nodes(0).Nodes.Add("BCS")<br /> TreeView2.Nodes(0).Nodes.Add("MCA")<br /> TreeView2.Nodes(0).Nodes(0).Nodes.Add("FYBCA")<br /> TreeView2.Nodes(0).Nodes(0).Nodes.Add("SYBCA")<br /> TreeView2.Nodes(0).Nodes(0).Nodes.Add("TYBCA")<br /> TreeView2.Nodes(0).Nodes(1).Nodes.Add("FYBCS")<br /> TreeView2.Nodes(0).Nodes(1).Nodes.Add("SYBCS")<br /> TreeView2.Nodes(0).Nodes(1).Nodes.Add("TYBCS")<br /> TreeView2.Nodes(0).Nodes(2).Nodes.Add("MCA(I)")<br /> TreeView2.Nodes(0).Nodes(2).Nodes.Add("MCA(II)")<br /> TreeView2.Nodes(0).Nodes(2).Nodes.Add("MCA(III)")<br /> 'TreeView2.Nodes.Add("2Main Menu")<br /> 'TreeView2.Nodes(1).Nodes.Add("Submenu")<br /> End Sub<br />End Class<br /></pre>