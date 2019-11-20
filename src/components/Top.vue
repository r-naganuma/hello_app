<template>
  <div class="main">
    <ul>
      <li v-observe-visibility="visibilityChanged" v-bind:class='{active:isVisible}'>
        <a href="profile">
          <div class="mask">
            <p>profile</p>
          </div>
        </a>
      </li>
      <li v-observe-visibility="visibilityChanged" v-bind:class='{active:isVisible}'>
        <a href="skills">
          <div class="mask">
            <p>skills</p>
          </div>
        </a>
      </li>
      <li v-observe-visibility="visibilityChanged" v-bind:class='{active:isVisible}'>
        <a href="outputs">
          <div class="mask">
            <p>outputs</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main',
  data: {
      profile: '/profile',
      skills: '/skills',
      outputs: '/outputs'
  },
  mounted: function() {
    $('.main a').hover(
      function() {
        $(this).parent('li').removeClass('close');
        $(this).parent('li').addClass('open');
        $(this).children('.mask').fadeIn();
      },
      function() {
        $(this).parent('li').removeClass('open');
        $(this).parent('li').addClass('close');
        $(this).children('.mask').fadeOut();
      }
    );
  },
  data(){
      return {
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