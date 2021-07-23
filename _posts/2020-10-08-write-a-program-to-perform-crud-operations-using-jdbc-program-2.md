---
id: 491
title: 'Write a program to perform CRUD operations using JDBC.  Program 2'
date: 2020-10-08T05:39:00+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/write-a-program-to-perform-crud-operations-using-jdbc-program-2/
permalink: /write-a-program-to-perform-crud-operations-using-jdbc-program-2/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/10/write-program-to-perform-crud_7.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/5412350028924170860
rank_math_seo_score:
  - "8"
saswp_custom_schema_field:
  - ""
rank_math_analytic_object_id:
  - "94"
image: http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/Screenshot-2Bfrom-2B2020-10-08-2B11-11-57.png
categories:
  - Java
  - JDBC
---
<pre>/**<br />* Q 1) Write a program to perform CRUD operations using JDBC.<br />*/<br />import java.sql.Connection;<br />import java.sql.DriverManager;<br />import java.sql.*;<br />public class assign {<br />public static void main(String[] args) {<br />Connection con = null;<br />try {<br />/**<br />* Need to execute first export<br />* CLASSPATH=$CLASSPATH:mysql-connector-java-8.0.21.jar<br />*/<br />con = DriverManager.getConnection("jdbc:mysql://localhost:3306/kaustubh?useSSL=false",<br />"kaustubh",<br />"kaustubh");<br />// connection TEST<br />System.out.println("Connection is successful !!!!!");<br />//Create table if does not exists<br />String CREATE_TABLE_SQL="CREATE TABLE IF NOT EXISTS kaustubh.student ("<br />+ "id INT,"<br />+ "sname VARCHAR(30), "<br />+ "sclass VARCHAR(30),"<br />+ "PRIMARY KEY (id))";<br /><br />//end create table if does not exists<br />Statement stmt = con.createStatement();<br />stmt.executeUpdate(CREATE_TABLE_SQL);<br />System.out.println("Table created");<br /><br />insert(con,1,"Kaustubh","MCA II");<br />insert(con,2,"Angad","MCA II");<br />insert(con,3,"Sagar","MCA III");<br />insert(con,4,"Rajesh","MCA II");<br /><br />// insert operation<br />showData(con);<br /><br />// end insert<br /><br />// Start UPDATE Statement [UPDATE OPERATION]<br />updateData(con);<br />showData(con);<br />// END UPDATE Statement [UPDATE OPERATION]<br />// DELETE OPERATION<br />delete(con);<br />showData(con);<br />// END DELETE<br />stmt.executeUpdate("DELETE from student");<br />System.out.println("Student Table DROPPED");<br /><br />} catch (Exception e) {<br />e.printStackTrace();<br />}<br />}<br />static void insert(Connection con,Integer sid,String name, String ssclass){<br />try {<br />String sql = "INSERT INTO student (id, sname, sclass) VALUES (?, ?, ?)";<br />PreparedStatement statement = con.prepareStatement(sql);<br />statement.setInt(1, sid);<br />statement.setString(2, name);<br />statement.setString(3, ssclass);<br />int rowsInserted = statement.executeUpdate();<br />if (rowsInserted &gt; 0) {<br />System.out.println("A new student was inserted successfully!");<br />}<br />} catch (Exception e) {<br />e.printStackTrace();<br />}<br />}<br />static void showData(Connection con) {<br />try {<br />String selectSql = "SELECT * FROM student";<br />Statement selectStatement = con.createStatement();<br /><br />ResultSet result = selectStatement.executeQuery(selectSql);<br />int count = 0;<br />while (result.next()) {<br />String id = result.getString("id");<br />String sname = result.getString("sname");<br />String sclass = result.getString("sclass");<br />String output = "Student #%d: %s - %s - %s";<br />System.out.println(String.format(output, ++count, id, sname, sclass));<br />}<br />} catch (Exception e) {<br />e.printStackTrace();<br />}<br />}<br />static void updateData(Connection con) {<br />try {<br />String updateSql = "UPDATE student SET sclass=? WHERE id=?";<br />PreparedStatement updateStatement = con.prepareStatement(updateSql);<br />updateStatement.setString(1, "MCA I");<br />updateStatement.setInt(2, 4);<br />int rowsUpdated = updateStatement.executeUpdate();<br />if (rowsUpdated &gt; 0) {<br />System.out.println("An existing student was updated successfully!");<br />}<br />} catch (Exception e) {<br />e.printStackTrace();<br />}<br />}<br /><br />static void delete(Connection con)<br />{<br />try {<br />String deleteSql = "DELETE FROM student WHERE id=?";<br />PreparedStatement deletestatement = con.prepareStatement(deleteSql);<br />deletestatement.setInt(1, 4);<br />int rowsDeleted = deletestatement.executeUpdate();<br />if (rowsDeleted &gt; 0) {<br />System.out.println("A Student was deleted successfully!");<br />}<br />} catch (Exception e) {<br />e.printStackTrace();<br />}<br />}<br /><br />}</pre>

Output:

![](http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/10/Screenshot-2Bfrom-2B2020-10-08-2B11-11-57.png) 