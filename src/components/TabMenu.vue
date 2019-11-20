<template>
  <div class="header">
    <div class="header_name">
      <h1>
        <router-link v-bind:to="{ path: '/' }">Ryo Naganuma</router-link>
      </h1>
    </div>
    <div class="header_menu">
      <ol>
        <li v-for="(item, index) in items" :key=index>
           <router-link v-bind:to=item.path>
              {{ item.title }}
           </router-link>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'profile', path: '/profile' },
        { title: 'skills', path: '/skills' },
        { title: 'outputs', path: '/outputs' }
      ]
    }
  }
}
</script>