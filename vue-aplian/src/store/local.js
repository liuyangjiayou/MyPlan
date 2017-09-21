//local.js就是存储数据到本地中
export const setStorage = function (data) {
  localStorage.setItem('lists',JSON.stringify(data))
};

export const getStorage = function () {
  return JSON.parse(localStorage.getItem('lists'))
}
