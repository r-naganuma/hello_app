<template>
  <div class="skills">
    <h2 v-observe-visibility="{callback: visibilityChanged, once: true}" v-bind:class='{active:isVisible}' class="fade_in">SKILLS</h2>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data () {
    return {
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