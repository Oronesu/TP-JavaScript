document.addEventListener('DOMContentLoaded', function () {
    const eurInput = document.querySelector('input[name="eur"]');
    const usdInput = document.querySelector('input[name="usd"]');
    const audInput = document.querySelector('input[name="aud"]');

    // Taux de conversion fixes 
    const eurToUsd = 1.01;
    const eurToAud = 1.47;

    // On cache le bouton de conversion
    document.getElementById('convertBtn').style.display = 'none';


    eurInput.addEventListener('input', function () {
        const eur = parseFloat(eurInput.value);
        if (!isNaN(eur)) {
            usdInput.value = (eur * eurToUsd).toFixed(2);
            audInput.value = (eur * eurToAud).toFixed(2);
        } else {
            usdInput.value = '';
            audInput.value = '';
        }
    });

    usdInput.addEventListener('input', function () {
        const usd = parseFloat(usdInput.value);
        if (!isNaN(usd)) {
            const eur = usd / eurToUsd;
            eurInput.value = eur.toFixed(2);
            audInput.value = (eur * eurToAud).toFixed(2);
        } else {
            eurInput.value = '';
            audInput.value = '';
        }
    });

    audInput.addEventListener('input', function () {
        const aud = parseFloat(audInput.value);
        if (!isNaN(aud)) {
            const eur = aud / eurToAud;
            eurInput.value = eur.toFixed(2);
            usdInput.value = (eur * eurToUsd).toFixed(2);
        } else {
            eurInput.value = '';
            usdInput.value = '';
        }
    });
});
