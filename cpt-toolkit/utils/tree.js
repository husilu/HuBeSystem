import _ from 'lodash';

/**
 * 处理树型数据的相关逻辑
 * 有关控制树状态的字段
 * active：是否市激活状态，就是当前选择的节点
 * checked：是否是选择状态
 * indeterminate：子级节点有选中的
 * open：是否展开
 */

/**
 * 激活节点
 * @param {Array} treeData - 树形数据
 * @param {String} id - id
 */
export const activeNode = (treeData, id) => {
  return _.map(treeData, item => {
    item.active = item.id === id;
    if (item.children) {
      item.children = this.activeNode(item.children, id);
    }
    return item;
  });
};

/**
 * 设置子节点数据
 * @param {Array} treeData - 树数据
 * @param {String} pid - 父节点ID
 * @param {Array} children - 子节点数据
 */
export const setChildren = (treeData, pid, children) => {
  return _.map(treeData, item => {
    if (pid === item.id) {
      if (_.isEmpty(item.children)) {
        item.children = children;
      } else {
        item.children = _.compact(_.map(_.unionBy(item.children, children, 'id'), child => {
          const newChild = _.findLast(children, p => p.id === child.id);
          if (newChild) {
            newChild.checked = item.checked;
            return _.assign({}, newChild, _.pick(child, ['children', 'open', 'active', 'checked', 'indeterminate']));
          }
          return null;
        }));
      }
      item.hasChildren = item.children && item.children.length > 0;
    } else if (!_.isEmpty(item.children)) {
      item.children = this.setChildren(item.children, pid, children);
    }
    return item;
  });
};

/**
 *
 * @param {Array} data 树数据
 * @param {Function} cb  循环每一个节点进行回掉
 */
export const recurseNodes = (data, cb) => {
  return _.map(data, item => {
    if (cb) {
      const itemHandled = cb(item);
      // 如果返回false结束递归
      if (itemHandled === false) {
        return item;
      }
      item = itemHandled;
    }
    if (item.children) {
      item.children = this.recurseNodes(item.children, cb);
    }
    return item;
  });
};

/**
 * 设置选择状态,同时也设置了半选中状态
 * @param {Array} treeData - 树数据
 * @param {String} id - 需要设置选择状态的节点ID
 */
export const checkedNode = (treeData, id) => {
  return _.map(treeData, item => {
    if (item.id === id) {
      item.indeterminate = false;
      item.checked = !item.checked;
      // 将子节点的选择状态改为此节点的状态
      if (!_.isEmpty(item.children)) {
        item.children = this.recurseNodes(item.children, child => {
          child.checked = item.checked;
          child.indeterminate = false;
          return child;
        });
      }
    } else if (!_.isEmpty(item.children)) {
      item.children = this.checkedNode(item.children, id);
      item.checked = _.every(item.children, child => child.checked);
      item.indeterminate = _.some(item.children, child => {
        return child.checked || child.indeterminate;
      }) && !item.checked;
    }

    return item;
  });
};

/**
 * 展开或则收缩节点
 * @param {Array} treeData - 树数据
 * @param {String} id - id
 */
export const toggleNode = (treeData, id) => {
  return _.map(treeData, item => {
    if (id === item.id) {
      item.open = !item.open;
    } else if (!_.isEmpty(item.children)) {
      item.children = this.toggleNode(item.children, id);
    }
    return item;
  });
};

/**
 * 获取父级节点
 */
export const getParent = (treeData, id) => {
  let parent = null;
  this.recurseNodes(treeData, item => {
    if (!_.isEmpty(item.children)) {
      if (_.some(item.children, child => child.id === id)) {
        parent = item;
      }
    }
    return item;
  });
  return parent;
};
