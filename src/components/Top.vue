<template>
  <div class="main">
    <ul>
      <li v-observe-visibility="visibilityChanged" v-bind:class='{active:isVisible}' v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
          <div class="mask">
            <p>{{ item.title }}</p>
          </div>
         </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main',
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
        isVisible: false,
        items: [
          { title: 'PROFILE', path: '/hello_app/profile' },
          { title: 'SKILLS', path: '/hello_app/skills' },
          { title: 'OUTPUTS', path: '/hello_app/outputs' }
        ]
      }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible
    }
  }
}
</script>