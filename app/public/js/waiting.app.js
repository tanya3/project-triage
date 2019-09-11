var waitingApp = new Vue({
el: '#patientWaitingApp',
data: {
    person:{
      name:{
        first:'',
        last:''
      }
    },
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
    .then(response => response.json())          //creating a separate function that calls reponse.json() and stores it in json. Converts from json into a parsed javascript object
    .then( json => {waitingApp.person=json.results[0]});   //creating another function


    // fetch('https://randomuser.me/api/')
    // .then(function(response) {return response.json()})          //creating a separate anonymous function that returns reponse.json() and stores it in json. function(response) is an anonymous function with parameter response (returned from api) and returns it as a json() object to next function
    // .then(function(json) {waitingApp.people=json});
    }
  },

  created() {                                    //called automatically when new application is created
    this.fetchPatients();
  }
});
