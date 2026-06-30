export const engineeringFundamentals = {
  id: 'engineering-fundamentals',
  title: 'Engineering Fundamentals',
  icon: 'bi-gear',
  color: '#d97706',
  description: 'Master electrical, general engineering, and oil & gas fundamentals with detailed examples, shortcut formulas, and practice questions.',
  topics: [
    {
      id: 'electrical-engineering',
      title: 'Electrical Engineering',
      content: `
### Introduction to Electrical Engineering

Electrical engineering is the branch of engineering that deals with the study and application of electricity, electronics, and electromagnetism. It covers everything from tiny microchips to massive power grids.

### Core Concepts in Electrical Engineering

#### 1. Ohm's Law (The Foundation)

Ohm's Law is the most fundamental relationship in electrical engineering. It states that the current flowing through a conductor is directly proportional to the voltage across it and inversely proportional to its resistance.

\`\`\`
V = I × R
Where:
V = Voltage (measured in Volts, V)
I = Current (measured in Amperes, A)
R = Resistance (measured in Ohms, Ω)

Alternative forms:
I = V ÷ R  (Current = Voltage ÷ Resistance)
R = V ÷ I  (Resistance = Voltage ÷ Current)
\`\`\`

**Ohm's Law Triangle (Memory Aid):**
\`\`\`
         V
        / \\
       /   \\
      I --- R
      
  Cover the unknown to find the formula:
  • Cover V → I × R
  • Cover I → V ÷ R
  • Cover R → V ÷ I
\`\`\`

**Detailed Example 1: Finding Current**
*A 24V DC circuit has a resistance of 12Ω. What is the current flowing through it?*

\`\`\`
Step 1: Identify known values
Voltage (V) = 24V
Resistance (R) = 12Ω

Step 2: Apply Ohm's Law
I = V ÷ R
I = 24 ÷ 12
I = 2A

Answer: 2 Amperes
\`\`\`

**Detailed Example 2: Finding Resistance**
*A circuit draws 5A of current from a 120V supply. What is the circuit resistance?*

\`\`\`
Step 1: Identify known values
Voltage (V) = 120V
Current (I) = 5A

Step 2: Apply Ohm's Law
R = V ÷ I
R = 120 ÷ 5
R = 24Ω

Answer: 24 Ohms
\`\`\`

**Detailed Example 3: Finding Voltage**
*A resistor of 47Ω carries a current of 0.25A. What is the voltage drop across it?*

\`\`\`
Step 1: Identify known values
Resistance (R) = 47Ω
Current (I) = 0.25A

Step 2: Apply Ohm's Law
V = I × R
V = 0.25 × 47
V = 11.75V

Answer: 11.75 Volts
\`\`\`

**Detailed Example 4: Series Circuit Voltage Drop**
*Four resistors of 2Ω, 4Ω, 6Ω, and 8Ω are connected in series to a 20V supply. Find the voltage across each resistor.*

\`\`\`
Step 1: Find total resistance
Rt = 2 + 4 + 6 + 8 = 20Ω

Step 2: Find circuit current
I = V/Rt = 20/20 = 1A

Step 3: Calculate voltage drops
V1 = I × R1 = 1 × 2 = 2V
V2 = I × R2 = 1 × 4 = 4V
V3 = I × R3 = 1 × 6 = 6V
V4 = I × R4 = 1 × 8 = 8V

Check: 2 + 4 + 6 + 8 = 20V ✓
Answer: 2V, 4V, 6V, 8V respectively
\`\`\`

---

#### 2. Power in Electrical Circuits

Electrical power is the rate at which electrical energy is transferred. Three formulas are commonly used:

\`\`\`
P = V × I        (Power = Voltage × Current)
P = I² × R       (Power = Current² × Resistance)
P = V² ÷ R       (Power = Voltage² ÷ Resistance)

Where:
P = Power (Watts, W)
V = Voltage (Volts, V)
I = Current (Amperes, A)
R = Resistance (Ohms, Ω)
\`\`\`

**Power Triangle:**
\`\`\`
         P
        / \\
       /   \\
      V --- I
      
  • Cover P → V × I
  • Cover V → P ÷ I
  • Cover I → P ÷ V
\`\`\`

**Detailed Example 5: Power Calculation**
*A heater draws 8A from a 230V supply. How much power does it consume?*

\`\`\`
Step 1: Identify known values
Voltage (V) = 230V
Current (I) = 8A

Step 2: Apply power formula
P = V × I
P = 230 × 8
P = 1,840W

Answer: 1,840 Watts (1.84 kW)
\`\`\`

**Detailed Example 6: Power from Resistance**
*A 20Ω resistor has 5A flowing through it. Calculate the power dissipated.*

\`\`\`
Method 1: P = I² × R = 5² × 20 = 25 × 20 = 500W
Method 2: First find V = I × R = 5 × 20 = 100V, then P = V × I = 100 × 5 = 500W

Answer: 500 Watts
\`\`\`

**Detailed Example 7: Energy Consumption**
*A 2kW heater runs for 3 hours. How much energy does it consume?*

\`\`\`
Step 1: Identify known values
Power (P) = 2kW
Time (t) = 3 hours

Step 2: Apply energy formula
Energy = Power × Time
Energy = 2kW × 3h
Energy = 6 kWh

Answer: 6 kilowatt-hours
\`\`\`

**Cost Calculation:**
\`\`\`
If electricity costs ₦100 per kWh:
Cost = 6 kWh × ₦100 = ₦600
Answer: ₦600
\`\`\`

**Detailed Example 8: Energy Cost**
*A 100W light bulb is left on for 24 hours. If electricity costs ₦95/kWh, what is the cost?*

\`\`\`
Energy = 100W × 24h = 2,400 Wh = 2.4 kWh
Cost = 2.4 × 95 = ₦228
Answer: ₦228
\`\`\`

---

### Series and Parallel Circuits

#### Series Circuits

In a series circuit, components are connected end-to-end in a single path.

\`\`\`
Characteristics:
- Same current flows through all components
- Total resistance = Sum of individual resistances
  (R_Total = R₁ + R₂ + R₃ + ...)
- Voltage divides across components
- Total voltage = Sum of voltage drops
- If one component fails, the circuit is broken
\`\`\`

**Shortcut: Voltage Divider Rule**
\`\`\`
Vx = V_Total × (Rx / R_Total)

Where:
Vx = Voltage across resistor x
Rx = Resistance of resistor x
R_Total = Total resistance
\`\`\`

**Detailed Example 9: Series Circuit**
*Three resistors: 10Ω, 20Ω, and 30Ω are connected in series to a 60V supply. Find:*
*a) Total resistance*
*b) Circuit current*
*c) Voltage across each resistor using voltage divider rule*

\`\`\`
Step 1: Total resistance
R_Total = R₁ + R₂ + R₃
R_Total = 10 + 20 + 30 = 60Ω

Step 2: Circuit current
I = V ÷ R_Total
I = 60 ÷ 60 = 1A

Step 3: Voltage drops using Voltage Divider Rule
V₁ = V_Total × (R₁/R_Total) = 60 × (10/60) = 10V
V₂ = V_Total × (R₂/R_Total) = 60 × (20/60) = 20V
V₃ = V_Total × (R₃/R_Total) = 60 × (30/60) = 30V

Check: 10V + 20V + 30V = 60V ✓

Answer: a) 60Ω, b) 1A, c) 10V, 20V, 30V
\`\`\`

#### Parallel Circuits

In a parallel circuit, components are connected across each other, providing multiple paths.

\`\`\`
Characteristics:
- Same voltage across all components
- Total current = Sum of branch currents
  (I_Total = I₁ + I₂ + I₃ + ...)
- Total resistance formula:
  1/R_Total = 1/R₁ + 1/R₂ + 1/R₃ + ...
- Total resistance is less than the smallest individual resistance
- If one component fails, others continue working
\`\`\`

**Shortcut: Two Resistors in Parallel**
\`\`\`
R_Total = (R₁ × R₂) / (R₁ + R₂)

(Only for TWO resistors in parallel)
\`\`\`

**Shortcut: Equal Resistors in Parallel**
\`\`\`
If n equal resistors (R) are in parallel:
R_Total = R / n
\`\`\`

**Shortcut: Current Divider Rule**
\`\`\`
Ix = I_Total × (R_Total / Rx)

Where:
Ix = Current through branch x
Rx = Resistance of branch x
R_Total = Total resistance
\`\`\`

**Detailed Example 10: Parallel Circuit**
*Three resistors: 10Ω, 20Ω, and 30Ω are connected in parallel across a 60V supply. Find:*
*a) Total resistance using shortcuts*
*b) Total current*
*c) Current through each resistor*

\`\`\`
Step 1: Total resistance
1/R_Total = 1/10 + 1/20 + 1/30
1/R_Total = 6/60 + 3/60 + 2/60 = 11/60
R_Total = 60/11 = 5.45Ω

Step 2: Total current
I_Total = V ÷ R_Total
I_Total = 60 ÷ 5.45 = 11A

Step 3: Branch currents using Current Divider Rule
I₁ = I_Total × (R_Total/R₁) = 11 × (5.45/10) = 6A
I₂ = I_Total × (R_Total/R₂) = 11 × (5.45/20) = 3A
I₃ = I_Total × (R_Total/R₃) = 11 × (5.45/30) = 2A

Check: 6A + 3A + 2A = 11A ✓

Answer: a) 5.45Ω, b) 11A, c) 6A, 3A, 2A
\`\`\`

**Detailed Example 11: Two Resistors in Parallel**
*Calculate total resistance of 4Ω and 6Ω resistors in parallel.*

\`\`\`
Using shortcut: R_Total = (R₁ × R₂)/(R₁ + R₂)
R_Total = (4 × 6)/(4 + 6) = 24/10 = 2.4Ω

Answer: 2.4Ω
\`\`\`

**Detailed Example 12: Equal Resistors in Parallel**
*Four 10Ω resistors are connected in parallel. What is the total resistance?*

\`\`\`
Using shortcut: R_Total = R/n = 10/4 = 2.5Ω

Answer: 2.5Ω
\`\`\`

---

### Three-Phase Systems

Three-phase power is the standard for industrial and commercial electrical systems.

\`\`\`
In a three-phase system:
- Three alternating currents are generated, 120° apart
- Used for high-power applications
- More efficient than single-phase power
- Constant power delivery (no pulsations)
\`\`\`

#### Three-Phase Power Formulas

\`\`\`
Apparent Power (kVA) = √3 × V_Line × I_Line
Active Power (kW) = √3 × V_Line × I_Line × PF
Reactive Power (kVAR) = √3 × V_Line × I_Line × sin(θ)

Where:
V_Line = Line-to-line voltage
I_Line = Line current
PF = Power Factor
θ = Angle between voltage and current
\`\`\`

#### Star (Wye) Connection

\`\`\`
V_Line = √3 × V_Phase
I_Line = I_Phase

Where:
V_Line = Voltage between two lines
V_Phase = Voltage between a line and neutral
I_Line = Current in a line
I_Phase = Current in a phase

Power in Star: P = √3 × V_Line × I_Line × PF
\`\`\`

**Detailed Example 13: Star Connection**
*A 3-phase star-connected system has a phase voltage of 230V. Find the line voltage.*

\`\`\`
Step 1: Identify known values
V_Phase = 230V

Step 2: Apply formula
V_Line = √3 × V_Phase
V_Line = 1.732 × 230
V_Line = 398.4V ≈ 400V

Answer: 400V (approximately)
\`\`\`

**Detailed Example 14: Star Connection Power**
*A 400V, 3-phase star-connected system supplies a load with line current of 50A and power factor 0.85. Find the active power.*

\`\`\`
P = √3 × V_Line × I_Line × PF
P = 1.732 × 400 × 50 × 0.85
P = 1.732 × 400 × 42.5
P = 29,444W ≈ 29.4kW

Answer: 29.4 kW
\`\`\`

#### Delta Connection

\`\`\`
V_Line = V_Phase
I_Line = √3 × I_Phase

Where:
V_Line = Voltage between two lines
V_Phase = Voltage across a phase
I_Line = Current in a line
I_Phase = Current in a phase

Power in Delta: P = √3 × V_Line × I_Line × PF
\`\`\`

**Detailed Example 15: Delta Connection**
*A 3-phase delta-connected system has a line voltage of 415V. Find the phase voltage.*

\`\`\`
Step 1: Identify known values
V_Line = 415V

Step 2: Apply formula
V_Phase = V_Line
V_Phase = 415V

Answer: 415V
\`\`\`

**Detailed Example 16: Delta Current**
*In a delta-connected system, the phase current is 50A. Find the line current.*

\`\`\`
Step 1: Identify known values
I_Phase = 50A

Step 2: Apply formula
I_Line = √3 × I_Phase
I_Line = 1.732 × 50
I_Line = 86.6A

Answer: 86.6A
\`\`\`

**Detailed Example 17: Star-Delta Comparison**
*A load is connected in star with phase voltage 230V. If reconfigured to delta with same phase voltage, what is the line voltage in each configuration?*

\`\`\`
Star: V_Line = √3 × 230 = 400V
Delta: V_Line = V_Phase = 230V

Answer: Star line voltage = 400V, Delta line voltage = 230V
\`\`\`

---

### Power Factor

Power factor is the ratio of true power (real power) to apparent power.

\`\`\`
PF = True Power / Apparent Power
PF = cos(θ)

Where:
θ = Phase angle between voltage and current

Values:
- Resistive load: PF = 1 (Unity)
- Inductive load: PF < 1 (Lagging)
- Capacitive load: PF < 1 (Leading)

Relationship:
True Power = Apparent Power × PF
Apparent Power = True Power / PF
Reactive Power = Apparent Power × sin(θ)
\`\`\`

**Detailed Example 18: Power Factor Calculation**
*A motor consumes 40 kW of true power and 50 kVA of apparent power. What is the power factor?*

\`\`\`
Step 1: Identify known values
True Power = 40 kW
Apparent Power = 50 kVA

Step 2: Apply formula
PF = True Power / Apparent Power
PF = 40 ÷ 50
PF = 0.8

Answer: 0.8 (lagging - typical for motors)
\`\`\`

**Detailed Example 19: Finding Apparent Power**
*A motor uses 30kW true power and has a power factor of 0.75. What is the apparent power?*

\`\`\`
Apparent Power = True Power / PF
Apparent Power = 30 / 0.75 = 40kVA

Answer: 40 kVA
\`\`\`

**Detailed Example 20: Reactive Power Calculation**
*For the motor in Example 19, calculate the reactive power.*

\`\`\`
Step 1: Find sin(θ) from PF
PF = cos(θ) = 0.75
θ = cos⁻¹(0.75) = 41.41°
sin(θ) = sin(41.41°) = 0.661

Step 2: Calculate reactive power
Reactive Power = Apparent Power × sin(θ)
Reactive Power = 40 × 0.661 = 26.45 kVAR

Answer: 26.45 kVAR
\`\`\`

**Why Power Factor Matters:**

\`\`\`
- Low PF = Higher current for same power
- Higher current = More losses (I²R losses)
- Utilities may charge penalties for low PF
- Power factor correction improves efficiency
- Capacitors are often used to correct PF (capacitive PF correction)
\`\`\`

**Detailed Example 21: Power Factor Correction**
*A 100kW load has PF = 0.7. What is the current at 400V? What would it be if PF were corrected to 0.95?*

\`\`\`
Step 1: Current at PF = 0.7
I = P / (√3 × V × PF)
I = 100,000 / (1.732 × 400 × 0.7)
I = 100,000 / 484.96
I = 206.2A

Step 2: Current at PF = 0.95
I = 100,000 / (1.732 × 400 × 0.95)
I = 100,000 / 658.16
I = 151.9A

Savings: 206.2A - 151.9A = 54.3A (26.3% reduction)

Answer: PF=0.7 gives 206A, PF=0.95 gives 152A
\`\`\`

---

### Transformers

Transformers are devices that transfer electrical energy between circuits using electromagnetic induction.

\`\`\`
V₁/V₂ = N₁/N₂ = I₂/I₁

Where:
V₁ = Primary voltage
V₂ = Secondary voltage
N₁ = Primary turns
N₂ = Secondary turns
I₁ = Primary current
I₂ = Secondary current

Transformer Ratios:
Turns Ratio = N₁/N₂ = V₁/V₂
Current Ratio = I₂/I₁ = N₁/N₂
\`\`\`

**Detailed Example 22: Step-Down Transformer**
*A transformer has 1,000 primary turns and 100 secondary turns. If the primary voltage is 11,000V, what is the secondary voltage?*

\`\`\`
Step 1: Identify known values
N₁ = 1,000 turns
N₂ = 100 turns
V₁ = 11,000V

Step 2: Apply formula
V₁/V₂ = N₁/N₂
11,000/V₂ = 1,000/100
11,000/V₂ = 10
V₂ = 11,000/10
V₂ = 1,100V

Answer: 1,100V (Step-down transformer)
\`\`\`

**Detailed Example 23: Step-Up Transformer**
*A transformer has 200 primary turns and 2,000 secondary turns. If the primary voltage is 230V, what is the secondary voltage?*

\`\`\`
V₂ = V₁ × (N₂/N₁)
V₂ = 230 × (2,000/200)
V₂ = 230 × 10 = 2,300V

Answer: 2,300V (Step-up transformer)
\`\`\`

**Detailed Example 24: Transformer Current**
*A 10kVA transformer has a primary voltage of 11,000V and secondary voltage of 230V. Find the primary and secondary currents.*

\`\`\`
Step 1: Calculate primary current
I₁ = VA ÷ V₁
I₁ = 10,000 ÷ 11,000
I₁ = 0.91A

Step 2: Calculate secondary current
I₂ = VA ÷ V₂
I₂ = 10,000 ÷ 230
I₂ = 43.48A

Check: V₁/V₂ = I₂/I₁ = 11,000/230 = 47.83
I₂/I₁ = 43.48/0.91 = 47.78 ✓

Answer: I₁ = 0.91A, I₂ = 43.48A
\`\`\`

**Detailed Example 25: Transformer Efficiency**
*A transformer has input power of 500W and output power of 475W. Calculate the efficiency.*

\`\`\`
Efficiency = (Output/Input) × 100%
Efficiency = (475/500) × 100% = 95%

Answer: 95%
\`\`\`

**Transformer Losses:**
\`\`\`
1. Core Losses (Iron Losses):
   - Hysteresis loss
   - Eddy current loss
   - Constant regardless of load

2. Copper Losses:
   - I²R losses in windings
   - Vary with load (proportional to I²)

3. Total Losses = Core Losses + Copper Losses
\`\`\`

---

### Motors

Electric motors convert electrical energy into mechanical energy.

#### Synchronous Speed Formula

\`\`\`
Ns = (120 × f) ÷ P

Where:
Ns = Synchronous speed (RPM)
f = Frequency (Hz)
P = Number of poles
\`\`\`

**Detailed Example 26: Synchronous Speed**
*Calculate the synchronous speed of a 4-pole motor operating at 50Hz.*

\`\`\`
Step 1: Identify known values
f = 50 Hz
P = 4 poles

Step 2: Apply formula
Ns = (120 × 50) ÷ 4
Ns = 6,000 ÷ 4
Ns = 1,500 RPM

Answer: 1,500 RPM
\`\`\`

**Detailed Example 27: Different Poles**
*A motor operates at 50Hz and has a synchronous speed of 1,000 RPM. How many poles does it have?*

\`\`\`
P = (120 × f) / Ns
P = (120 × 50) / 1,000
P = 6,000 / 1,000 = 6 poles

Answer: 6 poles
\`\`\`

**Detailed Example 28: Different Frequency**
*A 6-pole motor is connected to a 60Hz supply. What is its synchronous speed?*

\`\`\`
Step 1: Identify known values
f = 60 Hz
P = 6 poles

Step 2: Apply formula
Ns = (120 × 60) ÷ 6
Ns = 7,200 ÷ 6
Ns = 1,200 RPM

Answer: 1,200 RPM
\`\`\`

**Detailed Example 29: Slip Calculation**
*A 4-pole, 50Hz induction motor has a full-load speed of 1,440 RPM. Calculate the slip.*

\`\`\`
Step 1: Calculate synchronous speed
Ns = (120 × 50) / 4 = 1,500 RPM

Step 2: Calculate slip
Slip = (Ns - N) / Ns × 100%
Slip = (1,500 - 1,440) / 1,500 × 100%
Slip = 60 / 1,500 × 100% = 4%

Answer: 4% slip
\`\`\`

**Motor Types:**

\`\`\`
1. DC Motors:
   - Series, Shunt, Compound wound
   - Speed control by varying voltage/field
   - High starting torque (series)
   - Constant speed (shunt)

2. AC Motors:
   - Induction (Squirrel cage, Wound rotor)
   - Synchronous motors
   - Most common in industry
   - Squirrel cage: Simple, robust, low cost
   - Wound rotor: High starting torque, speed control

3. Special Motors:
   - Servo motors (position control)
   - Stepper motors (precise rotation)
   - BLDC motors (high efficiency)
   - Linear motors (straight line motion)
\`\`\`

---

### Protection Systems

#### Circuit Breakers
\`\`\`
Purpose: Protect circuits from:
- Overcurrent
- Short circuits
- Overloads

Types:
- MCB (Miniature Circuit Breaker): Up to 100A
- MCCB (Molded Case Circuit Breaker): 100-2,500A
- ACB (Air Circuit Breaker): Up to 6,300A
- VCB (Vacuum Circuit Breaker): Up to 36kV
- SF6 Circuit Breaker: High voltage

Characteristics:
- Tripping curves:
  Type B: 3-5× In (lighting, domestic)
  Type C: 5-10× In (motors, transformers)
  Type D: 10-20× In (heavy industrial)
\`\`\`

**Detailed Example 30: Breaker Selection**
*A motor draws 50A running current and has a starting current of 300A. Which type of MCB should be used?*

\`\`\`
Type D (10-20×): 50 × 10 = 500A (can handle 300A starting)
Type C (5-10×): 50 × 5 = 250A (would trip on startup)

Answer: Type D MCB (10-20× In)
\`\`\`

#### Fuses
\`\`\`
- One-time protection device
- Melts when current exceeds rating
- Cheaper than breakers
- Must be replaced after operation
- Types:
  - HRC (High Rupturing Capacity) fuse
  - Cartridge fuse
  - Rewirable fuse
\`\`\`

#### Earthing/Grounding
\`\`\`
Types:
- Equipment Earthing: Protect equipment
- System Earthing: Protect personnel
- Lightning Protection: Dissipate lightning strikes

Components:
- Earth electrode
- Earth conductor
- Earthing resistance (should be < 1Ω)

Standards:
- IEC 60364
- BS 7671
- IEEE Standard 80
\`\`\`

**Detailed Example 31: Earthing Resistance**
*What is the typical acceptable value of earth resistance?*

\`\`\`
Answer: Less than 1Ω for ideal earthing, up to 5Ω for acceptable earthing
\`\`\`

#### Surge Protection
\`\`\`
Purpose: Protect against voltage spikes
Sources:
- Lightning strikes
- Switching operations
- Electrostatic discharge

Types:
- MOV (Metal Oxide Varistor)
- TVS (Transient Voltage Suppressor)
- Gas discharge tubes
- Surge arrestors

Protection Levels:
- Type 1: Direct lightning strikes
- Type 2: Induced surges
- Type 3: Equipment protection
\`\`\`

---

### Electrical Safety

**Before Working on Electrical Equipment:**

\`\`\`
1. Isolate the equipment
2. Lock out/tag out (LOTO)
3. Test for voltage
4. Earth/Ground the circuit
5. Wear appropriate PPE
6. Obtain necessary permits
7. Ensure safe work area
\`\`\`

**Basic Electrical Safety Rules:**

\`\`\`
- Never work on live equipment
- Always assume circuits are live
- Use insulated tools
- Wear appropriate PPE (gloves, goggles)
- Follow LOTO procedures
- Maintain safe distances
- Use the correct rating of fuses/breakers
- Keep fire extinguishers nearby
- Know emergency procedures
\`\`\`

**Electrical Shock Response:**

\`\`\`
First step:
1. Turn off the power source
2. If unable, use non-conductive material to separate victim
3. Call for emergency help
4. Perform CPR if trained and needed

DO NOT touch the person with bare hands if still in contact!
\`\`\`

**First Aid for Electrical Burns:**
\`\`\`
1. Stop the burning process
2. Remove burning or restrictive clothing (if not stuck)
3. Cover the burn with clean dressing
4. Do not apply creams or ointments
5. Get medical help immediately
\`\`\`

---

### Practice Questions with Detailed Solutions

**Question 1: Ohm's Law**
*A 12V circuit draws 3A. What is the resistance?*

\`\`\`
R = V/I = 12/3 = 4Ω
Answer: 4Ω
\`\`\`

**Question 2: Synchronous Speed**
*Calculate the synchronous speed of a 6-pole motor at 50Hz.*

\`\`\`
Ns = 120 × f / P = 120 × 50 / 6 = 1,000 RPM
Answer: 1,000 RPM
\`\`\`

**Question 3: Circuit Breaker Purpose**
*What is the primary purpose of a circuit breaker?*

\`\`\`
Answer: To protect electrical circuits from overcurrent and short circuits
\`\`\`

**Question 4: Power Calculation**
*A 230V single-phase motor draws 10A. What is the power?*

\`\`\`
P = V × I = 230 × 10 = 2,300W = 2.3kW
Answer: 2.3 kW
\`\`\`

**Question 5: Transformer**
*A transformer has a turns ratio of 10:1 (primary:secondary). If primary voltage is 33kV, what is secondary voltage?*

\`\`\`
V₂ = V₁ × N₂/N₁ = 33,000 × 1/10 = 3,300V = 3.3kV
Answer: 3.3 kV
\`\`\`

**Question 6: Energy Consumption**
*A 2.5kW heater runs for 8 hours. Calculate energy consumption and cost at ₦150/kWh.*

\`\`\`
Energy = 2.5 × 8 = 20 kWh
Cost = 20 × 150 = ₦3,000
Answer: 20 kWh, ₦3,000
\`\`\`

**Question 7: Parallel Resistance**
*Calculate total resistance of 4Ω and 6Ω resistors in parallel.*

\`\`\`
Using shortcut: Rt = (4 × 6)/(4 + 6) = 24/10 = 2.4Ω
Answer: 2.4Ω
\`\`\`

**Question 8: Series Circuit**
*Three resistors 4Ω, 6Ω, and 10Ω are in series. Total resistance?*

\`\`\`
Rt = 4 + 6 + 10 = 20Ω
Answer: 20Ω
\`\`\`

**Question 9: Power Factor**
*A motor uses 30kW true power and has a power factor of 0.75. What is apparent power?*

\`\`\`
Apparent Power = True Power / PF
Apparent Power = 30 / 0.75 = 40kVA
Answer: 40 kVA
\`\`\`

**Question 10: Star Connection**
*In a star-connected system, line voltage is 415V. What is phase voltage?*

\`\`\`
V_Phase = V_Line / √3
V_Phase = 415 / 1.732 = 240V
Answer: 240V
\`\`\`

**Question 11: Slip Calculation**
*A 6-pole, 50Hz motor runs at 960 RPM. Calculate the slip.*

\`\`\`
Ns = (120 × 50)/6 = 1,000 RPM
Slip = (1,000 - 960)/1,000 × 100 = 4%
Answer: 4%
\`\`\`

**Question 12: Transformer Current**
*A 5kVA transformer has 230V primary. What is the primary current?*

\`\`\`
I₁ = 5,000/230 = 21.74A
Answer: 21.74A
\`\`\`

**Question 13: Motor Poles**
*A 50Hz motor has synchronous speed of 1,500 RPM. How many poles?*

\`\`\`
P = (120 × 50)/1,500 = 6,000/1,500 = 4 poles
Answer: 4 poles
\`\`\`

**Question 14: Energy Cost**
*A 1.5kW air conditioner runs for 5 hours. Cost at ₦120/kWh?*

\`\`\`
Energy = 1.5 × 5 = 7.5 kWh
Cost = 7.5 × 120 = ₦900
Answer: ₦900
\`\`\`

**Question 15: Delta Connection**
*In a delta system, phase current is 20A. What is line current?*

\`\`\`
I_Line = √3 × 20 = 34.64A
Answer: 34.64A
\`\`\`

---

### Quick Reference: Electrical Formulas

| Quantity | Formula | Units |
|----------|---------|-------|
| Voltage | V = I × R | Volts (V) |
| Current | I = V / R | Amperes (A) |
| Resistance | R = V / I | Ohms (Ω) |
| Power (DC) | P = V × I | Watts (W) |
| Power (AC) | P = V × I × PF | Watts (W) |
| Energy | E = P × t | Watt-hours (Wh) |
| Synchronous Speed | Ns = 120f/P | RPM |
| Transformer | V₁/V₂ = N₁/N₂ | - |
| Star Connection | V_Line = √3 × V_Phase | Volts |
| Delta Connection | I_Line = √3 × I_Phase | Amperes |
| Apparent Power | S = √3 × V_Line × I_Line | VA |
| Active Power | P = √3 × V_Line × I_Line × PF | W |
| Reactive Power | Q = √3 × V_Line × I_Line × sin(θ) | VAR |

---

### Common Electrical Engineering Mistakes

 **Wrong**: Using peak voltage in power calculations
 **Correct**: Use RMS voltage for AC power calculations

 **Wrong**: Forgetting √3 in three-phase power calculations
 **Correct**: P = √3 × V_Line × I_Line × PF

 **Wrong**: Ignoring power factor in AC circuits
 **Correct**: P = V × I × PF (not just V × I)

 **Wrong**: Thinking higher voltage is always more dangerous
 **Correct**: Current kills, not voltage. Both can be dangerous.

 **Wrong**: Using same formulas for AC and DC circuits
 **Correct**: AC circuits require RMS values and power factor

 **Wrong**: Confusing star and delta connections
 **Correct**: Star: V_Line = √3 × V_Phase; Delta: I_Line = √3 × I_Phase

 **Wrong**: Forgetting transformer losses
 **Correct**: Always consider core losses and copper losses
`
    },
    {
      id: 'general-engineering',
      title: 'General Engineering',
      content: `
### Introduction to General Engineering

General engineering covers the fundamental principles that apply across all engineering disciplines. This includes mechanics, thermodynamics, fluid dynamics, and material science.

---

### Fluid Mechanics

Fluid mechanics is the study of fluids (liquids and gases) at rest and in motion.

#### Hydrostatic Pressure

Pressure at a point in a fluid depends on the depth and density.

\`\`\`
P = ρ × g × h

Where:
P = Pressure (Pascal, Pa)
ρ = Density of fluid (kg/m³)
g = Gravitational acceleration (9.81 m/s²)
h = Depth (meters)

Alternative form:
P = γ × h
Where γ = Specific weight (N/m³)

Pascal's Principle:
- Pressure applied to a confined fluid is transmitted equally in all directions
- P = F/A (Pressure = Force / Area)
\`\`\`

**Detailed Example 1: Hydrostatic Pressure**
*Calculate the pressure at the bottom of a tank filled with water to a depth of 10 meters. (Density of water = 1,000 kg/m³)*

\`\`\`
Step 1: Identify known values
ρ = 1,000 kg/m³
g = 9.81 m/s²
h = 10 m

Step 2: Apply formula
P = ρ × g × h
P = 1,000 × 9.81 × 10
P = 98,100 Pa = 98.1 kPa

Answer: 98.1 kPa (or 0.981 bar)
\`\`\`

**Detailed Example 2: Pressure in Different Fluids**
*A tank contains oil with density 900 kg/m³ to a depth of 5 meters. Calculate the pressure at the bottom.*

\`\`\`
P = 900 × 9.81 × 5 = 44,145 Pa = 44.1 kPa
Answer: 44.1 kPa
\`\`\`

**Detailed Example 3: Force from Pressure**
*What is the force on the bottom of the tank in Example 1 if the tank has an area of 2 m²?*

\`\`\`
Force = Pressure × Area
F = 98,100 Pa × 2 m² = 196,200 N = 196.2 kN

Answer: 196.2 kN
\`\`\`

#### Pressure Units and Conversions

\`\`\`
Common units:
1 atm = 101.325 kPa = 14.7 psi = 1.013 bar
1 bar = 100 kPa = 14.5 psi
1 psi = 6.895 kPa = 0.0689 bar

Conversions:
kPa → bar: Divide by 100
bar → kPa: Multiply by 100
psi → kPa: Multiply by 6.895
kPa → psi: Divide by 6.895
\`\`\`

**Detailed Example 4: Pressure Conversion**
*Convert 2.5 bar to kPa and to psi.*

\`\`\`
Step 1: Convert to kPa
2.5 bar × 100 = 250 kPa

Step 2: Convert to psi
250 kPa ÷ 6.895 = 36.26 psi

Answer: 250 kPa, 36.26 psi
\`\`\`

**Detailed Example 5: Conversion Practice**
*Convert 150 psi to kPa and bar.*

\`\`\`
kPa = 150 × 6.895 = 1,034.25 kPa
bar = 1,034.25 ÷ 100 = 10.34 bar

Answer: 1,034 kPa, 10.34 bar
\`\`\`

#### Fluid Properties

**Viscosity:**
\`\`\`
- Resistance to flow
- High viscosity = Thick fluid (e.g., honey, molasses)
- Low viscosity = Thin fluid (e.g., water, air)
- Dynamic viscosity (μ) = Units: Pa·s or N·s/m²
- Kinematic viscosity (ν) = μ/ρ (Units: m²/s)

Typical Values:
- Water (20°C): μ = 0.001 Pa·s, ν = 1.0 × 10⁻⁶ m²/s
- Air (20°C): μ = 1.8 × 10⁻⁵ Pa·s
- Oil (SAE 30): μ ≈ 0.2-0.3 Pa·s
\`\`\`

**Density:**
\`\`\`
- Mass per unit volume
- Water = 1,000 kg/m³
- Oil ≈ 800-900 kg/m³
- Air ≈ 1.225 kg/m³ at sea level
- Mercury = 13,600 kg/m³
\`\`\`

**Specific Gravity:**
\`\`\`
SG = ρ_fluid / ρ_water

Water: SG = 1.0
Oil: SG ≈ 0.8-0.9
Mercury: SG = 13.6
\`\`\`

**Detailed Example 6: Specific Gravity**
*What is the specific gravity of a fluid with density 800 kg/m³?*

\`\`\`
SG = 800 ÷ 1,000 = 0.8
Answer: 0.8
\`\`\`

**Detailed Example 7: Density from SG**
*A fluid has specific gravity 1.25. What is its density?*

\`\`\`
ρ = SG × ρ_water = 1.25 × 1,000 = 1,250 kg/m³
Answer: 1,250 kg/m³
\`\`\`

---

### Pumps

Pumps are devices that move fluids by mechanical action.

#### Types of Pumps

**Positive Displacement Pumps:**
\`\`\`
- Move a fixed volume per cycle
- Handle viscous fluids well
- Can produce high pressures
- Constant flow at different pressures
- Examples: Gear pump, piston pump, diaphragm pump
- Efficiency: 85-95%

Best for:
- High viscosity fluids
- High pressure applications
- Precise flow control
- Metering applications
- Shear-sensitive fluids (use diaphragm pump)
\`\`\`

**Centrifugal Pumps:**
\`\`\`
- Use rotating impeller to add energy
- Best for low pressure, high flow
- Not suitable for viscous fluids
- Flow decreases as pressure increases
- Examples: End suction, multistage, submersible
- Efficiency: 60-85%

Best for:
- Low viscosity fluids
- High flow rates
- Clean fluids
- Low pressure applications
- Large volume transfer
\`\`\`

**Pump Selection Criteria:**
\`\`\`
1. Fluid properties (viscosity, corrosiveness, temperature)
2. Required flow rate (Q)
3. Required discharge pressure (H)
4. Suction conditions (NPSH required vs available)
5. Operating temperature
6. Efficiency requirements
7. Cost considerations
8. Maintenance requirements
\`\`\`

**Pump Performance Curve:**
\`\`\`
Key parameters:
- Flow rate (Q) in m³/h or gpm
- Head (H) in meters or feet
- Efficiency (η) in percentage
- Power (P) in kW or hp

Relationship:
Power = (Q × H × ρ × g) / (η × 1000)  [kW]
Power (hp) = (Q × H) / (3,960 × η)  [US units]

Where:
Q = Flow rate (m³/s)
H = Head (m)
ρ = Density (kg/m³)
g = 9.81 m/s²
η = Efficiency (decimal)
\`\`\`

**Detailed Example 8: Pump Power Calculation**
*A pump delivers 0.1 m³/s of water with a head of 50m. The pump efficiency is 80%. Calculate the power required.*

\`\`\`
P = (Q × H × ρ × g) / (η × 1000)
P = (0.1 × 50 × 1,000 × 9.81) / (0.8 × 1000)
P = (49,050) / (800)
P = 61.3 kW

Answer: 61.3 kW
\`\`\`

**Detailed Example 9: Pump Power in HP**
*Convert the answer from Example 8 to horsepower.*

\`\`\`
1 hp = 0.746 kW
P = 61.3 / 0.746 = 82.2 hp

Answer: 82.2 hp
\`\`\`

---

### Compressors

Compressors increase the pressure of gases.

#### Types of Compressors

**Positive Displacement Compressors:**
\`\`\`
- Reciprocating: Piston type
- Rotary: Screw, vane, lobe
- Handle high pressure ratios (up to 10:1 per stage)
- Suitable for small to medium flows
- Efficiency: 70-85%

Advantages:
- High pressure capability
- Suitable for various gases
- Good efficiency at high pressures
\`\`\`

**Dynamic Compressors:**
\`\`\`
- Centrifugal: Radial flow
- Axial: Axial flow
- High flow rates (10,000+ m³/h)
- Lower pressure ratios per stage (1.5:1 to 2:1)
- Efficiency: 80-90%

Advantages:
- High flow rates
- Smooth operation
- Low maintenance
- Can handle large volumes
\`\`\`

**Compressor Components:**
\`\`\`
Intercooler: Cools air between stages (reduces work by ~15%)
Aftercooler: Cools air after compression (removes moisture)
Separator: Removes oil and water
Dryer: Removes moisture (prevents corrosion in pipes)

Purpose of Intercooler:
- Reduces temperature between stages
- Decreases compression work
- Prevents overheating
- Increases efficiency
\`\`\`

**Detailed Example 10: Compressor Pressure Ratio**
*A compressor takes in air at 101 kPa and discharges at 1,010 kPa. What is the pressure ratio?*

\`\`\`
Pressure Ratio = Discharge Pressure / Suction Pressure
Pressure Ratio = 1,010 / 101 = 10

Answer: 10:1
\`\`\`

**Detailed Example 11: Multi-Stage Compression**
*If the pressure ratio of 10:1 is achieved with two stages, what is the pressure ratio per stage?*

\`\`\`
Per Stage Ratio = √10 = 3.16:1
Answer: 3.16:1 per stage
\`\`\`

---

### Heat Transfer

Heat transfer is the movement of thermal energy from one object or area to another.

#### Three Modes of Heat Transfer

**1. Conduction:**
\`\`\`
- Through solid materials
- Direct contact transfer
- Fourier's Law: Q = -kA(dT/dx)
- Thermal conductivity (k) varies by material

Good conductors: Metals (copper: 401 W/m·K, aluminum: 237 W/m·K)
Poor conductors (insulators): Air (0.026 W/m·K), wood (0.12 W/m·K), fiberglass (0.04 W/m·K)

Examples:
- Heat through a metal bar
- Heat through a wall
- Cooking pan handle getting hot
- Heat loss through pipes
\`\`\`

**Detailed Example 12: Conduction Heat Transfer**
*A copper rod (k=401 W/m·K) has cross-sectional area 0.01m² and length 1m. If temperature difference is 50°C, what is heat transfer?*

\`\`\`
Q = -kA(ΔT/L) = -401 × 0.01 × (50/1)
Q = -200.5 W (negative indicates heat flow)

Answer: 200.5 W (magnitude)
\`\`\`

**2. Convection:**
\`\`\`
- Through fluids (liquids or gases)
- Movement of fluid carries heat
- Newton's Law: Q = hA(T_surface - T_fluid)

Types:
- Natural Convection: Due to density differences (no external force)
- Forced Convection: Assisted by pumps or fans

Examples:
- Boiling water
- Air conditioner cooling a room
- Radiator heating a room
- Cooling of electronic components
\`\`\`

**3. Radiation:**
\`\`\`
- Through electromagnetic waves
- No medium required
- Can travel through vacuum
- Stefan-Boltzmann Law: Q = εσAT⁴
- Emissivity (ε) varies by surface

Examples:
- Sun warming the earth
- Heat from a fire
- Infrared heaters
- Thermal imaging cameras

Radiation properties:
- Black body: ε = 1 (perfect absorber/emitter)
- White/reflective surfaces: ε ≈ 0.1-0.3
- Dark/rough surfaces: ε ≈ 0.8-0.95
\`\`\`

**Detailed Example 13: Heat Transfer Identification**
*A hot cup of coffee cools down. What modes of heat transfer are involved?*

\`\`\`
1. Conduction: Heat through the cup to your hand
2. Convection: Heat from the surface to surrounding air
3. Radiation: Heat radiated from the surface

Answer: All three modes
\`\`\`

---

### Mechanical Systems

#### Efficiency

Efficiency measures how well a system converts input energy to useful output.

\`\`\`
Efficiency = (Output Power / Input Power) × 100%

Losses = Input - Output
Losses include: Friction, heat, sound, vibration, wear

Typical Efficiencies:
- Electrical motor: 85-96%
- Internal combustion engine: 25-40%
- Transformer: 95-98%
- Pump: 60-85%
- Compressor: 70-85%
- LED light: 30-50% (much better than incandescent at 5-10%)
\`\`\`

**Detailed Example 14: Efficiency Calculation**
*A machine has an input power of 5 kW and output power of 4 kW. What is the efficiency?*

\`\`\`
Efficiency = (4 kW / 5 kW) × 100%
Efficiency = 0.8 × 100 = 80%

Answer: 80%
\`\`\`

**Detailed Example 15: Finding Input from Efficiency**
*A motor is 85% efficient and produces 3.4 kW of mechanical power. What is the input power?*

\`\`\`
Input = Output / Efficiency
Input = 3.4 kW / 0.85
Input = 4 kW

Answer: 4 kW
\`\`\`

**Detailed Example 16: Finding Losses**
*If the motor in Example 15 has input power 4kW and output 3.4kW, what are the losses?*

\`\`\`
Losses = Input - Output
Losses = 4 - 3.4 = 0.6 kW = 600 W

Answer: 600 W losses
\`\`\`

#### Mechanical Advantage

\`\`\`
Mechanical Advantage = Output Force / Input Force

For pulleys:
MA = Number of rope segments supporting the load

For levers:
MA = Distance from effort to fulcrum / Distance from load to fulcrum

For gears:
MA = Number of teeth on driven gear / Number of teeth on driving gear

For inclined plane:
MA = Length of incline / Height of incline

Ideal Mechanical Advantage (IMA) = Perfect/no friction
Actual Mechanical Advantage (AMA) = Includes friction
Efficiency = AMA / IMA
\`\`\`

**Detailed Example 17: Mechanical Advantage - Lever**
*A lever has the effort arm 2 meters from the fulcrum and the load arm 0.5 meters from the fulcrum. What is the mechanical advantage?*

\`\`\`
MA = 2 / 0.5 = 4

This means you can lift 4 times the force you apply.
If you apply 100N, you can lift 400N.
Answer: 4
\`\`\`

**Detailed Example 18: Mechanical Advantage - Pulley**
*A block and tackle system has 4 rope segments supporting the load. What is the mechanical advantage?*

\`\`\`
MA = 4
Answer: 4
\`\`\`

**Detailed Example 19: Mechanical Advantage - Gears**
*A gear system has 40 teeth on the driving gear and 120 teeth on the driven gear. What is the mechanical advantage?*

\`\`\`
MA = 120/40 = 3
Answer: 3
\`\`\`

---

### Materials Engineering

#### Properties of Materials

**Mechanical Properties:**
\`\`\`
- Strength: Ability to withstand load without failure
  - Yield Strength: Where permanent deformation begins
  - Ultimate Tensile Strength: Maximum stress before failure
- Hardness: Resistance to indentation (scratching, cutting)
- Ductility: Ability to deform without fracture (wire drawing)
- Brittleness: Tendency to fracture without deformation
- Toughness: Ability to absorb energy without fracturing
- Fatigue: Resistance to repeated loading cycles
- Creep: Time-dependent deformation under constant stress
\`\`\`

**Detailed Example 20: Material Property Identification**
*What property would you consider if selecting a material for a spring?*

\`\`\`
Answer: Fatigue resistance (for repeated loading) and yield strength (to prevent permanent deformation)
\`\`\`

**Material Classifications:**
\`\`\`
1. Metals:
   - Ferrous: Steel (strong, magnetic, prone to rust)
   - Cast iron (hard, brittle, good compression)
   - Non-ferrous: Aluminum (light, corrosion resistant)
   - Copper (excellent conductor), Brass (decorative), Bronze (bearings)
   - Properties: Strong, conductive, ductile

2. Polymers:
   - Plastics: Thermoplastics (melt on heating), Thermosets (permanent setting)
   - Rubbers: Elastomers (flexible, high elasticity)
   - Properties: Lightweight, insulating, flexible

3. Ceramics:
   - Glass, bricks, tiles, porcelain
   - Properties: Hard, brittle, heat resistant, chemical resistant

4. Composites:
   - Carbon fiber (high strength-to-weight ratio)
   - Fiberglass (good strength, corrosion resistant)
   - Reinforced plastics (various properties)
   - Properties: High strength-to-weight ratio, customized properties
\`\`\`

**Detailed Example 21: Material Selection**
*What material would you select for a car body panel?*

\`\`\`
Considerations:
- Light weight: Aluminum or composite
- Strength: Steel or carbon fiber
- Cost: Steel (cheapest), Aluminum (moderate), Carbon fiber (expensive)
- Formability: Steel (good), Aluminum (good), Carbon fiber (limited)

Common choice: Steel for economy cars, Aluminum for luxury/performance, Carbon fiber for racing

Answer: Depends on requirements - steel (cost), aluminum (weight), or carbon fiber (performance)
\`\`\`

**Corrosion:**
\`\`\`
- Deterioration of metals due to chemical reactions
- Most common: Rust (iron oxide formation)
- Types: Galvanic, crevice, pitting, uniform, stress corrosion

Prevention Methods:
- Coating: Paint, plating, galvanizing
- Material selection: Stainless steel, corrosion-resistant alloys
- Cathodic protection: Sacrificial anodes, impressed current
- Inhibitors: Chemicals that slow corrosion
- Design: Avoid crevices, provide drainage
\`\`\`

**Detailed Example 22: Corrosion Prevention**
*Name two methods to prevent corrosion in pipelines.*

\`\`\`
1. Coating: Paint or epoxy coating
2. Cathodic protection: Sacrificial anodes or impressed current

Answer: Any two from the list above
\`\`\`

---

### Thermodynamics

#### Laws of Thermodynamics

**Zeroth Law:**
\`\`\`
If two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other.
(Basis for temperature measurement)
\`\`\`

**First Law: Conservation of Energy**
\`\`\`
Energy cannot be created or destroyed, only converted from one form to another.
ΔU = Q - W

Where:
ΔU = Change in internal energy (J)
Q = Heat added to system (J)
W = Work done by system (J)

Sign Convention:
- Q positive = Heat added to system
- W positive = Work done by system
\`\`\`

**Second Law: Entropy**
\`\`\`
- Heat cannot spontaneously flow from cold to hot
- Entropy of an isolated system always increases
- No heat engine can be 100% efficient
- Carnot efficiency: η = 1 - T_cold/T_hot

Carnot Efficiency Example:
- Hot reservoir: 400°C (673K)
- Cold reservoir: 25°C (298K)
- η_max = 1 - 298/673 = 1 - 0.443 = 0.557 = 55.7%
- No real engine can exceed this efficiency
\`\`\`

**Third Law: Absolute Zero**
\`\`\`
As temperature approaches absolute zero (0K or -273.15°C), entropy approaches a minimum.
\`\`\`

**Detailed Example 23: First Law Application**
*A gas is heated with 1,000 J of heat and does 400 J of work. What is the change in internal energy?*

\`\`\`
Step 1: Identify known values
Q = +1,000 J (heat added)
W = +400 J (work done by system)

Step 2: Apply first law
ΔU = Q - W
ΔU = 1,000 - 400 = 600 J

Answer: 600 J increase in internal energy
\`\`\`

**Detailed Example 24: Carnot Efficiency**
*Calculate the maximum efficiency of a heat engine operating between 500°C and 100°C.*

\`\`\`
Step 1: Convert to Kelvin
T_hot = 500 + 273 = 773K
T_cold = 100 + 273 = 373K

Step 2: Calculate efficiency
η = 1 - T_cold/T_hot
η = 1 - 373/773
η = 1 - 0.483
η = 0.517 = 51.7%

Answer: 51.7%
\`\`\`

---

### Engineering Units and Conversions

#### SI Base Units

\`\`\`
Length: meter (m)
Mass: kilogram (kg)
Time: second (s)
Current: ampere (A)
Temperature: kelvin (K)
Amount: mole (mol)
Luminous Intensity: candela (cd)
\`\`\`

#### Common Engineering Conversions

\`\`\`
Length:
1 m = 3.281 ft
1 km = 0.621 miles
1 inch = 25.4 mm
1 mile = 1.609 km

Area:
1 m² = 10.764 ft²
1 ft² = 0.093 m²

Volume:
1 m³ = 1,000 liters
1 gallon (US) = 3.785 liters
1 gallon (UK) = 4.546 liters
1 m³ = 219.97 gallons (UK)

Mass:
1 kg = 2.205 lb
1 ton (metric) = 1,000 kg
1 ton (US) = 907.185 kg
1 lb = 0.454 kg

Force:
1 N = 0.225 lbf
1 kgf = 9.81 N
1 lbf = 4.448 N

Pressure:
1 Pa = 1 N/m²
1 bar = 100 kPa
1 atm = 101.325 kPa
1 psi = 6.895 kPa
1 MPa = 10 bar

Energy:
1 J = 1 N·m
1 kWh = 3.6 × 10⁶ J
1 cal = 4.184 J
1 BTU = 1,055.06 J

Power:
1 W = 1 J/s
1 hp (metric) = 735.5 W
1 hp (mechanical) = 745.7 W
1 kW = 1.341 hp

Temperature:
°F = °C × 1.8 + 32
°C = (°F - 32) / 1.8
K = °C + 273.15
°R = °F + 459.67
\`\`\`

**Detailed Example 25: Unit Conversion Practice**
*Convert 100 km/h to m/s.*

\`\`\`
100 km/h = 100,000 m/h
= 100,000 / 3600 m/s
= 27.78 m/s

Or use conversion: 1 km/h = 0.2778 m/s
100 × 0.2778 = 27.78 m/s

Answer: 27.78 m/s
\`\`\`

**Detailed Example 26: Energy Conversion**
*Convert 5 kWh to Joules.*

\`\`\`
5 kWh = 5 × 1,000 × 3,600 = 18,000,000 J = 18 MJ
Answer: 18 MJ
\`\`\`

---

### Practice Questions with Solutions

**Fluid Mechanics:**
1. Calculate pressure at 15m depth in water (ρ=1000 kg/m³).
   *Solution: P = 1000 × 9.81 × 15 = 147,150 Pa = 147.15 kPa*

2. Convert 3.5 bar to kPa.
   *Solution: 3.5 × 100 = 350 kPa*

3. A fluid has density 850 kg/m³. What is its specific gravity?
   *Solution: SG = 850/1000 = 0.85*

4. What is viscosity and why is it important?
   *Solution: Viscosity is resistance to flow. Important for pump selection, pipeline design, lubrication.*

5. What is the difference between density and specific gravity?
   *Solution: Density is absolute value (kg/m³). Specific gravity is relative to water (dimensionless).*

**Pumps:**
6. What is the main difference between centrifugal and positive displacement pumps?
   *Solution: Centrifugal uses impeller for continuous flow; positive displacement moves fixed volume per cycle.*

7. For what applications would you use a positive displacement pump?
   *Solution: High viscosity fluids, high pressure, precise flow control, metering.*

8. When is a centrifugal pump most suitable?
   *Solution: Low viscosity fluids, high flow rates, clean fluids.*

9. Calculate pump power: Q=0.05 m³/s, H=30m, ρ=1000 kg/m³, η=75%.
   *Solution: P = (0.05 × 30 × 1000 × 9.81)/(0.75 × 1000) = 14,715/750 = 19.62 kW*

**Compressors:**
10. What is the purpose of an intercooler?
    *Solution: To cool air between compressor stages, reducing compression work and preventing overheating.*

11. What is the purpose of an aftercooler?
    *Solution: To cool air after final compression to remove moisture for distribution.*

12. What is the difference between an intercooler and aftercooler?
    *Solution: Intercooler is between stages; aftercooler is after the final stage.*

**Heat Transfer:**
13. What are the three modes of heat transfer?
    *Solution: Conduction, convection, radiation.*

14. Give an example of each mode of heat transfer.
    *Solution: Conduction - hot pan handle; Convection - boiling water; Radiation - sun warming earth.*

15. Why is air a poor conductor of heat?
    *Solution: Low thermal conductivity (0.026 W/m·K) because molecules are far apart.*

16. How does convection differ from conduction?
    *Solution: Conduction is through direct contact; convection involves fluid movement.*

**Efficiency:**
17. Calculate efficiency if input is 2kW and output is 1.6kW.
    *Solution: η = 1.6/2 × 100 = 80%*

18. If a machine is 75% efficient and produces 30W of output, what is input power?
    *Solution: Input = 30/0.75 = 40W*

19. What are the common causes of inefficiency in machines?
    *Solution: Friction, heat loss, sound, vibration, wear.*

**Mechanical Advantage:**
20. A lever with effort arm 3m and load arm 1m. What is MA?
    *Solution: MA = 3/1 = 3*

21. What does a mechanical advantage of 5 mean?
    *Solution: You can lift 5 times the force you apply (5N effort lifts 25N load).*

**Materials:**
22. What is the difference between ductility and toughness?
    *Solution: Ductility is ability to deform without fracture; toughness is ability to absorb energy before fracture.*

23. Name two methods to prevent corrosion.
    *Solution: Coating (paint, plating), cathodic protection.*

24. What type of material is carbon fiber?
    *Solution: Composite material.*

**Thermodynamics:**
25. What is the first law of thermodynamics?
    *Solution: Energy cannot be created or destroyed, only converted from one form to another.*

26. What is entropy?
    *Solution: Measure of disorder in a system. Always increases in isolated systems.*

27. Why can't heat spontaneously flow from cold to hot?
    *Solution: Second law of thermodynamics - entropy would decrease, which is impossible.*

**Conversions:**
28. Convert 2.5 kW to hp.
    *Solution: 2.5 × 1.341 = 3.35 hp*

29. Convert 100°C to °F.
    *Solution: 100 × 1.8 + 32 = 212°F*

30. Convert 150 psi to kPa.
    *Solution: 150 × 6.895 = 1,034.25 kPa*

31. Convert 50 m³/h to L/s.
    *Solution: 50 × 1000 / 3600 = 13.89 L/s*

---

### Quick Reference: General Engineering Formulas

| Quantity | Formula | Units |
|----------|---------|-------|
| Pressure (static) | P = ρgh | Pa |
| Pressure | P = F/A | Pa |
| Force | F = P × A | N |
| Density | ρ = m/V | kg/m³ |
| Specific Gravity | SG = ρ/ρ_water | - |
| Power (pump) | P = QHρg/η | W |
| Efficiency | η = Output/Input | % |
| Mechanical Advantage (lever) | MA = d_effort/d_load | - |
| Mechanical Advantage (pulley) | MA = Number of rope segments | - |
| Heat Conduction | Q = -kA(ΔT/L) | W |
| Heat Convection | Q = hA(T_s - T_f) | W |
| Heat Radiation | Q = εσAT⁴ | W |
| Carnot Efficiency | η = 1 - T_c/T_h | % |
| First Law | ΔU = Q - W | J |

---

### Common Engineering Mistakes

 **Wrong**: Confusing pressure and force
 **Correct**: Pressure = Force/Area. Pressure is force per unit area.

 **Wrong**: Using wrong units in calculations
 **Correct**: Always check and convert units. Use consistent unit systems.

 **Wrong**: Assuming all pumps work for all fluids
 **Correct**: Consider fluid viscosity, corrosiveness, and temperature when selecting pumps.

 **Wrong**: Thinking heat and temperature are the same
 **Correct**: Heat is energy transfer; temperature is a measure of average kinetic energy.

 **Wrong**: Confusing work and power
 **Correct**: Work = Force × Distance; Power = Work/Time.

 **Wrong**: Ignoring friction losses
 **Correct**: Always account for friction in real systems; theoretical calculations are ideal.

 **Wrong**: Confusing mechanical advantage and efficiency
 **Correct**: MA is force amplification; efficiency is input-output ratio.

 **Wrong**: Forgetting to convert Celsius to Kelvin in thermodynamics
 **Correct**: Always use Kelvin for thermodynamic calculations (K = °C + 273.15).
`
    },
    {
      id: 'oil-gas',
      title: 'Oil & Gas Engineering',
      content: `
### Introduction to Oil & Gas

The oil and gas industry is divided into three main sectors:
1. **Upstream**: Exploration and Production (E&P) - Finding and extracting
2. **Midstream**: Transportation and Storage - Moving and storing
3. **Downstream**: Refining and Marketing - Processing and selling

---

### Upstream Operations

#### Exploration

The process of finding oil and gas reserves.

**Methods:**
\`\`\`
1. Geological Studies:
   - Surface mapping (rock formations)
   - Core sampling (take rock samples)
   - Fossil analysis (indicates past environments)
   - Structural geology (trap identification)

2. Geophysical Methods:
   - Seismic surveys (2D, 3D, 4D) - Most common
   - Gravity surveys (density differences)
   - Magnetic surveys (rock magnetism)
   - Electromagnetic surveys (conductivity)

3. Exploration Drilling:
   - Wildcat wells (first well in new area)
   - Appraisal wells (confirm and delineate discovery)
   - Delineation wells (define reservoir extent)
\`\`\`

**Seismic Survey Principles:**
\`\`\`
- Sound waves are sent into the earth (using vibrators or explosives)
- Waves reflect back from rock layers (at interfaces)
- Recorded by geophones or hydrophones
- Processed and interpreted to create subsurface images
- Different rock types reflect differently (velocity and density contrast)

4D Seismic:
- Repeated 3D surveys over time
- Monitors reservoir changes
- Tracks fluid movement
- Identifies bypassed oil
\`\`\`

#### Drilling

**Drilling Rig Components:**
\`\`\`
1. Derrick/Mast: Vertical support structure for drill string
2. Draw works: Hoisting mechanism with drum and cable
3. Drill string: Drill pipe + bottom hole assembly + drill bit
4. Mud system: Circulates drilling fluid (mud pumps, tanks, shakers)
5. BOP (Blowout Preventer): Multiple rams to seal well in emergency
6. Kelly/Swivel: Top drive or rotary table rotates drill string

Other Components:
- Crown block and traveling block (pulley system)
- Hook (connects traveling block to swivel)
- Swivel (allows rotation while pumping mud)
- Mud motor (downhole motor for directional drilling)
\`\`\`

**Drilling Fluid (Mud) Functions:**
\`\`\`
1. Remove cuttings from wellbore (carry to surface)
2. Cool and lubricate drill bit (prevents overheating)
3. Control formation pressure (prevent blowouts)
4. Stabilize wellbore (prevent collapse)
5. Transmit hydraulic energy to bit (power)
6. Provide information about formation (logging while drilling)
7. Prevent corrosion of drill string
8. Suspend cuttings when circulation stops
\`\`\`

**Types of Drilling Rigs:**
\`\`\`
Onshore:
- Conventional land rigs (for accessible areas)
- Mobile land rigs (truck or trailer mounted)

Offshore:
- Jack-up rigs (water depth up to 150m)
- Semi-submersible (deep water, 150-3,000m)
- Drillship (ultra-deep water, up to 3,600m+)
- Fixed platform (shallow water, up to 300m)
- Tension leg platform (TLP) (deep water)
- SPAR platform (very deep water)
\`\`\`

---

### Production

#### Primary Recovery

\`\`\`
Uses natural reservoir energy:
- Natural pressure (gas cap drive)
- Water influx (water drive)
- Solution gas drive (gas comes out of solution)
- Gravity drainage (oil flows downhill)

Recovery Factor: 5-15% of OOIP (Original Oil In Place)

Drive Mechanisms:
- Solution Gas Drive: Gas expands as pressure drops
- Gas Cap Drive: Expanding gas cap pushes oil
- Water Drive: Water influx from aquifer
- Gravity Drainage: Oil flows downward to wells
\`\`\`

**Detailed Example 1: Primary Recovery**
*An oil reservoir has 100 million barrels of oil initially in place (OOIP). Primary recovery is expected to recover 10%. How many barrels will be recovered?*

\`\`\`
Recovery = 100,000,000 × 0.10 = 10,000,000 barrels
Answer: 10 million barrels
\`\`\`

#### Secondary Recovery

\`\`\`
Introduced when natural pressure declines:
- Water injection (water flooding) - Most common
- Gas injection (gas flooding)

Recovery Factor: Up to 40% (additional 15-25%)

Water Injection Process:
1. Water is treated (filtered, oxygen removed)
2. Injected into reservoir via injection wells
3. Sweeps oil towards production wells
4. Maintains reservoir pressure
5. Improves displacement efficiency

Patterns:
- Five-spot (one injector, four producers)
- Seven-spot (one injector, six producers)
- Nine-spot (one injector, eight producers)
\`\`\`

**Detailed Example 2: Secondary Recovery**
*If primary recovery recovered 10 million barrels from a 100 million barrel reservoir, and secondary recovery recovers an additional 20%, what is total recovered?*

\`\`\`
Secondary recovery = 100 × 0.20 = 20 million barrels
Total = 10 + 20 = 30 million barrels
Answer: 30 million barrels (30% recovery)
\`\`\`

#### Enhanced Oil Recovery (EOR)

\`\`\`
Used after primary and secondary recovery:

1. Thermal EOR:
   - Steam injection (most common)
   - In-situ combustion (fire flooding)
   - Cyclic steam stimulation (huff and puff)

2. Gas EOR:
   - CO₂ injection (miscible)
   - Nitrogen injection (immiscible)
   - Hydrocarbon gas injection

3. Chemical EOR:
   - Polymer flooding (increases viscosity of water)
   - Surfactant flooding (reduces interfacial tension)
   - Alkaline flooding (reacts with acids in oil)

Recovery Factor: Additional 10-20% (Total up to 60%)

Selection Criteria:
- Reservoir temperature and pressure
- Oil viscosity
- Permeability
- Oil composition
- Economics (CO₂ injection can be expensive)
\`\`\`

**Detailed Example 3: Total Recovery Factor**
*If primary recovery is 10%, secondary adds 15%, and EOR adds 10%, what is the total recovery factor?*

\`\`\`
Total = 10% + 15% + 10% = 35%
Answer: 35% of OOIP
\`\`\`

**Detailed Example 4: Oil Recovery Calculation**
*A 500 million barrel reservoir has: primary recovery 12%, secondary recovery 18%, EOR recovery 10%. How many barrels are recoverable total?*

\`\`\`
Total RF = 12 + 18 + 10 = 40%
Recoverable = 500 × 0.40 = 200 million barrels
Answer: 200 million barrels
\`\`\`

---

### Wellhead and Christmas Tree

#### Wellhead Components

\`\`\`
Functions:
- Support the wellbore (casing weight)
- Provide pressure control (seal against formation)
- Permit access to the well (workover operations)
- Enable installation of equipment (Christmas tree)
- Provide connections for surface facilities

Components:
- Casing head: Supports casing string
- Tubing head: Supports tubing string
- Spool: Provides space for valves
- Bowl: Holds casing hanger
- Connectors: Join different components
\`\`\`

#### Christmas Tree

\`\`\`
The assembly of valves on the wellhead for production control.

Components:
1. Master valve (main shutoff)
2. Wing valves (flow control)
3. Swab valve (access for operations)
4. Choke (flow restriction)
5. Pressure gauges (monitoring)
6. Injection ports (for chemical injection)

Functions:
- Control flow from well
- Provide access for maintenance
- Allow injection of fluids
- Monitor well conditions
- Emergency shutdown capability

Tree Types:
- Conventional tree (vertical)
- Horizontal tree (spool tree)
- Subsea tree (underwater)
\`\`\`

**Detailed Example 5: Christmas Tree Valve Functions**
*What is the purpose of the choke on a Christmas tree?*

\`\`\`
Answer: To regulate and restrict the flow of produced fluids from the well, controlling flow rate and maintaining back pressure.
\`\`\`

**Detailed Example 6: Emergency Shutdown**
*What valve would you close first in an emergency?*

\`\`\`
Answer: The master valve (main shutoff) to isolate the well
\`\`\`

---

### Separators

Separators are vessels that separate produced fluids into their constituent phases.

#### Two-Phase Separators

\`\`\`
Separates: Gas and Liquids (one liquid phase)

Stages:
1. Inlet diverter (initial bulk separation)
2. Gravity separation section (liquid drops out)
3. Mist extractor (removes liquid droplets from gas)
4. Liquid collection section (accumulates liquid)
5. Gas outlet (top of vessel)
6. Liquid outlet (bottom of vessel)

Applications:
- Well testing
- Small production systems
- When water content is minimal
- Gas wells (with some liquid)
\`\`\`

#### Three-Phase Separators

\`\`\`
Separates: Oil, Gas, and Water

Stages:
1. Inlet diverter (initial separation)
2. Gas/liquid separation (bulk)
3. Oil/water separation (gravity settling)
4. Oil weir (controls oil level)
5. Water outlet (bottom of vessel)
6. Oil outlet (middle of vessel)
7. Gas outlet (top of vessel)

Applications:
- Production facilities
- Where water is present in production
- Most production systems
\`\`\`

**Detailed Example 7: Separator Selection**
*What type of separator would be used if the produced fluids contain oil, gas, and water?*

\`\`\`
Answer: Three-phase separator
\`\`\`

**Separation Principles:**
\`\`\`
1. Gravity Separation:
   - Different densities cause phases to separate
   - Heavier phases settle to the bottom
   - Lighter phases rise to the top
   - Stokes' Law governs settling velocity

2. Centrifugal Separation:
   - Uses rotational force (cyclone effect)
   - More efficient than gravity
   - Used in compact systems
   - For gas/liquid separation

3. Coalescence:
   - Small droplets combine to form larger ones
   - Speeds up separation
   - Used in mist extractors
   - Plate packs increase coalescence

4. Flotation:
   - Bubbles attach to oil droplets
   - Raises them to surface
   - Used in produced water treatment
\`\`\`

---

### Pipelines

Pipelines transport oil, gas, and other products over long distances.

#### Pipeline Types

\`\`\`
1. Flowlines: Wellhead to processing facility (short, small diameter)
2. Gathering Lines: Multiple wells to central facility (medium)
3. Trunk Lines: Major transmission lines (long distance, large diameter)
4. Distribution Lines: Final delivery to consumers (small diameter)

Pipeline Categories:
- Onshore pipelines (above ground or buried)
- Offshore pipelines (subsea)
- Product pipelines (refined products)
- Transmission pipelines (crude oil, natural gas)
\`\`\`

#### Pipeline Components

\`\`\`
1. Pipe (steel, HDPE, fiberglass)
2. Compressors/Pumps (maintain pressure)
3. Valves (block, control, safety, check)
4. Scraper traps (for PIG launching/receiving)
5. Corrosion protection (coatings, cathodic protection)
6. SCADA systems (monitoring and control)
7. Cathodic protection (anodes, rectifiers)
8. Pig launcher/receiver (for PIG operations)
9. Metering stations (measure flow)
10. Heating systems (for waxy crude)
\`\`\`

#### PIG (Pipeline Inspection Gauge)

\`\`\`
Types:
1. Cleaning PIGs:
   - Remove debris
   - Scrape deposits
   - Rust removal
   - Paraffin/wax removal

2. Inspection PIGs (Intelligent PIGs):
   - Measure wall thickness (UT, magnetic flux)
   - Detect corrosion and pitting
   - Find cracks
   - GPS tracking

3. Batching PIGs:
   - Separate different products
   - Minimize mixing
   - Reduce contamination

Functions:
- Clean pipeline interior
- Inspect for defects
- Separate product batches
- Remove water/debris
- Run regularly for maintenance
\`\`\`

**Detailed Example 8: PIG Operation**
*What is the purpose of running a PIG through a pipeline?*

\`\`\`
Answer: To clean the pipeline, inspect for damage, or separate different products being transported
\`\`\`

#### Cathodic Protection

\`\`\`
Prevents corrosion of metal pipelines.

Methods:
1. Sacrificial Anode (Galvanic):
   - More reactive metal connected to pipeline
   - Anode corrodes instead of pipe
   - Zinc, magnesium, aluminum anodes
   - No external power required
   - Simple and reliable

2. Impressed Current:
   - External DC power supply (rectifier)
   - Forced protection
   - Used for large pipelines
   - Anodes are inert (graphite, platinum)
   - More expensive but longer protection

Benefits:
- Extends pipeline life
- Prevents leaks
- Reduces maintenance
- Cost-effective
- Environmental protection
\`\`\`

**Detailed Example 9: Cathodic Protection**
*What is the purpose of cathodic protection in pipelines?*

\`\`\`
Answer: To prevent corrosion of the pipeline metal by making it the cathode in an electrochemical cell
\`\`\`

---

### Safety & HSSE

HSSE = Health, Safety, Security, and Environment

#### Permit to Work (PTW)

\`\`\`
Purpose: 
- Authorize high-risk work
- Identify hazards
- Implement controls
- Ensure safety
- Coordinate multiple activities

Types:
1. Routine Permits (minor, low-risk work)
2. Hot Work Permits (welding, grinding, cutting - ignition sources)
3. Cold Work Permits (non-hazardous, no ignition)
4. Confined Space Permits (vessels, tanks, pits)
5. Excavation Permits (digging)
6. Radiation Permits (NORM, industrial radiography)

PTW Process:
1. Request permit (identify work scope)
2. Identify hazards (risk assessment)
3. Implement controls (mitigation measures)
4. Authorize work (supervisor approval)
5. Perform work (follow procedures)
6. Close out permit (confirm completion)
\`\`\`

**Detailed Example 10: Permit to Work**
*When is a hot work permit required?*

\`\`\`
Answer: Any work that could create a source of ignition (welding, grinding, flame cutting, spark-producing tools)
\`\`\`

#### Safety Equipment

\`\`\`
1. Personal Protective Equipment (PPE):
   - Hard hat (protects from falling objects)
   - Safety glasses (eye protection)
   - Coveralls (full body protection)
   - Safety boots (steel toe, slip resistant)
   - Gloves (cut resistant, chemical resistant)
   - Ear protection (hearing protection)
   - Fall protection (harness, lanyard)

2. Safety Systems:
   - Fire and gas detection
   - Emergency shutdown (ESD) system
   - Blowout preventer (BOP)
   - Relief valves
   - Fire suppression systems
   - Emergency response equipment
\`\`\`

#### Environmental Protection

\`\`\`
Main Environmental Risks:
- Oil spills (marine and terrestrial)
- Gas flaring (air pollution)
- Produced water (water contamination)
- Drilling waste (mud and cuttings)
- Air emissions (NOx, SOx, CO₂)

Protection Measures:
- Spill response plans (oil spill contingency)
- Waste management (proper disposal)
- Emission controls (flare reduction)
- Environmental monitoring (regular testing)
- Produced water treatment (clean before discharge)
- Gas reinjection (reduce flaring)
- Zero discharge policies
\`\`\`

**Detailed Example 11: Environmental Protection**
*What are the main environmental risks in oil and gas operations?*

\`\`\`
Answer: Oil spills, gas flaring, produced water discharge, drilling waste, and air emissions
\`\`\`

---

### Basic Instrumentation

#### Types of Instruments

**Pressure Measurement:**
\`\`\`
1. Pressure Transmitter (Smart/Electronic):
   - 4-20mA or 0-10V output
   - Converts pressure to electrical signal
   - HART or FOUNDATION Fieldbus communication
   - Used in control systems (DCS/PLC)

2. Pressure Gauge:
   - Local reading only
   - Bourdon tube, diaphragm, capsule types
   - No electrical output
   - Accuracy: 0.5-2% full scale

3. Pressure Switch:
   - Opens/closes contacts at set pressure
   - Used for alarms and interlocks
   - Mechanical or electronic
\`\`\`

**Detailed Example 12: Pressure Transmitter Output**
*A pressure transmitter has a range of 0-100 bar and output of 4-20mA. What is the output at 50 bar?*

\`\`\`
Step 1: Calculate percentage of range
50 bar / 100 bar = 50% = 0.5

Step 2: Calculate output signal
Output = 4mA + (0.5 × 16mA)
Output = 4mA + 8mA = 12mA

Answer: 12 mA
\`\`\`

**Temperature Measurement:**
\`\`\`
1. Thermocouple:
   - Two dissimilar metals (junction)
   - Generates voltage based on temperature difference
   - Types: J (iron-constantan), K (chromel-alumel), T (copper-constantan), E, R, S
   - Range: -200°C to 1,800°C (depends on type)
   - Accuracy: ±0.5-1.5°C

2. RTD (Resistance Temperature Detector):
   - Platinum element (Pt100)
   - Resistance changes with temperature (0.385Ω/°C typical)
   - Accurate and stable
   - Range: -200°C to 850°C
   - Accuracy: ±0.1-0.5°C

3. Thermowell:
   - Protects temperature sensor
   - Allows removal while under pressure
   - Made of corrosion-resistant material
   - Provides thermal contact
\`\`\`

**Detailed Example 13: RTD Resistance**
*What is the resistance of a Pt100 RTD at 100°C?*

\`\`\`
At 0°C, R = 100Ω
At 100°C, R = 100 × (1 + 0.00385 × 100) = 100 × 1.385 = 138.5Ω
Answer: 138.5Ω (approximately)
\`\`\`

**Level Measurement:**
\`\`\`
1. Ultrasonic Level:
   - Sound waves measure distance
   - Non-contact
   - For liquids and solids
   - Range: 0.5-20m

2. Radar Level:
   - Electromagnetic waves
   - Accurate in harsh conditions
   - Non-contact
   - Range: 0.5-30m

3. DP Level (Differential Pressure):
   - Measures pressure difference
   - Direct and indirect methods
   - Simple and reliable
   - Range: 0-100m

4. Float Switches:
   - Simple on/off control
   - Uses buoyancy
   - Low cost
   - Reliable
\`\`\`

**Flow Measurement:**
\`\`\`
1. Flow Transmitter:
   - 4-20mA output
   - Coriolis, vortex, magnetic, ultrasonic
   - Varies with flow rate

2. Flow Meter Types:
   - Orifice plate: Pressure drop method (DP)
   - Magnetic: Conductive fluids only
   - Coriolis: Mass flow (most accurate)
   - Ultrasonic: Non-invasive
   - Turbine: Mechanical measurement
   - Vortex: Vortex shedding frequency

3. Flow Switch:
   - On/off output
   - Set point for flow
   - Protection applications (no-flow detection)
\`\`\`

**Detailed Example 14: Flow Transmitter Output**
*A flow transmitter has range 0-100 m³/h and output 4-20mA. What is flow at 16mA?*

\`\`\`
Step 1: Calculate percentage
(16mA - 4mA) / 16mA = 12/16 = 0.75 = 75%

Step 2: Calculate flow
Flow = 0.75 × 100 = 75 m³/h

Answer: 75 m³/h
\`\`\`

---

### Practice Questions with Solutions

**Exploration and Production:**
1. What is the main difference between exploration and production?
   *Solution: Exploration finds oil/gas; production extracts it from the reservoir.*

2. What is primary recovery and how does it work?
   *Solution: Uses natural reservoir pressure (gas cap, water drive, solution gas) to produce oil. Recovery: 5-15%.*

3. What is EOR and why is it used?
   *Solution: Enhanced Oil Recovery (tertiary) uses thermal, gas, or chemical methods. Used when primary and secondary are exhausted. Recovery: additional 10-20%.*

4. What is the difference between a two-phase and three-phase separator?
   *Solution: Two-phase separates gas from liquids; three-phase separates oil, gas, and water.*

**Wellhead:**
5. What is the main function of a wellhead?
   *Solution: To support casing and tubing, control pressure, provide access to well, connect surface equipment.*

6. What is the purpose of a Christmas tree?
   *Solution: To control production flow, provide access, allow injection, and monitor well conditions.*

7. What does the choke on a Christmas tree do?
   *Solution: Regulates and restricts flow rate, maintains back pressure on reservoir.*

**Pipelines:**
8. What is a PIG and what is it used for?
   *Solution: Pipeline Inspection Gauge - used to clean, inspect, or separate products in pipelines.*

9. What is cathodic protection?
   *Solution: Prevents pipeline corrosion by making it the cathode in an electrochemical cell. Uses sacrificial anodes or impressed current.*

10. What are the different types of PIGs?
    *Solution: Cleaning PIGs (debris removal), Inspection PIGs (damage detection), Batching PIGs (product separation).*

**Safety:**
11. What is a Permit to Work (PTW) system?
    *Solution: Formal system to authorize high-risk work, identify hazards, and implement controls.*

12. When would you need a hot work permit?
    *Solution: For welding, grinding, cutting, or any work creating sparks or flames.*

13. What does HSSE stand for?
    *Solution: Health, Safety, Security, and Environment.*

**Instrumentation:**
14. A pressure transmitter with range 0-50 bar has 4-20mA output. Calculate output at 25 bar.
    *Solution: 25/50 = 0.5 = 50%; Output = 4 + (0.5 × 16) = 12mA*

15. What is the difference between a thermocouple and an RTD?
    *Solution: Thermocouple uses voltage from dissimilar metals (range -200 to 1800°C, moderate accuracy). RTD uses resistance change (range -200 to 850°C, high accuracy).*

16. What is the purpose of a thermowell?
    *Solution: Protects temperature sensor and allows removal under pressure.*

17. A flow transmitter has range 0-100 m³/h and output 4-20mA. What is flow at 16mA?
    *Solution: (16-4)/16 = 0.75 = 75%; Flow = 75 m³/h*

**General:**
18. What is the purpose of an intercooler in a compressor system?
    *Solution: Cools air between stages, reduces compression work, prevents overheating.*

19. What is the difference between flowline and trunk line?
    *Solution: Flowline: wellhead to facility (short); Trunk line: major transmission (long distance).*

20. What are the environmental risks in oil and gas operations?
    *Solution: Oil spills, gas flaring, produced water, drilling waste, and air emissions.*

---

### Quick Reference: Oil & Gas Terminology

| Term | Definition |
|------|------------|
| OOIP | Original Oil In Place (total oil in reservoir) |
| BOP | Blowout Preventer (safety valve on well) |
| EOR | Enhanced Oil Recovery (tertiary recovery) |
| PIG | Pipeline Inspection Gauge |
| PTW | Permit to Work (safety authorization) |
| HSSE | Health, Safety, Security, Environment |
| SCADA | Supervisory Control And Data Acquisition |
| DCS | Distributed Control System |
| ESD | Emergency Shutdown |
| LOTO | Lock Out Tag Out |
| NORM | Naturally Occurring Radioactive Material |
| HP | High Pressure |
| LP | Low Pressure |
| GOSP | Gas Oil Separation Plant |
| FPSO | Floating Production Storage and Offloading |

---

### Common Oil & Gas Mistakes

 **Wrong**: Thinking EOR is the same as secondary recovery
 **Correct**: EOR is tertiary recovery, following secondary (water/gas injection)

 **Wrong**: Confusing primary and secondary recovery mechanisms
 **Correct**: Primary uses natural energy; secondary uses injected fluids

 **Wrong**: Not understanding separator types
 **Correct**: Two-phase separates gas/liquid; three-phase separates oil/gas/water

 **Wrong**: Forgetting the purpose of different PIGs
 **Correct**: Cleaning PIGs clean; inspection PIGs inspect; batching PIGs separate

 **Wrong**: Thinking PTW is optional
 **Correct**: PTW is mandatory for all high-risk work

 **Wrong**: Confusing PSI with kPa
 **Correct**: Use correct units and conversions (1 psi = 6.895 kPa)

 **Wrong**: Ignoring corrosion protection
 **Correct**: Cathodic protection is essential for pipeline integrity

 **Wrong**: Confusing flowline and trunk line
 **Correct**: Flowline is short (well to facility); trunk line is long-distance transmission

 **Wrong**: Not understanding thermocouple types
 **Correct**: Different types have different temperature ranges and accuracies
`
    }
  ]
};

export default engineeringFundamentals;