---
id: 550
title: 'Write a VB program to accept the details of students from user & store details in to the   database. Using data environment create report. (Use standard ADODC controls)             Student (S_Rollno, S_Name, S_Class, S_Address )'
date: 2020-08-28T14:43:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/write-a-vb-program-to-accept-the-details-of-students-from-user-store-details-in-to-the-database-using-data-environment-create-report-use-standard-adodc-controls-student-s_rollno/
permalink: /write-a-vb-program-to-accept-the-details-of-students-from-user-store-details-in-to-the-database-using-data-environment-create-report-use-standard-adodc-controls-student-s_rollno/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vb-program-to-accept-details-of_87.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2681603592745853505
rank_math_analytic_object_id:
  - "154"
categories:
  - VB.NET
---
<pre><br /><br />Private Sub cmdadd_Click()<br /><br />Adodc1.Recordset.AddNew<br /><br />Text1.SetFocus<br /><br />End Sub<br /><br />Private Sub cmdcancel_Click()<br /><br />Unload Me<br /><br />End Sub<br /><br />Private Sub cmdreport_Click()<br /><br />DataReport1.Show<br /><br />End SubEnd Sub<br />		<br /><br /><br /><br /></pre>