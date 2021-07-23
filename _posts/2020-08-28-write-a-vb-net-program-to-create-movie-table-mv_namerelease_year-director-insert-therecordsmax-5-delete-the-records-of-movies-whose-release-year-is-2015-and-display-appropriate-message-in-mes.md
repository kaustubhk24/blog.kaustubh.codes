---
id: 517
title: 'Write a VB.NET program to create movie table (Mv_Name,Release_year, Director). Insert therecords(Max: 5). Delete the records of movies whose release year is 2015 and display appropriate message in messagebox.(Use MS Access to create db)'
date: 2020-08-28T15:25:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-create-movie-table-mv_namerelease_year-director-insert-therecordsmax-5-delete-the-records-of-movies-whose-release-year-is-2015-and-display-appropriate-message-in-mes/
permalink: /write-a-vb-net-program-to-create-movie-table-mv_namerelease_year-director-insert-therecordsmax-5-delete-the-records-of-movies-whose-release-year-is-2015-and-display-appropriate-message-in-mes/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-create-movie.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/521068130447628384
rank_math_analytic_object_id:
  - "122"
categories:
  - VB.NET
---
Write a VB.NET program to create movie table (Mv\_Name,Release\_year, Director). Insert therecords(Max: 5). Delete the records of movies whose release year is 2015 and display appropriate message in messagebox.(Use MS Access to create db) 

<pre><br />PublicClass Form1<br />PrivateSub MovBindingNavigatorSaveItem_Click(ByVal sender As System.Object, ByVal<br />e As System.EventArgs) Handles MovBindingNavigatorSaveItem.Click<br />Me.Validate()<br />Me.MovBindingSource.EndEdit()<br />Me.TableAdapterManager.UpdateAll(Me.MovDataSet)<br />EndSub<br />PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)<br />HandlesMyBase.Load<br />'TODO: This line of code loads data into the 'MovDataSet.mov' table. You can<br />move, or remove it, as needed.<br />Me.MovTableAdapter.Fill(Me.MovDataSet.mov)<br />EndSub<br />PrivateSub bttn_del_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles bttn_del.Click<br />IfMe.MovTableAdapter.DeleteQuery() Then<br /> MsgBox("Deleted")<br />Me.MovTableAdapter.Fill(Me.MovDataSet.mov)<br />Else<br /> MsgBox("No record to be deleted")<br />EndIf<br />EndSub<br />EndClass<br /><br /></pre>