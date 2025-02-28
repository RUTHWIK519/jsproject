const conversionData = {
    length: { units: ['meters', 'kilometers', 'miles', 'feet'], conversionRates: { meters: 1, kilometers: 0.001, miles: 0.000621371, feet: 3.28084 } },
    weight: { units: ['kilograms', 'grams', 'pounds', 'ounces'], conversionRates: { kilograms: 1, grams: 1000, pounds: 2.20462, ounces: 35.274 } },
    temperature: { units: ['Celsius', 'Fahrenheit'], conversionRates: null },
    currency: { premium: true }
};

document.getElementById('conversionType').addEventListener('change', updateUnits);
document.getElementById('convert').addEventListener('click', performConversion);

function updateUnits() {
    const type = document.getElementById('conversionType').value;
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const premiumMessage = document.getElementById('premiumMessage');
    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';
    premiumMessage.classList.add('hidden');

    if (type === 'currency' && conversionData.currency.premium) {
        premiumMessage.classList.remove('hidden');
        return;
    }

    conversionData[type].units.forEach(unit => {
        const optionFrom = new Option(unit, unit);
        const optionTo = new Option(unit, unit);
        fromUnit.add(optionFrom);
        toUnit.add(optionTo);
    });
}

function performConversion() {
    const type = document.getElementById('conversionType').value;
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const result = document.getElementById('result');

    if (isNaN(value) || value <= 0) {
        result.textContent = 'Please enter a valid value.';
        return;
    }

    if (type === 'temperature') {
        result.textContent = convertTemperature(value, fromUnit, toUnit);
    } else {
        const rateFrom = conversionData[type].conversionRates[fromUnit];
        const rateTo = conversionData[type].conversionRates[toUnit];
        const convertedValue = (value / rateFrom) * rateTo;
        result.textContent = `${value} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
    }
}
function convertTemperature(value, fromUnit, toUnit) {
    if (fromUnit === 'Celsius' && toUnit === 'Fahrenheit') {
        return `${value} Celsius = ${(value * 9 / 5 + 32).toFixed(2)} Fahrenheit`;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celsius') {
        return `${value} Fahrenheit = ${((value - 32) * 5 / 9).toFixed(2)} Celsius`;
    } else {
        return `${value} ${fromUnit} = ${value} ${toUnit}`;
    }
}

// Initialize default units
updateUnits();