<template>
  <div class="profile">
    <h2 v-observe-visibility="{callback: visibilityChanged, once: true}" v-bind:class='{active:isVisible}' class="fade_in">PROFILE</h2>
    <div class="profile_box">
      <div class="profile_box--pic">
        <img src="/hello_app/images/3.jpg">
      </div>
      <div class="profile_box--txt">
        <p class="profileTtl">名前名前名前</p>
        <p class="profileTxt">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
      </div>
    </div>
    <div class="profile_about">
      <p class="profile_about--ttl">HOW I CAN HELP</p>
      <div class="profile_about--box">
        <div class="aboutList">
          <img src="/hello_app/images/3.jpg">
          <p class="aboutList_ttl">WEB DESIGN</p>
          <p class="aboutList_txt">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div class="aboutList">
          <img src="/hello_app/images/3.jpg">
          <p class="aboutList_ttl">WEB DEVELOPMENT</p>
          <p class="aboutList_txt">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
        <div class="aboutList">
          <img src="/hello_app/images/3.jpg">
          <p class="aboutList_ttl">GRAPHIC DESIGN</p>
          <p class="aboutList_txt">
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
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