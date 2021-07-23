---
id: 577
title: 'Write a VB Program to accept the details of employee from user & store those details in to the database. (Don’t use Standard controls) Employee having fields emp_code, emp_name, salary, dateofjoining.'
date: 2020-08-28T14:20:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-accept-the-details-of-employee-from-user-store-those-details-in-to-the-database-dont-use-standard-controls-employee-having-fields-emp_code-emp_name-salary-dateof/
permalink: /write-a-vb-program-to-accept-the-details-of-employee-from-user-store-those-details-in-to-the-database-dont-use-standard-controls-employee-having-fields-emp_code-emp_name-salary-dateof/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-details-of_28.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/243135173496781865
rank_math_analytic_object_id:
  - "181"
categories:
  - VB.NET
---
<pre><br /><br /><br /><br />Dim C As New Connection<br />Dim R As New Recordset<br />Dim S As String<br />Private Sub cmdAdd_Click()<br />        txtEmpCode.Text = ""<br />        txtEmpName.Text = ""<br />        txtEmpSal.Text = ""<br />        txtDOJ.Text = ""<br />      <br />        txtEmpCode.SetFocus<br />End Sub<br />Private Sub cmdNext_Click()<br />    R.MoveNext<br />    If Not R.EOF Then<br />        <br />        txtEmpCode.Text = R.Fields(0).Value<br />        txtEmpName.Text = R.Fields(1).Value<br />        txtEmpSal.Text = R.Fields(2).Value<br />        txtDOJ.Text = R.Fields(3).Value<br />    Else<br />        MsgBox "No More Records!", vbInformation, "Employee"<br />    End If<br />End Sub<br />Private Sub cmdPrev_Click()<br />    R.MovePrevious<br />    If Not R.BOF Then<br />        txtEmpCode.Text = R.Fields(0).Value<br />        txtEmpName.Text = R.Fields(1).Value<br />        txtEmpSal.Text = R.Fields(2).Value<br />        txtDOJ.Text = R.Fields(3).Value<br />    Else<br />        MsgBox "No More Records!", vbInformation, "Employee"<br />    End If<br />End Sub<br />Private Sub cmdSave_Click()<br />        R.Close<br />        S = "Insert Into tblEmp Values(" & Val(txtEmpCode.Text) & ",'" & txtEmpName.Text & "'," & Val(txtEmpSal.Text) & ", '" & txtDOJ.Text & "')"<br />        R.Open S, C, adOpenDynamic, adLockOptimistic<br />        S = "Select * From tblEmp"<br />        R.Open S, C, adOpenDynamic, adLockOptimistic<br />        If Not R.BOF And Not R.EOF Then<br />            R.MoveFirst<br />            txtEmpCode.Text = R.Fields(0).Value<br />            txtEmpName.Text = R.Fields(1).Value<br />            txtEmpSal.Text = R.Fields(2).Value<br />            txtDOJ.Text = R.Fields(3).Value<br />        End If<br />            MsgBox "Employee Added Successfully!", vbInformation, "Employee"<br />End Sub<br />Private Sub Form_Load()<br />    S = "Select * From tblEmp"<br />    C.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=E:VBSlipSolSlip04Ques-2emp.mdb;Persist Security Info=False"<br />    R.Open S, C, adOpenDynamic, adLockOptimistic<br />            <br />    If Not R.BOF And Not R.EOF Then<br />        R.MoveFirst<br />        txtEmpCode.Text = R.Fields(0).Value<br />        txtEmpName.Text = R.Fields(1).Value<br />        txtEmpSal.Text = R.Fields(2).Value<br />        txtDOJ.Text = R.Fields(3).Value<br />    End If<br />End Sub<br /><br /><br /><br /><br /><br /><br /><br /><br /></pre>