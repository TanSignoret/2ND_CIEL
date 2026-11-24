// ===== Défi 4 — Le coffre-fort =====
function verifierCoffre() {
var essai = document.getElementById('mdpCoffre').value;
var secret = 'ruessecorp'; // le mot de passe... à l'envers !
var flag = new TextDecoder(encoding).decode(uint8array);
const hex = "6A735F6C755F65745F636F6D70726973";
const result = new TextDecoder().decode(
new Uint8Array(hex.match(/.{2}/g).map(b => parseInt(b, 16)))
);
if (essai === secret.split('').reverse().join('')) {
document.getElementById('verdictCoffre').textContent =
'🔓 Coffre ouvert ! Flag : CIEL{$result}';
} else {
document.getElementById('verdictCoffre').textContent = '🔒 Mot de passe refusé.';
}
}

// ===== Défi 5 — Le code cassé =====
var codes = [67, 73, 69, 76, 123, 99, 111, 110, 115, 111, 108, 101, 95, 101, 115, 116, 95, 117, 110, 101, 95, 97, 108,
108, 105, 101, 101, 125];
function revelerCode() {
// Bug volontaire : cette variable n'existe pas, la fonction plante !
var message = String.fromCharCode(...codeSecret);
document.getElementById('verdictCode').textContent = message;
}

// ===== Défi 6 — Le biscuit =====
document.cookie = 'acces=invite; path=/; max-age=3600';
function verifierCookie() {
if (document.cookie.indexOf('acces=admin') !== -1) {
var f = [67, 73, 69, 76, 123, 99, 111, 111, 107, 105, 101, 95, 101, 115, 99, 97, 108, 97, 100, 101, 95, 97, 100, 109,
105, 110, 125];
document.getElementById('zoneCookie').textContent =
'🔓 Bienvenue, admin ! Flag : ' + String.fromCharCode(...f);
} else {
document.getElementById('zoneCookie').textContent =
'🔒 Accès refusé : vous êtes « invité ».';
}
}
verifierCookie();

// ===== Défi 7 — La porte dérobée =====
function verifierURL() {
var p = new URLSearchParams(window.location.search);
if (p.get('autorisation') === 'ciel2027') {
var f = [67, 73, 69, 76, 123, 112, 97, 114, 97, 109, 101, 116, 114, 101, 95, 117, 114, 108, 95, 116, 114, 111, 117, 118,
101, 125];
document.getElementById('zoneURL').textContent =
'🔓 Autorisation acceptée ! Flag : ' + String.fromCharCode(...f);
} else {
document.getElementById('zoneURL').textContent =
'🔒 Accès refusé : paramètre d\'autorisation manquant.';
}
}
verifierURL();

// ===== Défi 8 — Les ondes =====
function echangerMessages() {
// Deux "échanges" avec un serveur : visibles uniquement dans l'onglet Réseau.
fetch('data:text/plain,CIEL{faux_flag_piege}')
.then(function (r) { return r.text(); })
.then(function (t) { console.log('Message reçu (canal 1) :', t); });
fetch('data:text/plain,CIEL{reseau_intercepte}')
.then(function (r) { return r.text(); })
.then(function (t) { console.log('Message reçu (canal 2) :', t); });
document.getElementById('verdictReseau').textContent =
'Échange rejoué : deux messages secrets ont transité. Où sont-ils passés ?';
}
echangerMessages(); // échange automatique au chargement