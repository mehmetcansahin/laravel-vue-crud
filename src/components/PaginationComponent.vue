<template>
  <nav
    class="pagination is-small is-centered is-rounded pl-10 pr-10 pb-10"
    role="navigation"
    aria-label="pagination"
  >
    <a class="pagination-previous" v-on:click="$emit('page', 1)">←</a>
    <a class="pagination-next" v-on:click="$emit('page', data.last_page)">→</a>
    <ul class="pagination-list">
      <li v-for="page in pagesNumber" v-bind:key="page">
        <a
          class="pagination-link"
          :class="{'is-current': page == data.current_page}"
          v-on:click="$emit('page', page)"
        >{{ page }}</a>
      </li>
    </ul>
  </nav>
</template>


<script>
export default {
  props: ["data"],
  data: function() {
    return {};
  },
  computed: {
    pagesNumber() {
      let offset = 2;
      if (!this.data.to) {
        return [];
      }
      let from = this.data.current_page - offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + offset * 2;
      if (to >= this.data.last_page) {
        to = this.data.last_page;
      }
      let pagesArray = [];
      for (let page = from; page <= to; page++) {
        pagesArray.push(page);
      }
      return pagesArray;
    }
  }
};
</script>

<style scoped>
.pagination {
  padding: 0px 10px 10px 10px;
}
</style>