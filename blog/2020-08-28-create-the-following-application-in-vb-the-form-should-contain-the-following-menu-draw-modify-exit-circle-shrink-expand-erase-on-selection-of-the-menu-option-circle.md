---
slug: /create-the-following-application-in-vb-the-form-should-contain-the-following-menu-draw-modify-exit-circle-shrink-expand-erase-on-selection-of-the-menu-option-circle/
title: Create the following application in VB. 
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [VB]
---
The form should contain the following menu  Draw   Modify  Exit  Circle   Shrink     Expand     Erase On selection of the menu option ‘Circle’, a circle should be drawn on the screen. The user can Shrink, Expand or Erase the circle by selecting the menu option or by displaying a popup menu after the right mouse button is clicked or pressed. The popup menu should contain the option Shrink, Expand or Erase which should perform the same operation as the menu option

```cpp title=file.vb
Private Sub Form_MouseDown(Button As Integer, Shift As Integer, X As Single, Y As    Single)
	If Button AndvbRightButton Then
		PopupMenumnuModify
	End If
End Sub

Private Sub mnuCircle_Click()
	Shape1.Visible = True
End Sub

Private Sub mnuErase_Click()
	Shape1.Visible = False
	Shape2.Visible = False
	

End Sub

Private Sub mnuExpand_Click()
	Shape2.Visible = False
	Shape1.Visible = True
	
End Sub

Private Sub mnuShrink_Click()
	Shape2.Visible = True
	Shape1.Visible = False
End Sub
```
