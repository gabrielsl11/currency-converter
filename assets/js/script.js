document.querySelector('#converter').addEventListener('click', () => {
    let from = document.querySelector('#from').value;
    let converting = Number(document.querySelector('#converting').value);
    let to = document.querySelector('#to').value;

    if (converting <= 0) {
        document.querySelector('#converting').classList.add('border', 'border-danger');
        return
    } else {
        document.querySelector('#converting').classList.remove('border', 'border-danger');
    }

    const rates = {
        yuan: { dollar: 0.14, euro: 0.13, real: 0.72, ruble: 10.11, yuan: 1 },
        dollar: { yuan: 7.09, euro: 0.93, real: 5.15, ruble: 71.54, dollar: 1 },
        euro: { yuan: 7.61, dollar: 1.07, real: 5.53, ruble: 76.84, euro: 1 },
        real: { yuan: 1.38, dollar: 0.19, euro: 0.18, ruble: 13.90, real: 1 },
        ruble: { yuan: 0.10, dollar: 0.014, euro: 0.013, real: 0.072, ruble: 1 }
    };

    if (rates[from] && rates[from][to]) {
        let result = converting * rates[from][to];
        document.querySelector('#converted').value = result.toFixed(2);
    } else {
        document.querySelector('#converted').value = "Error";
    }
})

