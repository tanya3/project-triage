var app = new Vue({
el: '#patientWaitingApp',
data: {
    patients: [
      {
        "patientGuid":"P00001",
        "firstName":"Tanya",
        "lastName":"Gupta",
        "dob":"1997-07-03",
        "sexAtBirth":"F",
        "priority":"high"
      },

      {
        "patientGuid":"P00002",
        "firstName":"Tony",
        "lastName":"Stark",
        "dob":"1970-12-09",
        "sexAtBirth":"M",
        "priority":"medium"
      },

      {
        "patientGuid":"P00003",
        "firstName":"Natasha",
        "lastName":"Romanoff",
        "dob":"1982-11-01",
        "sexAtBirth":"F",
        "priority":"low"
      },
  ]
},
methods: {
  fetchPatients() {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())          //creating a separate function that calls reponse.json() and stores it in json
    .then( json => {waitingApp.people=json});   //creating another function


    // fetch('https://randomuser.me/api/')
    // .then(function(response) {return response.json()})          //creating a separate function that calls reponse.json() and stores it in json
    // .then(function(json) {waitingApp.people=json});
  }
}
});
