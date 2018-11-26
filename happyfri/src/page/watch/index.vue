<template>
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question" v-bind:class="{hello : isClass}">
  </p>
  <p>{{ answer }}</p>
</div>
</template>

<script>
export default {
  name: 'watch',
  data() {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      isClass: true
    }
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    this.debouncedGetAnswer = this.getAnswer
  },
  methods: {
    getAnswer: function () {
       if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = response.data.answer
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
}
</script>

<style>
body {
  background: #fff;
}
</style>


