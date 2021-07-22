---
slug: /program-for-quick-sort-in-cpp/
title: Program for Quick Sort in CPP
author: Kaustubh Kulkarni
author_title: Programmer
author_url: https://github.com/kaustubhk24
author_image_url: https://avatars.githubusercontent.com/u/57136442?s=400&u=681cd0b008e087edfe707cc8583d35ed30d969a1&v=4
tags: [CPP, Quick Sort]
---

```cpp title=quick-sort.cpp
#include <iostream> 
using namespace std; 
void swap(int* a, int* b) 
{ 
	int t = *a; 
	*a = *b; 
	*b = t; 
} 

int partition (int arr[], int low, int high) 
{ 
	int pivot = arr[high]; 
	int i = (low - 1); 

	for (int j = low; j <= high - 1; j++) 
	{ 
	
		if (arr[j] < pivot) 
		{ 
			i++; 
			swap(&arr[i], &arr[j]); 
		} 
	} 
	swap(&arr[i + 1], &arr[high]); 
	return (i + 1); 
} 


void quickSort(int arr[], int low, int high) 
{ 
	if (low < high) 
	{ 

		int pi = partition(arr, low, high); 

	
		quickSort(arr, low, pi - 1); 
		quickSort(arr, pi + 1, high); 
	} 
} 


void printArray(int arr[], int size) 
{ 
	int i; 
	for (i = 0; i < size; i++) 
		cout << arr[i] << " "; 
	cout << endl; 
} 

int main() 
{ 
	int n;
	cout<<"How many elements :";
	cin>>n;
	cout<<"Enter elements :";
	int arr[n];
	for(int i=0;i<n;i++)
	{
		cin>>arr[i];
	}
	quickSort(arr, 0, n - 1); 
	cout << "Sorted array: n"; 
	printArray(arr, n); 
	return 0; 
} 


```
