// ===== js-ctf.js — TP CTF « Hacking web » (Seconde Bac Pro CIEL) =====
// À déposer dans Ressources/js-ctf.js à côté de la page du TP.

// ===== Prise en main — Exercice C (cookie de démo) =====
document.cookie = 'acces_demo=invite; path=/; max-age=3600';
function verifierDemo() {
    var zone = document.getElementById('zoneDemo');
    if (!zone) return;
    if (document.cookie.indexOf('acces_demo=vip') !== -1) {
        zone.textContent = '🔓 Zone d\'entraînement : accès « vip » accepté. Vous savez poser un cookie !';
    } else {
        zone.textContent = '🔒 Zone d\'entraînement : accès « invite ».';
    }
}

// ===== Prise en main — Exercice E (paramètre d'URL de démo) =====
function lireVille() {
    var zone = document.getElementById('zoneVille');
    if (!zone) return;
    var params = new URLSearchParams(window.location.search);
    var ville = params.get('ville');
    zone.textContent = ville
        ? '🗺️ Ville détectée dans l\'URL : ' + ville
        : '🗺️ Aucune ville détectée dans l\'URL.';
}

// ===== HTML — rien à faire ici : les défis H sont dans le HTML même de la page. =====

// ===== CSS — C2 (classe qui manque) : la règle attendue est dans style-ctf.css =====
// .drapeau::after { content: "CIEL{css_revele_par_style}"; ... }

// ===== JS — J1 : un console.log au chargement =====
console.log('Système d\'exploitation de la page : Ø_S.');
console.log('PS : CIEL{bonjour_console}');

// ===== JS — J2 : le coffre-fort =====
function verifierCoffre() {
    var essai = document.getElementById('mdpCoffre').value;
    var secret = 'tercesel'; // le mot de passe... à l'envers !
    if (essai === secret.split('').reverse().join('')) {
        document.getElementById('verdictCoffre').textContent =
            '🔓 Coffre ouvert ! Flag : CIEL{js_lu_et_compris}';
    } else {
        document.getElementById('verdictCoffre').textContent = '🔒 Mot de passe refusé.';
    }
}

// ===== JS — J3 : le code cassé =====
var codes = [67, 73, 69, 76, 123, 99, 111, 110, 115, 111, 108, 101, 95, 101, 115, 116, 95, 117, 110, 101, 95, 97, 108, 108, 105, 101, 101, 125];
function revelerCode() {
    // Bug volontaire : cette variable n'existe pas, la fonction plante !
    var message = String.fromCharCode(...codeSecret);
    document.getElementById('verdictCode').textContent = message;
}

// ===== JS — J4 : le message encodé (base64) =====
function ouvrirGarde() {
    var code = 'Q0lFTHtiYXNlNjRfZGVjb2RlZX0='; // décodable avec atob()
    document.getElementById('verdictGarde').textContent = 'Message décodé : ' + atob(code);
}

// ===== JS — J5 : le test de persévérance =====
var clics = 0;
function compterClic() {
    clics = clics + 1;
    document.getElementById('compteurClics').textContent = clics;
    if (clics >= 10) {
        devoilerTresor();
    }
}
function devoilerTresor() {
    document.getElementById('verdictClics').textContent =
        '💎 Trésor débloqué ! Flag : CIEL{dix_clics_bravo}';
}
console.log('Indice : la fonction devoilerTresor() existe... et elle n\'est pas privée. ;)');

// ===== Autres — A1 : le biscuit =====
document.cookie = 'acces=invite; path=/; max-age=3600';
function verifierCookie() {
    var zone = document.getElementById('zoneCookie');
    if (!zone) return;
    if (document.cookie.indexOf('acces=admin') !== -1) {
        var f = [67, 73, 69, 76, 123, 99, 111, 111, 107, 105, 101, 95, 101, 115, 99, 97, 108, 97, 100, 101, 95, 97, 100, 109, 105, 110, 125];
        zone.textContent = '🔓 Bienvenue, admin ! Flag : ' + String.fromCharCode(...f);
    } else {
        zone.textContent = '🔒 Accès refusé : vous êtes « invité ».';
    }
}

// ===== Autres — A2 : la porte dérobée =====
function verifierURL() {
    var zone = document.getElementById('zoneURL');
    if (!zone) return;
    var params = new URLSearchParams(window.location.search);
    if (params.get('autorisation') === 'ciel2027') {
        var f = [67, 73, 69, 76, 123, 112, 97, 114, 97, 109, 101, 116, 114, 101, 95, 117, 114, 108, 95, 116, 114, 111, 117, 118, 101, 125];
        zone.textContent = '🔓 Autorisation acceptée ! Flag : ' + String.fromCharCode(...f);
    } else {
        zone.textContent = '🔒 Accès refusé : paramètre d\'autorisation manquant.';
    }
}

// ===== Autres — A3 : l'entrepôt local =====
localStorage.setItem('caisse_mal_etiquettee', 'CIEL{stockage_local}');
function consulterEntrepot() {
    var valeur = localStorage.getItem('caisse_mal_etiquettee');
    document.getElementById('verdictEntrepot').textContent =
        valeur ? '📦 Caisse ouverte : ' + valeur : '📦 Caisse introuvable.';
}

// ===== Autres — A4 : les ondes =====
function echangerMessages() {
    fetch('data:text/plain,CIEL{faux_flag_piege}')
        .then(function (r) { return r.text(); })
        .then(function (t) { console.log('Message reçu (canal 1) :', t); });
    fetch('data:text/plain,CIEL{reseau_intercepte}')
        .then(function (r) { return r.text(); })
        .then(function (t) { console.log('Message reçu (canal 2) :', t); });
    document.getElementById('verdictReseau').textContent =
        'Échange rejoué : deux messages secrets ont transité. Où sont-ils passés ?';
}

// ===== Autres — A5 : la double porte =====
function verifierDoublePorte() {
    var zone = document.getElementById('zoneDouble');
    if (!zone) return;
    var params = new URLSearchParams(window.location.search);
    var okCookie = document.cookie.indexOf('acces=directeur') !== -1;
    var okURL = params.get('niveau') === 'ultime';
    if (okCookie && okURL) {
        var f = [67, 73, 69, 76, 123, 100, 111, 117, 98, 108, 101, 95, 97, 117, 116, 104, 101, 110, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 125];
        zone.textContent = '🔓🔓 Double porte ouverte ! Flag : ' + String.fromCharCode(...f);
    } else {
        zone.textContent = '🔒🔒 Double porte verrouillée : cookie + paramètre d\'URL requis.';
    }
}

// ===== Lancement des vérifications au chargement =====
document.addEventListener('DOMContentLoaded', function () {
    verifierDemo();
    lireVille();
    verifierCookie();
    verifierURL();
    verifierDoublePorte();
    echangerMessages();
});