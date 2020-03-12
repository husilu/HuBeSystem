const obj = {
  name: "hello world"
};

const name = "hello world";

export { obj, name };
export default function getName() {
  return obj.name;
}
