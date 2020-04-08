import { AxiosStatic } from './axios';
import { Promise } from './es6-promise';

declare module "cpt-toolkit" {
  export namespace commonUtils {
    /**
     * 递归处理数据,除原始类型外
     * @param {Any} data
     * @param {Function} handler - 会传入每个原始类型值
     * @param {Any} key - 只用于来传递key给handler
     */
    function recurseData(data: Array<any> | Object, handler: Function, key: String): Array<any> | Object

    /**
     * 递归处理数据,针对Object类型
     * @param {Array} data
     * @param {Function} handler
     * @param {String} prop - 递归属性 默认：children
     */
    function recurseItem(data: Array<any> | Object, handler: Function, key: String): Array<any> | Object

    /**
     * 生成uuid
     */
    function uuid(): String

    /**
     * 将地址链接进行下载
     * @param  src - 下载地址
     * @param  fileName - 下载文件名称
     */
    function downloadSrc(src: String, fileName?: String): void
  }

  export namespace domUtils {
    /**
     * 添加类
     * @param el
     * @param classNames 类名 如：'red hover' 会将red和hover加到class中
     */
    function addClass(el: HTMLElement, classNames: String): void

    /**
      * 添加类
      * @param el
      * @param classNames 类名 如：'red hover' 会将red和hover移除class
      */
    function removeClass(el: HTMLElement, classNames: String): void

    /**
     * 获取元素尺寸，隐藏元素也可以使用
     * @param el
     */
    function getSize(el: HTMLElement): { width: Number, height: Number }

    /**
     * 手动触发window.onresize事件
     */
    function triggerResize(): void

    /**
     * 手动触发鼠标事件
     * @param eventName - 事件名称 如 click,mousemove
     */
    function triggerMouseEvent(eventName: String): void

    /**
     * 获取元素相对于窗口的位置
     * @param el
     */
    function getOffsetPosition(el: HTMLElement): { left: Number, top: Number }

    /**
     * html编码
     * @param s 要编码的字符串
     */
    function htmlEncode(s: String): String

    /**
     * html解码
     * @param s 要解码的字符串
     */
    function htmlDecode(s: String): String
  }

  export namespace idCardUitls {
    /**
     * 简单验证身份证号码，验证长度，字符类型和日期等是否合法
     * @param no
     */
    function check(no: String): boolean

    /**
     *  简洁验证,只验证位数和xX
     * @param no
     */
    function checkSimple(no: String): boolean

    /**
     * 严格验证身份证号码 包含了日期、性别、校验码等验证
     * @param no
     */
    function checkStrict(no: String): boolean

    /**
     * 获取出生日期
     * @param no
     */
    function getBirthday(no: String): Date

    /**
     * 获取性别
     * @param no - 身份证号码
     * @return 性别字典值，2：女，1：男
     */
    function getGender(no: String): Number
  }

  /**
   * 用于处理表单和列表的字段配置
   * ['key', 'title', 'align', 'sortable', 'sortMethod', 'sortType', 'width', 'render', 'className', 'fixed', 'renderHeader', 'ellipsis', 'filters', 'filterMethod', 'filterMultiple', 'filteredValue', 'filterRemote'];
   */
  export namespace modelUtils {
    class Field {
      //列类型，可选值为  index、selection、expand、html
      type: String
      /**
       * 列头显示文字
       */
      title: String
      /**
       * 对应列内容的字段名
       */
      key: String
      /**
       * 列宽
       */
      width: Number
      /**
       * 对齐方式，可选值为 left 左对齐、right 右对齐和 center 居中对齐
       */
      align: String
      /**
       * 列的样式名称
       */
      className: String
      /**
       * 列是否固定在左侧或者右侧，可选值为 left 左侧和 right 右侧
       */
      fixed: String
      /**
       * 开启后，文本将不换行，超出部分显示为省略号
       */
      ellipsis: Boolean

      /**
       * 自定义渲染列，使用 Vue 的 Render 函数。
       * @param h
       * @param param { row: object, column: object, index: Number }
       */
      render(h: Function, param): any
      /**
       * 自定义列头显示内容，使用 Vue 的 Render 函数。
       * @param h
       */
      renderHeader(h: Function): any

      /**
       * 对应列是否可以排序，如果设置为 custom，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件
       */
      sortable: Boolean | String

      /**
       * 自动的默认值
       */
      default: any

      /**
       * 表单验证规则
       */
      rules: Array<Object> | Object
    }
    /**
     * 根据字段定义获取iview table列定义
     * @param  fields
     */
    function getColumns(fields: Array<Field>): Array<Object>

    /**
      * 根据字段定义获取默认model
      */
    function getDefaults(fields: Array<Field>): Object

    /**
     * 根据字段定义获取表单验证规则
     * @param fields
     */
    function getRules(fields: Array<Field>): Object
  }
  const ajax: AxiosStatic
}

declare let Promise: Promise
