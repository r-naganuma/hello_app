<template>
  <div class="output">
    <div class="content" v-for="item in items" v-bind:key="item">
    <h3>{{ item.title }}</h3>
    <p>{{ item.text }}</p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: {
    items: [
      { title: 'HTML',text: 'あああああ' },
      { title: 'CSS',text: 'いいいいい' }
    ]
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: white;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>