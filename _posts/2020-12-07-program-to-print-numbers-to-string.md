---
id: 943
title: Program to Print Numbers to String
date: 2020-12-07T19:40:56+00:00
author: kaustubh
layout: post
guid: https://blog.kaustubh.codes/?p=943
permalink: /program-to-print-numbers-to-string/
rank_math_seo_score:
  - "73"
rank_math_focus_keyword:
  - Program to Print Numbers to String
rank_math_primary_category:
  - "27"
rank_math_internal_links_processed:
  - "1"
rank_math_analytic_object_id:
  - "69"
categories:
  - Java
---
We are going to write Program to Print Numbers to String, which will print from 1 to 99,99,99,999.

You can also increase it&#8217;s capacity by adding few cases in **startPrint()** method.

<pre class="wp-block-code"><code>import java.util.ArrayList;
import java.util.Scanner;
import javax.lang.model.util.ElementScanner6;
import jdk.javadoc.internal.doclets.toolkit.util.DocFinder.Output;
public class numberToWords {
    String&#91;] singles={"","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"};
    String&#91;] tens={"","Ten","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninty","Hundered"};
    String&#91;] powers={"Hundred","Thousand","Lakh","Crore"};
    ArrayList&lt;String&gt; output = new ArrayList&lt;String&gt;(200);
    int temp=0,length=0;
    public static void main(String&#91;] args) {
        System.out.println("Please  enter Number to print in word : ");
        Scanner sc =new Scanner(System.in);
        int number=sc.nextInt();
        sc.close();
        numberToWords nToWords=new numberToWords();
        nToWords.startPrint(number);
        System.out.println(String.join(" ",nToWords.output));
    }
    public void startPrint(int number)
    {
        number=removeLeadingZero(number);
        int length = (int) (Math.log10(number) + 1);
        switch(length)
        {
            case 1: output.add(singles&#91;number]);
            break;
            case 2:
            if (number&lt;21)
            {
                output.add(singles&#91;number]);
            }
            else
            {
                if(number%10==0)
                {
                    output.add(tens&#91;number/10]);
                }
                else{
                    output.add(tens&#91;number/10]);
                    output.add(singles&#91;number%10]);
                }
            }
            break;
            case 3: if(number%100==0)
            {
                output.add(singles&#91;number/100]);
                output.add(powers&#91;0]);
            }
            else{
                 temp=number/100;
                output.add(singles&#91;temp]);
                output.add(powers&#91;0]);
                startPrint(number-temp*100);
            }
           break;
            case 4: if(number%1000==0)
            {
                output.add(singles&#91;number/1000]);
                output.add(powers&#91;1]);
            }
            else{
                 temp=number/1000;
                 output.add(singles&#91;temp]);
                 output.add(powers&#91;1]);
                 startPrint(number-temp*1000);
            }
            break;
            case 5: if(number%10000==0)
            {
                output.add(tens&#91;number/10000]);
                output.add(powers&#91;1]);
            }
            else{
                 temp=number/10000;
                 output.add(tens&#91;temp]);
                 startPrint(number-temp*10000);
            }
            break;
            case 6: if(number%100000==0)
            {
                output.add(singles&#91;number/100000]);
                output.add(powers&#91;2]);
            }
            else{
                 temp=number/100000;
                 output.add(singles&#91;temp]);
                 output.add(powers&#91;2]);
                 startPrint(number-temp*100000);
            }
            break;
            case 7: if(number%1000000==0)
            {
                output.add(tens&#91;number/1000000]);
                output.add(powers&#91;2]);
            }
            else{
                 temp=number/1000000;
                 output.add(tens&#91;temp]);
                 startPrint(number-temp*1000000);
            }
            break;
            case 8: if(number%10000000==0)
            {
                output.add(singles&#91;number/10000000]);
                output.add(powers&#91;3]);
            }
            else{
                 temp=number/10000000;
                 output.add(singles&#91;temp]);
                 output.add(powers&#91;3]);
                 startPrint(number-temp*10000000);
            }
            break;
            case 9: if(number%100000000==0)
            {
                output.add(tens&#91;number/100000000]);
                output.add(powers&#91;2]);
            }
            else{
                 temp=number/100000000;
                 output.add(tens&#91;temp]);
                 startPrint(number-temp*100000000);
            }
            break;
            default: System.out.println("This number is not supported yet :");
            break;
        }
    }
    public int removeLeadingZero(int no)
    {
        String str=String.valueOf(no);
        int i = 0;
        while (i &lt; str.length() && str.charAt(i) == '0')
            i++;
        StringBuffer sb = new StringBuffer(str);
        sb.replace(0, i, "");
        return Integer.parseInt(sb.toString());
    }
}
</code></pre>

Output

<pre class="wp-block-code"><code>Please  enter Number to print in word :
9865742
Length of Given number is 7
Ninty Eight Lakh Sixty Five Thousand Seven Hundred Fourty Two
Please  enter Number to print in word :
998657412
Length of Given number is 9
Ninty Nine Crore Eighty Six Lakh Fifty Seven Thousand Four Hundred Twelve</code></pre>

Screenshot<figure class="wp-block-image size-large is-resized">

<img loading="lazy" src="http://blog.kaustubh.codes/imgs/wp-content/uploads/2020/12/image-1.png" alt="Program to Print Numbers to String" class="wp-image-944" width="662" height="92" srcset="https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/12/image-1.png 662w, https://blog.kaustubh.codes/imgs/wp-content/uploads/2020/12/image-1-300x42.png 300w" sizes="(max-width: 662px) 100vw, 662px" /> 

Looking solution to use in Android ? <a aria-label="Checkout here (opens in a new tab)" href="https://github.com/kaustubhk24/NumberToWords-Library" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">Checkout here</a>

Same Program in JavaScript <a href="https://blog.kaustubh.codes/program-to-print-numbers-to-string-in-javascript/" target="_blank" aria-label="Checkout here (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Checkout here</a>