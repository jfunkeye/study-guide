export const numericalReasoning = {
  id: 'numerical-reasoning',
  title: 'Numerical Reasoning',
  icon: 'bi-calculator',
  color: '#2563eb',
  description: 'Master percentages, ratios, profit & loss, speed, distance, probability, graphs, tables, and sequences with detailed examples and shortcut formulas.',
  topics: [
    {
      id: 'percentages',
      title: 'Percentages',
      content: `
### What is a Percentage?
A **percentage** is a way of expressing a number as a fraction of 100. The word "percent" comes from the Latin "per centum," meaning "by the hundred." When we say "25%", we mean "25 out of 100" or "25/100".

### Why Percentages Matter
Percentages are everywhere in daily life:
- **Shopping**: Discounts like "20% off"
- **Finance**: Interest rates on loans and savings
- **Statistics**: Poll results, unemployment rates
- **Business**: Profit margins, tax rates
- **Health**: Body fat percentage, nutrition labels

### The Three Core Percentage Formulas

#### 1. Finding the Percentage
\`\`\`
Percentage = (Part ÷ Whole) × 100
\`\`\`
*Use when: You know the part and whole, want to know the percentage*

#### 2. Finding the Part
\`\`\`
Part = (Percentage ÷ 100) × Whole
\`\`\`
*Use when: You know the whole and percentage, want to find the amount*

#### 3. Finding the Whole
\`\`\`
Whole = Part ÷ (Percentage ÷ 100)
\`\`\`
*Use when: You know the part and percentage, want to find the total*

---

### Step-by-Step Examples

**Example 1: Finding Percentage**
*A student scored 42 marks out of 60. What percentage did they score?*

\`\`\`
Step 1: Identify the part (42) and whole (60)
Step 2: Apply the formula
Percentage = (42 ÷ 60) × 100
Percentage = 0.7 × 100
Percentage = 70%

Answer: The student scored 70%
\`\`\`

**Example 2: Finding the Part**
*A company has 250 employees. 40% of them are women. How many women work there?*

\`\`\`
Step 1: Identify whole (250) and percentage (40%)
Step 2: Apply the formula
Part = (40% ÷ 100) × 250
Part = 0.4 × 250
Part = 100

Answer: There are 100 women
\`\`\`

**Example 3: Finding the Whole**
*If 30% of a number is 75, what is the number?*

\`\`\`
Step 1: Identify part (75) and percentage (30%)
Step 2: Apply the formula
Whole = 75 ÷ (30% ÷ 100)
Whole = 75 ÷ 0.3
Whole = 250

Answer: The number is 250
\`\`\`

---

### Mental Math Shortcuts

Learn these percentage shortcuts for quick calculations:

| Percentage | Shortcut | Example | Calculation |
|------------|----------|---------|-------------|
| 10% | ÷ 10 | 10% of 250 = 25 | 250 ÷ 10 |
| 20% | ÷ 5 | 20% of 150 = 30 | 150 ÷ 5 |
| 25% | ÷ 4 | 25% of 120 = 30 | 120 ÷ 4 |
| 30% | × 3 ÷ 10 | 30% of 200 = 60 | 200 × 3 ÷ 10 |
| 40% | × 2 ÷ 5 | 40% of 150 = 60 | 150 × 2 ÷ 5 |
| 50% | ÷ 2 | 50% of 300 = 150 | 300 ÷ 2 |
| 60% | × 3 ÷ 5 | 60% of 200 = 120 | 200 × 3 ÷ 5 |
| 70% | × 7 ÷ 10 | 70% of 300 = 210 | 300 × 7 ÷ 10 |
| 75% | × 3/4 | 75% of 200 = 150 | 200 × 3 ÷ 4 |
| 90% | × 9 ÷ 10 | 90% of 400 = 360 | 400 × 9 ÷ 10 |

---

### Advanced Percentage Problems

**Example: Percentage Increase**
*The price of a product increased from ₦250 to ₦325. What's the percentage increase?*

\`\`\`
Step 1: Find the increase
Increase = New - Original = 325 - 250 = 75

Step 2: Apply percentage increase formula
% Increase = (Increase ÷ Original) × 100
% Increase = (75 ÷ 250) × 100
% Increase = 0.3 × 100
% Increase = 30%

Answer: The price increased by 30%
\`\`\`

**Example: Percentage Decrease**
*The number of visitors dropped from 800 to 680. What's the percentage decrease?*

\`\`\`
Step 1: Find the decrease
Decrease = Original - New = 800 - 680 = 120

Step 2: Apply percentage decrease formula
% Decrease = (Decrease ÷ Original) × 100
% Decrease = (120 ÷ 800) × 100
% Decrease = 0.15 × 100
% Decrease = 15%

Answer: The visitors decreased by 15%
\`\`\`

**Example: Successive Percentage Changes**
*A laptop costing ₦80,000 gets a 10% discount, then an additional 5% discount during a sale. What's the final price?*

\`\`\`
Method 1: Step-by-Step
First discount: ₦80,000 × 10% = ₦8,000
Price after first: ₦80,000 - ₦8,000 = ₦72,000
Second discount: ₦72,000 × 5% = ₦3,600
Final price: ₦72,000 - ₦3,600 = ₦68,400

Method 2: Combined (More Efficient)
Final price = Original × (100% - 10%) × (100% - 5%)
Final price = 80,000 × 0.9 × 0.95
Final price = 80,000 × 0.855
Final price = ₦68,400

Answer: The final price is ₦68,400
\`\`\`

**Example: Finding Original Price After Discount**
*A customer bought a phone for ₦34,000 after a 15% discount. What was the original price?*

\`\`\`
Step 1: Recognize that ₦34,000 is 85% (100% - 15%) of original
Step 2: Apply percentage formula
Original = 34,000 ÷ (85% ÷ 100)
Original = 34,000 ÷ 0.85
Original = 34,000 × (100/85)
Original = 34,000 × 1.17647
Original = ₦40,000

Answer: The original price was ₦40,000
\`\`\`

**Example: Compound Percentage Change**
*A population of 10,000 increases by 20% one year and then 10% the next year. What is the final population?*

\`\`\`
Step 1: Apply successive percentage changes
Final = 10,000 × (1 + 20/100) × (1 + 10/100)
Final = 10,000 × 1.2 × 1.1
Final = 10,000 × 1.32
Final = 13,200

Answer: The final population is 13,200
\`\`\`

---

### Practice Questions with Hints

1. **What is 15% of 300?**
   *Hint: 15% = 10% + 5%, or use (15/100) × 300*
   *Solution: 15% of 300 = 0.15 × 300 = 45*

2. **36 is what percentage of 180?**
   *Hint: Use (36/180) × 100*
   *Solution: (36/180) × 100 = 0.2 × 100 = 20%*

3. **24 is 12% of what number?**
   *Hint: Use 24 ÷ (12/100)*
   *Solution: 24 ÷ 0.12 = 200*

4. **A price increased from ₦150 to ₦195. What's the percentage increase?**
   *Hint: Find the increase first, then use (increase/original) × 100*
   *Solution: (195 - 150)/150 × 100 = 45/150 × 100 = 30%*

5. **A product gets 20% discount and then 15% discount. Original price ₦500. What's the final price?**
   *Hint: Multiply original by 0.8 then by 0.85*
   *Solution: 500 × 0.8 × 0.85 = 500 × 0.68 = ₦340*

6. **A store sells an item at ₦2,400 after a 20% discount. What was the original price?**
   *Hint: ₦2,400 is 80% of the original price*
   *Solution: 2400 ÷ 0.8 = ₦3,000*

7. **In an election, candidate A got 45% of votes and candidate B got 35%. If there were 40,000 voters, how many votes did each get?**
   *Hint: Calculate 45% of 40,000 and 35% of 40,000*
   *Solution: A = 0.45 × 40000 = 18,000; B = 0.35 × 40000 = 14,000*

8. **A salary increased by 12% to ₦56,000. What was the original salary?**
   *Hint: ₦56,000 is 112% of the original salary*
   *Solution: 56000 ÷ 1.12 = ₦50,000*

---

### Common Mistakes to Avoid

 **Wrong**: "30% increase followed by 30% decrease" = original price
 **Correct**: 30% increase then 30% decrease: 100 → 130 → 91 (not back to 100!)

 **Wrong**: Calculating percentage on the wrong base
 **Correct**: Always use the ORIGINAL value when calculating percentage change

 **Wrong**: Adding percentages directly (20% + 30% = 50%)
 **Correct**: Calculate sequentially: 100 → 120 → 156 (not 150!)

 **Wrong**: For compound interest, using simple interest formula
 **Correct**: Compound Interest: A = P(1 + r/100)^n
`
    },
    {
      id: 'ratios',
      title: 'Ratios & Proportions',
      content: `
### What is a Ratio?
A **ratio** is a comparison between two or more quantities that shows how many times one value contains another. Think of it as a way to compare "how much" of one thing there is compared to another.

### Real-Life Applications
- **Cooking**: Recipe ingredients (2 cups flour : 1 cup sugar)
- **Map scales**: 1 cm : 10 km
- **Finance**: Debt-to-income ratio
- **Sports**: Win-to-loss ratio
- **Construction**: Cement-to-sand ratio

### Writing and Reading Ratios
- "2:3" is read as "2 to 3"
- Can be written as 2:3, 2/3, or "2 to 3"
- **Order matters!** 2:3 is not the same as 3:2

### Simplifying Ratios
Ratios should be simplified to their lowest terms, just like fractions.

**Example**: Simplify 24:36
\`\`\`
Step 1: Find the HCF (highest common factor) of 24 and 36
HCF = 12
Step 2: Divide both numbers by 12
24 ÷ 12 = 2
36 ÷ 12 = 3
Answer: 2:3
\`\`\`

---

### Detailed Examples: Ratio Problems

**Example 1: Basic Ratios**
*In a school, there are 300 boys and 240 girls. Find the ratio of boys to girls.*

\`\`\`
Step 1: Write the ratio
Boys : Girls = 300 : 240

Step 2: Simplify
HCF of 300 and 240 = 60
300 ÷ 60 = 5
240 ÷ 60 = 4

Answer: Boys : Girls = 5 : 4
\`\`\`

**Example 2: Sharing in a Ratio**
*Adam and Bisi share ₦5,400 in the ratio 2:7. How much does each get?*

\`\`\`
Step 1: Add the ratio parts
Total parts = 2 + 7 = 9

Step 2: Find the value of one part
One part = ₦5,400 ÷ 9 = ₦600

Step 3: Calculate each share
Adam's share = 2 × ₦600 = ₦1,200
Bisi's share = 7 × ₦600 = ₦4,200

Check: ₦1,200 + ₦4,200 = ₦5,400 ✓

Answer: Adam gets ₦1,200, Bisi gets ₦4,200
\`\`\`

**Example 3: Three-Part Ratio**
*Divide ₦4,800 among three people in the ratio 1:3:4.*

\`\`\`
Step 1: Add the ratio parts
Total parts = 1 + 3 + 4 = 8

Step 2: Find the value of one part
One part = ₦4,800 ÷ 8 = ₦600

Step 3: Calculate each share
Person 1 = 1 × ₦600 = ₦600
Person 2 = 3 × ₦600 = ₦1,800
Person 3 = 4 × ₦600 = ₦2,400

Check: ₦600 + ₦1,800 + ₦2,400 = ₦4,800 ✓
\`\`\`

**Example 4: Finding Unknown with Ratio**
*Two numbers are in ratio 5:3. If the smaller number is 45, find the larger number.*

\`\`\`
Step 1: Set up the proportion
Larger : Smaller = 5 : 3
Larger/5 = Smaller/3

Step 2: Substitute known value
Larger/5 = 45/3
Larger/5 = 15
Larger = 15 × 5
Larger = 75

Answer: The larger number is 75
\`\`\`

**Example 5: Changing Ratios**
*The ratio of boys to girls in a class is 3:2. If 4 more boys join, the ratio becomes 5:2. How many girls are there?*

\`\`\`
Step 1: Let the original numbers be 3x and 2x
Step 2: After 4 boys join: (3x + 4) : 2x = 5 : 2
Step 3: Cross multiply
2(3x + 4) = 5(2x)
6x + 8 = 10x
8 = 4x
x = 2

Step 4: Find number of girls
Girls = 2x = 2 × 2 = 4

Answer: There are 4 girls
\`\`\`

**Example 6: Compound Ratio**
*If a:b = 3:4 and b:c = 2:5, find a:b:c.*

\`\`\`
Step 1: Make the b values equal
a:b = 3:4
b:c = 2:5 = 4:10 (multiply both by 2 to make b = 4)

Step 2: Combine
a:b:c = 3:4:10

Answer: a:b:c = 3:4:10
\`\`\`

**Example 7: Inverse Ratio**
*If the ratio of speeds of two cars is 4:5, what is the ratio of times taken to cover the same distance?*

\`\`\`
Step 1: Recall: Speed ∝ 1/Time (inversely proportional)
Step 2: Time ratio = 5:4 (inverse of speed ratio)

Answer: The time ratio is 5:4
\`\`\`

**Example 8: Ratio with Percentages**
*In a mixture, milk and water are in ratio 3:2. What percentage is milk?*

\`\`\`
Step 1: Total parts = 3 + 2 = 5
Step 2: Milk percentage = (3/5) × 100 = 60%

Answer: Milk is 60% of the mixture
\`\`\`

---

### Comparing Ratios
To compare ratios, convert them to decimals or fractions.

**Example**: Which is larger, 3:4 or 2:3?
\`\`\`
3:4 = 3/4 = 0.75
2:3 = 2/3 ≈ 0.667
0.75 > 0.667, so 3:4 is larger
\`\`\`

---

### Practice Questions

1. **Simplify 42:56**
   *Hint: Find the HCF*
   *Solution: HCF = 14; 42:56 = 3:4*

2. **Divide ₦2,000 in ratio 3:5**
   *Hint: Find the value of one part*
   *Solution: Total parts = 8; One part = 2000/8 = 250; Shares = 750 and 1,250*

3. **Divide ₦1,800 in ratio 2:3:4**
   *Hint: Add all parts first*
   *Solution: Total parts = 9; One part = 1800/9 = 200; Shares = 400, 600, 800*

4. **Two numbers in ratio 3:7 sum to 100. Find them.**
   *Hint: If numbers are 3x and 7x, then 3x + 7x = 100*
   *Solution: 10x = 100; x = 10; Numbers = 30 and 70*

5. **If a:b = 2:5 and a = 16, find b.**
   *Hint: Use cross multiplication*
   *Solution: 2/5 = 16/b; 2b = 80; b = 40*

6. **The ratio of adults to children at a party is 5:2. If there are 60 children, how many adults?**
   *Hint: Set up 5:2 = x:60*
   *Solution: 5/2 = x/60; 2x = 300; x = 150 adults*

7. **A bag contains red and blue marbles in ratio 4:7. If there are 28 blue marbles, how many red marbles?**
   *Hint: Use 4:7 = x:28*
   *Solution: 4/7 = x/28; 7x = 112; x = 16 red marbles*

8. **If x:y = 3:5 and y:z = 4:7, find x:y:z**
   *Hint: Make the y values equal*
   *Solution: x:y = 3:5 = 12:20; y:z = 4:7 = 20:35; x:y:z = 12:20:35*

---

### Proportions (Ratios in Action)

A **proportion** is a statement that two ratios are equal.

\`\`\`
a:b = c:d
or
a/b = c/d
\`\`\`

**Example**: If 4 pens cost ₦120, how much do 7 pens cost?
\`\`\`
Step 1: Set up proportion
4 : 120 = 7 : x
4/120 = 7/x

Step 2: Cross multiply
4x = 120 × 7
4x = 840
x = 210

Answer: 7 pens cost ₦210
\`\`\`

**Example**: A map has a scale of 1:50,000. If two cities are 6 cm apart on the map, what is the actual distance?
\`\`\`
Step 1: Set up proportion
1 : 50,000 = 6 : x
1/50,000 = 6/x
x = 6 × 50,000
x = 300,000 cm = 3 km

Answer: The actual distance is 3 km
\`\`\`

---

### Common Ratio Mistakes

 **Wrong**: Ratio 1:2 means one item is twice the other
 **Correct**: Ratio 1:2 means second item is twice the first

 **Wrong**: 2:3 = 3:2
 **Correct**: Order matters! 2:3 ≠ 3:2

 **Wrong**: Adding the ratio parts to the original numbers
 **Correct**: Use ratio parts to find one part value, then multiply

 **Wrong**: Confusing ratio with fraction
 **Correct**: A ratio compares parts, while a fraction relates part to whole
`
    },
    {
      id: 'profit-loss',
      title: 'Profit & Loss (Markup, Discount, Tax)',
      content: `
### Understanding Profit and Loss

**Profit** is the money you gain from a business transaction. It happens when you sell something for more than you paid.

**Loss** is the money you lose. It happens when you sell something for less than you paid.

### Key Terms
- **CP** = Cost Price (what you paid for an item)
- **SP** = Selling Price (what you sold it for)
- **Marked Price** = The advertised price before discounts
- **Discount** = A reduction from the marked price
- **Profit** = SP - CP (when SP > CP)
- **Loss** = CP - SP (when SP < CP)

### Core Formulas

#### Profit Calculation
\`\`\`
Profit = SP - CP
Profit% = (Profit/CP) × 100
SP = CP × (100 + Profit%)/100
CP = SP × 100/(100 + Profit%)
\`\`\`

#### Loss Calculation
\`\`\`
Loss = CP - SP
Loss% = (Loss/CP) × 100
SP = CP × (100 - Loss%)/100
CP = SP × 100/(100 - Loss%)
\`\`\`

#### Discount Calculation
\`\`\`
Discount = Marked Price - SP
Discount% = (Discount/Marked Price) × 100
SP = Marked Price × (100 - Discount%)/100
Marked Price = SP × 100/(100 - Discount%)
\`\`\`

---

### Detailed Examples: Profit and Loss

**Example 1: Simple Profit**
*A trader buys 50 bags of rice at ₦30,000 each and sells them at ₦36,000 each. Find:*
*a) Profit per bag*
*b) Total profit*
*c) Profit percentage*

\`\`\`
a) Profit per bag = SP - CP
   = ₦36,000 - ₦30,000 = ₦6,000

b) Total profit = Profit per bag × Number of bags
   = ₦6,000 × 50 = ₦300,000

c) Profit% = (Profit/CP) × 100
   = (6,000/30,000) × 100
   = 0.2 × 100 = 20%

Answer: Profit of ₦6,000 per bag, ₦300,000 total, 20% profit
\`\`\`

**Example 2: Simple Loss**
*A car was bought for ₦3,500,000 and sold for ₦3,150,000. Find the loss percentage.*

\`\`\`
Step 1: Calculate loss
Loss = CP - SP = 3,500,000 - 3,150,000 = ₦350,000

Step 2: Calculate loss percentage
Loss% = (Loss/CP) × 100
Loss% = (350,000/3,500,000) × 100
Loss% = 0.1 × 100 = 10%

Answer: 10% loss
\`\`\`

**Example 3: Finding SP with Desired Profit**
*A shopkeeper wants a 25% profit on goods bought for ₦8,000. What should be the selling price?*

\`\`\`
Method 1: Direct formula
SP = CP × (100 + Profit%)/100
SP = 8,000 × (100 + 25)/100
SP = 8,000 × 125/100
SP = 8,000 × 1.25 = ₦10,000

Method 2: Step-by-step
25% of CP = 0.25 × 8,000 = ₦2,000
SP = CP + Profit = 8,000 + 2,000 = ₦10,000

Answer: Selling price should be ₦10,000
\`\`\`

**Example 4: Finding CP from Loss**
*A phone was sold for ₦54,400 at a 15% loss. Find the cost price.*

\`\`\`
SP = CP × (100 - Loss%)/100
54,400 = CP × (100 - 15)/100
54,400 = CP × 85/100
54,400 = CP × 0.85
CP = 54,400 ÷ 0.85
CP = 54,400 × 100/85
CP = ₦64,000

Check: 15% of 64,000 = 9,600
SP = 64,000 - 9,600 = 54,400 ✓

Answer: Cost price was ₦64,000
\`\`\`

**Example 5: Discount and Profit Combined**
*A trader marks a product at ₦20,000. He gives a 10% discount but still makes a 20% profit. Find:*
*a) Selling price after discount*
*b) Cost price*

\`\`\`
a) SP after discount = Marked Price × (100 - Discount%)/100
   SP = 20,000 × 90/100 = ₦18,000

b) Using SP and profit%, find CP
   CP = SP × 100/(100 + Profit%)
   CP = 18,000 × 100/(100 + 20)
   CP = 18,000 × 100/120
   CP = 18,000 × 0.8333 = ₦15,000

Answer: SP = ₦18,000, CP = ₦15,000
\`\`\`

**Example 6: Two Transactions**
*A trader buys 120 items: 50 at ₦250 each and 70 at ₦300 each. He sells them all at ₦280 each. Find profit or loss.*

\`\`\`
Step 1: Total cost price
First batch: 50 × 250 = ₦12,500
Second batch: 70 × 300 = ₦21,000
Total CP = ₦33,500

Step 2: Total selling price
Total items = 120
Total SP = 120 × 280 = ₦33,600

Step 3: Find profit/loss
Profit = SP - CP = 33,600 - 33,500 = ₦100

Profit% = (100/33,500) × 100 = 0.299%

Answer: Profit of ₦100 (0.299% profit)
\`\`\`

**Example 7: Successive Discounts**
*A TV marked at ₦250,000 gets three discounts: 10%, 5%, and 2%. What's the final price?*

\`\`\`
Method 1: Step-by-step
First discount: 250,000 × 90% = ₦225,000
Second discount: 225,000 × 95% = ₦213,750
Third discount: 213,750 × 98% = ₦209,475

Method 2: Combined
Final = 250,000 × 0.9 × 0.95 × 0.98
Final = 250,000 × 0.8379 = ₦209,475

Answer: Final price is ₦209,475
\`\`\`

**Example 8: Markup Then Discount**
*A shopkeeper marks up an item by 30% above cost, then gives a 20% discount. If cost is ₦500, find:*
*a) Marked price*
*b) Selling price after discount*
*c) Actual profit percentage*

\`\`\`
a) Marked price = CP × (100 + Markup%)/100
   Marked price = 500 × 130/100 = ₦650

b) SP = Marked price × (100 - Discount%)/100
   SP = 650 × 80/100 = ₦520

c) Profit = SP - CP = 520 - 500 = ₦20
   Profit% = (20/500) × 100 = 4%

Answer: Marked ₦650, sells at ₦520, 4% profit
\`\`\`

**Example 9: Profit/Loss with Overhead Costs**
*A trader buys a TV for ₦80,000 and spends ₦5,000 on transportation. He sells it for ₦93,500. Find profit percentage.*

\`\`\`
Step 1: Total cost price
CP = 80,000 + 5,000 = ₦85,000

Step 2: Profit
Profit = 93,500 - 85,000 = ₦8,500

Step 3: Profit%
Profit% = (8,500/85,000) × 100 = 10%

Answer: 10% profit
\`\`\`

---

### Practice Questions (Progressive Difficulty)

**Beginner:**
1. Buy for ₦250, sell for ₦300. Find profit %
   *Solution: Profit = 50; Profit% = (50/250) × 100 = 20%*

2. Buy for ₦5,000, sell for ₦4,250. Find loss %
   *Solution: Loss = 750; Loss% = (750/5000) × 100 = 15%*

**Intermediate:**
3. Buy for ₦800, want 35% profit. What is SP?
   *Solution: SP = 800 × 1.35 = ₦1,080*

4. Sell at ₦3,600 with 10% loss. Find CP.
   *Solution: CP = 3600 × 100/90 = ₦4,000*

**Advanced:**
5. A trader marks an item at ₦1,200, gives 15% discount, and still makes 20% profit. Find CP.
   *Solution: SP = 1200 × 0.85 = 1,020; CP = 1020 × 100/120 = ₦850*

6. Buy 100 items at ₦150 each. Sell 40% at ₦200 each, rest at ₦180 each. Find total profit %.
   *Solution: CP = 15,000; SP = (40×200) + (60×180) = 8,000 + 10,800 = 18,800; Profit% = (3800/15000) × 100 = 25.33%*

**Challenge:**
7. A shopkeeper marks an item 40% above CP, gives 25% discount. What's the profit/loss %?
   *Solution: Let CP = 100; MP = 140; SP = 140 × 0.75 = 105; Profit% = 5%*

8. Buy 60 pens at ₦50 each and 40 pens at ₦70 each. Sell all at ₦60 each. Find profit or loss %.
   *Solution: CP = (60×50) + (40×70) = 3000 + 2800 = 5,800; SP = 100×60 = 6,000; Profit% = (200/5800) × 100 = 3.45%*

---

### Key Formulas Summary

| What to Find | Formula |
|--------------|---------|
| Profit | SP - CP |
| Profit% | (Profit/CP) × 100 |
| SP from Profit% | CP × (100 + P%)/100 |
| CP from Profit% | SP × 100/(100 + P%) |
| Loss | CP - SP |
| Loss% | (Loss/CP) × 100 |
| SP from Loss% | CP × (100 - L%)/100 |
| CP from Loss% | SP × 100/(100 - L%) |
| Discount | MP - SP |
| Discount% | (Discount/MP) × 100 |
| SP after Discount | MP × (100 - D%)/100 |
| MP from SP | SP × 100/(100 - D%) |
| Successive Discounts | MP × (100-D1)% × (100-D2)% |
`
    },
    {
      id: 'speed-time-distance',
      title: 'Speed, Time & Distance',
      content: `
### The Magic Triangle

The relationship between Speed, Time, and Distance can be remembered using this triangle:

\`\`\`
          D
         / \\
        /   \\
       S --- T

• Cover D → S × T  (Distance = Speed × Time)
• Cover S → D ÷ T  (Speed = Distance ÷ Time)
• Cover T → D ÷ S  (Time = Distance ÷ Speed)
\`\`\`

### Key Concepts

**Speed** = How fast something moves
- Measured in km/h, m/s, mph, etc.
- 1 km/h = 5/18 m/s
- 1 m/s = 18/5 = 3.6 km/h

**Time** = Duration of travel
- Measured in hours, minutes, seconds
- 1 hour = 60 minutes = 3600 seconds

**Distance** = How far something travels
- Measured in kilometers, meters, miles, etc.

### Unit Conversions
\`\`\`
To convert km/h to m/s: Multiply by 5/18
To convert m/s to km/h: Multiply by 18/5

Examples:
72 km/h = 72 × 5/18 = 20 m/s
20 m/s = 20 × 18/5 = 72 km/h
\`\`\`

---

### Detailed Examples

**Example 1: Finding Speed**
*A bus travels 360 kilometers in 4.5 hours. What is its speed?*

\`\`\`
Step 1: Identify known values
Distance = 360 km
Time = 4.5 hours

Step 2: Apply formula
Speed = Distance ÷ Time
Speed = 360 ÷ 4.5
Speed = 80 km/h

Answer: The bus travels at 80 km/h
\`\`\`

**Example 2: Finding Distance**
*A cyclist rides at 18 km/h for 2.5 hours. How far does she travel?*

\`\`\`
Step 1: Identify known values
Speed = 18 km/h
Time = 2.5 hours

Step 2: Apply formula
Distance = Speed × Time
Distance = 18 × 2.5
Distance = 45 km

Answer: She travels 45 kilometers
\`\`\`

**Example 3: Finding Time**
*A car travels 300 km at 75 km/h. How long does the journey take?*

\`\`\`
Step 1: Identify known values
Distance = 300 km
Speed = 75 km/h

Step 2: Apply formula
Time = Distance ÷ Speed
Time = 300 ÷ 75
Time = 4 hours

Answer: The journey takes 4 hours
\`\`\`

**Example 4: Speed Conversion**
*A train travels at 108 km/h. Express this in m/s.*

\`\`\`
To convert km/h to m/s, multiply by 5/18
Speed = 108 × 5/18
Speed = 108 ÷ 18 × 5
Speed = 6 × 5
Speed = 30 m/s

Answer: 108 km/h = 30 m/s
\`\`\`

**Example 5: Average Speed**
*A car travels 150 km at 60 km/h and another 200 km at 80 km/h. Find the average speed for the whole journey.*

\`\`\`
Step 1: Find time for each part
Time₁ = 150 ÷ 60 = 2.5 hours
Time₂ = 200 ÷ 80 = 2.5 hours

Step 2: Total distance and time
Total distance = 150 + 200 = 350 km
Total time = 2.5 + 2.5 = 5 hours

Step 3: Calculate average speed
Average speed = Total distance ÷ Total time
Average speed = 350 ÷ 5 = 70 km/h

Answer: The average speed is 70 km/h
\`\`\`

**Example 6: Relative Speed (Same Direction)**
*Two cars start from the same point. Car A goes at 90 km/h, Car B at 70 km/h. How far apart will they be after 2.5 hours?*

\`\`\`
Step 1: Find relative speed
Relative speed = 90 - 70 = 20 km/h

Step 2: Calculate distance between them
Distance = Relative speed × Time
Distance = 20 × 2.5 = 50 km

Answer: They will be 50 km apart
\`\`\`

**Example 7: Relative Speed (Opposite Direction)**
*Two friends start from two cities 480 km apart, riding towards each other. One rides at 50 km/h, the other at 70 km/h. How long will it take them to meet?*

\`\`\`
Step 1: Find relative speed
Relative speed = 50 + 70 = 120 km/h

Step 2: Calculate time to meet
Time = Distance ÷ Relative speed
Time = 480 ÷ 120 = 4 hours

Answer: They will meet after 4 hours
\`\`\`

**Example 8: Train Passing a Pole**
*A train 200 meters long passes a pole in 10 seconds. What is its speed in km/h?*

\`\`\`
Step 1: Distance = Length of train = 200 m
Time = 10 seconds

Step 2: Find speed in m/s
Speed = 200 ÷ 10 = 20 m/s

Step 3: Convert to km/h
Speed = 20 × 18/5 = 72 km/h

Answer: The train speed is 72 km/h
\`\`\`

**Example 9: Train Passing a Bridge**
*A train 150 meters long passes a bridge 350 meters long in 25 seconds. Find its speed in km/h.*

\`\`\`
Step 1: Total distance = Train length + Bridge length
Total distance = 150 + 350 = 500 m
Time = 25 seconds

Step 2: Find speed in m/s
Speed = 500 ÷ 25 = 20 m/s

Step 3: Convert to km/h
Speed = 20 × 18/5 = 72 km/h

Answer: The train speed is 72 km/h
\`\`\`

**Example 10: Time Between Two Towns**
*Town A and Town B are 420 km apart. A bus leaves Town A at 8:00 AM traveling at 60 km/h. At what time does it reach Town B?*

\`\`\`
Step 1: Calculate travel time
Time = Distance ÷ Speed = 420 ÷ 60 = 7 hours

Step 2: Add to departure time
8:00 AM + 7 hours = 3:00 PM

Answer: The bus arrives at 3:00 PM
\`\`\`

**Example 11: Meeting Time (Complex)**
*At 7:00 AM, a cyclist starts from Town A at 15 km/h toward Town B. At 8:30 AM, another cyclist starts from Town B at 25 km/h toward Town A. If the towns are 90 km apart, at what time do they meet?*

\`\`\`
Step 1: Distance covered by first cyclist before second starts
Time difference = 1.5 hours
Distance covered = 15 × 1.5 = 22.5 km

Step 2: Remaining distance between them at 8:30 AM
Remaining distance = 90 - 22.5 = 67.5 km

Step 3: Their relative speed (opposite direction)
Relative speed = 15 + 25 = 40 km/h

Step 4: Time to meet after 8:30 AM
Time = 67.5 ÷ 40 = 1.6875 hours = 1 hour 41.25 minutes

Step 5: Time they meet
8:30 AM + 1 hour 41.25 min = 10:11:15 AM

Answer: They meet at approximately 10:11 AM
\`\`\`

**Example 12: Boat and Stream**
*A boat can travel at 12 km/h in still water. If the stream flows at 3 km/h, find:*
*a) Downstream speed*
*b) Upstream speed*
*c) Time to go 60 km downstream*

\`\`\`
a) Downstream speed = Boat speed + Stream speed
   = 12 + 3 = 15 km/h

b) Upstream speed = Boat speed - Stream speed
   = 12 - 3 = 9 km/h

c) Time downstream = 60 ÷ 15 = 4 hours

Answer: Downstream 15 km/h, Upstream 9 km/h, 4 hours
\`\`\`

**Example 13: Average Speed for Two Equal Distances**
*A car travels a distance at 60 km/h and returns at 40 km/h. Find the average speed for the entire journey.*

\`\`\`
Formula: Average Speed = (2 × S₁ × S₂)/(S₁ + S₂)
= (2 × 60 × 40)/(60 + 40)
= 4800/100 = 48 km/h

Answer: Average speed is 48 km/h
\`\`\`

---

### Practice Questions

**Beginner:**
1. Travel 240 km in 3 hours. Find speed in km/h.
   *Solution: Speed = 240/3 = 80 km/h*

2. Speed 65 km/h for 4 hours. Find distance.
   *Solution: Distance = 65 × 4 = 260 km*

3. Distance 525 km, speed 70 km/h. Find time.
   *Solution: Time = 525/70 = 7.5 hours*

**Intermediate:**
4. A car travels 120 km at 80 km/h, then 180 km at 60 km/h. Find average speed.
   *Solution: Time1 = 120/80 = 1.5h; Time2 = 180/60 = 3h; Avg = 300/4.5 = 66.67 km/h*

5. Two cars 450 km apart drive towards each other at 85 km/h and 65 km/h. How long before they meet?
   *Solution: Time = 450/(85+65) = 450/150 = 3 hours*

6. Convert 144 km/h to m/s.
   *Solution: 144 × 5/18 = 40 m/s*

**Advanced:**
7. A train 220 m long passes a platform 380 m long in 30 seconds. Find speed in km/h.
   *Solution: Speed = (220+380)/30 = 600/30 = 20 m/s = 72 km/h*

8. At 9:00 AM, a car starts from Town A at 80 km/h toward Town B. At 10:00 AM, another car starts from Town B at 60 km/h toward Town A. Towns are 400 km apart. When do they meet?
   *Solution: First car travels 80 km before second starts; Remaining = 320 km; Time = 320/(80+60) = 320/140 = 2.286h = 2h17m; Meet at 12:17 PM*

**Challenge:**
9. A person walks from home to office at 4 km/h and returns at 6 km/h. If total time is 2.5 hours, find the distance to office.
   *Solution: Let distance = d; d/4 + d/6 = 2.5; (3d + 2d)/12 = 2.5; 5d/12 = 2.5; d = 6 km*

10. Two trains start from stations 1200 km apart, heading towards each other at 45 km/h and 55 km/h. At what distance from the first station do they meet?
    *Solution: Time = 1200/100 = 12h; Distance from first = 45 × 12 = 540 km*

---

### Common Mistakes

 **Wrong**: Average speed = (Speed₁ + Speed₂)/2
 **Correct**: Average speed = Total distance/Total time

 **Wrong**: Ignoring unit conversions when adding speeds
 **Correct**: Convert all speeds to same units first

 **Wrong**: In train problems, using only train length for bridge crossing
 **Correct**: Use (Train length + Bridge length) as total distance

 **Wrong**: Adding times incorrectly
 **Correct**: Convert everything to same unit (hours or minutes) first

 **Wrong**: Forgetting stream speed direction for boats
 **Correct**: Downstream = Add speeds; Upstream = Subtract speeds
`
    },
    {
      id: 'probability',
      title: 'Probability',
      content: `
### What is Probability?

**Probability** is a measure of how likely something is to happen. It ranges from:
- **0** = Impossible (will never happen)
- **1** = Certain (will definitely happen)
- Numbers between 0 and 1 = More or less likely

### Real-Life Applications
- **Weather forecast**: "70% chance of rain"
- **Sports**: "Probability of winning"
- **Medicine**: "85% success rate of treatment"
- **Insurance**: "Probability of an accident"
- **Gambling**: "Odds of winning"

### Core Principle

\`\`\`
P(event) = (Number of favorable outcomes) ÷ (Total number of possible outcomes)
\`\`\`

All probabilities must be between 0 and 1 inclusive.

### Key Rules

1. **Sum of all probabilities** = 1
2. **Complement rule**: P(not A) = 1 - P(A)
3. **Probability of impossible event** = 0
4. **Probability of certain event** = 1
5. **Addition rule**: P(A or B) = P(A) + P(B) - P(A and B)
6. **Multiplication rule (Independent)**: P(A and B) = P(A) × P(B)
7. **Conditional probability**: P(A|B) = P(A and B)/P(B)

---

### Detailed Examples

**Example 1: Rolling a Die**
*What is the probability of getting a 3 when rolling a standard die?*

\`\`\`
Step 1: List all outcomes
Possible outcomes: {1, 2, 3, 4, 5, 6}
Total outcomes = 6

Step 2: Count favorable outcomes
Favorable outcomes: {3}
Favorable = 1

Step 3: Apply formula
P(3) = 1/6

Answer: The probability is 1/6 or about 16.67%
\`\`\`

**Example 2: Rolling a Number Greater Than 4**
*What is the probability of getting a number greater than 4?*

\`\`\`
Step 1: Total outcomes = 6
Step 2: Favorable outcomes = {5, 6}
Favorable = 2

Step 3: Calculate probability
P(>4) = 2/6 = 1/3

Answer: The probability is 1/3 or 33.33%
\`\`\`

**Example 3: Drawing Cards**
*From a standard deck of 52 cards, what's the probability of drawing a heart?*

\`\`\`
Step 1: Total cards = 52
Step 2: Hearts in a deck = 13
Step 3: Apply formula
P(heart) = 13/52 = 1/4

Answer: The probability is 1/4 or 25%
\`\`\`

**Example 4: Drawing a Face Card**
*What's the probability of drawing a face card (Jack, Queen, King) from a deck?*

\`\`\`
Step 1: Total cards = 52
Step 2: Face cards = 3 per suit × 4 suits = 12
Step 3: Apply formula
P(face card) = 12/52 = 3/13

Answer: The probability is 3/13 or about 23.08%
\`\`\`

**Example 5: Drawing from a Bag**
*A bag contains 5 red marbles, 3 blue marbles, and 2 green marbles. What's the probability of drawing a blue marble?*

\`\`\`
Step 1: Total marbles = 5 + 3 + 2 = 10
Step 2: Favorable (blue) = 3
Step 3: Apply formula
P(blue) = 3/10 = 0.3

Answer: The probability is 3/10 or 30%
\`\`\`

**Example 6: Complementary Probability**
*What's the probability of NOT drawing a blue marble from the same bag?*

\`\`\`
Method 1: Direct
Non-blue marbles = 5 + 2 = 7
P(not blue) = 7/10 = 0.7

Method 2: Complement rule
P(not blue) = 1 - P(blue)
P(not blue) = 1 - 3/10 = 7/10

Answer: The probability is 7/10 or 70%
\`\`\`

**Example 7: Two Events (With Replacement)**
*A bag has 4 red and 6 yellow balls. What's the probability of drawing a red ball, replacing it, then drawing a yellow ball?*

\`\`\`
Step 1: Total balls = 10
Step 2: Individual probabilities
P(red) = 4/10 = 2/5
P(yellow) = 6/10 = 3/5

Step 3: Multiply (since events are independent)
P(red then yellow) = 2/5 × 3/5 = 6/25

Answer: The probability is 6/25 or 24%
\`\`\`

**Example 8: Two Events (Without Replacement)**
*Same bag of 4 red and 6 yellow balls. What's the probability of drawing a red ball, then a yellow ball WITHOUT replacement?*

\`\`\`
Step 1: First draw
P(red) = 4/10 = 2/5

Step 2: Second draw (after removing one red)
Total now = 9 balls (3 red, 6 yellow)
P(yellow) = 6/9 = 2/3

Step 3: Multiply
P(red then yellow) = 2/5 × 2/3 = 4/15

Answer: The probability is 4/15 or about 26.67%
\`\`\`

**Example 9: Throwing Two Coins**
*What's the probability of getting at least one head when tossing two coins?*

\`\`\`
Step 1: List all outcomes
Possible outcomes: {HH, HT, TH, TT}
Total = 4

Step 2: Count favorable outcomes
At least one head: {HH, HT, TH}
Favorable = 3

Step 3: Calculate probability
P(at least one head) = 3/4

Answer: The probability is 3/4 or 75%
\`\`\`

**Example 10: Rolling Two Dice**
*What's the probability of rolling a sum of 7 with two dice?*

\`\`\`
Step 1: Total outcomes = 6 × 6 = 36
Step 2: Favorable outcomes (sum = 7)
(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes
Step 3: Calculate probability
P(sum 7) = 6/36 = 1/6

Answer: The probability is 1/6 or about 16.67%
\`\`\`

**Example 11: Drawing Two Cards**
*From a standard deck of 52 cards, what's the probability of drawing two aces in a row WITHOUT replacement?*

\`\`\`
Step 1: First draw
P(ace) = 4/52 = 1/13

Step 2: Second draw (without replacement)
After drawing an ace, 51 cards remain, with 3 aces
P(ace) = 3/51 = 1/17

Step 3: Multiply
P(two aces) = 1/13 × 1/17 = 1/221

Answer: The probability is 1/221 or about 0.45%
\`\`\`

**Example 12: At Least One Event**
*If the probability of rain on any day is 20%, what's the probability of at least one rainy day in the next 3 days?*

\`\`\`
Step 1: Probability of NO rain on any day = 1 - 0.2 = 0.8
Step 2: Probability of NO rain for 3 days = 0.8³ = 0.512
Step 3: Probability of at least one rainy day = 1 - 0.512 = 0.488

Answer: The probability is 0.488 or 48.8%
\`\`\`

**Example 13: Mutually Exclusive Events**
*A bag has 5 red, 4 blue, and 3 green marbles. What is the probability of drawing a red OR a blue marble?*

\`\`\`
Step 1: P(red) = 5/12, P(blue) = 4/12
Step 2: Since mutually exclusive (can't be both)
P(red or blue) = 5/12 + 4/12 = 9/12 = 3/4

Answer: The probability is 3/4 or 75%
\`\`\`

**Example 14: Conditional Probability**
*In a class of 30 students, 18 play football and 12 play basketball. 8 play both. If a student plays football, what's the probability they also play basketball?*

\`\`\`
Step 1: P(football) = 18/30 = 3/5
Step 2: P(both) = 8/30 = 4/15
Step 3: Conditional probability
P(basketball | football) = P(both)/P(football)
= (4/15)/(3/5) = (4/15) × (5/3) = 20/45 = 4/9

Answer: The probability is 4/9 or about 44.44%
\`\`\`

---

### Practice Questions

**Beginner:**
1. Probability of getting 4 when rolling a die?
   *Solution: P(4) = 1/6*

2. Probability of drawing a spade from a deck of cards?
   *Solution: P(spade) = 13/52 = 1/4*

3. Bag with 4 red, 6 blue, 10 green. P(green)?
   *Solution: P(green) = 10/20 = 1/2*

**Intermediate:**
4. Two dice rolled. P(sum 9)?
   *Solution: Favorable outcomes: (3,6),(4,5),(5,4),(6,3) = 4; P = 4/36 = 1/9*

5. Bag with 5 red, 3 blue. P(red then blue without replacement)?
   *Solution: P = (5/8) × (3/7) = 15/56*

6. Bag with 3 red, 2 blue, 4 green. P(not blue)?
   *Solution: P(not blue) = 7/9*

**Advanced:**
7. Deck of cards, P(drawing a heart then a diamond without replacement)?
   *Solution: P = (13/52) × (13/51) = 169/2652 = 13/204*

8. 3 coins tossed. P(at least 2 heads)?
   *Solution: Favorable: HHT, HTH, THH, HHH = 4; P = 4/8 = 1/2*

9. Two dice rolled. P(sum less than 5)?
   *Solution: Favorable outcomes: (1,1),(1,2),(1,3),(2,1),(2,2),(3,1) = 6; P = 6/36 = 1/6*

**Challenge:**
10. A bag has x red and y blue balls. If P(red) = 0.4 and total balls = 25, find x and y.
    *Solution: x/25 = 0.4; x = 10; y = 15*

11. Four cards drawn from a deck without replacement. P(all are red)?
    *Solution: P = (26/52) × (25/51) × (24/50) × (23/49) = 0.055 or 5.5%*

12. In a class of 30, probability a student is left-handed is 0.1. P(at least 2 left-handed students)?
    *Solution: P(≥2) = 1 - P(0) - P(1) = 1 - (0.9^30) - (30 × 0.1 × 0.9^29)*

---

### Common Mistakes

 **Wrong**: P(A and B) = P(A) × P(B) for any two events
 **Correct**: Only for INDEPENDENT events

 **Wrong**: P(A or B) = P(A) + P(B) for any two events
 **Correct**: Use P(A) + P(B) - P(A and B) or only if MUTUALLY EXCLUSIVE

 **Wrong**: Forgetting to adjust total after "without replacement"
 **Correct**: Always reduce total and favorable counts appropriately

 **Wrong**: Probability can be greater than 1
 **Correct**: Probability is ALWAYS between 0 and 1

 **Wrong**: Confusing odds with probability
 **Correct**: Odds = P(event)/P(not event)
`
    },
    {
      id: 'graph-interpretation',
      title: 'Graph Interpretation',
      content: `
### Bar Charts

**What they show**: Comparison of different categories using rectangular bars
- **Vertical bars** = Column chart
- **Horizontal bars** = Bar chart
- Longer bars = Larger values

---

#### Detailed Example: Monthly Sales

\`\`\`
Sales (₦'000)
500 |                  ■
450 |              ■   ■
400 |              ■   ■
350 |          ■   ■   ■
300 |          ■   ■   ■
250 |      ■   ■   ■   ■
200 |      ■   ■   ■   ■
150 |  ■   ■   ■   ■   ■
100 |  ■   ■   ■   ■   ■
 50 |  ■   ■   ■   ■   ■   
    |___________________
      Jan Feb Mar Apr May

Legend: ■ = Monthly Sales (₦'000)
\`\`\`

**Questions and Solutions:**

*Q1: Which month had the highest sales?*
- Look for tallest bar → May (500)

*Q2: What were the sales in February?*
- Read the value on the y-axis → 250

*Q3: What was the total sales for the 5 months?*
\`\`\`
Total = Jan(100) + Feb(250) + Mar(350) + Apr(450) + May(500) = 1,650
Answer: ₦1,650,000
\`\`\`

*Q4: What is the average monthly sales?*
\`\`\`
Average = 1,650 ÷ 5 = 330
Answer: ₦330,000
\`\`\`

*Q5: What is the percentage increase from January to May?*
\`\`\`
Increase = 500 - 150 = 350
% Increase = (350/100) × 100 = 350%
Answer: 350% increase
\`\`\`

*Q6: What is the ratio of sales in Jan to May?*
\`\`\`
Jan : May = 150 : 500
Simplify = 1 : 5
Answer: 1:5
\`\`\`

---

### Line Graphs

**What they show**: Changes over time (trends)
- Connected points show continuous data
- Upward slope = Increase
- Downward slope = Decrease
- Flat line = No change

---

#### Detailed Example: Hours of Sunshine Over a Week

\`\`\`
Hours
12 |          
11 |          
10 |          
 9 |          
 8 |          
 7 |              ●
 6 |         ●        ●
 5 |    ●                 ●
 4 |                          ●
 3 |                             ●
   |___________________________
    Mon  Tue  Wed  Thu  Fri  Sat  Sun

Legend: ● = Daily Sunshine Hours
\`\`\`

**Questions and Solutions:**

*Q1: How many hours of sunshine were there on Thursday?*
- Find Thursday on x-axis, read value → 6 hours

*Q2: Which day had the most sunshine?*
- Look for highest point → Wednesday (7 hours)

*Q3: Which day had the least sunshine?*
- Look for lowest point → Sunday (3 hours)

*Q4: What is the range of sunshine hours?*
\`\`\`
Range = Highest - Lowest = 7 - 3 = 4 hours
Answer: 4 hours
\`\`\`

*Q5: What is the trend from Monday to Sunday?*
\`\`\`
Monday to Wednesday: Increasing trend (5 → 6 → 7)
Wednesday to Sunday: Decreasing trend (7 → 6 → 5 → 4 → 3)
Answer: Overall trend is a peak in the middle of the week, followed by a steady decline
\`\`\`

---

### Pie Charts

**What they show**: How a whole is divided into parts
- Circle represents 100% or the total
- Each sector represents a fraction of the whole
- Angles and percentages are proportional

---

#### Detailed Example: Budget Distribution

\`\`\`
                [Housing]
                30% \
    [Savings]     [Food]
       20%         25%
                 /
          [Others]
            10%
          /      
    [Transport]
        15%

Legend:
█ Housing (30%)
█ Food (25%)
█ Transport (15%)
█ Savings (20%)
█ Others (10%)
\`\`\`

**Questions and Solutions:**

*Q1: If the total budget is ₦80,000, how much is spent on housing?*
\`\`\`
Housing = 30% of 80,000
= 0.3 × 80,000 = ₦24,000
Answer: ₦24,000
\`\`\`

*Q2: How much more is spent on housing than food?*
\`\`\`
Difference in percentage = 30% - 25% = 5%
Difference in amount = 5% of 80,000 = ₦4,000
Answer: ₦4,000 more on housing
\`\`\`

*Q3: What is the angle of the housing sector?*
\`\`\`
Angle = (Percentage/100) × 360°
= (30/100) × 360° = 108°
Answer: 108°
\`\`\`

*Q4: If ₦12,000 is spent on transport, what is the total budget?*
\`\`\`
Transport = 15% of total = ₦12,000
Total = ₦12,000 ÷ 0.15 = ₦80,000
Answer: ₦80,000
\`\`\`

---

### Histograms

**What they show**: Frequency distribution of continuous data
- Bars touch each other (no gaps)
- Height shows frequency
- Width shows class interval

---

#### Detailed Example: Test Scores Distribution

\`\`\`
Frequency
12 |          █
10 |          █
 8 |      █   █
 6 |      █   █   █
 4 |  █   █   █   █
 2 |  █   █   █   █
   |___________________
    50-59 60-69 70-79 80-89 90-99

Legend: █ = Number of Students
\`\`\`

**Questions:**
1. How many students scored 70-79?
   *Answer: 8 students*
2. How many students scored 80 or above?
   *Answer: 10 + 4 = 14 students*
3. Which score range has the most students?
   *Answer: 70-79 (8 students)*

---

### Practice Questions

**Bar Charts:**
1. Draw a bar chart for this data: 
   - Mon: 25 units
   - Tue: 35 units
   - Wed: 30 units
   - Thu: 45 units
   - Fri: 50 units
   *Hint: Label axes clearly, use consistent scale*

**Pie Charts:**
2. A school budget: 
   - Teachers: 45%
   - Facilities: 25%
   - Books: 20%
   - Events: 10%
   If total is ₦2,000,000, find each amount.
   *Solution: Teachers: 900,000; Facilities: 500,000; Books: 400,000; Events: 200,000*

**Line Graphs:**
3. Plot points: (1,10), (2,20), (3,15), (4,35), (5,25)
   *Hint: Connect points with straight lines*

**Mixed Questions:**
4. In a pie chart of 500 votes: 
   - Candidate A: 40%
   - Candidate B: 35%
   - Candidate C: 25%
   How many votes did each get?
   *Solution: A = 200, B = 175, C = 125*

5. A line graph shows population: 2010=5,000, 2015=6,500, 2020=8,000
   What is the percentage increase from 2010 to 2020?
   *Solution: Increase = 3,000; % Increase = (3000/5000) × 100 = 60%*
`
    },
    {
      id: 'tables',
      title: 'Tables (Data Interpretation)',
      content: `
### Understanding Tables

A **table** organizes data in rows and columns. It's one of the most common ways to present numerical information.

### Table Anatomy
- **Rows**: Horizontal (left to right)
- **Columns**: Vertical (top to bottom)
- **Header**: Title at top of each column
- **Row Label**: Title at left of each row

### Why Tables Matter
Tables are used in:
- Reports and business presentations
- Government statistics
- Research papers
- Financial statements
- Exam questions

---

### Detailed Example: Student Performance Table

\`\`\`
------------------------------------------------------------
Student   | Math   | English | Science | Total   | Average
----------|--------|---------|---------|---------|--------
Ali       | 85     | 75      | 90      | 250     | 83.33
Bola      | 70     | 80      | 65      | 215     | 71.67
Chidi     | 95     | 85      | 95      | 275     | 91.67
Dami      | 60     | 70      | 75      | 205     | 68.33
----------|--------|---------|---------|---------|--------
Total     | 310    | 310     | 325     | 945     | -
Average   | 77.5   | 77.5    | 81.25   | 236.25  | -
------------------------------------------------------------
\`\`\`

**Questions and Solutions:**

*Q1: Who scored the highest in Mathematics?*
- Look at Math column, compare values
- Chidi scored 95 (highest)
- Answer: Chidi

*Q2: What is Bola's total score?*
- Find Bola's row, look at Total column
- Answer: 215

*Q3: What is the difference between Chidi and Dami's total?*
\`\`\`
Difference = 275 - 205 = 70
Answer: 70
\`\`\`

*Q4: What is the average total score of all students?*
\`\`\`
Average = (250 + 215 + 275 + 205) ÷ 4
= 945 ÷ 4 = 236.25
Answer: 236.25
\`\`\`

*Q5: Which student scored highest in Science?*
- Look at Science column
- Chidi (95) and Ali (90) compared
- Answer: Chidi with 95

*Q6: How many students scored above 80 in English?*
- English scores: Ali=75, Bola=80, Chidi=85, Dami=70
- Above 80: Only Chidi
- Answer: 1 student

*Q7: What is the average Math score?*
\`\`\`
Average = (85 + 70 + 95 + 60) ÷ 4
= 310 ÷ 4 = 77.5
Answer: 77.5
\`\`\`

---

### Detailed Example: Monthly Sales Table

\`\`\`
-----------------------------------
Month   | Product A | Product B | Total
--------|-----------|-----------|-------
Jan     | 2,000     | 1,500     | 3,500
Feb     | 1,800     | 2,200     | 4,000
Mar     | 2,500     | 2,000     | 4,500
Apr     | 3,000     | 2,800     | 5,800
May     | 2,700     | 3,100     | 5,800
-----------------------------------
\`\`\`

**Questions and Solutions:**

*Q1: Which product had the highest sales in May?*
- Product B = 3,100 vs Product A = 2,700
- Answer: Product B

*Q2: Which month had the highest total sales?*
- Compare totals: Jan=3,500, Feb=4,000, Mar=4,500, Apr=5,800, May=5,800
- Answer: April and May (both 5,800)

*Q3: What is the total sales for Product A across all months?*
\`\`\`
Total = 2,000 + 1,800 + 2,500 + 3,000 + 2,700
= 12,000
Answer: 12,000
\`\`\`

*Q4: Which month had the highest Product A sales?*
- Product A values: 2,000, 1,800, 2,500, 3,000, 2,700
- Highest = 3,000 in April
- Answer: April

*Q5: What is the average monthly total?*
\`\`\`
Average = (3,500 + 4,000 + 4,500 + 5,800 + 5,800) ÷ 5
= 23,600 ÷ 5 = 4,720
Answer: 4,720
\`\`\`

*Q6: What's the percentage increase in total sales from Jan to Apr?*
\`\`\`
Increase = 5,800 - 3,500 = 2,300
% Increase = (2,300/3,500) × 100 = 65.71%
Answer: 65.71%
\`\`\`

---

### Detailed Example: Multiplication Table

\`\`\`
    | 3 | 4 | 5 | 6 | 7 | 8
----|---|---|---|---|---|---
2   | 6 | 8 | 10| 12| 14| 16
4   | 12| 16| 20| 24| 28| 32
6   | 18| 24| 30| 36| 42| 48
8   | 24| 32| 40| 48| 56| 64
\`\`\`

**Questions:**
1. What is 6 × 7? → 42
2. What is 8 × 5? → 40
3. What is 4 × 8? → 32

---

### Detailed Example: Frequency Table

\`\`\`
-----------------------------------
Score Range | Frequency | Cumulative
------------|-----------|-----------
0-9         | 5         | 5
10-19       | 12        | 17
20-29       | 18        | 35
30-39       | 10        | 45
40-49       | 5         | 50
-----------------------------------
\`\`\`

**Questions and Solutions:**

*Q1: How many students scored between 20-29?*
- Look at frequency column
- Answer: 18

*Q2: How many students scored below 30?*
- Sum frequencies for 0-9, 10-19, 20-29
- 5 + 12 + 18 = 35
- Answer: 35

*Q3: How many students scored 30 or above?*
- 10 + 5 = 15
- Answer: 15

*Q4: What is the total number of students?*
- Sum all frequencies = 50
- Answer: 50

---

### Practice Questions

1. **Create a table** for weekly sales: 
   Mon=150, Tue=180, Wed=200, Thu=170, Fri=220, Sat=250

2. **From your table**, find:
   a) Highest sales day → Saturday (250)
   b) Lowest sales day → Monday (150)
   c) Total sales → 1170
   d) Average sales → 1170/6 = 195
   e) Difference between highest and lowest → 250-150 = 100

3. **Student data table**: 
   \`\`\`
   Name    | Age | Height(cm) | Weight(kg)
   Ahmed   | 12  | 145        | 40
   Bisi    | 13  | 152        | 45
   Chuka   | 12  | 148        | 42
   Dami    | 14  | 160        | 50
   \`\`\`
   Questions:
   a) Who is the tallest? → Dami
   b) Who is the oldest? → Dami
   c) Average height? → (145+152+148+160)/4 = 151.25 cm
   d) Average weight? → (40+45+42+50)/4 = 44.25 kg

4. **Sales data table**:
   \`\`\`
   Product | Q1 | Q2 | Q3 | Q4 | Total
   A       | 100 | 120 | 90 | 130 | 440
   B       | 80  | 110 | 100| 90  | 380
   C       | 150 | 130 | 140| 160 | 580
   \`\`\`
   a) Complete the Total column → 440, 380, 580
   b) Which product had highest total sales? → Product C (580)
   c) Which quarter had highest sales overall? → Q4 (130+90+160 = 380)

---

### Tips for Table Questions

1. **Read the question carefully** - Understand what's being asked
2. **Find the right row and column** - The intersection gives the answer
3. **Check units** - Make sure you understand what the numbers represent
4. **Look for totals** - Usually provided at bottom or right
5. **Use the data** - Don't assume; all answers are in the table
6. **Check calculations** - Verify arithmetic with cross-checking
`
    },
    {
      id: 'sequences',
      title: 'Sequences & Series',
      content: `
### What is a Sequence?

A **sequence** is a list of numbers in a specific order, following a pattern. Each number is called a **term**.

### Why Sequences Matter
- **Computers**: Algorithms use sequences
- **Mathematics**: Foundation for calculus
- **Nature**: Patterns in nature (Fibonacci)
- **Finance**: Compound interest calculations
- **Music**: Rhythms and scales

---

### Types of Sequences

#### 1. Arithmetic Sequence (Linear)

**Definition**: Each term increases or decreases by a constant difference.

**Formula**: 
\`\`\`
Term n = a + (n-1)d
Where:
a = first term
d = common difference
n = term position
\`\`\`

**Examples**:

*Example A: Increasing*
\`\`\`
2, 5, 8, 11, 14, 17, ...
First term (a) = 2
Common difference (d) = 5 - 2 = 3
Next term = 17 + 3 = 20
\`\`\`

*Example B: Decreasing*
\`\`\`
30, 25, 20, 15, 10, ...
a = 30
d = 25 - 30 = -5
Next term = 10 - 5 = 5
\`\`\`

*Example C: Find the 10th term*
\`\`\`
Sequence: 4, 7, 10, 13, ...
a = 4, d = 3
10th term = 4 + (10-1) × 3
= 4 + 9 × 3
= 4 + 27 = 31
\`\`\`

*Example D: Find the first term*
\`\`\`
In an arithmetic sequence, the 5th term is 22 and d = 4.
What is the first term?
22 = a + (5-1) × 4
22 = a + 16
a = 6
\`\`\`

---

#### 2. Geometric Sequence (Exponential)

**Definition**: Each term is multiplied by a constant ratio.

**Formula**:
\`\`\`
Term n = a × r^(n-1)
Where:
a = first term
r = common ratio
n = term position
\`\`\`

**Examples**:

*Example A: Increasing*
\`\`\`
2, 6, 18, 54, 162, ...
a = 2
r = 6/2 = 3
Next term = 162 × 3 = 486
\`\`\`

*Example B: Decreasing*
\`\`\`
64, 32, 16, 8, 4, ...
a = 64
r = 32/64 = 1/2
Next term = 4 × 1/2 = 2
\`\`\`

*Example C: Find the 6th term*
\`\`\`
Sequence: 3, 6, 12, 24, ...
a = 3, r = 2
6th term = 3 × 2^(6-1)
= 3 × 2^5
= 3 × 32 = 96
\`\`\`

---

#### 3. Square Numbers

**Definition**: Terms are perfect squares.

\`\`\`
1, 4, 9, 16, 25, 36, 49, ...
Pattern: 1², 2², 3², 4², 5², 6², 7²
Next term = 8² = 64
\`\`\`

---

#### 4. Cube Numbers

**Definition**: Terms are perfect cubes.

\`\`\`
1, 8, 27, 64, 125, 216, ...
Pattern: 1³, 2³, 3³, 4³, 5³, 6³
Next term = 7³ = 343
\`\`\`

---

#### 5. Fibonacci Sequence

**Definition**: Each term is the sum of the two previous terms.

\`\`\`
1, 1, 2, 3, 5, 8, 13, 21, 34, ...
Pattern: 1+1=2, 1+2=3, 2+3=5, 3+5=8, ...
Next term = 13 + 21 = 34
\`\`\`

---

#### 6. Prime Numbers

**Definition**: Numbers divisible only by 1 and themselves.

\`\`\`
2, 3, 5, 7, 11, 13, 17, 19, 23, ...
Next term = 29
\`\`\`

---

#### 7. Alternating Operations

**Definition**: Operations alternate between two patterns.

**Examples**:

*Example A: +3, -2, +3, -2, ...*
\`\`\`
1, 4, 2, 5, 3, 6, 4, 7, ...
Pattern: +3, -2, +3, -2, +3, -2, +3
Next term = 7 + 3 = 10
\`\`\`

*Example B: ×2, +1, ×2, +1, ...*
\`\`\`
1, 2, 4, 5, 10, 11, 22, ...
Pattern: ×2, +1, ×2, +1, ×2, +1
Next term = 22 × 2 = 44
\`\`\`

---

#### 8. Combined Operations

**Definition**: Operations change by a pattern.

**Examples**:

*Example A: Increasing differences*
\`\`\`
2, 5, 10, 17, 26, 37, ...
Differences: +3, +5, +7, +9, +11
Next difference = +13
Next term = 37 + 13 = 50
\`\`\`

*Example B: Multiplying by increasing numbers*
\`\`\`
1, 2, 6, 24, 120, 720, ...
Pattern: ×2, ×3, ×4, ×5, ×6
Next term = 720 × 7 = 5040
\`\`\`

*Example C: Increasing ratio*
\`\`\`
1, 2, 6, 24, 120, ...
Pattern: ×2, ×3, ×4, ×5
Next term = 120 × 6 = 720
\`\`\`

---

### Sum of Sequences

#### Sum of Arithmetic Sequence
\`\`\`
Sum = n/2 × (a + l)
Where:
n = number of terms
a = first term
l = last term
\`\`\`

**Example**: Sum of 1 + 2 + 3 + ... + 100
\`\`\`
n = 100, a = 1, l = 100
Sum = 100/2 × (1 + 100) = 50 × 101 = 5,050
\`\`\`

#### Sum of Geometric Sequence
\`\`\`
Sum = a(1 - r^n)/(1 - r) for r < 1
Sum = a(r^n - 1)/(r - 1) for r > 1
\`\`\`

**Example**: 1 + 2 + 4 + 8 + 16 + 32
\`\`\`
a = 1, r = 2, n = 6
Sum = 1(2^6 - 1)/(2 - 1) = (64 - 1)/1 = 63
\`\`\`

**Example**: Sum of first 5 terms of 3, 9, 27, ...
\`\`\`
a = 3, r = 3, n = 5
Sum = 3(3^5 - 1)/(3 - 1) = 3(243 - 1)/2 = 3 × 242/2 = 363
\`\`\`

---

### Practice Questions

**Arithmetic:**
1. Find next: 7, 11, 15, 19, ?
   *Solution: d = 4; Next = 23*

2. Find next: 40, 35, 30, 25, ?
   *Solution: d = -5; Next = 20*

3. Find the 8th term: 5, 10, 15, 20, ...
   *Solution: a=5, d=5; T8 = 5 + 7×5 = 40*

4. Find the 12th term: 3, 7, 11, 15, ...
   *Solution: a=3, d=4; T12 = 3 + 11×4 = 47*

**Geometric:**
5. Find next: 2, 6, 18, 54, ?
   *Solution: r = 3; Next = 162*

6. Find next: 81, 27, 9, 3, ?
   *Solution: r = 1/3; Next = 1*

7. Find the 6th term: 4, 8, 16, 32, ...
   *Solution: a=4, r=2; T6 = 4 × 2^5 = 128*

8. Find the 7th term: 5, 15, 45, 135, ...
   *Solution: a=5, r=3; T7 = 5 × 3^6 = 3,645*

**Special Sequences:**
9. Find next: 1, 4, 9, 16, 25, ?
   *Solution: Square numbers; Next = 36*

10. Find next: 1, 8, 27, 64, 125, ?
    *Solution: Cube numbers; Next = 216*

11. Find next: 1, 1, 2, 3, 5, 8, 13, ?
    *Solution: Fibonacci; Next = 21*

12. Find next: 2, 3, 5, 7, 11, 13, ?
    *Solution: Prime numbers; Next = 17*

**Combined Patterns:**
13. Find next: 1, 3, 6, 10, 15, 21, ?
    *Solution: Triangular numbers; Next = 28*

14. Find next: 2, 4, 8, 16, 32, 64, ?
    *Solution: Powers of 2; Next = 128*

15. Find next: 1, 2, 6, 24, 120, 720, ?
    *Solution: Factorials; Next = 5040*

**Find the Missing Term:**
16. 4, 8, ?, 32, 64
    *Solution: r = 2; Missing = 16*

17. 2, 5, ?, 11, 14
    *Solution: d = 3; Missing = 8*

18. 1, 4, 9, 16, ?, 36
    *Solution: Squares; Missing = 25*

19. 3, 9, 27, ?, 243
    *Solution: r = 3; Missing = 81*

20. 1, 2, 4, ?, 16, 32
    *Solution: r = 2; Missing = 8*

**Sum Problems:**
21. Sum of first 10 terms: 2, 4, 6, 8, ...
    *Solution: a=2, d=2, n=10; Sum = 10/2 × (2×2 + 9×2) = 5 × 22 = 110*

22. Sum: 1 + 2 + 4 + 8 + ... + 512
    *Solution: a=1, r=2, n=10; Sum = 1(2^10 - 1)/(2-1) = 1023*

23. Sum of even numbers from 2 to 20
    *Solution: a=2, d=2, n=10; Sum = 10/2 × (2+20) = 5 × 22 = 110*

---

### Common Mistakes

 **Wrong**: Assuming every sequence is arithmetic
 **Correct**: Check the pattern before assuming

 **Wrong**: Missing the pattern in alternating sequences
 **Correct**: Look for two separate patterns

 **Wrong**: Forgetting to check division for geometric sequences
 **Correct**: Check ratio by division, not subtraction

 **Wrong**: Starting the Fibonacci sequence with 0
 **Correct**: Classic Fibonacci starts 1, 1, 2, 3, 5...

 **Wrong**: Confusing arithmetic and geometric formulas
 **Correct**: Arithmetic = adding constant; Geometric = multiplying by constant
`
    }
  ]
};

export default numericalReasoning;