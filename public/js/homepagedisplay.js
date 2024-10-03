function adjustVideoHeight() {
    const headerHeight = document.querySelector('header').offsetHeight; // 获取header的高度
    const videoBackground = document.querySelector('.video-background');
    const videoOverlay = document.querySelector('.video-overlay');
    const main = document.querySelector('main');

    // 设置video-background和video-overlay的高度
    videoBackground.style.height = `calc(100vh - ${headerHeight}px)`; // 设为视口高度减去header高度
    videoOverlay.style.height = `calc(100vh - ${headerHeight}px)`;
    main.style.height = `calc(100vh - ${headerHeight}px)`;
}

window.addEventListener('load', adjustVideoHeight); // 页面加载时调整高度
window.addEventListener('resize', adjustVideoHeight); // 窗口调整大小时调整高度


// 滚动到工具区域
document.getElementById('scroll-to-content').addEventListener('click', function() {
    const targetSection = document.getElementById('infocontainer'); // 更改目标区域
    targetSection.scrollIntoView({behavior:'smooth'});
});
