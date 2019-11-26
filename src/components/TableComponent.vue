<template>
  <div class="app-crud">
    <div class="box is-paddingless">
      <div class="columns is-marginless">
        <div class="column">
          <div id="page-limit" class="select">
            <select v-model="paginate" v-on:change="fetchData()">
              <option v-for="i in [5, 10, 15, 30, 60, 100]" :key="i" :value="i">{{ i }}</option>
            </select>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input
                type="text"
                v-model="term"
                v-on:keyup="search"
                class="input"
                placeholder="Arama"
              />
              <span class="icon is-small is-left">
                <i class="material-icons">search</i>
              </span>
            </p>
          </div>
        </div>
        <div class="column">
          <button
            v-on:click="action('form', null, 'create')"
            class="button is-small is-white is-pulled-right"
          >
            <i class="material-icons">add_box</i>
          </button>
        </div>
      </div>
      <div class="table-container">
        <table class="table" v-if="data.data">
          <thead>
            <tr>
              <th v-for="field in fields" :key="field.name">{{ field.title }}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="data.data.length == 0">
              <td>İçerik bulunamadı!</td>
            </tr>
            <tr v-for="item in data.data" :key="item.id">
              <td v-for="field in fields" :key="field.name">
                <div v-if="field.type == 'select'">
                  <div v-for="option in options(item, field)" :key="option.value">{{ option.label }}</div>
                </div>
                <div v-else>{{ item[field.name] }}</div>
              </td>
              <td>
                <div class="field has-addons is-pulled-right">
                  <p class="control">
                    <button class="button is-white" v-on:click="action('show', item)">
                      <i class="material-icons">open_in_new</i>
                    </button>
                  </p>
                  <p class="control">
                    <button class="button is-white" v-on:click="action('form', item)">
                      <i class="material-icons">edit</i>
                    </button>
                  </p>
                  <p class="control">
                    <button class="button is-white" v-on:click="deleteItem(item)">
                      <i class="material-icons">delete</i>
                    </button>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <pagination-component v-if="data" :data="data" v-on:page="setPage" />
      <form-component
        v-if="form.modal"
        :api-url="form.apiUrl"
        :create="form.create"
        :meta="data.meta"
        v-on:close="action('form', null, 'close')"
      />
      <show-component
        v-if="show.modal"
        :api-url="show.apiUrl"
        v-on:close="action('show', null, 'close')"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Noty from "noty";
import PaginationComponent from "./PaginationComponent";
import FormComponent from "./FormComponent";
import ShowComponent from "./ShowComponent";

export default {
  props: ["api-url", "api-token"],
  components: {
    PaginationComponent,
    FormComponent,
    ShowComponent
  },
  data: function() {
    return {
      term: null,
      paginate: 10,
      page: 1,
      show: {
        modal: false,
        apiUrl: null
      },
      form: {
        modal: false,
        create: false,
        apiUrl: null
      },
      data: []
    };
  },
  computed: {
    fields: function() {
      return this.data.meta.fields.filter(function(field) {
        return field.listing;
      });
    }
  },
  mounted: function() {
    if (this.apiToken) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + this.apiToken;
    }
    this.fetchData();
  },
  methods: {
    fetchData: function(url = this.apiUrl) {
      axios
        .get(url, { params: { paginate: this.paginate, page: this.page } })
        .then(response => this.setData(response.data));
    },
    setData: function(data) {
      this.data = data;
    },
    action: function(name, item = null, type = null) {
      this[name] = {
        modal: type == "close" ? false : true,
        apiUrl: item == null ? this.apiUrl : this.apiUrl + "/" + item.id,
        create: type == "create" ? true : false
      };
      if (type == "close") {
        this.fetchData();
      }
    },
    deleteItem: function(item) {
      var parent = this;
      var n = new Noty({
        layout: "topCenter",
        theme: "sunset",
        text: "Silmek istediğine emin misin?",
        timeout: false,
        buttons: [
          Noty.button("Sil", "button pr-2", () => {
            parent.destroyItem(item);
            n.close();
          }),
          Noty.button("Kapat", "button", () => n.close())
        ]
      });
      n.show();
    },
    destroyItem: function(item) {
      axios.post(this.apiUrl + "/" + item.id + "/destroy").then(response => {
        if (response.data.status == "success") {
          new Noty({
            layout: "topCenter",
            theme: "sunset",
            timeout: 3000,
            type: "success",
            text: "Silme işlemi başarılı bir şekilde tamamlanmıştır."
          }).show();
          this.fetchData();
        }
      });
    },
    search: function() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        if (this.term.length == 0) {
          this.fetchData();
          return;
        }
        axios
          .post(this.apiUrl, { term: this.term, paginate: this.paginate })
          .then(response => this.setData(response.data));
      }, 500);
    },
    setPage(page) {
      this.page = page;
      this.fetchData();
    },
    options: function(item, field) {
      let selected = item[field.name];
      if (Array.isArray(selected) && typeof selected[0] != "object") {
        selected = field.options.filter(option => {
          return selected.includes(option.value);
        });
      } else if (!Array.isArray(selected)) {
        selected = field.options.filter(option => {
          return option.value == selected;
        });
      }
      return selected;
    }
  }
};
</script>


<style lang="scss">
// TODO: bu kısım css içeri almamız lazım bir de daha mantıklı css nasıl olur araştırılması gerek
// Noty
@import "noty/src/noty.scss";
@import "noty/src/themes/sunset.scss";

.app-crud {
  @import "~material-design-icons/iconfont/material-icons.css";

  // Bulma
  // TODO: burada sadece kullanılanlar import edilmesi gerek.
  // Kullanılanlar; table, button, pagination, form elemanları, modal
  $table-head-cell-color: #212529;
  $table-head-background-color: #e9ecef;
  @import "~bulma/bulma.sass";

  .modal {
    z-index: 99999 !important;
  }

  .table {
    width: 100%;
  }

  .table th,
  .table td {
    vertical-align: middle;
  }

  .trix-button-group--history-tools {
    display: none;
  }

  #page-limit select {
    height: auto !important;
  }
}
</style>