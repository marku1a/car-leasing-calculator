# Car Leasing Calculator


This project implements a Car Leasing Calculator using html/css/javascript. The calculator allows users to input car value, select lease period, choose between brand-new or used cars,
and calculates monthly installment, total leasing cost, down payment, and interest rate based on the selected parameters.

## Project requirements and my interpretation

**Requirments**:
-Car type(brand new or used)
 -a dropdown list with two options
-Car value with the range from 10,000 to 200,000
 -a text input field
 -a range input field
-Lease period (from 12 to 60 months with 12 months increments)
 -a text input field
 -a range input field
-Down payment (between 10% and 50% with 5% increments)
 -a range input field

 On pictures it was shown a little bit different solution, but I tried more to stick to this.

**Interpretation**:

  - Car type can be selected from dropdown manu with option for new or used, and apply the interest rate of 2.99% for new or 3.7% for used vehicle
  - Car value can be input directly or adjusted using a slider (€10,000 - €200,000), changing one changes the other.
  - Down payment percentage can be adjusted using a slider 10% - 50% with 5% increments.
  - Lease period can be input directly or adjusted using a slider (12, 24, 36, 48, 60 months), changing one changes the other.
-Real time calculations:
  - Calculates monthly installment based on the selected parameters using the formula for loan repayment. 
  - Displays total leasing cost, down payment amount, monthly installment, and interest rate dynamically as users adjust parameters.

