import BaseMixin from './BaseMixin'

export default {
  mixins: [BaseMixin],
  methods: {
    sayHello () {
      window.alert('hi')
      this.log('hi')
    }
  }
}
