document.addEventListener('DOMContentLoaded', function () {
    const eurInput = document.querySelector('input[name="eur"]');
    const usdInput = document.querySelector('input[name="usd"]');
    const audInput = document.querySelector('input[name="aud"]');
    const convertBtn = document.getElementById('convertBtn');

    // Taux de conversion fixes
    const eurToUsd = 1.01;
    const eurToAud = 1.47;

    convertBtn.addEventListener('click', function () {
        const eur = parseFloat(eurInput.value);
        const usd = parseFloat(usdInput.value);
        const aud = parseFloat(audInput.value);

        if (!isNaN(eur)) {
            usdInput.value = (eur * eurToUsd).toFixed(2);
            audInput.value = (eur * eurToAud).toFixed(2);
        } else if (!isNaN(usd)) {
            eurInput.value = (usd / eurToUsd).toFixed(2);
            audInput.value = ((usd / eurToUsd) * eurToAud).toFixed(2);
        } else if (!isNaN(aud)) {
            eurInput.value = (aud / eurToAud).toFixed(2);
            usdInput.value = ((aud / eurToAud) * eurToUsd).toFixed(2);
        } else {
            alert("Veuillez entrer une valeur dans l'un des champs.");
        }
    });
});