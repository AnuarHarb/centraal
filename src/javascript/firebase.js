// Initialize Firebase
const config = {
  apiKey: "AIzaSyDS1T1Bb_BtvA5t0JAJqN28xgU281bm6_A",
  authDomain: "anuar-blog.firebaseapp.com",
  databaseURL: "https://anuar-blog.firebaseio.com",
  projectId: "anuar-blog",
  storageBucket: "anuar-blog.appspot.com",
  messagingSenderId: "1084185075037"
};
firebase.initializeApp(config);

const database = firebase.database();
const leadsList = firebase.database().ref('leads');

const form = document.querySelector('#program-form');
const thx = document.querySelector('.thx-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  sendForm(event.target);
})

function sendForm(form) {
  leadsList.push({
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    city: form.city.value,
    program: form.program.value,
    experience: form.experience.value,
    work: form.work.value,
    lead: form.lead.value,
  });
  form.name.value = '';
  form.email.value = '';
  form.phone.value = '';
  form.city.value = '';
  form.program.value = '';
  form.experience.value = '';
  form.work.value = '';
  form.lead.value = '';
  form.classList.add('hidden');
  thx.classList.remove('hidden');
}
