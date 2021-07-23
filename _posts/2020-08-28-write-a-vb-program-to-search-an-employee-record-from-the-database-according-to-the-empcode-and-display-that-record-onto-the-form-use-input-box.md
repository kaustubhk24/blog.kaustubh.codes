---
id: 567
title: 'Write a VB program to search an employee record from the database according to the empcode and display that record onto the form.  (Use Input box).'
date: 2020-08-28T14:28:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-program-to-search-an-employee-record-from-the-database-according-to-the-empcode-and-display-that-record-onto-the-form-use-input-box/
permalink: /write-a-vb-program-to-search-an-employee-record-from-the-database-according-to-the-empcode-and-display-that-record-onto-the-form-use-input-box/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-search-employee.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/7346770615421012177
rank_math_analytic_object_id:
  - "171"
categories:
  - VB.NET
---
<pre><br />Dim c As New Connection<br />	Dim r As New Recordset<br />	Dim sql As String<br /><br />	Private Sub cmdSearch_Click()<br />	Dim id As Integer<br />	id = Val(InputBox("enter number to search"))<br />	sql = "select * from emp where empcode like '" & id & "'"<br />	r.Close<br />	r.Opensql, c, adOpenDynamic, adLockPessimistic<br />	If Not r.EOF And Not r.BOFThen<br />	Call display<br />	Else<br />	MsgBox ("No record Found")<br />	End If<br /><br />	End Sub<br />	Private Sub Form_Load()<br />sql = "select * from emp"<br />c.Open"Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:UsersRamdasDocumentsEmployee1.mdb;Persist Security Info=False"<br />r.Opensql, c, adOpenDynamic, adLockPessimistic<br />Call display<br />End Sub<br />Private Sub display()<br />If Not r.EOFOrr.BOF Then<br />Text1.Text = r.Fields(0)<br />Text2.Text = r.Fields(1)<br />Text3.Text = r.Fields(2)<br />Text4.Text = r.Fields(3)<br />End If<br />End Sub<br /><br /><br /><br /></pre>