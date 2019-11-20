<template>
  <div class="output">
    <div v-observe-visibility="{callback: visibilityChanged, once: true}" v-bind:class='{active:isVisible}' class="content fade_bottom" v-for="i in 6" :key=i>
    <h3> {{ name }} </h3>
    <img src="/hello_app/images/3.jpg">
    <p> {{ text }} </p>
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
      isVisible: true
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible
    }
  }
}
</script>