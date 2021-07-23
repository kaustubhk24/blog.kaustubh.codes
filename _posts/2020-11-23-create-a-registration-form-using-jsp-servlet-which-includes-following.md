---
id: 885
title: 'Create a Registration form using JSP & Servlet which includes following'
date: 2020-11-23T17:11:33+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=885
permalink: /create-a-registration-form-using-jsp-servlet-which-includes-following/
rank_math_internal_links_processed:
  - "1"
rank_math_primary_category:
  - "27"
rank_math_seo_score:
  - "6"
rank_math_analytic_object_id:
  - "77"
categories:
  - Java
---
 

Create a Registration form using JSP & Servlet which includes following  
field:

  1. First Name
  2. Last Name
  3. Username
  4. Password
  5. Address
  6. Contact Number  
    After filling all these details we have submit button, on click of that button all  
    the details will be stored.  
    Now, create one more JSP page, where all details will be verified and after  
    verification it will display one WELCOME message.

<pre class="wp-block-code"><code>register.jsp</code></pre>

<pre class="wp-block-code"><code>&lt;%@ page language="java" contentType="text/html;
charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
&lt;meta charset="ISO-8859-1">
&lt;title>Registration Page&lt;/title>
&lt;/head>
&lt;body>
&lt;h1>Registration form&lt;/h1>
 &lt;FORM action="registervalid" method="post">
 First Name: &lt;input type="text"
name="fsNm"> &lt;br>
 Last Name: &lt;input type="text"
name="lsNm"> &lt;br>
 Address: &lt;input type="text"
name="add">&lt;br>
 Contact number: &lt;input type="text"
name="mob" maxlength="10" pattern="&#91;0-9]{10}">&lt;br>
 Email: &lt;input type="text"
name="eml">&lt;br>
 User Name: &lt;input type="text"
name="usNm">&lt;br>
 Password: &lt;input type="password"
name="pass">&lt;br>
 &lt;input type="submit" value="submit">&lt;br>
 &lt;input type=reset value=reset>
&lt;/FORM>
&lt;/body>
&lt;/html></code></pre>

<pre class="wp-block-code"><code>register_valid.java</code></pre>

<pre class="wp-block-code"><code>package javaAssignmen10;
import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
@WebServlet("/registervalid")//used as an annotation(To
substitute the use of web.xml)
public class Register_Valid extends HttpServlet {
private static final long serialVersionUID = 1L;
protected void doPost(HttpServletRequest req,
HttpServletResponse res) throws ServletException,
IOException {
res.setContentType("text/html");
PrintWriter out=res.getWriter();
String first_name = req.getParameter("fsNm");
String last_name = req.getParameter("lsNm");
String username = req.getParameter("usNm");
String password = req.getParameter("pass");
String address = req.getParameter("add");
String contact = req.getParameter("mob");
String email = req.getParameter("eml");
if(first_name.isEmpty() || last_name.isEmpty() ||
username.isEmpty() ||
 password.isEmpty() || address.isEmpty() ||
contact.isEmpty() || email.isEmpty())
{
res.sendRedirect("Register.jsp");//if one or
more fields are blank it will reopen register page
}
else
{
HttpSession
session=req.getSession();//creating a session
session.setAttribute("firstName",
first_name);//setting an attribute to session
//using JDBC to store database
try {
Connection
con=DriverManager.getConnection("jdbc:mysql://localhost:33
0/assignment","root","psk180898");
String insert_data="Insert into
Userdata values(?,?,?,?,?,?,?)";
PreparedStatement
ps=con.prepareStatement(insert_data);
ps.setString(1,first_name);
ps.setString(2,last_name);
ps.setString(3,username);
ps.setString(4,password);
ps.setString(5,address);
ps.setString(6,contact);
ps.setString(7,email);
ps.executeUpdate();
}
catch(Exception e)
{
e.printStackTrace();
}
res.sendRedirect("Welcome.jsp");//open
welcome page after success
}
}
}
</code></pre>

<pre class="wp-block-code"><code>welcome.jsp</code></pre>

<pre class="wp-block-code"><code>&lt;%@ page language="java" contentType="text/html;
charset=ISO-8859-1"
 pageEncoding="ISO-8859-1"%>
&lt;!DOCTYPE html>
&lt;html>
&lt;head>
&lt;meta charset="ISO-8859-1">
&lt;title>Welcome&lt;/title>
&lt;/head>
&lt;body>
&lt;%
 if(session.getAttribute("firstName")==null)
{
response.sendRedirect("Register.jsp");//This is to prevent
users from directly accessing webpage
}
%>
&lt;h1>Welcome ${firstName}&lt;/h1>
&lt;h3>You have successfully registered for
Competition!&lt;/h3>
&lt;/body>
&lt;/html></code></pre>