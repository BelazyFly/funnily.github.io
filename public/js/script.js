// 禁用右键菜单
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 禁止文本选择
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// 禁止链接拖动
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});
