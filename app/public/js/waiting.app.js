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

    formatVisitDateLocal(d) {
      return moment.utc(d).local().format("HH:mm MMM Do");
=======
    formatVisitDateLocal(d) {
      return moment.utc(d).local().format("HH:mm MMM Do");
    },
    visitDateSince(d) {
      return moment.utc(d).local().fromNow();
>>>>>>> pr/6
    }
  },
  created() {
    this.fetchPatients();
  }
});
