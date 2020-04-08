<template lang="pug">
  div.xxgl-nrgl
    input(v-model='divval')
    Button(type='primary' class='mb10' @click='editHandler') 新增数据
<<<<<<< HEAD
    Button(type='primary' class='mb10' @click='eventHandler') event测试
    span {{ shuju }}
    //- input(@input='v => func(val, v)' :value='divval')
    Table(:columns="columns1" :data="data1")
=======
    Table(:columns="columns1" :data="data1" :loading="loading")
>>>>>>> c55787a82fa67ea23628bef3aaedfb351dc4b8cc
    Edit(ref="edit" @on-saved="search")
    qr-code(ref='qrcode')
</template>

<script>
<<<<<<< HEAD
import formMixin from "@/mixin/form";
import qrCode from "./nrgl/qrcode";
import _ from "lodash";
import Edit from "./nrgl/edit";
import { Button } from "view-design";
=======
import qrCode from "./nrgl/qrcode";
// import _ from "lodash";
import Edit from "./nrgl/edit";
import { Button } from "iview";
import api from "@/api/xxgl.js";
>>>>>>> c55787a82fa67ea23628bef3aaedfb351dc4b8cc
export default {
  name: "NrGl",
  components: {
    Edit,
    qrCode
  },
  mixins: [formMixin('我是数据123')],
  data() {
    return {
<<<<<<< HEAD
      divval: 1,
      params: [{ name: "rose" }, { name: "jack" }],
=======
      loading: false,
>>>>>>> c55787a82fa67ea23628bef3aaedfb351dc4b8cc
      columns1: [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "性别",
          key: "sex"
        },
        {
          title: "年龄",
          key: "age"
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "操作",
          key: "actions",
          width: "300",
          render: (h, { row, index }) => {
            return (
              <div>
                <Button
                  class="mr10"
                  on-click={this.editHandler.bind(this, row, index)}
                >
                  编辑
                </Button>
                <Button
                  class="mr10"
                  on-click={this.deleteHandler.bind(this, row)}
                >
                  删除
                </Button>
                <Button on-click={this.downloadHandler.bind(this, row)}>
                  下载溯源码
                </Button>
              </div>
            );
          }
        }
      ],
      data1: []
    };
  },
  mounted() {
    this.search();
  },
  methods: {
<<<<<<< HEAD
    eventHandler() {
      console.log(event);
    },
    func(val, v) {
      console.log(val);
      console.log(v);
    },
    addHandler(params, row, index) {
      console.log(params); // 这个params一般是外面的参数传递进来的
      console.log(row);
      console.log(index);
    },
    rowclick() {
      console.log(event);
=======
    search() {
      this.loading = true;
      api.search_nrgl().then(res => {
        this.data1 = res.data;
        this.loading = false;
      });
>>>>>>> c55787a82fa67ea23628bef3aaedfb351dc4b8cc
    },
    editHandler(row, index) {
      this.editIndex = index;
      this.$refs.edit.show(row.id);
    },
<<<<<<< HEAD
    cancelHandler() {},
    search(data) {
      this.$set(this.data1, this.editIndex, _.assign({}, data));
      // this.data1[this.editIndex] = _.assign({}, data);
=======
    deleteHandler(row) {
      this.$Modal.confirm({
        title: "提示",
        content: "确认删除吗？",
        onOk: () => {
          api.delete_nrgl(row.id).then(res => {
            this.search();
          });
        }
      });
>>>>>>> c55787a82fa67ea23628bef3aaedfb351dc4b8cc
    },
    downloadHandler(row) {
      this.$refs.qrcode.show(row);
    }
  }
};
</script>

<style lang="less">
.xxgl-nrgl {
  .mr10 {
    margin-right: 10px;
  }
  .mb10 {
    margin-bottom: 10px;
  }
}
</style>
