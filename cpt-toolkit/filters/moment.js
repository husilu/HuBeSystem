import moment from 'moment';
export const filterName = 'moment';
export const filter = (value, ...args) => {
  if (value) {
    const date = moment(value);
    if (!date.isValid()) return value;
    const format = args[0];
    if (
      Reflect.apply(Object.prototype.toString, format, []) === '[object Array]'
    ) {
      const methodName = args.pop();
      if (methodName) {
        return Reflect.apply(date[methodName], date, args);
      }
    } else {
      return moment(value).format(format);
    }
  } else {
    return value;
  }
};
