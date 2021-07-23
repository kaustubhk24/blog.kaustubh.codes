---
id: 516
title: Write a VB.NET program to create Author table (aid,aname,book_name). Insert the records (Max 5). Delete a record of author who has written “VB.NET book” and display remaining records onthe Crystal Report.(Use MS Access to create db)
date: 2020-08-28T15:27:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-create-author-table-aidanamebook_name-insert-the-records-max-5-delete-a-record-of-author-who-has-written-vb-net-book-and-display-remaining-records-o/
permalink: /write-a-vb-net-program-to-create-author-table-aidanamebook_name-insert-the-records-max-5-delete-a-record-of-author-who-has-written-vb-net-book-and-display-remaining-records-o/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-create-author.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7434666862297711428
rank_math_analytic_object_id:
  - "120"
categories:
  - VB.NET
---
Write a VB.NET program to create Author table (aid,aname,book_name). Insert the records (Max 5). Delete a record of author who has written “VB.NET book” and display remaining records onthe Crystal Report.(Use MS Access to create db) 

<pre><br />PublicClass Form1<br />Dim con AsNew OleDb.OleDbConnection<br />Dim ds AsNew DataSet<br />Dim da AsNew OleDb.OleDbDataAdapter<br />Dim cmd AsNew OleDb.OleDbCommand<br />PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)<br />HandlesMyBase.Load<br /> con.ConnectionString = "PROVIDER=Microsoft.Jet.OLEDB.4.0;Data<br />Source=C:UserstestDocumentsauth.mdb"<br /> con.Open()<br /> da = New OleDb.OleDbDataAdapter("select * from auther", con)<br /> da.Fill(ds, "ath")<br /> DataGridView1.DataSource = ds.Tables("ath")<br />EndSub<br />PrivateSub Button2_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button2.Click<br />Dim q AsString<br />Dim x AsInteger<br /> q = "delete from auther where bname='VB.NET'"<br /> cmd = New OleDb.OleDbCommand(q, con)<br />Try<br /> x = cmd.ExecuteNonQuery()<br />If (x) Then<br /> MsgBox("Data Deleted")<br />Else<br /> MsgBox("Data not deleted")<br />EndIf<br /> ds.Tables.Clear()<br /> da = New OleDb.OleDbDataAdapter("select * from auther", con)<br /> da.Fill(ds, "ath")<br /> DataGridView1.DataSource = ds.Tables("ath")<br />Catch ex As Exception<br /> MsgBox("Exception Occured")<br />EndTry<br />EndSub<br />PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles Button1.Click<br /> Form2.Show()<br />EndSub<br />EndClass<br /><br /></pre>