var patientRecordApp = new Vue({
  el: '#patientRecordApp',
  data: {
      patients: [],
      formPatient: {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
      }
  },
  methods: {
    fetchPatients() {
      fetch('patient_data.php')
      .then(response => response.json())          //creating a separate function that calls reponse.json() and stores it in json
      .then( json => {patientRecordApp.patients = json });   //creating another function

    },

    handleCreateRecord(event) {
      //TODO: POST the form content somewhere
      //fetch(url, {method:"POST", data:this.formPatient})
      //.then(...)
      this.patients.push(this.formPatient);
      this.formPatient = {
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: ''
      }
    },

    selectRecord(patient) {
      console.log(patient);
    }
  },

  created() {                                    //called automatically when new application is created
     this.fetchPatients();
   }

});
