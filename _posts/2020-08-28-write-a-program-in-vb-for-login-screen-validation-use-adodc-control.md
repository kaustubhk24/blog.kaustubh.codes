---
id: 541
title: Write a program in VB for Login screen validation.(use ADODC Control)
date: 2020-08-28T14:52:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-program-in-vb-for-login-screen-validation-use-adodc-control/
permalink: /write-a-program-in-vb-for-login-screen-validation-use-adodc-control/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-program-in-vb-for-login-screen.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/8737882694396613476
rank_math_analytic_object_id:
  - "145"
categories:
  - VB.NET
---
<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-YnfOMnS5bjw/X0kaBOpuYdI/AAAAAAAAfhE/Ca-tRJoqtt4vRZ5UPN5aYm1hNCqd6bEIQCLcBGAsYHQ/s316/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="230" data-original-width="316" src="https://1.bp.blogspot.com/-YnfOMnS5bjw/X0kaBOpuYdI/AAAAAAAAfhE/Ca-tRJoqtt4vRZ5UPN5aYm1hNCqd6bEIQCLcBGAsYHQ/s400/1.png" /></a>
</div>

<pre><br />Private Sub cmdok_Click()<br />Static y As Integer<br /> Adodc1.Refresh<br />	With Adodc1.Recordset<br />	<br />	If .RecordCount > 0 Then<br />		 If .EOF = False Then<br />		.MoveFirst<br />		If !UserName = txtUsername And !Password = txtPassword Then<br />		MsgBox "Login Successful!"<br />		frmMenu.Show<br />		Unload Me<br /><br />	Else<br />		MsgBox "Invalid username/password!", vbOKOnly + vbCritical, "Access denied!"<br />		txtUsername.Text = ""<br />		txtPassword.Text = ""<br />		txtUsername.SetFocus<br />	End If<br />	End If<br />	End If<br />	End With<br />End Sub<br /><br /><br /><br /><br /><br /><br /><br /><br /></pre>