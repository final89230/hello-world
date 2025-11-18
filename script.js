// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 按钮点击事件
function showMessage() {
    alert('欢迎访问我的网站！');
}

// 表单提交处理
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快回复您。');
    this.reset();
});

// 滚动动画效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// 页面加载动画
window.addEventListener('load', function() {
    console.log('网站加载完成！');
});
