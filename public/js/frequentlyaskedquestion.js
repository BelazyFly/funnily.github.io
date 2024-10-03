document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const currentAnswer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow'); // 获取当前点击的箭头

        const isCurrentlyOpen = currentAnswer.classList.contains('show');

        // 关闭所有其他答案
        document.querySelectorAll('.faq-answer').forEach(answer => {
            answer.classList.remove('show');
            answer.style.maxHeight = null; // 收起所有其他答案
        });

        // 处理当前答案
        if (!isCurrentlyOpen) {
            currentAnswer.classList.add('show'); // 展开当前答案
            currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px"; // 设置最大高度以实现动画
            arrow.style.transform = "rotate(180deg)"; // 旋转箭头
        } else {
            arrow.style.transform = "rotate(0deg)"; // 收起时箭头恢复
        }
    });
});
