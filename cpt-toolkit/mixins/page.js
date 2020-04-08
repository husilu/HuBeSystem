import { PAGE_SIZE } from '@/utils/consts';
import _ from 'lodash';
export default (options = { autoLoad: true, enableRowClickSelection: false }) => ({
  data() {
    return {
      page: 1,
      pageSize: PAGE_SIZE,
      key: null,
      sort: [],
      loading: false
    };
  },
  computed: {
    pageParams() {
      return {
        key: this.key,
        pageNum: this.page,
        pageSize: this.pageSize,
        sort: this.sort
      };
    }
  },
  created() {
    options.autoLoad && this.search && this.search(false);
  },
  mounted() {
    options.enableRowClickSelection && this.enableRowClickSelection();
  },
  methods: {
    // 重置查询参数
    resetPage() {
      this.page = 1;
      this.key = null;
    },
    pageChange(page) {
      this.page = page;
      this.search && this.search(false);
    },
    sortChange(obj) {
      if (obj.order !== 'normal') {
        this.sort = [{ field: obj.key, order: obj.order }];
      } else {
        this.sort = [];
      }
      this.search && this.search(false);
    },
    addSelectionColumn(columns) {
      const selectionCol = {
        type: 'selection',
        width: 55
      };
      return _.concat([selectionCol], columns);
    },
    /**
     *获取选择的项
     * @param {String} tableRef table的ref
     * @param {boolean} notify  当没有数据的时候是否提示 默认提示
     */
    getSelection(tableRef = 'table', notify = true, notifyMessage = '请选择数据') {
      const selection = this.$refs[tableRef].getSelection();
      if (!selection.length) {
        notify && this.$Message.warning(notifyMessage);
        return;
      }
      return selection;
    },
    /**
     * 获取唯一选择的一个，如果多选也会返回空
     * @param {*} tableRef  table的ref
     * @param {*} notify  当选择的数据不止一个或一个也没有的时候 默认提示
     */
    getOneSelected(tableRef = 'table', notify = true, notifyMessage = '请选择一条数据进行操作') {
      const selection = this.$refs[tableRef].getSelection();
      if (selection.length !== 1) {
        notify && this.$Message.warning(notifyMessage);
        return null;
      }
      return selection[0];
    },
    refresh() {
      this.resetPage();
      this.search && Reflect.apply(this.search, this, _.toArray(arguments));
    },
    // 启用行点击选择
    enableRowClickSelection(ref = 'table') {
      const table = this.$refs[ref];
      if (table) {
        let ev = null;
        table.$el.addEventListener('click', event => ev = event, true);
        table.$on('on-row-click', row => {
          if (!ev || !ev.ctrlKey) {
            table.selectAll(false);
          }
          this.$nextTick(() => {
            table.toggleSelect(_.findIndex(this.data, d => JSON.stringify(d) === JSON.stringify(row)));
          });
        });
      }
    },
    // 批量操作
    $modal(content, backFun, title = '确认操作') {
      this.$Modal.confirm({
        width: 300,
        title: title,
        render: () => {
          return <div style="marginLeft:2rem;width:250px;wordBreak:break-all">{`${content}？`}</div>;
        },
        onOk: () => {
          backFun();
        }
      });
    }
  },
  aspects: {
    /**
     * 在执行search前执行
     * @param {Boolean} args  最后一个boolean型参数表示是否重置页码,默认重置页面
     */
    beforeSearch(...args) {
      let resetPage = args.length ? _.last(args) : true;
      // 如果采用采用@click="search" 这种方式那么参数就是Event，其实表示没有真正传是否重置页面
      if (resetPage instanceof Event) {
        resetPage = true;
      }
      if (_.isBoolean(resetPage) && resetPage) {
        this.page = 1;
      }
      this.loading = true;
    },
    afterSearch() {
      this.loading = false;
    }
  }
});
