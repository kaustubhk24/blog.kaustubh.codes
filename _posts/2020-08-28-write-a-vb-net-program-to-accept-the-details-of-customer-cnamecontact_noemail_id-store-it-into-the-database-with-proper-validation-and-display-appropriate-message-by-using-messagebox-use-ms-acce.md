---
id: 518
title: Write a VB.NET program to accept the details of customer (CName,Contact_No,Email_id). Store it into the database with proper validation and display appropriate message by using Messagebox.(Use MS Access )
date: 2020-08-28T15:25:00+00:00
author: kaustubh
layout: post
guid: https://swayalgo.com/write-a-vb-net-program-to-accept-the-details-of-customer-cnamecontact_noemail_id-store-it-into-the-database-with-proper-validation-and-display-appropriate-message-by-using-messagebox-use-ms-acce/
permalink: /write-a-vb-net-program-to-accept-the-details-of-customer-cnamecontact_noemail_id-store-it-into-the-database-with-proper-validation-and-display-appropriate-message-by-using-messagebox-use-ms-acce/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/write-vbnet-program-to-accept-details.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/3912966312136633201
rank_math_analytic_object_id:
  - "121"
categories:
  - VB.NET
---
Write a VB.NET program to accept the details of customer (CName,Contact\_No,Email\_id). Store it into the database with proper validation and display appropriate message by using Messagebox.(Use MS Access ) 

<pre><br />PublicClass Form1<br />PrivateSub CustomerBindingNavigatorSaveItem_Click(ByVal sender As System.Object,<br />ByVal e As System.EventArgs) Handles CustomerBindingNavigatorSaveItem.Click<br />Me.Validate()<br />Me.CustomerBindingSource.EndEdit()<br />Me.TableAdapterManager.UpdateAll(Me.CustDataSet)<br />EndSub<br />PrivateSub Form1_Load(ByVal sender As System.Object, ByVal e As System.EventArgs)<br />HandlesMyBase.Load<br />'TODO: This line of code loads data into the 'CustDataSet.customer' table. You<br />can move, or remove it, as needed.<br />Me.CustomerTableAdapter.Fill(Me.CustDataSet.customer)<br />EndSub<br />PrivateSub btninsert_Click(ByVal sender As System.Object, ByVal e As<br />System.EventArgs) Handles btninsert.Click<br />IfMe.CustomerTableAdapter.InsertQuery(txtname.Text, txtcontact.Text,<br />txtemail.Text) Then<br /> MsgBox("Data inserted")<br />Me.CustomerTableAdapter.Fill(Me.CustDataSet.customer)<br />Else<br /> MsgBox("Data not inserted")<br />EndIf<br />EndSub<br />EndClass<br /></pre>