<template>
  <div class="output">
    <h2 v-observe-visibility="{callback: visibilityChanged, once: true}" v-bind:class='{active:isVisible}' class="fade_in">OUTPUTS</h2>
    <div v-observe-visibility="{callback: visibilityChanged, once: true, throttle: 2000, throttleOptions: {leading: 'hidden'}}" v-bind:class='{active:isVisible}' class="output_box fade_bottom">
      <div class="content" v-for="i in 6" :key=i>
        <h3> {{ name }} </h3>
        <img src="/hello_app/images/3.jpg">
        <p> {{ text }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {
      name: 'タイトルエリア',
      text: 'このような意図で作成しました。ここをこのように工夫しました。ここが難しかったです。今後はこうゆう機能を追加したいです。'.repeat(3),
      isVisible: false
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible
    }
  }
}
</script>