import Vue from 'vue'
// 代码
const pointDoms = []; // 使用这个指令的所有DOM对象
// Vue.directive('points', {
//     inserted(el, binding) {
//         pointDoms.push(el); // 存储使用这个指令的DOM
//         el.addEventListener('click', () => {
//             // 禁用所有使用这个指令的DOM结构点击事件
//             pointDoms.forEach(pointItem => {
//                 pointItem.style.pointerEvents = 'none';
//             });
//             setTimeout(() => {
//                 // 启动所有使用这个指令的DOM结构点击事件
//                 pointDoms.forEach(pointItem => {
//                     pointItem.style.pointerEvents = 'auto';
//                 });
//             }, binding.value || 350);
//         });
//     }
// })
Vue.directive('points', {
    inserted: function (el, binding) {
        el.addEventListener('click', () => {
            if (!el.disabled) {
                el.disabled = true
                setTimeout(() => {
                    el.disabled = false
                }, binding.value || 3000)
            }
        })
    }
})