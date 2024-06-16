document.addEventListener('DOMContentLoaded', (event) => {
    const downPaymentSlider = document.getElementById('down-payment-slider');
    const downPaymentDisplay = document.getElementById('down-payment-display');
    const leasePeriodText = document.getElementById('lease-period-text');
    const leasePeriodSlider = document.getElementById('lease-period-slider');
    const allowedLeasePeriods = /^(12|24|36|48|60)$/;
    const leasePeriodError = document.getElementById('lease-period-error');
    const carValueText = document.getElementById('car-value-text');
    const carValueSlider = document.getElementById('car-value-slider');
    const carValueError = document.getElementById('car-value-error');
    const carTypeSelect = document.getElementById('car-type-select');
    const totalLeasingCost = document.getElementById('total-leasing-cost');
    const downPaymentP = document.getElementById('down-payment-p');
    const monthlyInstallmentP = document.getElementById('monthly-installment-p');
    const interestRateP = document.getElementById('interest-rate-p');
 

    // updating down payment display
    downPaymentSlider.addEventListener('input', () => {
        downPaymentDisplay.textContent = downPaymentSlider.value;
        leasingDetails(); // update leasing details on change
    });

    // validation and updating lease
    leasePeriodText.addEventListener('input', () => {
        const value = leasePeriodText.value;
        if (allowedLeasePeriods.test(value)) {
            leasePeriodSlider.value = value;
            leasePeriodText.classList.remove('error');
            leasePeriodError.style.display = 'none';
            leasingDetails();
        } else {
            leasePeriodText.classList.add('error');
            leasePeriodError.style.display = 'block';
        }
    });

    // updating lease slider
    leasePeriodSlider.addEventListener('input', () => {
        leasePeriodText.value = leasePeriodSlider.value;
        leasePeriodText.classList.remove('error');
        leasePeriodError.style.display = 'none';
        leasingDetails(); //update leasing details on change
    });

    // updating car value and validating
    carValueText.addEventListener('input', () => {
        const value = parseInt(carValueText.value);
        if (!isNaN(value) && value >= 10000 && value <= 200000) {
            carValueSlider.value = value;
            carValueText.classList.remove('error'); // remove error if ok
            carValueError.style.display = 'none'; // hide error if ok
            leasingDetails(); //update leasing details on change
        } else {
            carValueText.classList.add('error'); // add error class if invalid
            carValueError.style.display = 'block'; // show the error 
        }
    });

    // updating car value field
    carValueSlider.addEventListener('input', () => {
        carValueText.value = carValueSlider.value;
        carValueText.classList.remove('error'); 
        carValueError.style.display = 'none'; 
        leasingDetails(); //update leasing details on change
    });

    // update car type
    carTypeSelect.addEventListener('change', () => {
        leasingDetails(); // update leasing details on change
    });

      // function to calculate monthly installment
      function calculateMonthlyInstallment(carValue, downPayment, annualInterestRate, leasePeriod) {
        const monthlyInterestRate = annualInterestRate / 100 / 12;
        // formula for fixed-rate loan
        const monthlyPayment = (carValue - downPayment) * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -leasePeriod));
        return monthlyPayment.toFixed(2);
    }

    // updating leasing details from parameters
    function leasingDetails() {
        const carValue = parseInt(carValueText.value);
        const downPayment = parseFloat(downPaymentSlider.value);
        const downPaymentToShow = (carValue / 100 * downPayment).toFixed(2);
        const leasePeriod = parseInt(leasePeriodText.value);
        const carType = carTypeSelect.value;

        
        let annualInterestRate = carType === 'brand-new' ? 2.99 : 3.7;

        if (!isNaN(carValue) && carValue >= 10000 && carValue <= 200000) {
            carValueSlider.value = carValue;
            carValueText.classList.remove('error');
            carValueError.style.display = 'none';

            // calulating monthly installment
            const monthlyInstallment = calculateMonthlyInstallment(carValue, downPayment, annualInterestRate, leasePeriod);

            // updating leasing details on screen
            totalLeasingCost.textContent = `Total Leasing Cost: €${(monthlyInstallment * leasePeriod).toFixed(2)}`;
            downPaymentP.textContent = `Down Payment: €${downPaymentToShow}`;
            monthlyInstallmentP.textContent = `Monthly Installment: €${monthlyInstallment}`;
            interestRateP.textContent = `Interest Rate: ${(annualInterestRate)}%`;
        } else {
            // invalid car value
            carValueText.placeholder = 'Enter car value to start';
        }
    }

    // update leasing details based on initial values
    leasingDetails();
});
