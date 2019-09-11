var app = new Vue({
el: '#patientWaitingApp',
data: {
    patients: []
},
methods: {
  fetchPatients() {
    fetch('patient_data.php')
    .then(response => response.json())          //creating a separate function that calls reponse.json() and stores it in json
    .then( json => {waitingApp.patients=json.result});   //creating another function


    // fetch('https://randomuser.me/api/')
    // .then(function(response) {return response.json()})          //creating a separate function that calls reponse.json() and stores it in json
    // .then(function(json) {waitingApp.people=json});
  }
},

created() {                                    //called automatically when new application is created
   this.fetchPatients();
 }

});
