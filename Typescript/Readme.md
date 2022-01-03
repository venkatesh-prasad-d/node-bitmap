# Bitmap 

## Target

There is given a rectangular bitmap of size n*m. Each pixel of the bitmap is either white or
black, but at least one is white. The pixel in i-th line and j-th column is called the pixel (i,j). The
distance between two pixels p1=(i1,j1) and p2=(i2,j2) is defined as d(p1,p2)=|i1-i2|+|j1-j2|.

Aim of this program:

    - reads the description of the bitmap from the standard input;
    - for each pixel, computes the distance to the nearest white;
    - writes the results to the standard output.

##  Requirements

You will need [Node.js](https://nodejs.org) and [TypeScript](https://www.typescriptlang.org) installed on your system.

```
git clone https://github.com/venkatesh-prasad-d/node-bitmap.git
cd node-bitmap
cd Typescript
npm install
npm start
```


## 🎉 Result


Input:

```shell
Enter Number of test cases: 1
Enter Bitmap size: 3 4
Enter Bitmap data: 
0001
0011
0110
```

Output:

```shell
Input Data:
0 0 0 1
0 0 1 1
0 1 1 0

Brute Force Output:
3 2 1 0
2 1 0 0
1 0 0 1

BFS output:
3 2 1 0
2 1 0 0
1 0 0 1
```

## Note

- The number of test cases t must be in the range of (1≤t≤1000)
- The line and column sizes n x m must be in the ranges of (1 <= n <= 182), (1 <= m <=182)
