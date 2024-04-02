// 设置起始时间为2023年12月7日17时57分13秒
// 月份从0开始，所以12月是11
const startTime = new Date(2023, 11, 7, 17, 57, 13).getTime();

const timerElement = document.getElementById('timer');

function updateTimer() {
    const currentTime = Date.now(); // 获取当前时间的时间戳
    const elapsedTime = Math.floor((currentTime - startTime) / 1000); // 计算从指定时间到现在的经过时间（秒）
    
    // 如果经过的时间小于0，则说明指定的时间还没有到达，可以显示倒计时或其他信息
    if (elapsedTime < 0) {
        timerElement.textContent = `计时尚未开始`;
        return; // 直接返回，不继续执行后面的更新逻辑
    }

    const days = Math.floor(elapsedTime / (60 * 60 * 24)); // 计算天数
    const hours = Math.floor((elapsedTime % (60 * 60 * 24)) / (60 * 60)); // 计算小时数
    const minutes = Math.floor((elapsedTime % (60 * 60)) / 60); // 计算分钟数
    const seconds = elapsedTime % 60; // 计算秒数

    timerElement.textContent = `|　网页运行计时: ${days}天 ${hours}时${minutes < 10 ? '0' + minutes : minutes}分${seconds < 10 ? '0' + seconds : seconds}秒`;
}

// 使用setInterval每秒更新计时器
const timerInterval = setInterval(updateTimer, 1000);







// 设置倒计时总时间为5分钟
let countdownTime = 5 * 60; // 5分钟转换为秒
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;
    countdownElement.textContent = `倒计时: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}秒　`;

    if (countdownTime > 0) {
        countdownTime--;
    } else {
        clearInterval(countdownInterval);
        countdownElement.textContent = 'Client发布时间到!!!!!!!! 准备迎接惊喜!!!';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
