---
id: 594
title: Calculator Example using JQuery
date: 2020-08-16T12:27:00+00:00
author: kaustubh
layout: post
guid: http://blog.kaustubh.codes/calculator-example-using-jquery/
permalink: /calculator-example-using-jquery/
rank_math_internal_links_processed:
  - "1"
blogger_blog:
  - swayalgo.com
blogger_author:
  - Kaustubh Kulkarni
blogger_permalink:
  - /2020/08/calculator-example-using-jquery.html
blogger_internal:
  - /feeds/8126989156179907512/posts/default/426646316199781498
rank_math_analytic_object_id:
  - "198"
categories:
  - JQuery
---
<pre><br /><br />&lt;html>    <br />    &lt;head>    <br />    &lt;title>    <br />        Calculator    <br />    &lt;/title>    <br />    &lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js">&lt;/script>    <br />    &lt;script>    <br />     <br />        $(document).ready(function(){    <br />            $("#btnAdd").on('click',function(){    <br />                Add();    <br />            });    <br />            $("#btnSubstract").on('click',function(){    <br />                Substract();    <br />            })    <br />            $("#btnMultiply").on('click',function(){    <br />                Multiply();    <br />            })    <br />            $("#btnDivide").on('click',function(){    <br />                Divide();    <br />            })    <br />        });    <br />        function Add(){    <br />         var no1=parseInt($("#txtNo1").val());    <br />         var no2=parseInt($("#txtNo2").val());    <br />         var result =no1+no2;    <br />                   $('#result').val(+result);<br />  <br />        }    <br />        function Substract(){    <br />         var no1=parseInt($("#txtNo1").val());    <br />         var no2=parseInt($("#txtNo2").val());    <br />         var result =no1-no2;    <br />                     $('#result').val(+result);<br /> <br />        }    <br />        function Multiply(){    <br />         var no1=parseInt($("#txtNo1").val());    <br />         var no2=parseInt($("#txtNo2").val());    <br />         var result =no1*no2;    <br />                    $('#result').val(+result);<br />  <br />        }    <br />        function Divide(){    <br />         var no1=parseInt($("#txtNo1").val());    <br />         var no2=parseInt($("#txtNo2").val());    <br />         var result =no1/no2;    <br />          <br />           $('#result').val(+result);<br />  <br />        }    <br />    &lt;/script>    <br />    &lt;/head>    <br />    &lt;body>  <br />    &lt;div align="center"> <br />       First Number &lt;input type="text" id="txtNo1" placeholder="Enter first number">&lt;br>    <br />        Second Number&lt;input type="text" id="txtNo2" placeholder="Enter second number">&lt;br>   <br />         Result&lt;input type="text" id="result" >&lt;br>   <br />        &lt;input type="button" id="btnAdd" value="+">    <br />        &lt;input type="button" id="btnSubstract" value="-">    <br />        &lt;input type="button" id="btnMultiply" value="*">    <br />        &lt;input type="button" id="btnDivide" value="/">    <br />        &lt;/div> <br />    &lt;/body>    <br />    &lt;/html>  <br /><br /></pre>