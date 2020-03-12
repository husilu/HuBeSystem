<template lang="pug">
  div.xxgl-nrgl
    input(v-model='divval')
    Button(type='primary' class='mb10' @click='editHandler') 新增数据
    Button(type='primary' class='mb10' @click='eventHandler') event测试
    span {{ shuju }}
    //- input(@input='v => func(val, v)' :value='divval')
    Table(:columns="columns1" :data="data1")
    Edit(ref="edit" @on-saved="search")
    qr-code(ref='qrcode')
</template>

<script>
import formMixin from "@/mixin/form";
import qrCode from "./nrgl/qrcode";
import _ from "lodash";
import Edit from "./nrgl/edit";
import { Button } from "view-design";
export default {
  name: "NrGl",
  components: {
    Edit,
    qrCode
  },
  mixins: [formMixin('我是数据123')],
  data() {
    return {
      divval: 1,
      params: [{ name: "rose" }, { name: "jack" }],
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
          render: (h, { row, index }) => {
            return (
              <div>
                <Button
                  class="mr10"
                  on-click={this.editHandler.bind(this, row, index)}
                >
                  编辑
                </Button>
                <Button on-click={this.cancelHandler.bind(this, row)}>
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
      data1: [
        {
          name: "John Brown",
          age: 18,
          sex: "male",
          address: "New York No. 1 Lake Park"
        },
        {
          name: "Jim Green",
          age: 24,
          sex: "famale",
          address: "London No. 1 Lake Park"
        },
        {
          name: "Joe Black",
          age: 30,
          sex: "male",
          address: "Sydney No. 1 Lake Park"
        },
        {
          name: "Jon Snow",
          age: 26,
          sex: "famale",
          address: "Ottawa No. 2 Lake Park"
        }
      ]
    };
  },
  methods: {
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
    },
    editHandler(row, index) {
      this.editIndex = index;
      this.$refs.edit.show(row);
    },
    cancelHandler() {},
    search(data) {
      this.$set(this.data1, this.editIndex, _.assign({}, data));
      // this.data1[this.editIndex] = _.assign({}, data);
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
