var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('api/waiting/')
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
    },
<<<<<<< HEAD
<<<<<<< HEAD

    formatVisitDateLocal(d) {
      return moment.utc(d).local().format("HH:mm MMM Do");
=======
=======
>>>>>>> pr/6
    formatVisitDateLocal(d) {
      return moment.utc(d).local().format("HH:mm MMM Do");
    },
    visitDateSince(d) {
      return moment.utc(d).local().fromNow();
<<<<<<< HEAD
>>>>>>> pr/6
=======
>>>>>>> pr/6
    }
  },
  created() {
    this.fetchPatients();
  }
});
