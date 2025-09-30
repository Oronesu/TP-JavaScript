//1.
document.querySelector('a').href = 'https://fr.wikipedia.org/';

document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire

    const menu = document.querySelector('#entree');
    const valeur = menu.value.trim().toLowerCase();

    if (valeur === "oui" || valeur === "non") {
        alert("Le formulaire a été envoyé");
    } else {
        menu.value = ""; // Efface le champ
        menu.placeholder = "Oui ou non ?";
    }
});


//2.
const choix1 = document.getElementById('choix1');
const choix2 = document.getElementById('choix2');
const choix3 = document.getElementById('choix3');

// Après avoir selectionné les choix on utilise nextSibling pour modifier le texte
choix1.nextSibling.textContent = 'HP';
choix2.nextSibling.textContent = 'Casque';
choix3.nextSibling.textContent = 'Bluetooth';

//4.
document.querySelectorAll('.choix').forEach(radio => {  
    // Ici on parcour tous les boutons et on "écoute" le changement et on modifie le label en conséquence
    radio.addEventListener('change', () => {
        const label = document.getElementById('label-volume');
        // .checked permet de savoir quel bouton est sélectionné
        if (choix1.checked) {
            label.textContent = 'Volume HP';
        } else if (choix2.checked) {
            label.textContent = 'Volume Casque';
        } else if (choix3.checked) {
            label.textContent = 'Volume Bluetooth';
        }
    });
});

//5. 
const volumeSlider = document.getElementById('volume');
volumeSlider.max = 100; // Modification du maximum
console.log('Valeur max du volume :', volumeSlider.max);

//6.
document.getElementById('volume').addEventListener('input', function() {
    document.getElementById('volume-value').textContent = this.value;
});

//7.
document.querySelector("label[for='case']").textContent = "Mute";
document.getElementById('case').addEventListener('change',function(){ // Écoute le changement de l'état de la checkbox
    const volume = document.getElementById('volume');
    const volumeValue = document.getElementById('volume-value');
    if (this.checked) { // Si cochée on désactive le slider on affiche muet
        volume.disabled=true;
        volumeValue.textContent = 'Muet';
    }
    else {
        volume.disabled=false;
        volumeValue.textContent = volume.value;
    }
});

//8.
const newImage = document.createElement('img');  // on crée l'image et on la paramètre
newImage.src = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg';
newImage.width = 200;
newImage.alt = 'Logo UPHF';

// Sélection de la section "Lien et images"
const sectionImages = document.querySelector('#Images');
// Ajout de l'image à la fin de cette section (à la ligne)
sectionImages.appendChild(document.createElement('br'));
sectionImages.appendChild(newImage);

//9.
document.querySelectorAll('section').forEach(section => {section.style.display ='none';});// On cache toutes les sections par défaut

document.querySelectorAll('h1').forEach(titre=>{
    titre.addEventListener('click', function() {
        const cible = this.dataset.target;

        // Cacher toutes les sections
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // Afficher la section correspondante
        const sectionActive = document.getElementById(cible);
        if (sectionActive) {
            sectionActive.style.display = 'block';
        }
    });
})

//10.
window.addEventListener('DOMContentLoaded', () => {
    // Réinitialiser les boutons radio
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });

    // Réinitialiser les cases à cocher
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
});
// NOTE: Personnellement je n'ai pas réussi à reproduire le problème dans l'énoncé mais ce code doit marcher

//11.
document.getElementById('date').addEventListener('change', function() {
    const dateValue = this.value; // format : "YYYY-MM-DD"
    const year = new Date(dateValue).getFullYear(); // Extraction de l'année
    console.log('Année choisie :', year);
});


//12.
const downloadBar = document.getElementById('download');
const spaceBar = document.getElementById('space');

// Initialiser à zéro
downloadBar.value = 0;
spaceBar.value = 0;

const interval = setInterval(() => {
    if (downloadBar.value < 100) {
        downloadBar.value += 5;
    }
    if (spaceBar.value < 100) {
        spaceBar.value += 5;
    }

    // Stopper si les deux sont à 100
    if (downloadBar.value >= 100 && spaceBar.value >= 100) {
        clearInterval(interval);
    }
}, 1000);