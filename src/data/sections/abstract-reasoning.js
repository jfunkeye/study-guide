export const abstractReasoning = {
  id: 'abstract-reasoning',
  title: 'Abstract Reasoning',
  icon: 'bi-puzzle',
  color: '#7c3aed',
  description: 'Solve shape patterns, rotations, missing figures, and logical sequences with step-by-step examples and shortcut strategies.',
  topics: [
    {
      id: 'shapes',
      title: 'Shapes & Geometric Patterns',
      content: `
### What is Abstract Reasoning with Shapes?

Abstract reasoning with shapes involves identifying patterns, relationships, and rules in visual information. Unlike numerical reasoning, you're not working with numbers—you're working with shapes, positions, rotations, and spatial relationships.

### Why Shape Reasoning Matters

- **IQ Tests**: A core component of cognitive ability tests
- **Design**: Understanding visual relationships
- **Architecture**: Spatial awareness
- **Engineering**: Visualizing structures
- **Problem Solving**: Pattern recognition skills

---

### Key Concepts in Shape Analysis

#### 1. Counting Sides
The number of sides is a fundamental property of shapes.

\`\`\`
Circle → 0 sides (or infinite)
Triangle → 3 sides
Square → 4 sides
Pentagon → 5 sides
Hexagon → 6 sides
Heptagon → 7 sides
Octagon → 8 sides
Nonagon → 9 sides
Decagon → 10 sides
\`\`\`

**Quick Tip**: The prefix tells you the number of sides:
- Tri- = 3
- Quad- = 4
- Penta- = 5
- Hexa- = 6
- Hepta- = 7
- Octa- = 8
- Nona- = 9
- Deca- = 10

#### 2. Shape Properties
- **Regular shapes**: All sides and angles equal
- **Irregular shapes**: Unequal sides or angles
- **Convex shapes**: All interior angles < 180°
- **Concave shapes**: At least one interior angle > 180°

#### 3. Symmetry Types
- **Line symmetry**: Can be divided into mirror halves
- **Rotational symmetry**: Looks the same after partial rotation
- **Point symmetry**: Looks the same when rotated 180°

---

### Detailed Examples: Shape Sequences

**Example 1: Basic Shape Progression**
*What is the next shape in the sequence: Triangle, Square, Pentagon, Hexagon, ?*

\`\`\`
Step 1: Identify the pattern
Triangle (3 sides) → Square (4 sides) → Pentagon (5 sides) → Hexagon (6 sides)

Step 2: Find the rule
Each shape adds 1 side

Step 3: Apply the rule
Hexagon has 6 sides, so next shape has 7 sides

Answer: Heptagon (7 sides)
\`\`\`

**Example 2: Alternating Shapes**
*What comes next: Circle, Triangle, Circle, Square, Circle, Pentagon, Circle, ?*

\`\`\`
Step 1: Separate into two patterns
Position 1,3,5,7: Circle, Circle, Circle, Circle (constant)
Position 2,4,6,8: Triangle, Square, Pentagon, ?

Step 2: Analyze the second pattern
Triangle (3) → Square (4) → Pentagon (5) → ?

Step 3: Apply the rule
Each shape adds 1 side: 5 + 1 = 6 sides

Answer: Hexagon
\`\`\`

**Example 3: Shape Size Pattern**
*Small Circle, Large Circle, Small Square, Large Square, Small Triangle, ?*

\`\`\`
Step 1: Identify the pattern
Small Circle → Large Circle → Small Square → Large Square → Small Triangle

Step 2: Look for the rule
Shape changes in order: Circle, Circle, Square, Square, Triangle
Size alternates: Small, Large, Small, Large, Small

Step 3: Apply the rule
Next should be Large Triangle

Answer: Large Triangle
\`\`\`

**Example 4: Shape Color Pattern**
*Red Square, Blue Circle, Red Triangle, Blue Square, Red Circle, ?*

\`\`\`
Step 1: Separate colors and shapes
Colors: Red, Blue, Red, Blue, Red → Next is Blue
Shapes: Square, Circle, Triangle, Square, Circle → Next is Triangle

Step 2: Combine
Blue + Triangle

Answer: Blue Triangle
\`\`\`

**Example 5: Shape Count Pattern**
*One Circle, Two Circles, One Square, Two Squares, One Triangle, ?*

\`\`\`
Step 1: Identify the pattern
Shapes: Circle, Circle, Square, Square, Triangle → Next is Triangle
Counts: 1, 2, 1, 2, 1 → Next is 2

Answer: Two Triangles
\`\`\`

**Example 6: Shape Orientation**
*Arrow Up, Arrow Right, Arrow Down, Arrow Left, Arrow Up, ?*

\`\`\`
Step 1: Analyze the movement
Up (0°) → Right (90°) → Down (180°) → Left (270°) → Up (360°)

Step 2: Find the rule
Each step rotates 90° clockwise

Step 3: Apply the rule
Up → 90° clockwise → Right

Answer: Arrow Right
\`\`\`

**Example 7: Complex Shape Progression**
*Shape 1: Triangle with circle inside, Shape 2: Square with circle inside, Shape 3: Pentagon with circle inside, Shape 4: ?*

\`\`\`
Step 1: Analyze the pattern
Outer shape: Triangle (3) → Square (4) → Pentagon (5) → ? (6)
Inner shape: Circle stays constant

Step 2: Apply the rule
Next outer shape has 6 sides (Hexagon)
Inner shape remains Circle

Answer: Hexagon with circle inside
\`\`\`

**Example 8: Shape Rotation with Pattern**
*Square (normal), Square (rotated 45°), Square (normal), Square (rotated 45°), ?*

\`\`\`
Step 1: Identify the alternating pattern
Term 1: Normal square
Term 2: Rotated 45° (diamond)
Term 3: Normal square
Term 4: Rotated 45° (diamond)

Step 2: Apply the rule
Term 5: Normal square

Answer: Normal square
\`\`\`

---

### Shape Comparison Problems

**Example 9: Which Shape is Different?**
*Which shape does not belong: Circle, Triangle, Square, Pentagon, Oval?*

\`\`\`
Step 1: Analyze each shape
Circle: 0 sides, curved
Triangle: 3 sides, straight
Square: 4 sides, straight
Pentagon: 5 sides, straight
Oval: 0 sides, curved (like circle)

Step 2: Find the pattern
All except Oval have straight sides OR all except Oval/Circle have straight sides

Step 3: Determine the odd one out
Oval is not a standard polygon with straight sides

Answer: Oval (all others have straight sides)
\`\`\`

**Example 10: Shape Transformation**
*If a square is rotated 45°, what shape does it appear to be?*

\`\`\`
Step 1: Visualize the rotation
A square rotated 45° appears as a diamond

Step 2: Identify properties
Still a square (4 equal sides, 4 equal angles), just rotated

Answer: Diamond (rotated square)
\`\`\`

**Example 11: Shape Parts Pattern**
*Shape 1: Circle split into 2 parts, Shape 2: Circle split into 3 parts, Shape 3: Circle split into 4 parts, Shape 4: ?*

\`\`\`
Step 1: Identify the pattern
Parts: 2, 3, 4 → Next is 5

Step 2: Apply the rule
Circle split into 5 equal parts

Answer: Circle divided into 5 parts (like a pentagon inscribed)
\`\`\`

**Example 12: Shape Symmetry**
*Which shape has the most lines of symmetry: Square, Rectangle, Triangle, Circle?*

\`\`\`
Step 1: Count lines of symmetry
Square: 4 lines (vertical, horizontal, 2 diagonals)
Rectangle: 2 lines (vertical, horizontal)
Triangle (equilateral): 3 lines
Circle: Infinite lines

Step 2: Compare
Circle has infinite lines of symmetry

Answer: Circle
\`\`\`

---

### Shape Classification Exercises

**Exercise 1: Polygon Classification**
*Classify these shapes by number of sides:*
- Triangle: 3 sides
- Quadrilateral: 4 sides
- Pentagon: 5 sides
- Hexagon: 6 sides
- Heptagon: 7 sides
- Octagon: 8 sides

**Exercise 2: Regular vs Irregular**
*Which are regular shapes?*
- Square (regular - all sides equal, all angles 90°)
- Rectangle (irregular - sides not all equal)
- Equilateral triangle (regular - all sides equal)
- Scalene triangle (irregular - no sides equal)

**Exercise 3: Shape Family Groups**
*Group these shapes into families:*
- Triangle, Square, Pentagon, Hexagon → All polygons
- Circle, Oval, Ellipse → All curved shapes
- Cube, Sphere, Cylinder → All 3D shapes

---

### Complex Shape Pattern Problems

**Example 13: Shape and Shading Pattern**
*△, ▲, ○, ●, □, ■, △, ?*

\`\`\`
Step 1: Analyze the pattern
Shapes: Triangle, Triangle, Circle, Circle, Square, Square, Triangle
Shading: Open, Solid, Open, Solid, Open, Solid, Open

Step 2: Find the rule
Shapes repeat every 3: Triangle, Circle, Square
Shading alternates: Open, Solid

Step 3: Apply the rule
Next shape should be Triangle (after Square in cycle)
Next shading should be Solid (after Open)

Answer: ▲ (Solid Triangle)
\`\`\`

**Example 14: Shape Rotation and Position**
*A shape in the top-left corner moves to top-right, then bottom-right, then bottom-left, then ?*

\`\`\`
Step 1: Trace the movement
Top-Left → Top-Right → Bottom-Right → Bottom-Left → ?

Step 2: Identify the path
Clockwise movement around a square

Step 3: Apply the rule
Bottom-Left → Top-Left

Answer: Top-Left
\`\`\`

**Example 15: Shape Combination**
*If ○ + □ = ⬡ and □ + △ = ⬠, what is ○ + △?*

\`\`\`
Step 1: Understand the relationship
This is a hypothetical shape combination problem

Step 2: Look for patterns
We can't determine without more information
Need to see the actual shapes or get more examples

Answer: Insufficient information (this tests logical reasoning about what can be determined)
\`\`\`

**Example 16: Shape with Internal Patterns**
*Circle with 1 dot, Square with 2 dots, Triangle with 3 dots, Circle with 4 dots, Square with 5 dots, ?*

\`\`\`
Step 1: Analyze the pattern
Shapes: Circle, Square, Triangle, Circle, Square → Next is Triangle
Dots: 1, 2, 3, 4, 5 → Next is 6

Step 2: Combine
Triangle with 6 dots

Answer: Triangle with 6 dots
\`\`\`

**Example 17: Multiple Shapes Pattern**
*One small circle, two medium circles, three large circles, one small square, two medium squares, three large squares, ?*

\`\`\`
Step 1: Analyze the pattern
Group 1: Circles (small, medium, large) → counts: 1,2,3
Group 2: Squares (small, medium, large) → counts: 1,2,3
Group 3: Should be Triangles

Step 2: Apply the rule
One small triangle

Answer: One small triangle
\`\`\`

---

### Practice Questions (Organized by Difficulty)

**Beginner:**
1. What comes next: Triangle, Triangle, Square, Square, Pentagon, Pentagon, ?
   *Solution: Next shape should be Hexagon (following pattern of two of each)*

2. What comes next: Circle, Square, Triangle, Circle, Square, Triangle, ?
   *Solution: Circle (pattern repeats every 3)*

3. Which has more sides: Pentagon or Hexagon?
   *Solution: Hexagon (6 vs 5 sides)*

4. What shape has 4 equal sides and 4 equal angles?
   *Solution: Square*

**Intermediate:**
5. What comes next: Small Circle, Large Circle, Small Square, Large Square, Small Pentagon, ?
   *Solution: Large Pentagon (size alternates, shapes add 1 side)*

6. What comes next: ○, ●, □, ■, △, ▲, ?
   *Solution: ○ (pattern: empty, filled, empty, filled... shapes: circle, square, triangle repeat)*

7. Identify the odd one out: Square, Rectangle, Triangle, Circle, Pentagon
   *Solution: Circle (only shape without straight sides)*

8. If a shape moves Up, Right, Down, Left, Up, what comes next?
   *Solution: Right (clockwise movement)*

**Advanced:**
9. What comes next: Triangle pointing Up, Triangle pointing Down, Square, Triangle pointing Up, Triangle pointing Down, ?
   *Solution: Square (pattern repeats every 3: Up, Down, Square)*

10. What shape is missing: Circle, Square, ?, Hexagon, Circle, Square, ?
    *Solution: Missing shapes are Pentagon (between Square and Hexagon) and Triangle (after Square)*

11. A shape rotates 90° clockwise, then 180° counter-clockwise, then 90° clockwise. Net rotation?
    *Solution: 90° + 180° + 90° = 360° (but direction: CW + CCW + CW = 90° + (-180°) + 90° = 0° net)*

12. What comes next: ●△, ○□, ■●, □○, ▲■, ?
    *Solution: ●△ (pattern repeats every 5)*

**Challenge:**
13. Create a pattern using 3 shapes and 2 sizes that repeats every 6 terms
    *Solution: Small Triangle, Large Triangle, Small Square, Large Square, Small Circle, Large Circle (repeats)*

14. What shape completes: △, ▲, ○, ●, □, ■, △, ▲, ○, ●, ?, ■
    *Solution: □ (pattern: triangle, circle, square repeated with shading alternating)*

15. If ★ represents a star, ★★ represents two stars, and the pattern is ★, ★★, ★★★, ★★★★, what comes next?
    *Solution: ★★★★★ (5 stars)*

---

### Common Mistakes

 **Wrong**: Assuming shape patterns are always about sides
 **Correct**: Consider size, color, shading, orientation, position, and combinations

 **Wrong**: Looking for single-rule patterns only
 **Correct**: Many patterns use multiple rules simultaneously

 **Wrong**: Not considering rotation in shape sequences
 **Correct**: Always consider if shapes are rotating or flipping

 **Wrong**: Confusing polygon names
 **Correct**: Memorize: Triangle (3), Quadrilateral (4), Pentagon (5), Hexagon (6), Heptagon (7), Octagon (8)

 **Wrong**: Forgetting to check if shapes are regular or irregular
 **Correct**: Regular shapes have equal sides and angles; irregular don't

 **Wrong**: Not considering that shapes can be concave or convex
 **Correct**: Concave shapes have an inward indentation; convex shapes bulge outward
`
    },
    {
      id: 'patterns',
      title: 'Patterns & Sequences',
      content: `
### Understanding Visual Patterns

A **pattern** is a recurring arrangement of elements. In abstract reasoning, patterns can involve:
- **Shapes**: Geometric figures
- **Colors**: Different hues or shades
- **Sizes**: Small, medium, large
- **Positions**: Locations in space
- **Orientations**: Rotations or flips
- **Counts**: Number of elements
- **Shading**: Filled, empty, striped, dotted

### The Seven-Step Pattern Analysis Method

\`\`\`
1. OBSERVE: Look at all elements in the pattern
2. IDENTIFY: What changes from one term to the next?
3. GROUP: Group elements by attribute (shape, size, color, etc.)
4. ANALYZE: Determine the rule for each attribute
5. COMBINE: Put the rules together
6. PREDICT: Apply the rules to find the missing term
7. VERIFY: Check if the answer fits the pattern
\`\`\`

---

### Types of Patterns

#### 1. Repeating Patterns
Elements repeat in a cycle.

**Example**: Circle, Square, Triangle, Circle, Square, Triangle, ...

\`\`\`
Pattern: Circle → Square → Triangle (repeats)
Next: Circle
\`\`\`

**Shortcut**: Identify the cycle length. Divide the term position by cycle length. The remainder tells you which element comes next.

#### 2. Growing Patterns
Elements increase according to a rule.

**Example**: 1 Circle, 2 Circles, 3 Circles, 4 Circles, ...

\`\`\`
Pattern: Add 1 circle each step
Next: 5 Circles
\`\`\`

**Shortcut**: Look for arithmetic (adding/subtracting) or geometric (multiplying/dividing) growth.

#### 3. Alternating Patterns
Two or more elements alternate in a specific way.

**Example**: ●, ○, ●, ○, ●, ...

\`\`\`
Pattern: Solid, Empty, Solid, Empty
Next: ○ (Empty)
\`\`\`

**Shortcut**: Odd positions often have one pattern, even positions another.

#### 4. Progressive Patterns
Elements change gradually.

**Example**: Small Circle, Medium Circle, Large Circle, ...

\`\`\`
Pattern: Size increases progressively
Next: Extra Large Circle
\`\`\`

**Shortcut**: Check if the change is linear (constant addition) or exponential (multiplication).

#### 5. Rotational Patterns
Elements rotate in a specific direction.

**Example**: Arrow Up, Arrow Right, Arrow Down, Arrow Left, ...

\`\`\`
Pattern: 90° clockwise rotation each step
Next: Arrow Up
\`\`\`

**Shortcut**: Track the direction changes. Clockwise = right, Counter-clockwise = left.

#### 6. Mirror Patterns
Elements are reflected.

**Example**: b, d, b, d, ... (mirror images)

\`\`\`
Pattern: Reflect horizontally each step
Next: b
\`\`\`

**Shortcut**: Mirror images are like looking in a mirror. Vertical mirror: left-right swap. Horizontal mirror: top-bottom swap.

---

### Detailed Examples with Multiple Rules

**Example 1: Combined Size and Shape**
*Small Circle, Large Square, Small Triangle, Large Circle, Small Square, ?*

\`\`\`
Step 1: Analyze sizes
Small, Large, Small, Large, Small → Next is Large

Step 2: Analyze shapes
Circle, Square, Triangle, Circle, Square → Next is Triangle

Step 3: Combine
Large + Triangle

Answer: Large Triangle
\`\`\`

**Example 2: Shading and Position**
*● in top-left, ○ in top-right, ● in bottom-right, ○ in bottom-left, ● in top-left, ?*

\`\`\`
Step 1: Analyze shading
●, ○, ●, ○, ● → Next is ○

Step 2: Analyze position
Top-Left, Top-Right, Bottom-Right, Bottom-Left, Top-Left
Clockwise movement pattern

Step 3: Combine
○ in Top-Right

Answer: ○ in top-right
\`\`\`

**Example 3: Three-Attribute Pattern**
*Red Small Circle, Blue Medium Triangle, Green Large Square, Red Small Circle, ?*

\`\`\`
Step 1: Check for repeating pattern
The sequence repeats every 3 terms
Term 1 = Red Small Circle
Term 2 = Blue Medium Triangle
Term 3 = Green Large Square
Term 4 = Red Small Circle (repeat of Term 1)
Term 5 = ?

Step 2: Apply the pattern
Term 5 should be Term 2

Answer: Blue Medium Triangle
\`\`\`

**Example 4: Shape Count Pattern**
*One Triangle, Two Squares, Three Circles, One Triangle, Two Squares, ?*

\`\`\`
Step 1: Analyze shapes
Triangle, Square, Circle, Triangle, Square → Next is Circle

Step 2: Analyze counts
1, 2, 3, 1, 2 → Next is 3

Step 3: Combine
Three Circles

Answer: Three Circles
\`\`\`

**Example 5: Shape with Internal Patterns**
*Circle with dot, Square with line, Triangle with dot, Circle with line, ?*

\`\`\`
Step 1: Analyze shapes
Circle, Square, Triangle, Circle → Next is Square

Step 2: Analyze internal elements
Dot, Line, Dot, Line → Next is Dot

Step 3: Combine
Square with dot

Answer: Square with dot
\`\`\`

**Example 6: Letter Pattern**
*A, B, C, D, E, ?*

\`\`\`
Pattern: Alphabetical order
Next: F

Answer: F
\`\`\`

**Example 7: Number of Elements Pattern**
*[●], [●●], [●●●], [●●●●], ?*

\`\`\`
Pattern: Add 1 dot each step
Next: [●●●●●]

Answer: [●●●●●] (5 dots)
\`\`\`

**Example 8: Shape Transformation**
*△, ▲, □, ■, ○, ●, ?*

\`\`\`
Step 1: Analyze shapes
Triangle, Triangle, Square, Square, Circle, Circle

Step 2: Analyze shading
Empty, Solid, Empty, Solid, Empty, Solid

Step 3: Apply pattern
Shapes: Triangle, Triangle, Square, Square, Circle, Circle → Next is Triangle
Shading: Empty, Solid, Empty, Solid, Empty, Solid → Next is Empty

Answer: △ (Empty Triangle)
\`\`\`

**Example 9: Grid Pattern**
*[●, ○, ●], [○, ●, ○], [●, ○, ●], [?]*

\`\`\`
Step 1: Analyze the grid pattern
Each row alternates: ●, ○, ● then ○, ●, ○

Step 2: Apply the rule
Next row should be ○, ●, ○

Answer: [○, ●, ○]
\`\`\`

**Example 10: 2×2 Matrix Pattern**
*[●, ○] [○, ●] [■, □] [□, ■] [?]*

\`\`\`
Step 1: Analyze the pattern
Pair 1: ●, ○ then ○, ● (swap positions)
Pair 2: ■, □ then □, ■ (swap positions)

Step 2: Apply the rule
Next pair should be [▲, △] then [△, ▲]

Answer: [▲, △]
\`\`\`

**Example 11: Pattern with Two Attributes**
*Red Circle, Blue Square, Green Triangle, Red Square, Blue Triangle, ?*

\`\`\`
Step 1: Analyze colors
Red, Blue, Green, Red, Blue → Next is Green

Step 2: Analyze shapes
Circle, Square, Triangle, Square, Triangle → Next is Circle

Step 3: Combine
Green Circle

Answer: Green Circle
\`\`\`

**Example 12: Increasing Pattern**
*1 line, 2 lines, 3 lines, 4 lines, ?*

\`\`\`
Pattern: Add 1 line each step
Next: 5 lines

Answer: 5 lines
\`\`\`

**Example 13: Pattern in Numbers and Shapes**
*1●, 2■, 3▲, 4●, 5■, ?*

\`\`\`
Step 1: Analyze numbers
1, 2, 3, 4, 5 → Next is 6

Step 2: Analyze shapes
●, ■, ▲, ●, ■ → Next is ▲

Step 3: Combine
6▲

Answer: 6▲ (6 triangles)
\`\`\`

---

### Pattern Recognition Strategies

#### Strategy 1: Look for the Simplest Rule
Start with the most obvious pattern before assuming complexity.

#### Strategy 2: Check Multiple Attributes
Sometimes the pattern involves size, shape, AND color simultaneously.

#### Strategy 3: Consider Grouping
Group elements into sets of 2, 3, or 4 to find relationships.

#### Strategy 4: Look at Changes
What changes from one term to the next? What stays the same?

#### Strategy 5: Check Direction
Patterns often move left-to-right, top-to-bottom, or in a cycle.

#### Strategy 6: Test Your Hypothesis
Once you find a pattern, test it on ALL terms to make sure it works.

#### Strategy 7: Consider Multiple Patterns
Some problems have more than one valid pattern. Look for the most consistent one.

---

### Practice Questions

**Beginner:**
1. Red, Blue, Red, Blue, Red, ?
   *Solution: Blue*

2. Triangle, Square, Circle, Triangle, Square, ?
   *Solution: Circle*

3. Small, Large, Small, Large, Small, ?
   *Solution: Large*

4. ●, ○, ●, ○, ●, ?
   *Solution: ○*

**Intermediate:**
5. Circle with 0 dots, Circle with 1 dot, Circle with 2 dots, Circle with 3 dots, ?
   *Solution: Circle with 4 dots*

6. Red Circle, Blue Square, Green Triangle, Red Circle, Blue Square, ?
   *Solution: Green Triangle*

7. Arrow Up, Arrow Down, Arrow Left, Arrow Right, Arrow Up, ?
   *Solution: Arrow Down*

8. ● in center, ○ in center, ● in center, ○ in center, ?
   *Solution: ● in center*

**Advanced:**
9. Small Red Circle, Medium Blue Square, Large Green Triangle, Small Red Circle, ?
   *Solution: Medium Blue Square*

10. One Circle, Two Squares, Three Triangles, One Circle, Two Squares, ?
    *Solution: Three Triangles*

11. ● in top-left, ○ in top-right, ● in bottom-right, ○ in bottom-left, ● in top-left, ?
    *Solution: ○ in top-right*

12. △, ▲, □, ■, ○, ●, △, ▲, □, ?
    *Solution: ■ (following pattern: open, solid, open, solid...)*

**Challenge:**
13. Create a pattern using 3 shapes, 2 sizes, and 2 colors that repeats every 6 terms
    *Solution: Small Red Circle, Large Blue Square, Small Green Triangle, Large Red Circle, Small Blue Square, Large Green Triangle (repeats)*

14. What comes next: Red Circle, Blue Circle, Red Square, Blue Square, Red Triangle, ?
    *Solution: Blue Triangle (colors alternate: Red, Blue; shapes add sides: Circle, Square, Triangle)*

15. If pattern is ●, ●●, ●●●, ●●●●, ●●●●●, what is the 10th term?
    *Solution: ●●●●●●●●●● (10 dots)*

---

### Common Mistakes

 **Wrong**: Focusing on only one attribute
 **Correct**: Check shape, size, color, shading, position, and count

 **Wrong**: Missing the pattern cycle length
 **Correct**: Patterns often repeat after 2, 3, or 4 terms

 **Wrong**: Assuming patterns are always obvious
 **Correct**: Some patterns require combining multiple rules

 **Wrong**: Not checking if pattern could go in reverse
 **Correct**: Some patterns work backwards too

 **Wrong**: Forgetting to check if the pattern applies to ALL terms
 **Correct**: A valid pattern must work for every term in the sequence

 **Wrong**: Not considering overlapping patterns
 **Correct**: Sometimes patterns overlap (e.g., odd positions have one pattern, even positions another)
`
    },
    {
      id: 'rotations',
      title: 'Rotations & Transformations',
      content: `
### Understanding Rotations

A **rotation** is a transformation that turns a shape around a fixed point (the center of rotation). In abstract reasoning, rotations are common patterns.

### Key Rotation Concepts

#### Rotation Directions
- **Clockwise (CW)**: Turning to the right (like clock hands)
- **Counter-clockwise (CCW)**: Turning to the left (opposite of clock hands)

#### Rotation Degrees
- **90°**: Quarter turn
- **180°**: Half turn
- **270°**: Three-quarter turn
- **360°**: Full turn (back to start)

#### Rotation Shortcut Rules
\`\`\`
90° CW = 270° CCW
90° CCW = 270° CW
180° CW = 180° CCW
360° = 0° (full rotation)
\`\`\`

---

### The Four Cardinal Directions

\`\`\`
         North (Up)
             ↑
             |
West ←------+------→ East
    (Left)   |     (Right)
             |
         South (Down)
\`\`\`

### Rotation Rules

#### Clockwise Rotations
\`\`\`
North (0°) → 90° CW = East (90°)
East (90°) → 90° CW = South (180°)
South (180°) → 90° CW = West (270°)
West (270°) → 90° CW = North (360°/0°)

North (0°) → 180° CW = South (180°)
East (90°) → 180° CW = West (270°)
South (180°) → 180° CW = North (360°/0°)
West (270°) → 180° CW = East (90°)
\`\`\`

#### Counter-Clockwise Rotations
\`\`\`
North (0°) → 90° CCW = West (270°)
West (270°) → 90° CCW = South (180°)
South (180°) → 90° CCW = East (90°)
East (90°) → 90° CCW = North (0°)

North (0°) → 180° CCW = South (180°)
East (90°) → 180° CCW = West (270°)
South (180°) → 180° CCW = North (0°)
West (270°) → 180° CCW = East (90°)
\`\`\`

---

### Detailed Examples

**Example 1: Basic Direction Rotation**
*A shape is facing North. It rotates 90° clockwise. Which direction does it face?*

\`\`\`
Step 1: Identify starting direction
Starting: North (↑)

Step 2: Apply rotation
90° clockwise: North → East

Answer: East (→)
\`\`\`

**Example 2: 180° Rotation**
*A shape is facing East. It rotates 180° counter-clockwise. Which direction does it face?*

\`\`\`
Step 1: Identify starting direction
Starting: East (→)

Step 2: Apply rotation
180° CCW is same as 180° CW (opposite direction)
East → West

Answer: West (←)
\`\`\`

**Example 3: Multiple Rotations**
*A shape rotates 270° clockwise. How many degrees counter-clockwise is this equivalent to?*

\`\`\`
Step 1: Understand full rotation
Full circle = 360°

Step 2: Calculate equivalent
270° CW = 360° - 270° = 90° CCW

Answer: 90° counter-clockwise
\`\`\`

**Example 4: Shape Rotation**
*A triangle pointing up rotates 90° clockwise. How does it point?*

\`\`\`
Step 1: Visualize starting position
Triangle points Up (▲)

Step 2: Apply 90° clockwise rotation
Up (▲) → Right (▶)

Answer: Triangle points Right (▶)
\`\`\`

**Example 5: Rotation Series**
*Arrow Up, Arrow Right, Arrow Down, Arrow Left, Arrow Up, ?*

\`\`\`
Step 1: Identify the pattern
Up → Right → Down → Left → Up
Each step is 90° clockwise

Step 2: Apply the rule
Up → 90° CW → Right

Answer: Arrow Right
\`\`\`

**Example 6: Mirror vs Rotation**
*A shape facing North is reflected across a vertical line. What direction does it face?*

\`\`\`
Step 1: Understand reflection
Vertical reflection (left-right flip) reverses direction

Step 2: Apply reflection
North (↑) reflected vertically → North (↑)
(Up stays up in vertical reflection)

Answer: North (↑)
\`\`\`

**Example 7: Reflection Across Horizontal Line**
*A shape facing East is reflected across a horizontal line. What direction?*

\`\`\`
Step 1: Understand reflection
Horizontal reflection (up-down flip) reverses vertical direction

Step 2: Apply reflection
East (→) reflected horizontally → East (→)
(Horizontal direction stays the same)

Answer: East (→)
\`\`\`

**Example 8: Combined Rotation and Reflection**
*A shape pointing North rotates 90° clockwise, then reflects across a vertical line. What is the final direction?*

\`\`\`
Step 1: Apply rotation
North → 90° CW = East

Step 2: Apply reflection
East → vertical reflection = West

Answer: West (←)
\`\`\`

**Example 9: Shape Position Rotation**
*A shape moves in a square: top-left → top-right → bottom-right → bottom-left → ?*

\`\`\`
Step 1: Trace the movement
Top-Left → Top-Right → Bottom-Right → Bottom-Left

Step 2: Identify the pattern
This is clockwise movement around a square

Step 3: Apply the rule
Bottom-Left → Top-Left

Answer: Top-Left
\`\`\`

**Example 10: Clockwise Pattern in a 2×2 Grid**
*Which position is missing?*
\`\`\`
[●] [○]     [○] [●]
[○] [●]  →  [●] [○]
\`\`\`

\`\`\`
Step 1: Observe the change
Position 1: ● at top-left, ○ at top-right, ○ at bottom-left, ● at bottom-right
Position 2: ○ at top-left, ● at top-right, ● at bottom-left, ○ at bottom-right

Step 2: Identify the transformation
All shapes have swapped positions (rotated 180°)

Answer: Pattern shows a 180° rotation
\`\`\`

**Example 11: Rotation of Complex Shape**
*A shape with a dot on top rotates 90° clockwise. Where does the dot appear?*

\`\`\`
Step 1: Visualize the shape
Dot is at the top (12 o'clock position)

Step 2: Apply 90° clockwise rotation
12 o'clock → 3 o'clock (right)

Answer: Dot appears on the right side
\`\`\`

**Example 12: 270° Rotation**
*A shape facing South rotates 270° clockwise. What direction?*

\`\`\`
Step 1: Identify starting direction
Starting: South (↓)

Step 2: Apply rotation
270° CW = 90° CCW
South → 90° CCW = East

Answer: East (→)
\`\`\`

**Example 13: Multiple Rotations Net Effect**
*A shape rotates 90° CW, then 90° CW, then 90° CW. What is the net rotation?*

\`\`\`
Step 1: Add the rotations
90° + 90° + 90° = 270° CW

Step 2: Simplify if needed
270° CW = 90° CCW

Answer: 270° clockwise (or 90° counter-clockwise)
\`\`\`

---

### Rotation Patterns in Sequences

**Example 14: Arrow Rotation Pattern**
*→, ↓, ←, ↑, →, ?*

\`\`\`
Step 1: Identify the pattern
Right → Down → Left → Up → Right
Each step: 90° clockwise

Step 2: Apply the rule
Right → 90° CW = Down

Answer: ↓ (Down)
\`\`\`

**Example 15: Alternating Rotation**
*↑, →, ↓, ←, ↑, ? (Determine if same pattern or different)*

\`\`\`
Step 1: Check the movement
↑ → → → ↓ → ← → ↑
90° CW, 90° CW, 90° CW, 90° CW (all same)

Step 2: Apply the rule
↑ → 90° CW = →

Answer: → (Right)
\`\`\`

**Example 16: Variable Rotation**
*↑, →, ↓, ←, ↑, →, ↓, ?*

\`\`\`
Step 1: Identify the pattern
Constant 90° CW rotation

Step 2: Apply the rule
After ↓ comes ←

Answer: ← (Left)
\`\`\`

---

### Transformation Types Summary

| Transformation | Description | Effect on Shape |
|----------------|--------------|-----------------|
| Rotation | Turn around a point | Changes orientation |
| Reflection | Mirror image | Flips the shape |
| Translation | Slide | Changes position |
| Dilation | Resize | Changes size |
| Shearing | Skew | Distorts shape |

---

### Practice Questions

**Beginner:**
1. North rotates 90° CW → ?
   *Solution: East*

2. East rotates 180° → ?
   *Solution: West*

3. South rotates 90° CCW → ?
   *Solution: East*

4. West rotates 270° CW → ?
   *Solution: South (270° CW = 90° CCW; West → 90° CCW = South)*

**Intermediate:**
5. Arrow Up rotates 90° CW, then 90° CCW. Final direction?
   *Solution: Up (net rotation = 0°)*

6. Shape in top-left rotates 180° around center. New position?
   *Solution: Bottom-right*

7. Arrow pointing right is reflected vertically. New direction?
   *Solution: Left*

8. Triangle pointing down rotates 90° CW. New direction?
   *Solution: Left*

**Advanced:**
9. Shape rotates 90° CW, then 180° CW, then 270° CW. Net rotation?
   *Solution: 540° = 180° (360 + 180 = 540; net 180°)*

10. Arrow Up rotates 45° CW every step. After 8 steps, direction?
    *Solution: 8 × 45° = 360° → Up (back to start)*

11. Shape faces NW, rotates 135° CW. New direction?
    *Solution: NW → 135° CW = SE*

12. Object in top-right rotates 270° clockwise. New position?
    *Solution: Top-left (270° CW = 90° CCW)*

**Challenge:**
13. A square with a dot on top rotates 90° CW, then 180° CCW, then 270° CW. Where is the dot?
    *Solution: 90° + 180° + 270° = 540° CW net = 180° CW; Top → Bottom*

14. Create a rotation pattern using 4 arrows that repeats every 4 steps
    *Solution: Up, Right, Down, Left (repeats)*

15. If a shape rotates 720°, how many full rotations is that?
    *Solution: 720° ÷ 360° = 2 full rotations*

---

### Common Rotation Mistakes

 **Wrong**: Confusing clockwise and counter-clockwise
 **Correct**: Clockwise = right, Counter-clockwise = left

 **Wrong**: 270° CW thinking it's 270° rotation when it's actually 90° CCW
 **Correct**: 270° CW = 90° CCW (360° - 270° = 90°)

 **Wrong**: Not visualizing the rotation
 **Correct**: Draw or imagine the shape's movement

 **Wrong**: Confusing reflection and rotation
 **Correct**: Rotation turns, reflection flips

 **Wrong**: Forgetting that 180° CW = 180° CCW
 **Correct**: 180° is the same in either direction

 **Wrong**: Not accounting for multiple rotations
 **Correct**: Add all rotations, then simplify by subtracting 360° multiples
`
    },
    {
      id: 'missing-figures',
      title: 'Missing Figures',
      content: `
### Understanding Missing Figure Problems

**Missing figure problems** present a sequence with one or more blanks. You must identify the pattern and fill in the missing element(s).

### Common Pattern Types

#### 1. Alternating Patterns
Elements alternate between two or more options.

**Example**: ●, ○, ●, ○, ●, ?
\`\`\`
Pattern: Alternates between Solid and Empty Circle
Answer: ○
\`\`\`

#### 2. Progressive Patterns
Elements change by a consistent rule (adding, subtracting, multiplying).

**Example**: 1, 2, 4, 8, 16, ?
\`\`\`
Pattern: Each term doubles (×2)
Answer: 32
\`\`\`

#### 3. Cyclic Patterns
Elements repeat in a cycle.

**Example**: ▲, ■, ●, ▲, ■, ?
\`\`\`
Pattern: Cycle of 3: ▲, ■, ● repeats
Answer: ●
\`\`\`

#### 4. Symmetrical Patterns
Elements mirror each other.

**Example**: 1, 2, 3, 2, 1, ?
\`\`\`
Pattern: Increases then decreases (1, 2, 3, 2, 1)
Answer: 0
\`\`\`

---

### Detailed Examples

**Example 1: Shape Count Pattern**
*●, ●●, ●●●, ●●●●, ?*

\`\`\`
Step 1: Analyze the pattern
Term 1: 1 dot
Term 2: 2 dots
Term 3: 3 dots
Term 4: 4 dots

Step 2: Identify the rule
Add 1 dot each term

Step 3: Apply the rule
Term 5: 5 dots

Answer: ●●●●● (5 dots)
\`\`\`

**Example 2: Fibonacci Pattern**
*1, 1, 2, 3, 5, ?*

\`\`\`
Step 1: Analyze the pattern
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = ?

Step 2: Identify the rule
Each term is the sum of the two previous terms

Step 3: Apply the rule
3 + 5 = 8

Answer: 8
\`\`\`

**Example 3: Square Number Pattern**
*1, 4, 9, 16, 25, ?*

\`\`\`
Step 1: Analyze the pattern
1 = 1²
4 = 2²
9 = 3²
16 = 4²
25 = 5²

Step 2: Identify the rule
Terms are consecutive square numbers

Step 3: Apply the rule
Next is 6² = 36

Answer: 36
\`\`\`

**Example 4: Pattern with Missing Middle**
*2, 6, ?, 54, 162*

\`\`\`
Step 1: Check differences between known terms
6 ÷ 2 = 3
54 ÷ ? = 3? → ? = 18
162 ÷ 54 = 3

Step 2: Identify the rule
Each term is multiplied by 3

Step 3: Apply the rule
6 × 3 = 18

Answer: 18
\`\`\`

**Example 5: Alternating Shape Pattern**
*△, ▲, ○, ●, □, ?, △, ▲*

\`\`\`
Step 1: Group the pattern
△, ▲, ○, ●, □, ?
Pattern: Solid and empty versions of shapes

Step 2: Identify the rule
Triangle: △ (empty), ▲ (solid)
Circle: ○ (empty), ● (solid)
Square: □ (empty), ■ (solid)

Step 3: Apply the rule
After □ comes ■

Answer: ■ (Solid Square)
\`\`\`

**Example 6: Pattern with Two Missing Elements**
*2, 4, ?, 16, ?, 64*

\`\`\`
Step 1: Check the relationship
2 × 2 = 4
4 × 2 = 8
8 × 2 = 16
16 × 2 = 32
32 × 2 = 64

Step 2: Identify the rule
Each term is multiplied by 2

Step 3: Apply the rule
Missing terms: 8 and 32

Answer: 8, 32
\`\`\`

**Example 7: Shape Position Pattern**
*Grid positions: [● at TL], [○ at TR], [● at BR], [○ at BL], [?]*

\`\`\`
Step 1: Track positions
TL → TR → BR → BL → ?
TL = Top-Left, TR = Top-Right, BR = Bottom-Right, BL = Bottom-Left

Step 2: Identify movement
Clockwise movement around the square

Step 3: Apply the rule
BL → TL

Answer: ● at TL (Top-Left)
\`\`\`

**Example 8: Combined Size and Shape Pattern**
*Small ●, Large ○, Small ▲, Large ■, ?*

\`\`\`
Step 1: Analyze sizes
Small, Large, Small, Large → Next is Small

Step 2: Analyze shapes
●, ○, ▲, ■ → Next is ?

Step 3: Look for pattern in shapes
Circle (●), Circle (○), Triangle (▲), Square (■)
The pattern seems to be: Circle, Circle, Triangle, Square
This doesn't follow a simple pattern without more information

Step 4: Reconsider
Maybe it's: Solid, Empty, Solid, Empty → Next is Solid
Shapes: Circle, Circle, Triangle, Square → Could be increasing sides?

Answer: Without more information, can't definitively determine
\`\`\`

**Example 9: Matrix Pattern**
*[2, 4, 6], [8, 10, 12], [?, 16, 18]*

\`\`\`
Step 1: Identify the pattern in rows
Row 1: 2, 4, 6 (add 2)
Row 2: 8, 10, 12 (add 2)
Row 3: ?, 16, 18 (add 2)

Step 2: Identify pattern in columns
Column 1: 2, 8, ? (add 6)
Column 2: 4, 10, 16 (add 6)
Column 3: 6, 12, 18 (add 6)

Step 3: Apply the rule
Column 1: 2 + 6 = 8, 8 + 6 = 14

Answer: 14
\`\`\`

**Example 10: 3×3 Grid Pattern**
*[1, 2, 3], [4, 5, 6], [?, ?, ?]*

\`\`\`
Step 1: Identify the pattern
Numbers increase by 1 from left to right and top to bottom

Step 2: Apply the rule
Row 3 should be: 7, 8, 9

Answer: [7, 8, 9]
\`\`\`

**Example 11: Shape Matrix**
*[●, ○], [○, ●], [■, □], [?, ?]*

\`\`\`
Step 1: Identify the pattern
Each pair alternates: ●, ○ then ○, ● (swap)
Then ■, □ then □, ■ (swap)

Step 2: Apply the rule
Next pair should be ▲, △ then △, ▲

Answer: [△, ▲]
\`\`\`

**Example 12: Number and Shape Combination**
*2●, 4■, 6▲, 8●, 10■, ?*

\`\`\`
Step 1: Analyze numbers
2, 4, 6, 8, 10 → Next is 12 (add 2)

Step 2: Analyze shapes
●, ■, ▲, ●, ■ → Next is ▲ (cycle of 3)

Step 3: Combine
12▲

Answer: 12▲
\`\`\`

---

### Strategies for Missing Figure Problems

#### Strategy 1: Look for the Simplest Pattern
Start with the most obvious relationship.

#### Strategy 2: Check Differences
For numbers, check if there's a constant difference or ratio.

#### Strategy 3: Consider Multiple Attributes
For shapes, consider size, color, shading, position, and count.

#### Strategy 4: Look for Symmetry
Many patterns are symmetrical (mirror images).

#### Strategy 5: Check for Repeating Cycles
Patterns often repeat every 2, 3, or 4 terms.

#### Strategy 6: Try Working Backwards
Sometimes it's easier to work from the end to the beginning.

#### Strategy 7: Test Multiple Options
If you're unsure, try each possible answer and see which fits the pattern best.

---

### Practice Questions

**Beginner:**
1. 2, 4, 6, 8, ?, 12
   *Solution: 10 (add 2)*

2. 1, 4, 9, 16, ?
   *Solution: 25 (square numbers)*

3. ●, ○, ●, ○, ?
   *Solution: ● (alternating)*

4. 3, 6, 9, ?, 15
   *Solution: 12 (add 3)*

**Intermediate:**
5. 1, 1, 2, 3, 5, ?, 13
   *Solution: 8 (Fibonacci)*

6. 2, 6, 18, ?, 162
   *Solution: 54 (multiply by 3)*

7. ▲, ■, ●, ▲, ■, ?
   *Solution: ● (cycle of 3)*

8. 4, 9, 14, 19, ? (What's the rule?)
   *Solution: 24 (add 5)*

**Advanced:**
9. 1, 8, 27, 64, ?
   *Solution: 125 (cube numbers)*

10. 2, 5, 10, 17, 26, ?
    *Solution: 37 (add consecutive odd numbers: +3,+5,+7,+9,+11)*

11. Small ●, Large ■, Small ▲, Large ●, ?
    *Solution: Small ■ (pattern: sizes alternate, shapes cycle)*

12. △, ▲, □, ■, ○, ?
    *Solution: ● (open/closed pattern)*

**Challenge:**
13. 1, 2, 6, 24, 120, ?
    *Solution: 720 (multiply by increasing numbers: ×2, ×3, ×4, ×5, ×6)*

14. ●●, ○○, ●●●, ○○○, ●●●●, ?
    *Solution: ○○○○ (alternating, adding 1 each time)*

15. 1, 4, 9, 16, 25, 36, 49, 64, 81, ?
    *Solution: 100 (square numbers)*

**Find the Missing Number:**
16. 3, 7, 11, ?, 19, 23
    *Solution: 15 (add 4)*

17. 1, 3, 6, 10, 15, ?, 28
    *Solution: 21 (triangular numbers: +2,+3,+4,+5,+6,+7)*

18. 2, 4, 8, 16, ?, 64
    *Solution: 32 (multiply by 2)*

19. 5, 10, 20, 40, ?, 160
    *Solution: 80 (multiply by 2)*

20. 1, 4, 9, 16, ?, 36
    *Solution: 25 (square numbers)*

---

### Common Mistakes

 **Wrong**: Assuming the first pattern you see is correct
 **Correct**: Check if the pattern works for ALL terms

 **Wrong**: Not considering multiple possible patterns
 **Correct**: Some problems have multiple valid solutions

 **Wrong**: Forgetting to check if the pattern works backwards
 **Correct**: A good pattern works both forward and backward

 **Wrong**: Using arithmetic for shape patterns
 **Correct**: Shape patterns often use visual rules (rotation, reflection, size)

 **Wrong**: Not considering that patterns can have overlapping rules
 **Correct**: Some patterns combine multiple rules (e.g., odd positions one rule, even positions another)
`
    },
    {
      id: 'logical-sequences',
      title: 'Logical Sequences & Odd One Out',
      content: `
### Understanding Logical Sequences

**Logical sequences** involve identifying the relationship between items and finding items that don't belong. These problems test your ability to:
- Recognize common properties
- Identify exceptions
- Understand categorization
- Apply logical rules

### The Logical Analysis Framework

\`\`\`
1. OBSERVE: Look at all items in the set
2. IDENTIFY: What property do most items share?
3. COMPARE: Check each item against the common property
4. EXCEPT: Identify items that don't share the property
5. VERIFY: Make sure the exception is valid
\`\`\`

---

### Types of Logical Sequence Problems

#### 1. Odd One Out
Find the item that doesn't belong in the group.

**Example**: 2, 4, 6, 8, 10, 11
\`\`\`
All except 11 are even numbers
Answer: 11
\`\`\`

**Common Properties to Check:**
- Even/Odd numbers
- Prime/Composite numbers
- Square/Cube numbers
- Multiples of a number
- Shape types (polygons, curved)
- Colors
- Sizes
- Functions (verb/noun, etc.)

#### 2. Classification
Group items by common properties.

**Example**: Which group do these belong to: Triangle, Square, Pentagon, Hexagon?
\`\`\`
All are polygons (shapes with straight sides)
\`\`\`

#### 3. Analogies
Find the relationship and apply it to a new pair.

**Example**: Triangle:3 :: Square:?
\`\`\`
Triangle has 3 sides, Square has 4 sides
Answer: 4
\`\`\`

#### 4. Series Completion
Find the logical next term.

**Example**: 1, 3, 6, 10, 15, ?
\`\`\`
Differences: +2, +3, +4, +5, +6
Answer: 21
\`\`\`

---

### Detailed Examples

**Example 1: Odd One Out (Numbers)**
*Which number doesn't belong: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 32?*

\`\`\`
Step 1: Identify the common pattern
All except 32 are multiples of 3
3×1=3, 3×2=6, 3×3=9, ..., 3×10=30

Step 2: Check each number
32 is not a multiple of 3

Answer: 32
\`\`\`

**Example 2: Odd One Out (Shapes)**
*Which shape doesn't belong: Triangle, Square, Pentagon, Hexagon, Circle?*

\`\`\`
Step 1: Identify common properties
Triangle, Square, Pentagon, Hexagon are all polygons (straight sides)
Circle has curved sides (no straight sides)

Step 2: Verify
All except Circle have sides

Answer: Circle
\`\`\`

**Example 3: Odd One Out (Mixed)**
*Which doesn't belong: 2, 3, 5, 7, 11, 13, 17, 20?*

\`\`\`
Step 1: Identify the common property
2, 3, 5, 7, 11, 13, 17 are prime numbers
20 is not prime (20 = 4 × 5)

Step 2: Verify
All except 20 are prime

Answer: 20
\`\`\`

**Example 4: Multiple Odd Ones**
*Which two numbers don't belong: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 110, 121?*

\`\`\`
Step 1: Identify the pattern
1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121 are square numbers
1²=1, 2²=4, 3²=9, ..., 11²=121
110 is not a square number

Step 2: Check
110 is not a square number

Answer: 110
\`\`\`

**Example 5: Analogies**
*Triangle is to 3 as Square is to ?*

\`\`\`
Step 1: Understand the relationship
Triangle has 3 sides
Square has 4 sides

Answer: 4
\`\`\`

**Example 6: More Complex Analogy**
*Circle is to 0 as Pentagon is to ?*

\`\`\`
Step 1: Understand the relationship
Circle has 0 sides (or infinite, but typically 0 in this context)
Pentagon has 5 sides

Answer: 5
\`\`\`

**Example 7: Shape Analogy**
*Triangle is to 3 as Hexagon is to ?*

\`\`\`
Step 1: Relationship
Triangle → 3 sides
Hexagon → 6 sides

Answer: 6
\`\`\`

**Example 8: Color Analogy**
*Red is to Primary as Orange is to ?*

\`\`\`
Step 1: Understand the relationship
Red is a primary color
Orange is a secondary color (mixing red and yellow)

Answer: Secondary
\`\`\`

**Example 9: Classification**
*Group these numbers: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20. What property do they share?*

\`\`\`
Step 1: Analyze the numbers
All are divisible by 2
All are even numbers
All are multiples of 2

Answer: They are all even numbers / multiples of 2
\`\`\`

**Example 10: Series Completion with Pattern**
*2, 5, 10, 17, 26, ?*

\`\`\`
Step 1: Find differences
5 - 2 = 3
10 - 5 = 5
17 - 10 = 7
26 - 17 = 9

Step 2: Identify the pattern
Differences: +3, +5, +7, +9, +11
Adding consecutive odd numbers

Step 3: Apply the rule
26 + 11 = 37

Answer: 37
\`\`\`

**Example 11: Letter Sequence**
*A, C, E, G, I, ?*

\`\`\`
Step 1: Identify the pattern
A → C (+2)
C → E (+2)
E → G (+2)
G → I (+2)

Step 2: Apply the rule
I + 2 = K

Answer: K
\`\`\`

**Example 12: Combined Sequence**
*1, 2, 4, 8, 16, 32, ?*

\`\`\`
Step 1: Find the relationship
1 × 2 = 2
2 × 2 = 4
4 × 2 = 8
8 × 2 = 16
16 × 2 = 32

Step 2: Apply the rule
32 × 2 = 64

Answer: 64
\`\`\`

**Example 13: Alternating Sequence**
*1, 2, 4, 3, 9, 4, 16, 5, ?*

\`\`\`
Step 1: Separate into two sequences
Position 1,3,5,7: 1, 4, 9, 16 (square numbers: 1², 2², 3², 4²)
Position 2,4,6,8: 2, 3, 4, 5 (increasing by 1)

Step 2: Apply the rules
Position 9: next square number = 5² = 25

Answer: 25
\`\`\`

**Example 14: Odd One Out (Shapes and Colors)**
*Red Triangle, Blue Square, Green Circle, Yellow Triangle, Orange Square*

\`\`\`
Step 1: Analyze properties
Red Triangle: shape + color
Blue Square: shape + color
Green Circle: shape + color
Yellow Triangle: shape + color
Orange Square: shape + color

Step 2: Look for pattern
Colors: Red, Blue, Green, Yellow, Orange (all different)
Shapes: Triangle, Square, Circle, Triangle, Square (pattern: Triangle, Square, Circle, Triangle, Square)

Step 3: Check if any doesn't fit
All have different colors, but shape pattern is Triangle, Square, Circle, Triangle, Square
So next should be Circle, but we have Square

Answer: Orange Square (should be Orange Circle if following the pattern)
\`\`\`

**Example 15: Odd One Out with Multiple Attributes**
*2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824, 2147483648, 4294967296, 8589934592, 17179869184, 34359738368, 68719476736, 137438953472, 274877906944, 549755813888, 1099511627776, 2199023255552, 4398046511104, 8796093022208, 17592186044416, 35184372088832, 70368744177664, 140737488355328, 281474976710656, 562949953421312, 1125899906842624, 2251799813685248, 4503599627370496, 9007199254740992, 18014398509481984, 36028797018963968, 72057594037927936, 144115188075855872, 288230376151711744, 576460752303423488, 1152921504606846976, 2305843009213693952, 4611686018427387904, 9223372036854775808, 18446744073709551616, 36893488147419103232, 73786976294838206464, 147573952589676412928, 295147905179352825856, 590295810358705651712, 1180591620717411303424, 2361183241434822606848, 4722366482869645213696, 9444732965739290427392, 18889465931478580854784, 37778931862957161709568, 75557863725914323419136, 151115727451828646838272, 302231454903657293676544, 604462909807314587353088, 1208925819614629174706176, 2417851639229258349412352, 4835703278458516698824704, 9671406556917033397649408, 19342813113834066795298816, 38685626227668133590597632, 77371252455336267181195264, 154742504910672534362390528, 309485009821345068724781056, 618970019642690137449562112, 1237940039285380274899124224, 2475880078570760549798248448, 4951760157141521099596496896, 9903520314283042199192993792, 19807040628566084398385987584, 39614081257132168796771975168, 79228162514264337593543950336, 158456325028528675187087900672, 316912650057057350374175801344, 633825300114114700748351602688, 1267650600228229401496703205376*

\`\`\`
Wait, this is just powers of 2! All numbers follow the pattern 2^n. This is a trick question - there is no odd one out if all are powers of 2.

Answer: No odd one out (all are powers of 2)
\`\`\`

---

### Practice Questions

**Odd One Out:**
1. 4, 9, 16, 25, 36, 49, 64, 72
   *Solution: 72 (all others are square numbers)*

2. 11, 23, 35, 47, 59, 62
   *Solution: 62 (all others are multiples of 12? Actually 11,23,35,47,59 are +12 each; 62 breaks the pattern)*

3. 1, 8, 27, 64, 125, 216, 343, 400
   *Solution: 400 (all others are cube numbers: 1³,2³,3³,...,7³)*

4. Triangle, Square, Pentagon, Hexagon, Circle
   *Solution: Circle (only shape without straight sides)*

5. 2, 3, 5, 7, 11, 13, 17, 19, 22
   *Solution: 22 (all others are prime numbers)*

**Analogies:**
6. Triangle:3 :: Pentagon:?
   *Solution: 5 (number of sides)*

7. Circle:0 :: Hexagon:?
   *Solution: 6 (number of sides)*

8. Red:Color :: Square:?
   *Solution: Shape (category relationship)*

9. 2:4 :: 3:?
   *Solution: 9 (3² = 9, pattern: first number squared)*

10. Square:4 :: Cube:?
    *Solution: 6 (cube has 6 faces)*

**Series Completion:**
11. 3, 7, 11, 15, 19, ?
    *Solution: 23 (add 4)*

12. 1, 3, 9, 27, 81, ?
    *Solution: 243 (multiply by 3)*

13. 2, 6, 12, 20, 30, 42, ?
    *Solution: 56 (add 4,6,8,10,12,14)*

14. 1, 4, 9, 16, 25, 36, 49, ?
    *Solution: 64 (square numbers)*

15. A, C, F, J, O, ?
    *Solution: U (add 2,3,4,5,6)*

**Advanced:**
16. Which number doesn't belong: 2, 3, 5, 8, 13, 21, 34, 55, 89, 93?
    *Solution: 93 (all others are Fibonacci numbers)*

17. Complete: 1, 4, 9, 16, 25, ?, 49
    *Solution: 36 (square numbers)*

18. Find odd one: Circle, Triangle, Square, Rectangle, Cube
    *Solution: Cube (all others are 2D shapes)*

19. 2, 5, 10, 17, 26, ?, 50
    *Solution: 37 (add odd numbers: +3,+5,+7,+9,+11,+13)*

20. What's next: 1, 1, 2, 3, 5, 8, 13, 21, ?
    *Solution: 34 (Fibonacci)*

**Challenge:**
21. Find odd one: 12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144, 156, 168, 180, 192, 204, 216, 228, 240, 250
    *Solution: 250 (all others are multiples of 12; 250 is not)*

22. Complete analogy: 4:16 :: 5:?
    *Solution: 25 (square relationship)*

23. What comes next: 1, 8, 27, 64, 125, 216, 343, ?
    *Solution: 512 (cube numbers: 1³,2³,3³,...,8³)*

24. Find the missing number: 2, 5, 10, 17, ?, 37
    *Solution: 26 (add odd numbers: +3,+5,+7,+9,+11)*

25. Which doesn't belong: 3, 5, 7, 9, 11, 13, 17
    *Solution: 9 (all others are prime numbers)*

---

### Common Mistakes

 **Wrong**: Finding any pattern and assuming it's the only one
 **Correct**: Check if the pattern works for ALL items

 **Wrong**: Using complex patterns when simple ones work
 **Correct**: Start with the simplest possible pattern

 **Wrong**: Ignoring multiple attributes in shape problems
 **Correct**: Consider shape, size, color, shading, position

 **Wrong**: Forgetting that odd one out has only ONE correct answer
 **Correct**: Look for the most obvious exception

 **Wrong**: Not checking if numbers are prime, square, cube, or factor
 **Correct**: Learn common number properties: prime, square, cube, multiples

 **Wrong**: Not considering that the odd one out might be due to multiple reasons
 **Correct**: The odd one out should be the item that fails the most common rule
`
    }
  ]
};

export default abstractReasoning;