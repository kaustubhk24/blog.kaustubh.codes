---
slug: /write-a-vb-net-program-to-create-author-table-aidanamebook_name-insert-the-records-max-5-delete-a-record-of-author-who-has-written-vb-net-book-and-display-remaining-records-o/
title:  Write a VB.NET program
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [VB.NET]
---

Write a VB.NET program to create Author table (aid,aname,book_name). Insert the records (Max 5). Delete a record of author who has written “VB.NET book” and display remaining records onthe Crystal Report.(Use MS Access to create db) 

```cpp title=file.vb
PublicClass Form1
Dim con AsNew OleDb.OleDbConnection
Dim ds AsNew DataSet
Dim da AsNew OleDb.OleDbDataAdapter
Dim cmd AsNew OleDb.OleDbCommand
PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)
HandlesMyBase.Load
 con.ConnectionString = "PROVIDER=Microsoft.Jet.OLEDB.4.0;Data
Source=C:UserstestDocumentsauth.mdb"
 con.Open()
 da = New OleDb.OleDbDataAdapter("select * from auther", con)
 da.Fill(ds, "ath")
 DataGridView1.DataSource = ds.Tables("ath")
EndSub
PrivateSub Button2_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles Button2.Click
Dim q AsString
Dim x AsInteger
 q = "delete from auther where bname='VB.NET'"
 cmd = New OleDb.OleDbCommand(q, con)
Try
 x = cmd.ExecuteNonQuery()
If (x) Then
 MsgBox("Data Deleted")
Else
 MsgBox("Data not deleted")
EndIf
 ds.Tables.Clear()
 da = New OleDb.OleDbDataAdapter("select * from auther", con)
 da.Fill(ds, "ath")
 DataGridView1.DataSource = ds.Tables("ath")
Catch ex As Exception
 MsgBox("Exception Occured")
EndTry
EndSub
PrivateSub Button1_Click(ByVal sender As System.Object, ByVal e As
System.EventArgs) Handles Button1.Click
 Form2.Show()
EndSub
EndClass
```
