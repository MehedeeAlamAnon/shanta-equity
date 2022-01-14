<template>
  <div>
    <Nuxt keep-alive/>
    <button class="msg-wrapper" @click="showMsgForm">
      <img src="../assets/images/feedback-icon.png" class="msg-icon" alt="message us">
    </button>
    <form action="" class="msg-form" :class="{'msg-form-show': msgFormShow}">
      <div class="header d-flex justify-content-between align-items-center mb-4">
        <h4 class="heading-4 font-weight-bold mb-0">Share your feedback</h4>
        <button type="button" class="btn"><img src="../assets/images/cross.png" alt="cross image" @click="hideMsgForm"></button>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Your name">
      </div>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Your phone">
      </div>
      <div class="form-group">
        <input type="email" class="form-control" placeholder="Your email">
      </div>
      <div class="form-group">
        <textarea rows="1" class="form-control" placeholder="A brief about your query"></textarea>
      </div>
      <div class="form-group mt-4">
        <button type="submit" class="btn btn-transparent p-0 font-weight-bold">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "default",
  data(){
    return{
      msgFormShow: false,
    }
  },
  methods: {
    showMsgForm(){
      this.msgFormShow = true
    },
    hideMsgForm(){
      this.msgFormShow = false
    }
  }
}
</script>

<style scoped>

</style>
