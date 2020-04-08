import notification from './notification';

let toastInstance;

function getToastinstance() {
  toastInstance = toastInstance || notification();
  return toastInstance;
}

function toast({duration = 1.5, content = ''}) {
  let instance = getToastinstance()

  instance.add({
    message: text
  })
}

