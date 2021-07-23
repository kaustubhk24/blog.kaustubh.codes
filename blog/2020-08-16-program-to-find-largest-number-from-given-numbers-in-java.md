---
slug: /program-to-find-largest-number-from-given-numbers-in-java/
title: Program to Find Largest Number from Given Numbers in Java
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [Java, Large Numbers]
---

```java title=large.java
import java.util.Scanner;

class large
{
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in); 
        System.out.println("Please First Number ");
        int a = sc.nextInt();
        System.out.println("Please Second Number ");
        int b = sc.nextInt();
        System.out.println("Please Third Number ");
        int c = sc.nextInt();

        int ans;

        if(a>b && a>c)
        {
            ans=a;
        }
        else if(b>c && b>a)
        {
            ans=b;
        }
        else
        {
            ans=c;
        }
        System.out.print("Largest Number is " + ans);
    }
}
```
