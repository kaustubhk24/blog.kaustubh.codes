---
id: 1453
title: 'function to search and display details of student whose rollno is &#8217;11&#8217; from the binary file student.dat having structure [rollno, name, class and fees].'
date: 2021-03-21T06:16:21+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=1453
permalink: /function-to-search-and-display-details-of-student-whose-rollno-is-11-from-the-binary-file-student-dat-having-structure-rollno-name-class-and-fees/
rank_math_seo_score:
  - "49"
rank_math_focus_keyword:
  - "function to search and display details of student whose rollno is '11' from the binary file student.dat having structure [rollno,name,class and fees]."
rank_math_primary_category:
  - "85"
saswp_custom_schema_field:
  - ""
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "4"
categories:
  - Python
---
<pre class="wp-block-code"><code>import pickle
filename="student.dat"
f=open(filename,"wb")
data=&#91;
    {
        'rollno':11,
        'name':'RM',
        'class':'MCA',
        'fees':54554
    },
     {
        'rollno':12,
        'name':'USER1',
        'class':'MCA',
        'fees':54554
    },
    {
        'rollno':13,
        'name':'USER2',
        'class':'MCA',
        'fees':54554
    }
]
pickle.dump(data,f)
f.close()
print("success")
infile = open(filename,'rb')
dictlist = pickle.load(infile)
infile.close()
for dict1 in dictlist:
    if (dict1&#91;"rollno"]==11):
        print("Student found with Roll No 11 , Name : {} | Class : {} | Fees {}".format((dict1&#91;"name"]),(dict1&#91;"class"]),(dict1&#91;"fees"])))</code></pre>

output:

<pre class="wp-block-code"><code>success
Student found with Roll No 11 , Name : RM | Class : MCA | Fees 54554</code></pre>