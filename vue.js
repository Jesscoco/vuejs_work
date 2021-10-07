new Vue({
    // undefined
    el: '#app',
    // undefined
    data: {
      name: 'undefined',
      Cours: "Cours d'Ingénieur Web",
      acceptancePeriod: 'undefined',
      defaultLastId: 4,
      students: [
        { id: 1, name: 'undefined', Cours: 'undefined', acceptancePeriod: 'undefined' },
        { id: 2, name: 'undefined', Cours: "Cours d'Ingénieur Web", acceptancePeriod: 'undefined' },
        { id: 3, name: 'undefined', Cours: "Cours d'Ingénieur Web", acceptancePeriod: 'undefined' }
      ]
    },
    // undefined
    methods: {
      addStudent: function() {
          this.students.push({
             id: this.defaultLastId++, 
             name: this.name,
             Cours: this.Cours, 
             acceptancePeriod: this.acceptancePeriod ,
          });
         this.name = '' ;
         this.Cours='';
         this.acceptancePeriod='';
      }

    }
  })