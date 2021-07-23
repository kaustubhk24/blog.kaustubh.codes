---
id: 583
title: 'Design an application in VB which has a Drivelistbox, Dirlistbox, Filelistbox control.           The form contains the following command buttons:             All drives: Display all drives in computer (including network drives)             All subdirectories: Display all subfolders of the currently selected directory.  All files : Display a popup menu which contains the following options: a. All document files                             b   All bitmaps c    All files           On selection of option, display the specified type.'
date: 2020-08-28T14:15:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/design-an-application-in-vb-which-has-a-drivelistbox-dirlistbox-filelistbox-control-the-form-contains-the-following-command-buttons-all-drives-display-all-drives-in-computer/
permalink: /design-an-application-in-vb-which-has-a-drivelistbox-dirlistbox-filelistbox-control-the-form-contains-the-following-command-buttons-all-drives-display-all-drives-in-computer/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - Kaustubh K..com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/design-application-in-vb-which-has.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/325064381735666700
rank_math_analytic_object_id:
  - "186"
categories:
  - VB.NET
---
Design an application in VB which has a Drivelistbox, Dirlistbox, Filelistbox control. The form contains the following command buttons: All drives: Display all drives in computer (including network drives) All subdirectories: Display all subfolders of the currently selected directory. All files : Display a popup menu which contains the following options: a. All document files b All bitmaps c All files On selection of option, display the specified type. 

<div style="clear: both;">
  <a href="https://1.bp.blogspot.com/-hJUFmFvqGSQ/X0kRT0jSBfI/AAAAAAAAff8/Z-XJOHn7Nvc_CgXMdl3K3BTUSLRe94qcACLcBGAsYHQ/s1366/1.png" style="display: block; padding: 1em 0; text-align: none;"><img alt="" border="0" width="400" data-original-height="768" data-original-width="1366" src="https://1.bp.blogspot.com/-hJUFmFvqGSQ/X0kRT0jSBfI/AAAAAAAAff8/Z-XJOHn7Nvc_CgXMdl3K3BTUSLRe94qcACLcBGAsYHQ/s400/1.png" /></a>
</div>

<pre><br />Private Sub cmdAddDrives_Click()<br />lstResult.AddItem Drive1.List(I)<br />Next<br />End Sub<br />Private Sub cmdAllFiles_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As Single)<br />If Button = 1 Then<br />PopupMenu mnuFiles<br />End If<br />End Sub<br />Private Sub cmdAllSubDirectories_Click()<br />lstResult.Clear<br />For I = 0 To Dir1.ListCount – 1<br />lstResult.AddItem Dir1.List(I)<br />Next<br />End Sub<br />Private Sub cmdClear_Click()<br />lstResult.Clear<br />End Sub<br />Private Sub Dir1_Change()<br />File1.Path = Dir1.Path<br />End Sub<br />Private Sub Drive1_Change()<br />Dir1.Path = Drive1.Drive<br />End Sub<br />Private Sub mnuAllFiles_Click()<br />File1.Pattern = “*.*”<br />For I = 0 To File1.ListCount – 1<br />lstResult.AddItem File1.List(I)<br />Next<br />End Sub<br />Private Sub mnuBitmaps_Click()<br />File1.Pattern = “*.bmp”<br />For I = 0 To File1.ListCount – 1<br />lstResult.AddItem File1.List(I)<br />Next<br />End Sub<br />Private Sub mnuText_Click()<br />File1.Pattern = “*.txt”<br />For I = 0 To File1.ListCount – 1<br />lstResult.AddItem File1.List(I)<br />Next<br />End Sub<br /><br /><br /></pre>