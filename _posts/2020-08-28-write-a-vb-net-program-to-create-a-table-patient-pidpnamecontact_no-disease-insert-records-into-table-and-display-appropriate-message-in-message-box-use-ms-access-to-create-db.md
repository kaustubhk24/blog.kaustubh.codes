---
id: 520
title: Write a VB.NET program to create a table Patient (Pid,PName,Contact_No, Disease). Insert records into table and display appropriate message in message box. (Use MS Access to create db)
date: 2020-08-28T15:23:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-net-program-to-create-a-table-patient-pidpnamecontact_no-disease-insert-records-into-table-and-display-appropriate-message-in-message-box-use-ms-access-to-create-db/
permalink: /write-a-vb-net-program-to-create-a-table-patient-pidpnamecontact_no-disease-insert-records-into-table-and-display-appropriate-message-in-message-box-use-ms-access-to-create-db/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-create-table.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/6276087072899860504
rank_math_analytic_object_id:
  - "124"
categories:
  - VB.NET
---
<pre><br />PublicClass Form1<br />Dim con AsNew OleDb.OleDbConnection<br />Dim da AsNew OleDb.OleDbDataAdapter<br />Dim ds AsNew DataSet<br />Dim DbProvider AsString<br />Dim DbSource AsString<br />Dim query AsString<br />Dim cmd AsNew OleDb.OleDbCommand<br />PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)<br />HandlesMyBase.Load<br /> DbProvider = "PROVIDER=Microsoft.Jet.OLEDB.4.0;"<br /> DbSource = "Data Source = D:Documents_backuppatient.mdb"<br /> con.ConnectionString = DbProvider & DbSource<br /> con.Open()<br /> query = "Select * from pat"<br /> da = New OleDb.OleDbDataAdapter(query, con)<br /> da.Fill(ds, "pat")<br /> DataGridView1.DataSource = ds.Tables("pat")<br />EndSub<br />PrivateSub btnInsert_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles btnInsert.Click<br />Dim x AsInteger<br />Try<br /> query = "insert into pat values("&CInt(TextBox4.Text) &",'"&<br />TextBox1.Text &" ',' "& TextBox2.Text &" ', ' "& TextBox3.Text &" ')"<br /> cmd = New OleDb.OleDbCommand(query, con)<br /> x = cmd.ExecuteNonQuery()<br />If (x) Then<br /> MsgBox("Data Inserted")<br />Else<br /> MsgBox("data Not inserted")<br />EndIf<br />Catch ex As Exception<br /> MsgBox(ex)<br />EndTry<br /> ds.Tables.Clear()<br /> query = "Select * from pat"<br /> da = New OleDb.OleDbDataAdapter(query, con)<br /> da.Fill(ds, "pat")<br /> DataGridView1.DataSource = ds.Tables("pat")<br />EndSub<br />EndClass<br /></pre>