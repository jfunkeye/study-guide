export const logicalReasoning = {
  id: 'logical-reasoning',
  title: 'Logical Reasoning',
  icon: 'bi-brain',
  color: '#dc2626',
  description: 'Sharpen number patterns, deductive reasoning, and critical thinking skills with detailed examples and step-by-step solutions.',
  topics: [
    {
      id: 'number-patterns',
      title: 'Number Patterns & Sequences',
      content: `
### What is Number Pattern Recognition?

Number pattern recognition is the ability to identify the underlying rule or relationship in a sequence of numbers. This skill is essential for:
- **Problem solving**: Finding solutions systematically
- **Data analysis**: Identifying trends in data
- **Programming**: Creating efficient algorithms
- **Engineering**: Analyzing sensor data and signals
- **Mathematics**: Understanding mathematical relationships

### The Pattern Detection Framework

\`\`\`
Step 1: OBSERVE - Write down the sequence
Step 2: CHECK DIFFERENCES - Find differences between terms
Step 3: CHECK RATIOS - Find ratios between terms
Step 4: CHECK ALTERNATE - Look at odd/even positions separately
Step 5: CHECK SPECIAL - Look for squares, cubes, primes, Fibonacci
Step 6: CHECK COMBINED - Look for alternating operations
Step 7: VERIFY - Test the pattern on ALL given terms
Step 8: APPLY - Find the missing term(s)
\`\`\`

---

### Types of Number Patterns

#### 1. Arithmetic Sequences (Linear Patterns)

**Definition**: Each term increases or decreases by a constant value (common difference).

**Formula**:
\`\`\`
aₙ = a₁ + (n-1)d
Where:
a₁ = First term
d = Common difference
n = Term position

Sum of first n terms: Sₙ = n/2 × (a₁ + aₙ)
\`\`\`

**Detailed Example 1: Simple Arithmetic**
*5, 10, 15, 20, ?*

\`\`\`
Step 1: Check the difference between consecutive terms
10 - 5 = 5
15 - 10 = 5
20 - 15 = 5

Step 2: Identify the pattern
Common difference = +5

Step 3: Apply the pattern
20 + 5 = 25

Answer: 25
\`\`\`

**Detailed Example 2: Negative Difference**
*30, 25, 20, 15, ?*

\`\`\`
Step 1: Check the difference
25 - 30 = -5
20 - 25 = -5
15 - 20 = -5

Step 2: Apply the pattern
15 + (-5) = 10

Answer: 10
\`\`\`

**Detailed Example 3: Find the Missing Term**
*4, 7, ?, 13, 16*

\`\`\`
Step 1: Check differences
7 - 4 = 3
13 - ? = 3 → ? = 10
16 - 13 = 3

Step 2: Verify
7, 10, 13 (differences of 3) ✓

Answer: 10
\`\`\`

**Detailed Example 4: Find Missing Terms**
*2, 5, 8, ?, 14, 17, ?, 23*

\`\`\`
Step 1: Identify the pattern
5 - 2 = 3
8 - 5 = 3
Pattern: +3 each time

Step 2: Apply the pattern
8 + 3 = 11 (first missing)
17 + 3 = 20 (second missing)

Check: 14, 17, 20, 23 ✓

Answer: 11 and 20
\`\`\`

**Detailed Example 5: Sum of Arithmetic Sequence**
*Find the sum of the first 10 terms: 3, 7, 11, 15, ...*

\`\`\`
Step 1: Identify a₁ and d
a₁ = 3
d = 4

Step 2: Find the 10th term
a₁₀ = a₁ + (10-1)d
a₁₀ = 3 + 9 × 4 = 3 + 36 = 39

Step 3: Calculate sum
S₁₀ = 10/2 × (3 + 39) = 5 × 42 = 210

Answer: 210
\`\`\`

---

#### 2. Geometric Sequences (Exponential Patterns)

**Definition**: Each term is multiplied by a constant value (common ratio).

**Formula**:
\`\`\`
aₙ = a₁ × r^(n-1)
Where:
a₁ = First term
r = Common ratio
n = Term position

Sum of first n terms: Sₙ = a₁(1 - rⁿ)/(1 - r) for r < 1
Sₙ = a₁(rⁿ - 1)/(r - 1) for r > 1
\`\`\`

**Detailed Example 6: Simple Geometric**
*3, 6, 12, 24, ?*

\`\`\`
Step 1: Check the ratio between consecutive terms
6 ÷ 3 = 2
12 ÷ 6 = 2
24 ÷ 12 = 2

Step 2: Apply the pattern
24 × 2 = 48

Answer: 48
\`\`\`

**Detailed Example 7: Fractional Ratio**
*64, 32, 16, 8, ?*

\`\`\`
Step 1: Check the ratio
32 ÷ 64 = 0.5
16 ÷ 32 = 0.5
8 ÷ 16 = 0.5

Step 2: Apply the pattern
8 × 0.5 = 4

Answer: 4
\`\`\`

**Detailed Example 8: Find the Missing Term**
*3, 9, 27, ?, 243*

\`\`\`
Step 1: Check the ratio
9 ÷ 3 = 3
27 ÷ 9 = 3
? ÷ 27 = 3 → ? = 81
243 ÷ 81 = 3

Answer: 81
\`\`\`

**Detailed Example 9: Sum of Geometric Sequence**
*Find the sum: 1 + 2 + 4 + 8 + 16 + 32*

\`\`\`
Step 1: Identify a₁, r, n
a₁ = 1
r = 2
n = 6

Step 2: Apply sum formula (r > 1)
Sₙ = a₁(rⁿ - 1)/(r - 1)
S₆ = 1(2⁶ - 1)/(2 - 1) = (64 - 1)/1 = 63

Answer: 63
\`\`\`

**Detailed Example 10: Infinite Geometric Series**
*Find the sum of infinite series: 1 + 1/2 + 1/4 + 1/8 + ...*

\`\`\`
Step 1: Identify a₁ and r
a₁ = 1
r = 1/2

Step 2: Apply infinite sum formula (|r| < 1)
S∞ = a₁/(1 - r)
S∞ = 1/(1 - 1/2) = 1/(1/2) = 2

Answer: 2
\`\`\`

---

#### 3. Fibonacci Sequences

**Definition**: Each term is the sum of the two previous terms.

**Formula**:
\`\`\`
F₁ = 1, F₂ = 1
Fₙ = Fₙ₋₁ + Fₙ₋₂ for n ≥ 3
\`\`\`

**Example**: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

**Detailed Example 11: Fibonacci**
*1, 1, 2, 3, 5, 8, ?*

\`\`\`
Step 1: Verify the pattern
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8

Step 2: Apply the pattern
5 + 8 = 13

Answer: 13
\`\`\`

**Detailed Example 12: Fibonacci-like**
*2, 3, 5, 8, 13, ?*

\`\`\`
Step 1: Check the relationship
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13

Step 2: Apply the pattern
8 + 13 = 21

Answer: 21
\`\`\`

**Detailed Example 13: Find Missing in Fibonacci-like**
*3, 5, 8, ?, 21, 34*

\`\`\`
Step 1: Check the relationship
3 + 5 = 8
5 + 8 = 13
8 + 13 = 21
13 + 21 = 34

Answer: 13
\`\`\`

---

#### 4. Square and Cube Patterns

**Definition**: Terms are perfect squares or cubes.

**Square Numbers**:
\`\`\`
1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, ...
(1², 2², 3², 4², 5², 6², 7², 8², 9², 10², 11², 12², 13², 14², 15²)
\`\`\`

**Cube Numbers**:
\`\`\`
1, 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1331, 1728, ...
(1³, 2³, 3³, 4³, 5³, 6³, 7³, 8³, 9³, 10³, 11³, 12³)
\`\`\`

**Detailed Example 14: Square Numbers**
*1, 4, 9, 16, 25, ?*

\`\`\`
Step 1: Identify the pattern
1 = 1²
4 = 2²
9 = 3²
16 = 4²
25 = 5²

Step 2: Apply the pattern
Next term = 6² = 36

Answer: 36
\`\`\`

**Detailed Example 15: Cube Numbers**
*1, 8, 27, 64, 125, ?*

\`\`\`
Step 1: Identify the pattern
1 = 1³
8 = 2³
27 = 3³
64 = 4³
125 = 5³

Step 2: Apply the pattern
Next term = 6³ = 216

Answer: 216
\`\`\`

**Detailed Example 16: Square Numbers with Gap**
*4, 9, 16, 25, 36, ?*

\`\`\`
Step 1: Identify the pattern
4 = 2²
9 = 3²
16 = 4²
25 = 5²
36 = 6²

Step 2: Apply the pattern
Next term = 7² = 49

Answer: 49
\`\`\`

---

#### 5. Patterns with Changing Differences

**Definition**: The difference between terms follows its own pattern.

**Detailed Example 17: Increasing Differences**
*2, 5, 10, 17, 26, ?*

\`\`\`
Step 1: Find the differences
5 - 2 = 3
10 - 5 = 5
17 - 10 = 7
26 - 17 = 9

Step 2: Identify the pattern in differences
3, 5, 7, 9, ... (add 2 each time)

Step 3: Apply the pattern
Next difference = 9 + 2 = 11
Next term = 26 + 11 = 37

Answer: 37
\`\`\`

**Detailed Example 18: Triangular Numbers**
*1, 3, 6, 10, 15, 21, ?*

\`\`\`
Step 1: Find the differences
3 - 1 = 2
6 - 3 = 3
10 - 6 = 4
15 - 10 = 5
21 - 15 = 6

Step 2: Identify the pattern
2, 3, 4, 5, 6 (consecutive integers)

Step 3: Apply the pattern
Next difference = 7
21 + 7 = 28

Answer: 28
\`\`\`

**Detailed Example 19: Changing by Increasing Amounts**
*10, 13, 18, 25, 34, 45, ?*

\`\`\`
Step 1: Find the differences
13 - 10 = 3
18 - 13 = 5
25 - 18 = 7
34 - 25 = 9
45 - 34 = 11

Step 2: Identify the pattern
3, 5, 7, 9, 11 (odd numbers, add 2 each time)

Step 3: Apply the pattern
Next difference = 13
45 + 13 = 58

Answer: 58
\`\`\`

**Detailed Example 20: Decreasing Differences**
*50, 44, 39, 35, 32, 30, ?*

\`\`\`
Step 1: Find the differences
44 - 50 = -6
39 - 44 = -5
35 - 39 = -4
32 - 35 = -3
30 - 32 = -2

Step 2: Identify the pattern
-6, -5, -4, -3, -2 (increase by 1)

Step 3: Apply the pattern
Next difference = -1
30 + (-1) = 29

Answer: 29
\`\`\`

---

#### 6. Alternating Sequences

**Definition**: Two or more patterns interleaved.

**Detailed Example 21: Two Interleaved Sequences**
*1, 4, 2, 8, 3, 12, 4, 16, ?*

\`\`\`
Step 1: Separate into two sequences
Position 1,3,5,7,9: 1, 2, 3, 4, ? (add 1)
Position 2,4,6,8: 4, 8, 12, 16 (add 4)

Step 2: Determine the next term (position 9)
Position 9 belongs to sequence 1: 4 + 1 = 5

Answer: 5
\`\`\`

**Detailed Example 22: Three Interleaved Sequences**
*1, 2, 3, 2, 4, 6, 3, 6, 9, ?*

\`\`\`
Step 1: Separate into three sequences
Position 1,4,7,10: 1, 2, 3, ? (add 1)
Position 2,5,8: 2, 4, 6 (add 2)
Position 3,6,9: 3, 6, 9 (add 3)

Step 2: Determine the next term (position 10)
Position 10 belongs to sequence 1: 3 + 1 = 4

Answer: 4
\`\`\`

**Detailed Example 23: Complex Alternating**
*2, 3, 6, 8, 12, 15, 20, 24, ?*

\`\`\`
Step 1: Separate into two sequences
Position 1,3,5,7: 2, 6, 12, 20
Position 2,4,6,8: 3, 8, 15, 24

Step 2: Analyze each sequence
Sequence 1 differences: 4, 6, 8 (add 2 each time)
Sequence 2 differences: 5, 7, 9 (add 2 each time)

Step 3: Determine the next term (position 9)
Sequence 1 next difference = 10
20 + 10 = 30

Answer: 30
\`\`\`

---

#### 7. Prime Number Patterns

**Definition**: Numbers that have exactly two factors: 1 and themselves.

**Prime Numbers**: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, ...

**Detailed Example 24: Prime Sequence**
*2, 3, 5, 7, 11, 13, ?*

\`\`\`
Step 1: Identify the pattern
These are prime numbers

Step 2: Find the next prime after 13
Next prime = 17

Answer: 17
\`\`\`

**Detailed Example 25: Prime Numbers with Gap**
*2, 3, 5, 7, 11, 13, 17, 19, ?*

\`\`\`
Step 1: Identify the pattern
Prime numbers in order

Step 2: Find the next prime after 19
Next prime = 23

Answer: 23
\`\`\`

---

#### 8. Composite Operations

**Definition**: Operations alternate between different functions.

**Detailed Example 26: Alternating Operations**
*1, 2, 4, 7, 11, 16, ?*

\`\`\`
Step 1: Check differences
2 - 1 = 1
4 - 2 = 2
7 - 4 = 3
11 - 7 = 4
16 - 11 = 5

Step 2: Identify the pattern
1, 2, 3, 4, 5 (consecutive integers)

Step 3: Apply the pattern
Next difference = 6
16 + 6 = 22

Answer: 22
\`\`\`

**Detailed Example 27: × and + Alternating**
*2, 3, 6, 7, 14, 15, ?*

\`\`\`
Step 1: Identify the operations
2 + 1 = 3
3 × 2 = 6
6 + 1 = 7
7 × 2 = 14
14 + 1 = 15

Step 2: Pattern is: +1, ×2, +1, ×2, ...

Step 3: Apply the pattern
15 × 2 = 30

Answer: 30
\`\`\`

**Detailed Example 28: × and - Alternating**
*3, 6, 10, 20, 24, 48, ?*

\`\`\`
Step 1: Identify the operations
3 × 2 = 6
6 + 4 = 10
10 × 2 = 20
20 + 4 = 24
24 × 2 = 48

Step 2: Pattern is: ×2, +4, ×2, +4, ...

Step 3: Apply the pattern
48 + 4 = 52

Answer: 52
\`\`\`

**Detailed Example 29: +1, ×2 Sequence**
*1, 2, 4, 5, 10, 11, 22, ?*

\`\`\`
Step 1: Identify the operations
1 + 1 = 2
2 × 2 = 4
4 + 1 = 5
5 × 2 = 10
10 + 1 = 11
11 × 2 = 22

Step 2: Pattern is: +1, ×2, +1, ×2, ...

Step 3: Apply the pattern
22 + 1 = 23

Answer: 23
\`\`\`

**Detailed Example 30: Factorial Pattern**
*1, 2, 6, 24, 120, 720, ?*

\`\`\`
Step 1: Identify the pattern
1 = 1!
2 = 2!
6 = 3!
24 = 4!
120 = 5!
720 = 6!

Step 2: Apply the pattern
Next term = 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040

Answer: 5040
\`\`\`

---

#### 9. Other Common Patterns

**Detailed Example 31: n² + n Pattern**
*2, 6, 12, 20, 30, 42, ?*

\`\`\`
Step 1: Identify the pattern
2 = 1² + 1 = 1 × 2
6 = 2² + 2 = 2 × 3
12 = 3² + 3 = 3 × 4
20 = 4² + 4 = 4 × 5
30 = 5² + 5 = 5 × 6
42 = 6² + 6 = 6 × 7

Step 2: Apply the pattern
Next term = 7² + 7 = 49 + 7 = 56
OR 7 × 8 = 56

Answer: 56
\`\`\`

**Detailed Example 32: n² - n Pattern**
*0, 2, 6, 12, 20, 30, ?*

\`\`\`
Step 1: Identify the pattern
0 = 1² - 1 = 0 × 1
2 = 2² - 2 = 1 × 2
6 = 3² - 3 = 2 × 3
12 = 4² - 4 = 3 × 4
20 = 5² - 5 = 4 × 5
30 = 6² - 6 = 5 × 6

Step 2: Apply the pattern
Next term = 7² - 7 = 49 - 7 = 42
OR 6 × 7 = 42

Answer: 42
\`\`\`

**Detailed Example 33: Powers of 2**
*2, 4, 8, 16, 32, 64, ?*

\`\`\`
Step 1: Identify the pattern
2 = 2¹
4 = 2²
8 = 2³
16 = 2⁴
32 = 2⁵
64 = 2⁶

Step 2: Apply the pattern
Next term = 2⁷ = 128

Answer: 128
\`\`\`

**Detailed Example 34: Powers of 3**
*3, 9, 27, 81, 243, ?*

\`\`\`
Step 1: Identify the pattern
3 = 3¹
9 = 3²
27 = 3³
81 = 3⁴
243 = 3⁵

Step 2: Apply the pattern
Next term = 3⁶ = 729

Answer: 729
\`\`\`

---

### Practice Questions with Detailed Solutions

**Arithmetic Sequences:**
1. 2, 6, 10, 14, 18, ?
   *Solution: d = 4; 18 + 4 = 22*

2. 7, 14, 21, 28, 35, ?
   *Solution: d = 7; 35 + 7 = 42*

3. 40, 35, 30, 25, 20, ?
   *Solution: d = -5; 20 - 5 = 15*

4. 8, ?, 16, 20, 24
   *Solution: d = 4; 8 + 4 = 12; Check: 12,16,20,24 ✓*

**Geometric Sequences:**
5. 2, 6, 18, 54, ?
   *Solution: r = 3; 54 × 3 = 162*

6. 81, 27, 9, 3, ?
   *Solution: r = 1/3; 3 × 1/3 = 1*

7. 5, 10, 20, 40, ?
   *Solution: r = 2; 40 × 2 = 80*

8. 3, ?, 27, 81, 243
   *Solution: r = 3; 3 × 3 = 9; Check: 3,9,27,81,243 ✓*

**Fibonacci-like:**
9. 1, 3, 4, 7, 11, 18, ?
   *Solution: 11 + 18 = 29*

10. 2, 5, 7, 12, 19, 31, ?
    *Solution: 19 + 31 = 50*

**Square/Cube Patterns:**
11. 1, 4, 9, 16, 25, 36, ?
    *Solution: 7² = 49*

12. 1, 8, 27, 64, 125, ?
    *Solution: 6³ = 216*

13. 4, 9, 16, 25, 36, ?
    *Solution: 7² = 49*

**Increasing Differences:**
14. 1, 3, 6, 10, 15, 21, ?
    *Solution: Differences: 2,3,4,5,6; Next difference = 7; 21 + 7 = 28*

15. 2, 5, 10, 17, 26, 37, ?
    *Solution: Differences: 3,5,7,9,11; Next difference = 13; 37 + 13 = 50*

16. 10, 13, 18, 25, 34, 45, ?
    *Solution: Differences: 3,5,7,9,11; Next difference = 13; 45 + 13 = 58*

**Alternating Sequences:**
17. 1, 2, 3, 4, 5, 6, 7, 8, ?
    *Solution: 9 (simple ascending)*

18. 2, 5, 4, 10, 6, 15, 8, 20, ?
    *Solution: Two sequences: odd positions: 2,4,6,8 → +2; even positions: 5,10,15,20 → +5; Next (position 9): 8 + 2 = 10*

19. 1, 4, 2, 8, 3, 12, 4, 16, ?
    *Solution: Two sequences: odd positions: 1,2,3,4 → +1; even positions: 4,8,12,16 → +4; Next (position 9): 4 + 1 = 5*

**Composite Operations:**
20. 1, 2, 4, 7, 11, 16, ?
    *Solution: Differences: 1,2,3,4,5; Next difference = 6; 16 + 6 = 22*

21. 3, 8, 18, 38, 78, ?
    *Solution: ×2 + 2: 3→8, 8→18, 18→38, 38→78; Next: 78 × 2 + 2 = 158*

22. 2, 6, 12, 20, 30, 42, ?
    *Solution: n(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42; Next: 7×8 = 56*

**Prime Numbers:**
23. 2, 3, 5, 7, 11, 13, 17, ?
    *Solution: Next prime = 19*

24. 2, 3, 5, 7, 11, 13, 17, 19, ?
    *Solution: Next prime = 23*

**Advanced Pattern Recognition:**
25. 1, 3, 7, 15, 31, 63, 127, ?
    *Solution: ×2 + 1: 1→3, 3→7, 7→15, etc.; Next: 127 × 2 + 1 = 255*

26. 1, 2, 5, 10, 17, 26, 37, ?
    *Solution: n² + 1: 0²+1=1, 1²+1=2, 2²+1=5, 3²+1=10, etc.; Next: 7²+1 = 50*

27. 2, 6, 14, 30, 62, 126, ?
    *Solution: ×2 + 2: 2→6, 6→14, 14→30, etc.; Next: 126 × 2 + 2 = 254*

28. 1, 2, 6, 24, 120, 720, ?
    *Solution: Factorial: 1!, 2!, 3!, 4!, 5!, 6!; Next: 7! = 5040*

---

### Quick Reference: Common Number Patterns

| Pattern Type | Description | Example |
|--------------|-------------|---------|
| Arithmetic | Add constant | 2,5,8,11,14 |
| Geometric | Multiply by constant | 3,6,12,24,48 |
| Fibonacci | Sum of previous two | 1,1,2,3,5,8 |
| Square Numbers | n² | 1,4,9,16,25 |
| Cube Numbers | n³ | 1,8,27,64,125 |
| Triangular | n(n+1)/2 | 1,3,6,10,15 |
| Prime Numbers | Prime sequence | 2,3,5,7,11,13 |
| Factorial | n! | 1,2,6,24,120 |
| Powers of 2 | 2ⁿ | 2,4,8,16,32 |
| n² + n | n(n+1) | 2,6,12,20,30 |

---

### Common Mistakes in Number Patterns

 **Wrong**: Assuming the first pattern you see is correct
 **Correct**: Check if the pattern works for ALL terms

 **Wrong**: Using differences but missing alternate patterns
 **Correct**: Separate into interleaved sequences when needed

 **Wrong**: Forgetting to check if numbers are prime, square, or cube
 **Correct**: Know common number properties and test for them

 **Wrong**: Looking only at forward differences
 **Correct**: Sometimes the pattern is in the relationship between terms

 **Wrong**: Overcomplicating when a simple pattern exists
 **Correct**: Always look for the simplest pattern that fits all terms

 **Wrong**: Not checking arithmetic for accuracy
 **Correct**: Always verify your calculations carefully

---

### Problem-Solving Strategy for Number Patterns

\`\`\`
Step 1: Write down the sequence
Step 2: Check the difference between consecutive terms
Step 3: If differences are constant → Arithmetic sequence
Step 4: If ratios are constant → Geometric sequence
Step 5: If differences follow a pattern → Increasing/decreasing differences
Step 6: Check for interleaved sequences (odd/even positions)
Step 7: Consider square, cube, prime, or factorial patterns
Step 8: Consider Fibonacci or Fibonacci-like patterns
Step 9: Consider composite operations (+, -, ×, ÷)
Step 10: Test your pattern on ALL given terms
Step 11: Apply to find the missing term(s)
Step 12: Verify the answer makes sense in context
\`\`\`
`
    },
    {
      id: 'deductive-reasoning',
      title: 'Deductive Reasoning & Logic',
      content: `
### What is Deductive Reasoning?

**Deductive reasoning** is the process of reasoning from general principles to specific conclusions. It's a "top-down" approach where you start with a general statement or premise and use logic to reach a specific conclusion.

### Key Concepts

- **Premise**: A statement that is assumed to be true
- **Conclusion**: The logical result of the premises
- **Validity**: A deductive argument is valid if the conclusion follows logically from the premises
- **Soundness**: A deductive argument is sound if it is valid AND the premises are true
- **Syllogism**: A deductive argument with two premises and a conclusion

### Why Deductive Reasoning Matters

\`\`\`
- Engineering: Applying scientific principles to solve problems
- Law: Applying laws to specific cases
- Medicine: Diagnosing from symptoms
- Programming: Writing conditional logic
- Everyday life: Making logical decisions
\`\`\`

---

### Types of Deductive Arguments

#### 1. Syllogisms

A syllogism is a deductive argument with two premises and a conclusion.

**Detailed Example 1: Simple Syllogism**
*All engineers must have safety training. John is an engineer. Therefore, John has safety training.*

\`\`\`
Step 1: Identify the premises
Premise 1: All engineers must have safety training
Premise 2: John is an engineer

Step 2: Draw the conclusion
Conclusion: John has safety training

Answer: John has safety training (valid and sound)
\`\`\`

**Detailed Example 2: Syllogism with "Some"**
*Some pumps are centrifugal. All centrifugal pumps are efficient. Therefore, some pumps are efficient.*

\`\`\`
Step 1: Identify the premises
Premise 1: Some pumps are centrifugal
Premise 2: All centrifugal pumps are efficient

Step 2: Draw the conclusion
The pumps that are centrifugal are efficient
Therefore, some pumps are efficient

Answer: Some pumps are efficient
\`\`\`

**Detailed Example 3: Syllogism with "No"**
*No valves are left open without permission. This valve is open. Therefore, this valve has permission.*

\`\`\`
Step 1: Identify the premises
Premise 1: No valves are left open without permission
Premise 2: This valve is open

Step 2: Draw the conclusion
Since no valves can be open without permission, and this valve is open, it must have permission

Answer: The valve has permission to be open
\`\`\`

**Detailed Example 4: Invalid Syllogism**
*All dogs are animals. All cats are animals. Therefore, all dogs are cats.*

\`\`\`
Step 1: Identify the premises
Premise 1: All dogs are animals
Premise 2: All cats are animals

Step 2: Check the conclusion
The conclusion doesn't follow logically
Dogs and cats are both animals, but that doesn't make them the same

Answer: INVALID (false conclusion)
\`\`\`

**Detailed Example 5: Syllogism with Three Terms**
*All A are B. All B are C. Therefore, all A are C.*

\`\`\`
Step 1: Identify the premises
Premise 1: All A are B
Premise 2: All B are C

Step 2: Draw the conclusion
All A are B, and all B are C, so all A are C

Answer: Valid (transitive property)
\`\`\`

**Detailed Example 6: Syllogism with Some and All**
*Some A are B. All B are C. Therefore, some A are C.*

\`\`\`
Step 1: Identify the premises
Premise 1: Some A are B
Premise 2: All B are C

Step 2: Draw the conclusion
The A that are B are also C (because all B are C)
Therefore, some A are C

Answer: Valid
\`\`\`

**Detailed Example 7: Syllogism with Some and No**
*Some A are B. No B are C. Therefore, some A are not C.*

\`\`\`
Step 1: Identify the premisesPremise 1: Some A are B
Premise 2: No B are C

Step 2: Draw the conclusion
The A that are B are not C (because no B are C)
Therefore, some A are not C

Answer: Valid
\`\`\`

**Detailed Example 8: Invalid with Some and Some**
*Some A are B. Some B are C. Therefore, some A are C.*

\`\`\`
Step 1: Identify the premises
Premise 1: Some A are B
Premise 2: Some B are C

Step 2: Check the conclusion
The A that are B might not be the same B that are C
Therefore, we cannot conclude that any A are C

Answer: INVALID
\`\`\`

---

#### 2. Conditional Logic (If-Then Statements)

**Detailed Example 9: Simple Conditional**
*If pressure exceeds 200 psi, the relief valve opens. Pressure is 210 psi. What happens?*

\`\`\`
Step 1: Identify the condition
Condition: Pressure > 200 psi
Action: Relief valve opens

Step 2: Check if condition is met
Pressure = 210 psi > 200 psi (condition met)

Step 3: Apply the rule
The relief valve opens

Answer: The relief valve opens
\`\`\`

**Detailed Example 10: Multiple Conditions (AND)**
*If temperature exceeds 100°C AND pressure drops below 50 psi, an alarm sounds. Temperature is 120°C and pressure is 45 psi. What happens?*

\`\`\`
Step 1: Check each condition
Condition 1: Temperature > 100°C → 120°C > 100°C ✓
Condition 2: Pressure < 50 psi → 45 psi < 50 psi ✓

Step 2: Both conditions are met
Since both conditions are true, the alarm sounds

Answer: The alarm sounds
\`\`\`

**Detailed Example 11: Multiple Conditions (OR)**
*If the valve is fully open OR flow is above 100 L/min, the pump will be running. The valve is only half open and flow is 120 L/min. Is the pump running?*

\`\`\`
Step 1: Check the conditions
Condition 1: Valve fully open → False (only half open)
Condition 2: Flow > 100 L/min → True (120 L/min)

Step 2: Apply OR logic
The pump runs if EITHER condition is true
Since flow > 100 L/min is true, the pump is running

Answer: Yes, the pump is running
\`\`\`

**Detailed Example 12: Contrapositive**
*If a vehicle is a motorcycle, then it is a two-wheeled vehicle. A car is not a motorcycle. Is a car a two-wheeled vehicle?*

\`\`\`
Step 1: Identify the logic
If Motorcycle → Two-wheeled
The contrapositive is also true:
If NOT two-wheeled → NOT motorcycle

Step 2: Apply the logic
A car is not a motorcycle
But this doesn't tell us whether a car is two-wheeled or not

Answer: Cannot be determined (a car is not two-wheeled, but that's a different fact)
\`\`\`

**Detailed Example 13: Affirming the Consequent (Fallacy)**
*If it is raining, the ground is wet. The ground is wet. Can we conclude it is raining?*

\`\`\`
Step 1: Identify the logic
If Rain → Wet Ground

Step 2: Check the logic
Raining → Wet ground
Wet ground ←→ Raining? NO!

The ground could be wet for other reasons (sprinkler, spilled water, etc.)

Answer: Cannot conclude it is raining (Affirming the Consequent fallacy)
\`\`\`

**Detailed Example 14: Denying the Antecedent (Fallacy)**
*If you are an engineer, you can solve problems. You are not an engineer. Can we conclude you cannot solve problems?*

\`\`\`
Step 1: Identify the logic
If Engineer → Can solve problems

Step 2: Check the logic
Not engineer
Can we conclude not can solve problems? NO!

Other people can also solve problems (scientists, technicians, etc.)

Answer: Cannot conclude (Denying the Antecedent fallacy)
\`\`\`

**Detailed Example 15: Chain of Conditions**
*If A then B. If B then C. A is true. What can we conclude?*

\`\`\`
Step 1: Identify the chain
A → B → C

Step 2: Apply the logic
A is true → B is true → C is true

Answer: B is true and C is true
\`\`\`

**Detailed Example 16: Converse Error**
*If the valve is closed, the pressure will drop. The pressure dropped. Can we conclude the valve is closed?*

\`\`\`
Step 1: Identify the logic
If Closed → Pressure drops

Step 2: Check the logic
Pressure dropped
Could be from other causes (pump stopped, leak, etc.)

Answer: Cannot conclude (Converse error - affirming the consequent)
\`\`\`

---

#### 3. Logical Negation

**Detailed Example 17: Negating "All"**
*"All employees must attend safety training." What is the logical negation?*

\`\`\`
Step 1: Understand the statement
All employees = EVERY employee
Must attend safety training

Step 2: Negate the statement
Not all employees must attend safety training
OR
Some employees don't have to attend safety training

Answer: Some employees don't have to attend safety training
\`\`\`

**Detailed Example 18: Negating "Some"**
*"Some pumps are operational." Negate this statement.*

\`\`\`
Step 1: Original statement
Some pumps are operational

Step 2: Negation
No pumps are operational
OR
All pumps are not operational

Answer: No pumps are operational
\`\`\`

**Detailed Example 19: Negating "No"**
*"No valves are leaking." Negate this statement.*

\`\`\`
Step 1: Original statement
No valves are leaking

Step 2: Negation
Some valves are leaking

Answer: Some valves are leaking
\`\`\`

**Detailed Example 20: Negating Complex Statement**
*"All operators must be certified and all equipment must be inspected." Negate this.*

\`\`\`
Step 1: Original statement
All operators must be certified AND all equipment must be inspected

Step 2: Negation (De Morgan's Law)
NOT (A AND B) = (NOT A) OR (NOT B)

Answer: Some operators are NOT certified OR some equipment is NOT inspected
\`\`\`

**Detailed Example 21: Negating Conditional**
*"If the pressure is high, the valve opens." Negate this.*

\`\`\`
Step 1: Original statement
If P → V (If pressure high, valve opens)

Step 2: Negation
The negation of "If P then V" is "P AND NOT V"
(P is true, V is false)

Answer: Pressure is high AND valve does NOT open
\`\`\`

---

#### 4. Double Negatives

**Detailed Example 22: Double Negative**
*"It is not true that the valve is not open." What does this mean?*

\`\`\`
Step 1: Identify the double negative
"Not true" + "not open"

Step 2: Simplify
It is true that the valve is open
OR
The valve is open

Answer: The valve is open
\`\`\`

**Detailed Example 23: Complex Double Negative**
*"There is no situation where the safety system does not activate." What does this mean?*

\`\`\`
Step 1: Identify the double negative
No situation + does not activate

Step 2: Simplify
The safety system always activates in all situations

Answer: The safety system always activates
\`\`\`

---

#### 5. Deductive Reasoning in Engineering

**Detailed Example 24: Fault Finding**
*An electrical circuit has no output. The power supply is working. The circuit breaker is on. What is the likely fault?*

\`\`\`
Step 1: Analyze the situation
- No output from circuit
- Power supply working (power is available)
- Circuit breaker on (power is flowing to circuit)

Step 2: Eliminate possibilities
Since power supply and breaker are working, the problem is likely inside the circuit

Answer: The fault is likely inside the circuit (component failure, loose connection)
\`\`\`

**Detailed Example 25: Safety Logic**
*The safety system will activate if ANY of the following conditions occur:
1. Temperature > 150°C
2. Pressure > 50 bar
3. Flow < 20 L/min

Temperature is 160°C, pressure is 40 bar, flow is 25 L/min. Will the safety system activate?*

\`\`\`
Step 1: Check each condition
Condition 1: Temperature > 150°C → 160 > 150 ✓
Condition 2: Pressure > 50 bar → 40 > 50 ✗
Condition 3: Flow < 20 L/min → 25 < 20 ✗

Step 2: Apply OR logic
At least one condition is true (temperature is high)
Therefore, the safety system activates

Answer: Yes, the safety system will activate
\`\`\`

**Detailed Example 26: Fault Isolation**
*If the motor is running, the pump should be pumping. The pump is not pumping. What can we conclude?*

\`\`\`
Step 1: Identify the logic
If Motor Running → Pump Pumping

Step 2: Analyze the situation
Pump is NOT pumping

Step 3: Draw conclusions
Possibilities:
1. Motor is NOT running
2. Motor is running but pump is faulty
3. Flow path is blocked

Answer: Either the motor is not running OR the pump is faulty/blocked
\`\`\`

**Detailed Example 27: Control Logic**
*For a safety circuit, both switches A AND B must be closed for power to flow. Switch A is open. Is power flowing?*

\`\`\`
Step 1: Identify the logic
Power flows if A AND B are closed

Step 2: Check the condition
A is open (false)
B's state doesn't matter because A is already false

Step 3: Apply AND logic
False AND anything = False

Answer: No, power is not flowing
\`\`\`

**Detailed Example 28: Alarm Logic**
*An alarm sounds if (Temperature > 120°C AND Valve is open) OR (Pressure > 80 bar). Temperature is 130°C, Valve is open, and Pressure is 50 bar. Does the alarm sound?*

\`\`\`
Step 1: Check first condition
Temperature > 120°C → 130 > 120 ✓
Valve is open ✓
AND condition: True AND True = True

Step 2: Check second condition
Pressure > 80 bar → 50 > 80 ✗

Step 3: Apply OR logic
First condition True OR Second condition False = True

Answer: Yes, the alarm sounds
\`\`\`

**Detailed Example 29: Logical Equivalence**
*"If the flow is high, the pump is running" is equivalent to which statement?*

\`\`\`
Step 1: Identify the statement
If Flow high → Pump running

Step 2: Find equivalents
Contrapositive: If Pump NOT running → Flow NOT high

Step 3: Check other options
Converse: If Pump running → Flow high (NOT equivalent)
Inverse: If Flow NOT high → Pump NOT running (NOT equivalent)

Answer: Contrapositive: If the pump is NOT running, then flow is NOT high
\`\`\`

---

### Practice Questions

**Syllogisms:**
1. All technicians must be certified. John is a technician. What can we conclude?
   *Solution: John must be certified*

2. Some pumps are centrifugal. Some pumps are positive displacement. What can we conclude?
   *Solution: There are at least two types of pumps (but can't determine if they overlap)*

3. All valves that are used for emergency shutoff are red. This valve is red. What can we conclude?
   *Solution: Cannot conclude it's an emergency shutoff valve (could be red for other reasons)*

4. No unauthorized personnel are allowed in the control room. Mary is not unauthorized. What can we conclude?
   *Solution: Mary is allowed in the control room (she is authorized)*

5. If a device is Class 1, it is intrinsically safe. This device is Class 2. What can we conclude?
   *Solution: Cannot conclude anything about intrinsic safety*

**Conditional Logic:**
6. If pressure is below 30 psi, the compressor starts. Pressure is 20 psi. What happens?
   *Solution: The compressor starts*

7. If temperature exceeds 85°C, cooling activates. Temperature is 90°C. What happens?
   *Solution: Cooling activates*

8. If the pump is running AND the discharge valve is open, flow should be detected. Pump is running but no flow is detected. What could be wrong?
   *Solution: Discharge valve is not open OR flow meter is faulty OR pump is not actually pumping*

9. If flow rate is between 100-200 L/min, the system is normal. Flow is 180 L/min. What is the state?
   *Solution: System is normal*

10. If the high-level alarm sounds OR the low-level alarm sounds, an alert is triggered. Only the high-level alarm sounds. Is the alert triggered?
    *Solution: Yes (OR condition)*

**Logical Negation:**
11. Negate: "All operators must complete the checklist."
    *Solution: Some operators don't have to complete the checklist*

12. Negate: "Some valves are leaking."
    *Solution: No valves are leaking*

13. Negate: "No equipment is running."
    *Solution: Some equipment is running*

14. Negate: "The system is not in standby mode."
    *Solution: The system is in standby mode*

15. Negate: "At least one circuit is overloaded."
    *Solution: No circuits are overloaded*

**Engineering Scenarios:**
16. A process has three critical parameters: Temperature, Pressure, and Flow. The system is safe if Temperature < 100°C AND Pressure < 50 bar AND Flow > 20 L/min. Temperature is 90°C, Pressure is 45 bar, Flow is 18 L/min. Is the system safe?
    *Solution: No (Flow condition fails: 18 < 20)*

17. The safety interlock requires two conditions: Emergency stop button is NOT pressed AND Guard is closed. If the emergency stop button is pressed, what is the state of the interlock?
    *Solution: Interlock is NOT satisfied (button is pressed)*

18. For a motor to start, three conditions must be met: Power supply is on, Motor overload is NOT tripped, and Start button is pressed. Power is on, the start button is pressed, but the motor doesn't start. What could be the problem?
    *Solution: Motor overload is tripped OR there's another fault*

19. A control system has two setpoints: Low level (30%) and High level (70%). If level is below 30%, the fill valve opens. If level is above 70%, the drain valve opens. Level is 50%. What happens?
    *Solution: Nothing (level is between 30% and 70%)*

20. If the flow transmitter reading is 4-20mA representing 0-100 L/min, and the reading is 12mA, what is the flow rate?
    *Solution: 12mA = 50% of range = 50 L/min*

**Advanced Deduction:**
21. All A are B. All B are C. Therefore, all A are C. Is this valid?
    *Solution: Yes (transitive property)*

22. Some A are B. All B are C. Therefore, some A are C. Is this valid?
    *Solution: Yes*

23. All A are B. No B are C. Therefore, no A are C. Is this valid?
    *Solution: Yes*

24. Some A are B. Some B are C. Therefore, some A are C. Is this valid? Explain.
    *Solution: No (the A that are B may not be the same B that are C)*

25. If A implies B, and B implies C, then A implies C. What is this principle called?
    *Solution: Transitivity / Hypothetical Syllogism*

---

### Common Logical Fallacies

**Affirming the Consequent:**
\`\`\`
If A then B
B is true
Therefore, A is true (FALLACY!)

Example:
If it rains, the ground is wet.
The ground is wet.
Therefore, it rained. (NOT necessarily true!)
\`\`\`

**Denying the Antecedent:**
\`\`\`
If A then B
A is false
Therefore, B is false (FALLACY!)

Example:
If you are an engineer, you can solve problems.
You are not an engineer.
Therefore, you cannot solve problems. (NOT necessarily true!)
\`\`\`

**Hasty Generalization:**
\`\`\`
Concluding based on insufficient evidence

Example:
The first pump we tested is working.
Therefore, all pumps are working. (FALLACY!)
\`\`\`

**Correlation vs Causation:**
\`\`\`
Assuming that because two things are correlated, one causes the other

Example:
When the temperature rises, ice cream sales increase.
Therefore, temperature causes ice cream sales? (Actually, both are caused by summer)
\`\`\`

**False Dichotomy:**
\`\`\`
Presenting only two options when more exist

Example:
Either we reduce production or we lose money.
(There may be other options: improve efficiency, reduce costs, etc.)
\`\`\`

**Appeal to Authority:**
\`\`\`
Claiming something is true because an authority says so

Example:
"This valve is safe because the manufacturer says so."
(Need to verify with actual testing and data)
\`\`\`

---

### Deductive Reasoning Strategy

\`\`\`
Step 1: Read the premises carefully
Step 2: Identify the logical structure (If-Then, All-Some, AND-OR, etc.)
Step 3: Consider what follows logically (and what doesn't)
Step 4: Look for logical fallacies
Step 5: Draw only valid conclusions
Step 6: If multiple conclusions are possible, state the limitations
Step 7: Verify the conclusion with the premises
Step 8: Consider if the premises are actually true (soundness)
\`\`\`

---

### Quick Reference: Logic Symbols

| Symbol | Meaning | Example |
|--------|---------|---------|
| → | Implies / If...then | A → B |
| ↔ | If and only if | A ↔ B |
| ∧ | AND | A ∧ B |
| ∨ | OR | A ∨ B |
| ¬ | NOT | ¬A |
| ∀ | All / For all | ∀x |
| ∃ | Some / There exists | ∃x |
| ∴ | Therefore | Premise ∴ Conclusion |
| ≡ | Equivalent | A ≡ B |
| ⊨ | Entails | A ⊨ B |
`
    },
    {
      id: 'critical-thinking',
      title: 'Critical Thinking & Problem Analysis',
      content: `
### What is Critical Thinking?

**Critical thinking** is the ability to analyze information objectively, evaluate evidence, identify patterns, and make reasoned judgments. It involves:
- **Analysis**: Breaking down complex problems
- **Evaluation**: Assessing the quality of evidence
- **Interpretation**: Understanding the meaning of information
- **Inference**: Drawing reasonable conclusions
- **Explanation**: Justifying conclusions with reasoning
- **Self-regulation**: Reflecting on your own thinking process

### Why Critical Thinking Matters

\`\`\`
- Engineering: Diagnosing faults and solving problems
- Business: Making strategic decisions
- Science: Evaluating theories and evidence
- Daily Life: Making informed decisions
- Safety: Identifying hazards and preventing accidents
\`\`\`

---

### Problem-Solving Methodology

#### 1. The Scientific Method

\`\`\`
Step 1: Identify the problem
Step 2: Gather information
Step 3: Formulate hypotheses
Step 4: Test hypotheses
Step 5: Analyze results
Step 6: Draw conclusions
Step 7: Implement solutions
Step 8: Verify and monitor
\`\`\`

#### 2. Root Cause Analysis

\`\`\`
Root Cause Analysis (RCA) is a systematic process for identifying the underlying causes of problems.

The 5 Whys Technique:
1. Why did the problem occur? → Cause 1
2. Why did Cause 1 happen? → Cause 2
3. Why did Cause 2 happen? → Cause 3
4. Why did Cause 3 happen? → Cause 4
5. Why did Cause 4 happen? → Root Cause

Example - Motor Failure:
1. Why did the motor fail? → Overheated
2. Why did it overheat? → Cooling fan failed
3. Why did the fan fail? → Bearings seized
4. Why did bearings seize? → Lack of lubrication
5. Why was there no lubrication? → Maintenance schedule not followed
   Root Cause: Inadequate maintenance procedures
\`\`\`

---

#### 3. Cause and Effect Analysis

**Detailed Example 1: Motor Overheating**
*A motor is overheating. What could be the causes?*

\`\`\`
Step 1: Identify the problem
Motor is overheating

Step 2: List possible causes
- Overload (too much load)
- Cooling failure (fan not working)
- Ventilation blocked
- Ambient temperature too high
- Insulation failure
- Voltage imbalance
- Bearing failure (friction)
- Worn brushes

Step 3: Investigate each possibility
Check load, cooling, ventilation, voltage, bearings, etc.

Step 4: Identify the root cause
Likely root causes: Overload OR Cooling failure

Step 5: Implement corrective action
- If overload: Reduce load or upgrade motor
- If cooling failure: Repair fan or clean ventilation

Answer: The motor could be overheating due to overload or cooling issues
\`\`\`

**Detailed Example 2: Flow Problem**
*A pump is producing low flow. What could be the causes?*

\`\`\`
Step 1: Identify the problem
Low flow from pump

Step 2: Analyze potential causes
- Inlet obstruction (debris, valve partially closed)
- Low inlet pressure (NPSH issue)
- Worn impeller
- Motor speed too low
- Air ingress (cavitation)
- Pump incorrectly sized
- Discharge obstruction
- Parallel operation issue
- Pump running backwards
- Worn wear rings

Step 3: Investigate the system
Check inlet, discharge, speed, motor current, pump condition

Step 4: Formulate hypothesis
Could be inlet obstruction or worn impeller

Answer: Low flow could be due to inlet obstruction, worn impeller, or speed issues
\`\`\`

**Detailed Example 3: High Pressure in Pipeline**
*A pipeline has higher than normal pressure. What could be the cause?*

\`\`\`
Step 1: Identify the symptom
Pipeline pressure is above normal

Step 2: Consider possible causes
- Blocked discharge
- Valve closed (partially or fully)
- Pump speed increased
- Temperature increase (thermal expansion)
- Incorrect pressure setpoint
- Downstream demand decreased

Step 3: Investigate
Check valve positions, pump status, downstream conditions

Answer: High pressure could be due to blockage, closed valve, or reduced downstream demand
\`\`\`

---

### Identifying Faults in Systems

**Detailed Example 4: Electrical Circuit Fault**
*A circuit has voltage but no current. What could be the cause?*

\`\`\`
Step 1: Analyze the symptoms
- Voltage present ✓
- No current ✗

Step 2: Apply electrical principles
For current to flow, the circuit must be closed
No current means the circuit is open or has very high resistance

Step 3: Possible causes
- Open circuit (broken wire, loose connection)
- Switch is open
- Fuse blown
- Load is open (heater element burned out)
- Very high resistance (corrosion, poor connection)

Answer: An open circuit or very high resistance is preventing current flow
\`\`\`

**Detailed Example 5: Temperature Gauge Reading**
*A temperature gauge shows the same reading for an extended period, but the process is known to be fluctuating. What is the likely issue?*

\`\`\`
Step 1: Analyze the symptoms
- Gauge shows constant reading
- Process is known to be fluctuating

Step 2: Possible explanations
- The gauge is faulty (stuck)
- The sensor is faulty
- The wiring is faulty
- The process has actually stabilized
- There's a lag in measurement

Step 3: Focus on the most likely cause
Since the process is known to fluctuate, the most likely cause is gauge failure

Answer: The temperature gauge or sensor is likely faulty (stuck)
\`\`\`

**Detailed Example 6: Pump Noise**
*A pump makes a loud noise during operation. What could be the cause?*

\`\`\`
Step 1: Identify the symptom
Loud noise from pump

Step 2: Consider possible causes
- Cavitation (air bubbles collapsing - sounds like gravel)
- Mechanical damage (bearing wear, impeller damage)
- Loose components
- Incorrect alignment
- High vibration
- Foreign object in pump
- Pump running backwards

Step 3: Investigate further
- Check for cavitation (listen for gravelly sound)
- Check vibration levels
- Check alignment
- Listen for type of noise (grinding, rattling, whining)

Answer: Noise could be due to cavitation, mechanical damage, or misalignment
\`\`\`

**Detailed Example 7: Vibration in Rotating Equipment**
*A motor-pump set has high vibration. What could be the cause?*

\`\`\`
Step 1: Identify the symptom
High vibration

Step 2: Consider possible causes
- Misalignment (coupling misalignment)
- Unbalance (rotor unbalance)
- Looseness (bearing clearance, foundation)
- Bearing wear
- Resonance (operating at critical speed)
- Cavitation
- Bent shaft

Step 3: Investigate
- Check alignment
- Check balance
- Check bearing condition
- Check foundation

Answer: Vibration could be due to misalignment, unbalance, or bearing wear
\`\`\`

---

### Evaluating Evidence and Information

**Detailed Example 8: Pressure Reading Discrepancy**
*A pressure gauge reads 5 psi higher than actual pressure. What could be the cause?*

\`\`\`
Step 1: Identify the symptom
Gauge reads consistently higher than actual

Step 2: Consider possible explanations
- Gauge is miscalibrated
- Gauge has zero offset error
- Gauge is the wrong type
- Mechanical damage to gauge
- Temperature effect on gauge
- Pulsation causing incorrect reading
- Wrong range (gauge too small)

Step 3: Determine the most likely cause
Consistent 5 psi error suggests calibration offset

Answer: The gauge has a systematic error (calibration offset)
\`\`\`

**Detailed Example 9: Data Interpretation**
*Readings: 100, 102, 101, 98, 103, 500. What should you conclude?*

\`\`\`
Step 1: Analyze the data
Normal range: 98-103
Outlier: 500

Step 2: Consider explanations
- Measurement error
- Sensor malfunction
- Transient event
- Data entry error
- Process upset

Step 3: Determine the best explanation
500 is a significant outlier that doesn't fit the pattern

Step 4: What to do
- Check the instrument
- Check the wiring
- Check if there was a process event
- Remove and investigate the outlier

Answer: 500 is likely an error or outlier that should be investigated
\`\`\`

**Detailed Example 10: Trend Analysis**
*Temperature readings have been increasing by 0.5°C per hour for the last 3 hours. What could this indicate?*

\`\`\`
Step 1: Analyze the data
Rate of increase: 0.5°C/hour
Duration: 3 hours
Total increase: 1.5°C

Step 2: Consider explanations
- Cooling system degradation
- Heat load increased
- Ambient temperature increased
- Control loop issue
- Insulation failure

Step 3: Determine the best explanation
Gradual increase suggests a developing condition, not an event

Answer: The trend indicates a developing condition that should be investigated before it reaches alarm limits
\`\`\`

**Detailed Example 11: Fluctuating Reading**
*A pressure reading fluctuates wildly between 20-80 psi. What could be the cause?*

\`\`\`
Step 1: Identify the symptom
Pressure fluctuates widely

Step 2: Consider possible causes
- Process instability (pressure swings)
- Instrument issue (faulty transmitter)
- Pulsation (from pump)
- Cavitation
- Control valve hunting
- Two-phase flow

Step 3: Investigate
- Check if process should be stable
- Check instrument for issues
- Check for pump issues

Answer: Could be process instability, instrument issue, or pump issues
\`\`\`

---

### Decision Making Under Uncertainty

**Detailed Example 12: Safety Decision**
*A pressure vessel is rated for 100 bar. The pressure gauge is reading 95 bar, but you suspect it might be inaccurate. What should you do?*

\`\`\`
Step 1: Identify the risk
Potential over-pressure of vessel if gauge is reading low
Potential shutdown if gauge is reading high

Step 2: Evaluate the situation
- If gauge is reading low (actual > 100 bar) → Safety risk
- If gauge is reading high (actual < 95 bar) → Operational impact

Step 3: Make a decision
- Check with a second gauge or instrument
- If no verification possible, assume worst case and take action
- Safety should be the priority

Answer: Verify the reading with another instrument. If that's not possible, assume the worst case (gauge reading low) and act accordingly
\`\`\`

**Detailed Example 13: Maintenance Decision**
*A pump has been running for 5 years without significant maintenance. What should you consider?*

\`\`\`
Step 1: Identify the variables
- Age: 5 years
- Maintenance history: None significant
- Criticality: How important is the pump?
- Failure history: Any signs of deterioration?

Step 2: Consider the options
- Continue running (risk of failure)
- Schedule maintenance (downtime required)
- Replace (higher cost but lower risk)

Step 3: Make a decision
Consider:
- Manufacturer's recommended service interval
- Criticality of the pump
- Cost of failure vs. maintenance
- Signs of deterioration
- Spare parts availability

Answer: A maintenance assessment should be performed to determine if service or replacement is needed
\`\`\`

**Detailed Example 14: Critical Decision**
*A safety valve is set to open at 100 bar. The operating pressure is 95 bar. The pressure gauge is questionable. What should you do?*

\`\`\`
Step 1: Analyze the situation
- Safety margin: 5 bar
- Gauge questionable
- Operating pressure close to set point

Step 2: Consider the options
- Continue operating (risk if gauge reading low)
- Reduce pressure (operational impact)
- Verify gauge reading
- Shut down for investigation

Step 3: Make a decision
Priority: Safety
Option: Reduce pressure and verify gauge

Answer: Reduce pressure to provide more safety margin, then verify gauge accuracy
\`\`\`

---

### Analytical Thinking in Engineering

**Detailed Example 15: Root Cause Analysis**
*A pipe burst in a plant. How do you investigate?*

\`\`\`
Step 1: Collect information
- Operating pressure
- Pressure spikes (records)
- Temperature
- Corrosion history
- Previous repairs
- Material specifications
- Age of pipe
- Failure location

Step 2: Examine the physical evidence
- Location of rupture
- Type of failure (brittle, ductile, fatigue)
- Corrosion pattern
- Wall thickness
- Fracture appearance

Step 3: Analyze possible causes
- Over-pressure (pressure spikes)
- Corrosion (internal or external)
- Mechanical damage (impact, abrasion)
- Material defect (manufacturing flaw)
- Vibration/fatigue
- Thermal stress
- Erosion

Step 4: Determine the root cause
Based on the evidence, identify the primary cause

Step 5: Implement corrective action
- Repair or replace pipe
- Address the root cause (reduce pressure, improve corrosion protection, etc.)

Answer: The root cause must be determined through systematic investigation
\`\`\`

**Detailed Example 16: Troubleshooting a Control Valve**
*A control valve is not responding to controller signals. How do you troubleshoot?*

\`\`\`
Step 1: Check the signal path
- Is the controller outputting a signal?
- Is the signal reaching the valve?
- Is the signal the correct type (4-20mA, 0-10V)?

Step 2: Check the valve
- Is the valve receiving power?
- Is the actuator working?
- Are there mechanical issues (sticking, binding)?

Step 3: Check the process
- Is the valve actually moving?
- Are there process issues (plugging, cavitation)?

Step 4: Isolate the problem
- Use a signal generator to test the valve
- Check the controller with a test load
- Verify the wiring
- Check the I/P converter (if pneumatic)

Answer: Follow a systematic approach: check signal, check valve, check process
\`\`\`

**Detailed Example 17: Instrument Loop Troubleshooting**
*A level transmitter reading is erratic. How do you troubleshoot?*

\`\`\`
Step 1: Check the instrument
- Is the transmitter powered?
- Are there any error messages?
- Is the range correct?

Step 2: Check the measurement
- Is the impulse line clear?
- Is the process fluid properties stable?
- Is the transmitter mounted correctly?

Step 3: Check the signal
- Check the 4-20mA signal at the transmitter
- Check at the control system
- Check for electrical interference

Step 4: Isolate the problem
- Test with a signal generator
- Test the transmitter with a simulator
- Check connections and wiring

Answer: Follow a systematic approach: transmitter → measurement → signal → control system
\`\`\`

---

### Critical Thinking Questions

**Scenario 1: Pressure Vessel**
A pressure vessel operates at 150 bar. The relief valve is set at 160 bar. During a pressure spike, the pressure reaches 165 bar. The relief valve opens at 165 bar instead of 160 bar. What could be wrong?

\`\`\`
Analysis:
1. Relief valve set point may be incorrect
2. Relief valve may be sticking (needs service)
3. Relief valve may be the wrong size
4. Pressure gauge may be inaccurate (reading wrong)
5. Relief valve may be damaged
6. Piping from vessel to relief valve may be blocked

Answer: The relief valve may be incorrectly set, sticking, damaged, or the gauge may be inaccurate
\`\`\`

**Scenario 2: Instrumentation**
A pressure transmitter reads 8 bar, but a manual gauge connected to the same point reads 10 bar. Which is correct and why?

\`\`\`
Analysis:
- Can't determine which is correct without verification
- Both instruments should be checked against a reference
- Possible issues: calibration, zero offset, damage, wrong type
- Could be different measuring points (one upstream, one downstream)
- Could be different pressures at different times

Answer: Need to verify with a known accurate reference
\`\`\`

**Scenario 3: Process Control**
A PID controller is oscillating. What could be wrong?

\`\`\`
Analysis:
- Tuning parameters may be incorrect (too much gain)
- Process may have changed (different dynamics)
- Controller may be in the wrong mode
- Valve may be sticking (causing overshoot)
- Measurement may have noise
- Process may have dead time

Answer: Likely tuning parameters need adjustment
\`\`\`

**Scenario 4: Motor Failure**
A motor has failed. What information do you need to determine the cause?

\`\`\`
Information needed:
1. Age of motor
2. Operating hours
3. Load conditions (amps, power)
4. Temperature history
5. Maintenance records
6. Vibration history
7. Visual inspection results
8. Winding resistance measurements
9. Voltage history
10. Ambient conditions

Answer: Comprehensive information needed to determine root cause
\`\`\`

---

### Practice Questions

**Cause and Effect:**
1. A motor draws more current than expected. What could be the cause?
   *Solution: Overload, mechanical binding, voltage drop, winding fault*

2. A temperature reading is lower than expected. What could be the cause?
   *Solution: Sensor failure, misreading, insulation, process change*

3. A pump loses prime. What could be the cause?
   *Solution: Air ingress, low suction pressure, seal failure*

4. A pressure gauge reads zero but the process is pressurized. What could be the cause?
   *Solution: Gauge isolated, gauge faulty, impulse line blocked*

5. A control valve is fully open but flow is low. What could be the cause?
   *Solution: Inlet pressure low, valve undersized, blockage in pipe*

**Fault Diagnosis:**
6. A pump makes a loud grinding noise. What is the likely cause?
   *Solution: Bearing failure or foreign object*

7. A motor overheats during operation. What could be the cause?
   *Solution: Overload, cooling failure, voltage imbalance*

8. A transmitter outputs 4mA regardless of process conditions. What could be the cause?
   *Solution: Transmitter fault, power supply issue, wiring break*

9. A safety system alarms unnecessarily. What could be the cause?
   *Solution: Faulty sensor, incorrect setpoint, electrical noise*

10. A pipe has significant corrosion. What could be the cause?
    *Solution: Chemical exposure, moisture, material mismatch*

**Data Analysis:**
11. Readings: 10.1, 10.3, 10.2, 10.4, 10.8, 10.2, 10.9, 15.2, 10.3, 10.1. What do you notice?
    *Solution: One outlier (15.2) that should be investigated*

12. A temperature trend shows gradual increase over time. What could this indicate?
    *Solution: Developing problem (heat exchanger fouling, cooling degradation)*

13. A pressure reading fluctuates wildly. What could be the cause?
    *Solution: Process instability, faulty instrument, pump pulsation*

14. Flow readings are consistently higher than design values. What could be the cause?
    *Solution: Higher than design pressure, meter error, process change*

15. A parameter shows a step change. What could be the cause?
    *Solution: Instrument failure, operator action, process upset*

**Decision Making:**
16. You notice a small leak on a pipe. What should you do?
    *Solution: Report it, mark the area, schedule repair, monitor*

17. A motor is running hot but within temperature limits. Should you investigate?
    *Solution: Yes, investigate to prevent future failure*

18. A process parameter is approaching alarm limits slowly. What should you do?
    *Solution: Investigate the trend, identify cause, take corrective action*

19. An instrument reading is questionable but not in alarm. What should you do?
    *Solution: Verify with another instrument, check calibration, monitor*

20. A safety system has been bypassed. What should you do?
    *Solution: Report immediately, secure the system, follow procedures*

**Critical Thinking:**
21. If a pressure vessel fails, what information would you need to determine the cause?
    *Solution: Pressure history, material specs, inspection records, operating conditions*

22. How would you investigate a sudden increase in energy consumption?
    *Solution: Check equipment operation, review production, analyze energy data*

23. What could cause a pump to stop pumping when it was working yesterday?
    *Solution: Loss of prime, power failure, mechanical failure, suction blockage*

24. How would you determine if an instrument is accurate?
    *Solution: Check with a known reference or standard*

25. What steps would you take to prevent recurrence of a failure?
    *Solution: Root cause analysis, corrective action, monitoring, procedure update*

---

### Critical Thinking Checklist

\`\`\`
□ Have I identified the problem correctly?
□ Do I have all the necessary information?
□ Have I considered all possible causes?
□ Have I eliminated unlikely causes?
□ What is the most likely explanation?
□ What evidence supports this explanation?
□ What evidence contradicts this explanation?
□ Have I considered alternative explanations?
□ What are the consequences of being wrong?
□ What action should I take?
□ How will I verify the solution?
□ What will prevent this from happening again?
□ Have I documented the problem and solution?
□ Have I communicated with others involved?
□ Have I followed the correct procedures?
\`\`\`

---

### Common Critical Thinking Mistakes

 **Wrong**: Jumping to conclusions without evidence
 **Correct**: Gather evidence before reaching conclusions

 **Wrong**: Ignoring contradictory evidence
 **Correct**: Consider all evidence, especially contradictory

 **Wrong**: Making assumptions without verification
 **Correct**: Verify assumptions whenever possible

 **Wrong**: Considering only obvious causes
 **Correct**: Consider all possible causes, including hidden ones

 **Wrong**: Stopping at the first explanation
 **Correct**: Consider multiple explanations and choose the best

 **Wrong**: Confusing correlation with causation
 **Correct**: Determine if there is a cause-effect relationship

 **Wrong**: Thinking complex problems have simple solutions
 **Correct**: Complex problems may require comprehensive solutions

 **Wrong**: Failing to consider human factors
 **Correct**: Consider human error, procedures, and training

 **Wrong**: Confirmation bias (looking for evidence that supports your view)
 **Correct**: Look for evidence that DISPROVES your view too

 **Wrong**: Overconfidence in your solution
 **Correct**: Always question your assumptions and verify your solution
`
    }
  ]
};

export default logicalReasoning;