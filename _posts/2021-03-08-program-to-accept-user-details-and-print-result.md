---
id: 1404
title: Program To Accept User Details And Print Result
date: 2021-03-08T08:37:15+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1404
permalink: /program-to-accept-user-details-and-print-result/
rank_math_seo_score:
  - "60"
rank_math_focus_keyword:
  - Program To Accept User Details And Print Result
rank_math_internal_links_processed:
  - "1"
rank_math_primary_category:
  - "1"
rank_math_analytic_object_id:
  - "12"
categories:
  - Uncategorized
---
You have to write program to Accept student details Like Name, Marks ( Maths, Chemistry , Physics) and Print Percentage , User will dynamically select number of students ,

**For Example :**

<pre class="wp-block-code"><code>Input
1  # Number of Users
33 # Physics Marks
44 # Chemistry Marks
77 # Maths Marks
</code></pre>

This will output student result All subject&#8217;s marks and percent must be greater than equal to 35

**Constraint**

<pre class="wp-block-code"><code>0 =&gt; Marks =&gt; 100</code></pre>

Marks must be greater than equal to 0 and less than equal to 100

**Passing Criteria:**

<pre class="wp-block-code"><code>Marks &gt;=35 To Pass
Percent &gt;= To Pass</code></pre>

**Output (Expected )**<figure class="wp-block-image size-large">

<img loading="lazy" width="1024" height="243" src="http://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-1024x243.png" alt="Program To Accept User Details And Print Result" class="wp-image-1405" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-1024x243.png 1024w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-300x71.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-768x183.png 768w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-1200x285.png 1200w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12.png 1296w" sizes="(max-width: 1024px) 100vw, 1024px" /> </figure> 



**Solution**

<pre class="wp-block-code"><code># define function accept student name, get marks of 3 subjects pcm and calculate percentage
data=&#91;]
n=0
def getData():
    n=int(input("Enter Number of Students :"))
    for i in range(1,n+1):
        user={}
        user&#91;"Name"]=input("Enter student Name :")
        user&#91;"Physics"]=checkInput(int(input("Enter Physics Marks :")))
        user&#91;"Chemistry"]=checkInput(int(input("Enter chemistry Marks :")))
        user&#91;"Maths"]=checkInput(int(input("Enter math Marks :")))
        percentage=((user&#91;"Physics"]+user&#91;"Chemistry"]+user&#91;"Maths"])*100)/300
        user&#91;"Percent"]=round(float(percentage),2)
        user&#91;"Result"]=checkResult(user)
        addUser(user)
def checkResult(usr):
    flag ="PASSES"
    if usr&#91;"Physics"]&lt;35:
        flag="FAILS"
    elif usr&#91;"Chemistry"]&lt;35:
        flag="FAILS"
    elif usr&#91;"Maths"]&lt;35:
        flag="FAILS"
    elif usr&#91;"Percent"]&lt;35:
        flag="FAILS"
    return flag
def addUser(usr):
    data.append(usr)
    print("Data added successfully !!!")
def checkInput(marks):
    if marks &lt;= 100 and marks&gt;=0:
        return marks
    else:
        return checkInput(int(input("Please Do not enter Marks More than 100 and Less than 0\nPlease Enter Marks Again : ")))
def printData():
    print("_________________________________________________________________________________________________________")
    print('{:30s}{:15s}{:15s}{:15s}{:17s}{:19s} '.format("Name","Physics","Chemistry","Maths","Percent&#91;%]","Result"))
    print("_________________________________________________________________________________________________________")
    for usr in data:
        print("\n{:30s}{:5d}{:15d}{:13d}\t\t\t{}\t\t{} ".format(usr&#91;"Name"],usr&#91;"Physics"],usr&#91;"Chemistry"],usr&#91;"Maths"],str(usr&#91;"Percent"])+"%",usr&#91;"Result"]))
    print("_________________________________________________________________________________________________________")
getData()
printData()
    </code></pre>

**Output:**

<pre class="wp-block-code"><code>
Enter Number of Students :4
Enter student Name :Mahesh Disale
Enter Physics Marks :77
Enter chemistry Marks :87
Enter math Marks :99
Data added successfully !!!
Enter student Name :Nikhil Malvadkr
Enter Physics Marks :66
Enter chemistry Marks :87
Enter math Marks :93
Data added successfully !!!
Enter student Name :Sagar Chavan
Enter Physics Marks :66
Enter chemistry Marks :12
Enter math Marks :99
Data added successfully !!!
Enter student Name :Angad Yadav
Enter Physics Marks :33
Enter chemistry Marks :56
Enter math Marks :98
Data added successfully !!!
</code></pre><figure class="wp-block-image">

<img alt="" /> </figure> <figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="243" src="http://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-1024x243.png" alt="Program To Accept User Details And Print Result" class="wp-image-1405" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-1024x243.png 1024w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-300x71.png 300w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-768x183.png 768w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12-1200x285.png 1200w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-12.png 1296w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>