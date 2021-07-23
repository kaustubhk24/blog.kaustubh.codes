---
id: 574
title: 'Write a VB Program to accept the details of Company from user & store those details in to the database. (Don’t use Standard controls) Company having fields ccode, cname, cadddress, cphno'
date: 2020-08-28T14:22:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-accept-the-details-of-company-from-user-store-those-details-in-to-the-database-dont-use-standard-controls-company-having-fields-ccode-cname-cadddress-cphno/
permalink: /write-a-vb-program-to-accept-the-details-of-company-from-user-store-those-details-in-to-the-database-dont-use-standard-controls-company-having-fields-ccode-cname-cadddress-cphno/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-details-of_17.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/1369061131283861365
rank_math_analytic_object_id:
  - "179"
categories:
  - VB.NET
---
<pre><br />Dim ad As ADODB.Connection<br />Dim rst As ADODB.Recordset<br />Dim sql As String<br /><br />Private Sub Command1_Click()    'Add New <br /><br />	Text1.Text = ""<br />	Text2.Text = ""<br />	Text3.Text = ""<br />	Text4.Text = ""<br />End Sub<br />Private Sub Command2_Click()       'Save <br />	rst.AddNew<br />	rst!empcode = CInt(Text1.Text)<br />	rst!empname = Text2.Text<br />	rst!salary = CDbl(Text3.Text)<br />	rst!doj = CDate(Text4.Text)<br />	rst.Update<br />	rst.Requery<br />	MsgBox ("Data Inserted")<br />End Sub<br /><br />Private Sub Command3_Click()<br />	rst.MoveFirst<br />	Call loadData<br />End Sub<br /><br />Private Sub Command4_Click()<br />	rst.MoveLast<br />	Call loadData<br />End Sub<br /><br />Private Sub Form_Load()<br />	Set ad = New ADODB.Connection<br />	<br />	ad.ConnectionString = "DSN=DBemp"   'must be created before use from control panel<br />	ad.Open<br />	MsgBox ("Open")<br /><br /><br /><br /><br /><br /><br /><br /><br /></pre>