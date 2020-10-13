let sachbearbeiter = [
    {
        Email: "shapour@super-code.de",
        Rufnummer: "0211 7817 2331",
        Mobil: "0157 9233 5815",
    },
    {
        Email: "henri@super-code.de",
        Rufnummer: "0211-78172333",
        Mobil: "01579-2321587",
    },
];

let genderAuswahl = [
    "Herr",
    "Frau"
]

let Kursform = [
    "Vollzeit",
    "Teilzeit"
]

let leistung = [
    "sehr gut",
    "gut"
]

function newPrint() {
    window.print();
};


var d = new Date();
tag = d.getDate();
monat = d.getMonth() + 1;
var jahr = d.getFullYear()
if ((String(tag)).length == 1)
    tag = '0' + tag;
if ((String(monat)).length == 1)
    monat = '0' + monat;

var datum = tag + "." + monat + "." + jahr;
console.log(datum);
document.getElementById("actualDate").innerHTML = datum

let date = document.getElementById("textDateText").value;
console.log(date);

function pushDate() {
    let date = document.getElementById("textDateText").value;
    console.log(date);

    let date1 = new Date(date)
    const dateTimeFormat = new Intl.DateTimeFormat('de', { year: 'numeric', month: 'short', day: '2-digit' })
    const [{ value: day }, , { value: month }, , { value: year }] = dateTimeFormat.formatToParts(date1)
    console.log(`${day}-${month}-${year}`)
    document.getElementById("date1").innerHTML = `${day}-${month}-${year}`;
}

function kurseDate() {
    let date = new Date(document.getElementById('kursDate').value)
    document.getElementById('kursStartDatum').innerHTML = date.toLocaleDateString('de-DE')
}

function kursForm() {
    let kurs = document.getElementById("kurse").value;
    document.getElementById("kursForm").innerHTML = kurs;
}
kursForm();

function genderPush(){
    let genderPick = document.getElementById("geschlecht").value;
    document.getElementById("gender").innerHTML = genderPick;
    document.getElementById("gender2").innerHTML = genderPick;
    document.getElementById("genderPickText").innerHTML = genderPick;
}
genderPush();

function kursLeistung(){
    let WsLeistung = document.getElementById("leistung").value;
    document.getElementById("workshopLeistunText").innerHTML = WsLeistung;
}

// KOntakte aus Hubspot


var contactsArrOne = [];
const getContacts = () => new Promise((resolve, reject) => {
    fetch("https://us-central1-supercode-online.cloudfunctions.net/hubspot/contacts?key=20srk9roccbnw46hetflj5l453ruwsgo").then(response => {
        return response.json();
    }).then(json => {
        resolve(json.contacts);
    });
});
getContacts().then(contacts => {
    contactsArrOne = contactsArrOne.concat(...contacts)
    contactsArrOne.sort((a, b) => (a.displayName > b.displayName) ? 1 : ((b.displayName > a.displayName) ? -1 : 0))
    contactsArrOne.forEach((e, i) => document.getElementById("teilnehmer").innerHTML += `<option value="${e.displayName}"> ${e.displayName} </option>`);

})
function getContact(){
    let genderPick2 = document.getElementById("geschlecht").value;
    let teilnehmerNameText = document.getElementById("teilnehmer");
    console.log(teilnehmerNameText.value);
    document.getElementById("teilnehmerText").innerHTML = teilnehmerNameText.value;
    document.getElementById("teilnehmerText2").innerHTML = teilnehmerNameText.value;
    document.getElementById("teilnehmerText3").innerHTML = teilnehmerNameText.value;
    document.getElementById("teilnehmerName").innerHTML = teilnehmerNameText.value;
    document.getElementById("anrede").innerHTML = genderPick2;
}


function sachBearbeiter1() {
    console.log(document.getElementById("sachbearbeiter").value);
    document.getElementById("beraterRufnummer").value = sachbearbeiter[document.getElementById("sachbearbeiter").value].Rufnummer;
    document.getElementById("beraterMobil").value = sachbearbeiter[document.getElementById("sachbearbeiter").value].Mobil;
    document.getElementById("beraterEmail").value = sachbearbeiter[document.getElementById("sachbearbeiter").value].Email;
}
sachBearbeiter1();