---
id: 1411
title: Time Table in Python
date: 2021-03-08T10:42:15+00:00
author: kaustubh
layout: post
guid: https://www.swayalgo.com/?p=1411
permalink: /time-table-in-python/
rank_math_primary_category:
  - "85"
rank_math_seo_score:
  - "50"
rank_math_focus_keyword:
  - Time Table in Python
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "11"
categories:
  - Python
tags:
  - Time Table in Python
  - windows 10 notification
---
 

In this tutorial we will write a program , when you will double click on Python file it will show you Windows 10 notification and will show Today&#8217;s lecture Schedules

To use this update your subject names and lecture times accordingly

<pre class="wp-block-code"><code>import time
from datetime import datetime
# Basic Configuration
# Your Name
username="your_name"
#Timeout
timeout=30
# Schedules
todaystr=datetime.today().strftime('%A')
days=&#91;'Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
today=days.index(todaystr)
currentTime = time.strftime('%H:%M:%S')
# currentTime='14:24:00'
#print(currentTime)
# Use time in 24 Hours Format, If you have more lectures Create More variables
firstLecture='09:15:00'
firstLectureEnd='10:15:00'
secondLecture='10:25:00'
secondLectureEnd='11:25:00'
thirdLecture='11:35:00'
thirdLectureEnd='12:35:00'
fourthLecture='13:30:00'
fourthLectureEnd='14:30:00'
fifthLecture='14:40:00'
fifthLectureEnd='15:40:00'
Lectures=&#91;firstLecture,secondLecture,thirdLecture,fourthLecture,fifthLecture]
#            0     1       2      3   4         5             6          7                        8                   9
subjects=&#91;'HTML','VB.NET','Python','C++','Java', 'No Lecture','Case Study','Python Practical','Android','Guest Lecture']
schedule=&#91;
    # Sunday 0
{
    firstLecture:subjects&#91;5],
    secondLecture:subjects&#91;5],
    thirdLecture:subjects&#91;5],
    fourthLecture:subjects&#91;5],
    fifthLecture:subjects&#91;5]
},
# Sunday End
# Monday 1 starts
{
    firstLecture:subjects&#91;2],
    secondLecture:subjects&#91;3],
    thirdLecture:subjects&#91;1],
    fourthLecture:subjects&#91;6],
     fifthLecture:subjects&#91;7]
},
# Monday End
# Tuesday 2 Starts
{
    firstLecture:subjects&#91;0],
    secondLecture:subjects&#91;2],
    thirdLecture:subjects&#91;4],
    fourthLecture:subjects&#91;3],
    fifthLecture:subjects&#91;1]
},
# Tuesday End
# Wednesday 3 Starts
{
    firstLecture:subjects&#91;0],
    secondLecture:subjects&#91;1],
    thirdLecture:subjects&#91;3],
    fourthLecture:subjects&#91;4],
    fifthLecture:subjects&#91;7]
},
# Wednesday End
# Thursday 4 Starts
{
    firstLecture:subjects&#91;1],
    secondLecture:subjects&#91;4],
    thirdLecture:subjects&#91;2],
    fourthLecture:subjects&#91;6],
    fifthLecture:subjects&#91;0]
},
# Thursday End
# Friday 5 Starts
{
    firstLecture:subjects&#91;3],
    secondLecture:subjects&#91;0],
    thirdLecture:subjects&#91;4],
    fourthLecture:subjects&#91;2],
    fifthLecture:subjects&#91;8]
},
# Friday End
# Saturday 6 Starts
{
    firstLecture:subjects&#91;9],
    secondLecture:subjects&#91;9],
    thirdLecture:subjects&#91;9],
    fourthLecture:subjects&#91;9],
    fifthLecture:subjects&#91;9]
}
# All ends
]
#print(schedule&#91;today]&#91;thirdLecture])
# output=""
# for i in range(0,6):
#     output=output+"\nLectures for {} ".format(days&#91;i])+"\n"
#     for lecture in Lectures:
#         output=output+" | "+schedule&#91;i]&#91;lecture]
# print(output)
# Argument 1 : Day of the week
# Argument 2 : Lecture
#print(schedule&#91;today+1]&#91;Lectures&#91;0]] )
def nextLecture(today,currentTime):
    if currentTime&lt;firstLecture:
        return schedule&#91;today]&#91;firstLecture]
    elif currentTime&lt;secondLecture:
        return schedule&#91;today]&#91;secondLecture]
    elif currentTime&lt;thirdLecture:
        return schedule&#91;today]&#91;thirdLecture]
    elif currentTime&lt;fourthLecture:
        return schedule&#91;today]&#91;fourthLecture]
    elif currentTime&lt;fifthLecture:
        return schedule&#91;today]&#91;fifthLecture]
    else:
        return subjects&#91;5]
from win10toast import ToastNotifier
toast=ToastNotifier()
print("\nHello {},\nToday is {} & Current Time is {},\nYou have following Lectures Today\n".format(username,days&#91;today],currentTime))
for lecture in Lectures:
    print(lecture+" -> "+schedule&#91;today]&#91;lecture])
toast.show_toast("Next Lecture is About to start","Hello {}, {} Lecture is about to start".format(username,nextLecture(today, currentTime)),duration=timeout)
#print(nextLecture(today, currentTime))
</code></pre>

Output 1:  
<figure class="wp-block-image size-large">

<img loading="lazy" width="606" height="233" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/03/image-13.png" alt="" class="wp-image-1412" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-13.png 606w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-13-300x115.png 300w" sizes="(max-width: 606px) 100vw, 606px" /> </figure> 

Output 2:

This will show all lectures<figure class="wp-block-image size-large">

<img loading="lazy" width="439" height="303" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2021/03/image-14.png" alt="" class="wp-image-1413" srcset="https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-14.png 439w, https://blog.kaustubh.codes/wp-content/uploads/2021/03/image-14-300x207.png 300w" sizes="(max-width: 439px) 100vw, 439px" /> </figure>