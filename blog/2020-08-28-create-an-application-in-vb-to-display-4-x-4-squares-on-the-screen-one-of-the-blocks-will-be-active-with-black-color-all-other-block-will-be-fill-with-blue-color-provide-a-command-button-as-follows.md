---
slug: /create-an-application-in-vb-to-display-4-x-4-squares-on-the-screen-one-of-the-blocks-will-be-active-with-black-color-all-other-block-will-be-fill-with-blue-color-provide-a-command-button-as-follows/
title: Create an application in VB 
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [VB.NET]
---

Create an application in VB to display 4 X 4 squares on the screen. One of the blocks will be active with black color all other block will be fill with blue color. Provide a command button as follows to move the active cell the active cell should be change only if it is within the boundary. 

![IMAGE](/img/blog/direction-vb.png "IMAGE")



```cpp title=file.vb
Dim i As Integer
Private Sub cmdDown_Click()
                If Text1(i).BackColor = vbDesktop And i <> 12 And Text1(i).BackColor = vbDesktop And i <> 13 And Text1(i).BackColor = vbDesktop And i <> 14 And Text1(i).BackColor = vbDesktop And i <> 15 Then
                                Text1(i).BackColor = vbActiveTitleBar
                                Text1(i + 4).BackColor = vbDesktop
                                i = i + 4
                Else
                                MsgBox ("Out of Bounds")
                End If
End Sub
Private Sub cmdLeft_Click()
                If Text1(i).BackColor = vbDesktop And i <> 0 And Text1(i).BackColor = vbDesktop And i <> 4 And Text1(i).BackColor = vbDesktop And i <> 8 And Text1(i).BackColor = vbDesktop And i <> 12 Then
                                Text1(i).BackColor = vbActiveTitleBar
                                Text1(i - 1).BackColor = vbDesktop
                                i = i - 1
                Else
                                MsgBox ("Out of Bounds")
                End If
End Sub

Private Sub cmdRight_Click()
                If Text1(i).BackColor = vbDesktop And i <> 3 And Text1(i).BackColor = vbDesktop And i <> 7 And Text1(i).BackColor = vbDesktop And i <> 11 And Text1(i).BackColor = vbDesktop And i <> 15 Then
                                Text1(i).BackColor = vbActiveTitleBar
                                Text1(i + 1).BackColor = vbDesktop
                                i = i + 1
                Else
                                MsgBox ("Out of Bounds")
                End If
End Sub

Private Sub cmdUp_Click()
                If Text1(i).BackColor = vbDesktop And i <> 0 And Text1(i).BackColor = vbDesktop And i <> 1 And Text1(i).BackColor = vbDesktop And i <> 2 And Text1(i).BackColor = vbDesktop And i <> 3 Then
                                Text1(i).BackColor = vbActiveTitleBar
                                Text1(i - 4).BackColor = vbDesktop
                                i = i - 4
                Else
                                MsgBox ("Out of Bounds")
                End If
End Sub		
```