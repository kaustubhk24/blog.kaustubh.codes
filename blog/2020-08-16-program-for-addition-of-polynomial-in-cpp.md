---
slug: /program-for-addition-of-polynomial-in-cpp/
title: Program for Addition of Polynomial in CPP
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP]
---
```cpp title="polynomial.cpp"
#include<iostream>
using namespace std;
class poly 
{
    int order;
    int coeff[10];
  public:
        void polycreate()
        {
        int i;
        for(i=0; i<10; i++)       
		coeff[i]=0;
        cout<<"Highest Order for Polynomial:";
        cin>>order;
        cout<<"Enter The variables:";
        	for(i=order; i>-1; i--)
        	{
                cin>>coeff[i];
            }
		}
        void poly3_order(poly f,poly s)
        {
        if(f.order==s.order)                            
            order=f.order;
        else
            if(f.order>s.order) 
                order=f.order;
                else  if(s.order>f.order)          
                    order=s.order;
		}
        void polyadd(poly fp,poly sp)
        {
        int i;
            for(i=order; i>-1; i--)
            	coeff[i]=fp.coeff[i]+sp.coeff[i];
		}
        void polydisplay()
        {
        	int i;
            for(i=order; i>-1; i--)
            {
                if(i==order)
                    cout<<coeff[i]<<"x^"<<i<<" ";
                else
                    { 
                        if(coeff[i]>=0) cout<<"+";
                        cout<<coeff[i]<<"x^"<<i<<" ";
                    }
            } 
            cout<<endl;
		}
};
      
int main()
{
    poly p1,p2,p3;
    p1.polycreate();
    p2.polycreate();
    p3.poly3_order(p1,p2);
    p3.polyadd(p1,p2);
    cout<<"First Polynomial: "; 
    p1.polydisplay();
    cout<<"Second Polynomial: ";
    p2.polydisplay();
    cout<<"Third Polynomial: ";                                       
    p3.polydisplay();
    return 0;
}

```