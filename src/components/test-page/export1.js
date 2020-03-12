export default (name) => ({
  name: name,
  sex: '女',
  getName() {
    console.log(this.name);
  }
});
