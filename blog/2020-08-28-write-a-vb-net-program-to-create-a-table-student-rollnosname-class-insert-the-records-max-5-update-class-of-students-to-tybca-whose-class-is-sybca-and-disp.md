---
slug: /write-a-vb-net-program-to-create-a-table-student-rollnosname-class-insert-the-records-max-5-update-class-of-students-to-tybca-whose-class-is-sybca-and-disp/
title: Write a VB.NET program to create
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [VB.NET]
---

Write a VB.NET program to create a table student (RollNo,SName, Class). Insert the records (Max: 5). Update class of students to „TYBCA‟ whose class is „SYBCA‟ and display updated records in GridView. (Use MS Access to create db)

```cpp title=bca.vb
PublicClass Form1
Dim con AsNew OleDb.OleDbConnection
Dim da AsNew OleDb.OleDbDataAdapter
Dim ds AsNew DataSet
Dim cmd AsNew OleDb.OleDbCommand
Dim query AsString
Dim dbProvider AsString
Dim dbSource AsString
PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)
HandlesMyBase.Load
 dbProvider = "PROVIDER=Microsoft.Jet.OLEDB.4.0;"
 dbSource = "Data Source=C:UserstestDocumentsstudentmdb.mdb"
 con.ConnectionString = dbProvider & dbSource
 con.Open()
 da = New OleDb.OleDbDataAdapter("select * from std", con)
 da.Fill(ds, "st")
 DataGridView1.DataSource = ds.Tables("st")
EndSub
PrivateSub btnUpdate_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles btnUpdate.Click
Dim x AsInteger
 query = "update std set sclass='tybca' where sclass='sybca'"
 cmd = New OleDb.OleDbCommand(query, con)
Try
 x = cmd.ExecuteNonQuery()
If (x) Then
 MsgBox("Data Updated")
Else
 MsgBox("No data to update")
EndIf
 ds.Tables.Clear()
 da = New OleDb.OleDbDataAdapter("select * from std", con)
 da.Fill(ds, "st")
 DataGridView1.DataSource = ds.Tables("st")
Catch ex As Exception
 MsgBox("Exception Occured")
EndTry
EndSub
EndClass

```
