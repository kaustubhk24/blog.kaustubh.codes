---
id: 547
title: 'Write a VB program to accept the details of book, store those details into the database   and delete the particular record of given book id. (Use InputBox)'
date: 2020-08-28T14:45:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-accept-the-details-of-book-store-those-details-into-the-database-and-delete-the-particular-record-of-given-book-id-use-inputbox/
permalink: /write-a-vb-program-to-accept-the-details-of-book-store-those-details-into-the-database-and-delete-the-particular-record-of-given-book-id-use-inputbox/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-details-of_6.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7878606453052930322
rank_math_analytic_object_id:
  - "151"
categories:
  - VB.NET
---
<pre><br />Dim C As New Connection<br />Dim R As New Recordset<br />Dim S As String<br />Private Sub cmdAdd_Click()<br />                txtBno.Text = ""<br />                txtBname.Text = ""<br />                txtAuthor.Text = ""<br />                txtPrice.Text = ""<br />               <br />                txtBno.SetFocus<br />End Sub<br /><br />Private Sub cmdDelete_Click()<br />                Dim id As Integer<br />               <br />                id = Val(InputBox("Enter Book Number"))<br />               <br />                R.Close<br />                S = "delete from book where bno like '" & id & "'"<br />                R.Open S, C, adOpenDynamic, adLockOptimistic<br />                S = "select * from book"<br />                R.Open S, C, adOpenDynamic, adLockOptimistic<br />                If Not R.BOF And Not R.EOF Then<br />                                R.MoveFirst<br />                                txtBno.Text = R.Fields(0).Value<br />                                txtBname.Text = R.Fields(1).Value<br />                                txtAuthor.Text = R.Fields(2).Value<br />                                txtPrice.Text = R.Fields(3).Value<br />                End If<br />               <br />                MsgBox ("Record Deleted Successfully")<br />End Sub<br />Private Sub cmdNext_Click()<br />                R.MoveNext<br />                If Not R.EOF Then<br />                                txtBno.Text = R.Fields(0)<br />                                txtBname.Text = R.Fields(1).Value<br />                                txtAuthor.Text = R.Fields(2).Value<br />                                txtPrice.Text = R.Fields(3).Value<br />                Else<br />                                MsgBox "No More Records!",vbInformation, "Book"<br />                End If<br />End Sub<br />Private Sub cmdSave_Click()<br />                R.Close<br />                S = "Insert Into book Values(" & Val(txtBno.Text) & ",'" &txtBname.Text& "','" &txtAuthor.Text& "', " & Val(txtPrice.Text) & ")"<br />                R.Open S, C, adOpenDynamic, adLockOptimistic<br />                S = "Select * From book"<br />                R.Open S, C, adOpenDynamic, adLockOptimistic<br />                If Not R.BOF And Not R.EOF Then<br />                                R.MoveFirst<br />                                txtBno.Text = R.Fields(0).Value<br />                                txtBname.Text = R.Fields(1).Value<br />                                txtAuthor.Text = R.Fields(2).Value<br />                                txtPrice.Text = R.Fields(3).Value<br />                End If<br />                MsgBox "Book Added Successfully!",vbInformation, "Book"<br />End Sub<br />Private Sub Form_Load()<br />                S = "Select * From book"<br />                C.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:UsersRamdasDocumentsbook.mdb;Persist Security Info=False"<br />                R.Open S, C, adOpenDynamic, adLockOptimistic<br />                If Not R.BOF And Not R.EOF Then<br />                                R.MoveFirst<br />                                txtBno.Text = R.Fields(0).Value<br />                                txtBname.Text = R.Fields(1).Value<br />                                txtAuthor.Text = R.Fields(2).Value<br />                                txtPrice.Text = R.Fields(3).Value<br />                End If<br />End Sub<br /><br /><br /><br /></pre>