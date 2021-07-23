---
slug:  /program-to-find-prime-number-in-java/
title: Program to Find Prime Number in Java
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [Java, Prime numbers]
---

```cpp title=prime.java
import java.util.Scanner;
class prime
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in); 
        System.out.println("Please enter number ");
        int num = sc.nextInt();
        //int num = 29;
        boolean flag = false;
        for(int i = 2; i <= num/2; ++i)
        {
            if(num % i == 0)
            {
                flag = true;
                break;
            }
        }

        if (!flag)
            System.out.println(num + " is a prime number.");
        else
            System.out.println(num + " is not a prime number.");

    }
}

```
