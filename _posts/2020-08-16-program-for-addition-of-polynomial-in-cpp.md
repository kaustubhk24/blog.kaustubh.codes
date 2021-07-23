---
id: 604
title: Program for Addition of Polynomial in CPP
date: 2020-08-16T12:11:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/program-for-addition-of-polynomial-in-cpp/
permalink: /program-for-addition-of-polynomial-in-cpp/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/program-for-addition-of-polynomial-in.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/2317834296835227203
rank_math_analytic_object_id:
  - "208"
categories:
  - CPP
---
<pre><br />#include&lt;iostream><br />using namespace std;<br />class poly <br />{<br />    int order;<br />    int coeff[10];<br />  public:<br />        void polycreate()<br />        {<br />        int i;<br />        for(i=0; i&lt;10; i++)       <br />		coeff[i]=0;<br />        cout&lt;&lt;"Highest Order for Polynomial:";<br />        cin>>order;<br />        cout&lt;&lt;"Enter The variables:";<br />        	for(i=order; i>-1; i--)<br />        	{<br />                cin>>coeff[i];<br />            }<br />		}<br />        void poly3_order(poly f,poly s)<br />        {<br />        if(f.order==s.order)                            <br />            order=f.order;<br />        else<br />            if(f.order>s.order) <br />                order=f.order;<br />                else  if(s.order>f.order)          <br />                    order=s.order;<br />		}<br />        void polyadd(poly fp,poly sp)<br />        {<br />        int i;<br />            for(i=order; i>-1; i--)<br />            	coeff[i]=fp.coeff[i]+sp.coeff[i];<br />		}<br />        void polydisplay()<br />        {<br />        	int i;<br />            for(i=order; i>-1; i--)<br />            {<br />                if(i==order)<br />                    cout&lt;&lt;coeff[i]&lt;&lt;"x^"&lt;&lt;i&lt;&lt;" ";<br />                else<br />                    { <br />                        if(coeff[i]>=0) cout&lt;&lt;"+";<br />                        cout&lt;&lt;coeff[i]&lt;&lt;"x^"&lt;&lt;i&lt;&lt;" ";<br />                    }<br />            } <br />            cout&lt;&lt;endl;<br />		}<br />};<br />      <br />int main()<br />{<br />    poly p1,p2,p3;<br />    p1.polycreate();<br />    p2.polycreate();<br />    p3.poly3_order(p1,p2);<br />    p3.polyadd(p1,p2);<br />    cout&lt;&lt;"First Polynomial: "; <br />    p1.polydisplay();<br />    cout&lt;&lt;"Second Polynomial: ";<br />    p2.polydisplay();<br />    cout&lt;&lt;"Third Polynomial: ";                                       <br />    p3.polydisplay();<br />    return 0;<br />}<br /><br /></pre>