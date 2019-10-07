var patientTriageApp = new Vue({
  el: '#patientTriageApp',
  data: {
    patient: {}
  },
  methods: {
    handleSubmit() {

       // TODO:
       fetch(url, {
         method:'POST',
         body: JSON.stringify(this.patient),   //serialize the object into a string of bytes
         headers: {
           "Content-Type": "application/json; charset=utf-8"
         }
        })
       .then(response => response.json() )
       .then()

       //waitingApp.patients.push(this.patient);
       this.handleReset();
    },
    handleReset() {
      this.patient = {
        patientGuid: '',
        firstName: '',
        lastName: '',
        dob: '',
        sexAtBirth: '',
        visitDescription: '',
        // visitDateUtc
        priority: 'low'
      }
    }
  },
  created() {
    this.handleReset();
  }
});
