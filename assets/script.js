         $(document).ready(function () {
            // Smooth scroll animation observer
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function (entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            // Observe all scroll-animate elements
            $('.scroll-animate').each(function () {
                observer.observe(this);
            });

            // Page navigation
            $('.nav-link').on('click', function (e) {
                e.preventDefault();

                const pageId = $(this).data('page');

                // Update active nav link
                $('.nav-link').removeClass('active');
                $(this).addClass('active');

                // Show corresponding page
                $('.page').removeClass('active');
                $(`#${pageId}`).addClass('active');

                // Scroll to top smoothly
                $('html, body').animate({ scrollTop: 0 }, 600);

                // Re-observe elements on new page
                setTimeout(function () {
                    $('.scroll-animate').each(function () {
                        observer.observe(this);
                    });
                }, 100);
            });

            // Add parallax effect to hero section
            $(window).on('scroll', function () {
                const scrolled = $(window).scrollTop();
                $('.hero-section').css('transform', 'translateY(' + (scrolled * 0.3) + 'px)');
            });

            // Smooth hover effects for work cards
            $('.work-card').hover(
                function () {
                    $(this).css('transform', 'translateY(-10px)');
                },
                function () {
                    $(this).css('transform', 'translateY(0)');
                }
            );
        });  