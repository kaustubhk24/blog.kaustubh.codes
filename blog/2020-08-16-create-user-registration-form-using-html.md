---
slug: /create-user-registration-form-using-html/
title: Create User Registration form using HTML
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [HTML, JS, CSS, Javascript]
---
```html title="user-form.html"
<!DOCTYPE html>
<html>
<head>
    <title>User Registration Form</title>
</head>
<body>
    <h1 align="center"> User Registration form</h1>
    <form id="Registration" title="User Registration form">
        <table align="center" title="User Registration form">
            <tr>
                <td>
                      First Name 
                </td>
                <td>
                    <input type="text" name="FirstName" style="width: 200px" pattern="[A-Za-z]{3,10}">
                </td>
            </tr>
             <tr>
                <td>
                     Last Name  
                </td>
                <td>
                    <input type="text" name="LastName" style="width: 200px" pattern="[A-Za-z]{3,10}">
                </td>
            </tr>
             <tr>
                <td>
                     Location 
                </td>
                <td>
                    <select style="width: 200px" name="location">
                        <option name="pune" id="pune">Pune</option><br>
                        <option name="Mumbai" id="mumbai"> Mumbai</option>
                        <option name="Chennai" id="Chennai">Chennai</select>
                   </select>
                </td>
            </tr>
             <tr>
                <td>
                     Email
                </td>
                <td>
                    <input type="Email" name="Email" style="width: 200px">
                </td>
            </tr>
             <tr>
                <td>
                    Mobile Number
                </td>
                <td>
                    <input type="tel" name="MobileNo" style="width: 200px"  required >
                </td>
            </tr>
            <tr></tr>
            <tr>
                <td  colspan="2">
                    <input type="Submit" name="Submit" style="width: 200px">
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
```

## Live Preview
   <iframe src="/preview/create-user-registration-form-using.html" class="is-fullwidth" height="315px"/>