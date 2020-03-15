window.addEventListener('load', function () {
    if (document.body.classList.contains('fullscreen') && window.innerWidth > 800) {
        const sections = document.querySelectorAll('section');
        const content = document.querySelector('.main__content');
        let spin_value = 0;
        let can_scroll = true;
        window.addEventListener('wheel', function (e) {
            if (can_scroll) {
                if (e.deltaY > 0) {
                    // scroll down
                    if (spin_value < sections.length - 1)
                        spin_value += 1;
                } else {
                    //scroll up
                    if (spin_value > 0)
                        spin_value -= 1;
                }
                scroll_content(spin_value);
            }
            // this.setTimeout(function);
        });
        function scroll_content(count) {
            content.setAttribute('style', '\
                -webkit-transform: translateY(-'+ count * 100 + 'vh);\
                -ms-transform: translateY(-'+ count * 100 + 'vh);\
                -o-transform: translateY(-'+ count * 100 + 'vh);\
                transform: translateY(-'+ count * 100 + 'vh);\
              ')

        }
    }
});