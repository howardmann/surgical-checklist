import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.store.findAll('section').then((data) => {
      if (data.get('length') == 0) {
        let section1 = this.store.createRecord('section', { title: '1. Before induction of anasthesia'});
        let section2 = this.store.createRecord('section', { title: '2. Before skin incision'});
        let section3 = this.store.createRecord('section', {title: '3. Before patient leaves operating room'});

        let question1 = this.store.createRecord('item', { title: 'Has the patient confirmed his/ her identity, site, procedure and consent?'});
        let question2 = this.store.createRecord('item', {title: 'Has the site been marked?'});
        let question3 = this.store.createRecord('item', {title: 'Is the anaesthesia machine and medication check complete?'});
        let question4 = this.store.createRecord('item', {title: 'Is the pulse oximeter on the patient and functioning?'});
        let question5 = this.store.createRecord('item', {title: 'Confirm all team members have introduced themselves by name and role.'});
        let question6 = this.store.createRecord('item', {title: "Confirm the patient's name, procedure and where the incision will be made."});
        let question7 = this.store.createRecord('item', {title: 'Had antibiotic prophylaxis been given within the last 60 minutes?'});
        let question8 = this.store.createRecord('item', {title: 'Nurse verbally confirms name of procedure.'});
        let question9 = this.store.createRecord('item', {title: 'Nurse verbally confirms completion of instrument, sponge and needle counts.'});
        let question10 = this.store.createRecord('item', {title: 'Nurse verbally confirms specimen labelling (read specimen labels aloud, including patient name).'});
        let question11 = this.store.createRecord('item', {title: 'Were there any equipment problems to be addressed?'});
        let question12 = this.store.createRecord('item', {title: 'Are there any key concerns for recovery and management of this patient?'});


        return Promise.all([section1, section2, section3, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12])
          .then(() => {
            return Promise.all([
              section1.save().then((section1) => {
                return Promise.all([
                  question1.save().then((res) => res.set('section', section1).save()),
                  question2.save().then((res) => res.set('section', section1).save()),
                  question3.save().then((res) => res.set('section', section1).save()),
                  question4.save().then((res) => res.set('section', section1).save())
                ]);
              }),

              section2.save().then((section2) => {
                return Promise.all([
                  question5.save().then((res) => res.set('section', section2).save()),
                  question6.save().then((res) => res.set('section', section2).save()),
                  question7.save().then((res) => res.set('section', section2).save())
                ]);
              })
            ]),

            section3.save().then((section3) => {
              return Promise.all([
                question8.save().then((res) => res.set('section', section3).save()),
                question9.save().then((res) => res.set('section', section3).save()),
                question10.save().then((res) => res.set('section', section3).save()),
                question11.save().then((res) => res.set('section', section3).save()),
                question12.save().then((res) => res.set('section', section3).save())
              ]);
            });
          })
      }
    });

  },
  model() {
    return this.store.findAll('section');
  }
});
