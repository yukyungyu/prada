history.scrollRestoration = "manual";

  const lenis = new Lenis()

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0);
  lenis.stop()

  $(window).on('load', function(){
    // 로딩 끝나면
  setTimeout(() => {
    // $('body').removeClass('hidden')
    lenis.start()
    $('.load-page').addClass('hide');
    lenis.start();
  }, 3000);
  });

  const loadAni = gsap.timeline();

  $('.load-logo').each(function(i, el){
    loadAni.to($(el), {
      delay:1,
      yPercent: $(el).data('y'),
      stagger: 0.1,
    }, 'a')
  })
  $('.load-box').each(function(i, el){
    loadAni.to($(this), 1, {
      yPercent: $(this).data('y'),
    }, 'b')
  })
  loadAni.from($('.company-nm span'), 1, {
    autoAlpha: 0, 
    yPercent: 100, 
    stagger: 0.3,
  })
  gsap.set($('.rwhite-box'), {
    scaleX: 1,
  })
  loadAni.to($('.rwhite-box'), 1, {
    scaleX: 0, 
    transformOrigin: "0% 0%",
    delay: 0.3,
    ease: Cubic.easeOut,
  })
  loadAni.from($('.header-line'), 1, {
    width: '0%',
    ease: Cubic.easeOut,
  })
  loadAni.from($('.header-inner'), 1, {
    autoAlpha: 0, 
    yPercent: 100, 
    stagger: 0.5,
  })


  gsap.set($('[data-motion="float"]').find('img'), {
    yPercent:-7,
    scale:1.1,
    // transform: 'translate3d(0px, -8%, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    // scaleX: 1.1,
    // scaleY: 1.1,
    // scaleZ: 1,
    // yPercent: -8,
  });


  $('[data-motion="float"]').each(function(i, el){
    const picAni = gsap.timeline({
      scrollTrigger: {
        trigger: $(el),
        start: "0% 100%",
        end: "100% 0%",
        // markers: true,
        scrub: 1,
        onEnter: function(){
          // console.log(el);
        },
      },
    })
    // picAni.to($(el).find('img'), {yPercent: 8,})
    picAni.to($(el).find('img'), {
      yPercent:7,
      ease:'none'
      // transform: 'translate3d(0px, 8%, 0px) scale3d(1.1, 1.1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    })
  });

  // end에 영향 안받는 방법? 빠르게 등장하는 방법??
  $('[data-motion="opacity"]').each(function(i, el){
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: $(el),
        start: "0% 100%",
        end: "100% 100%",
        // markers: true,
        scrub: 2,
        onEnter: function(){
          // console.log(el);
        },
      },
    })
    tl.from($(el), 1.8, {
      autoAlpha: 0,
      stagger: 0.1,
      delay: 2
    })
  });

  $('[data-motion="ltr"]').each(function(i, el){
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: $(el),
        start: "0% 95%",
        end: "100% 100%",
        // markers: true,
        toggleActions: "play none restart none",
      },
    })
    t2.from($(el), 1.8, {
      width: '0%',
      ease: Cubic.easeOut,
      delay: 0.3,
    })
  });

  $('[data-motion="text"]').each(function(i, el){
    gsap.from($(el).find('span'), 1.8, {
      scrollTrigger: {
        trigger: $(el),
        start: "0% 90%",
        end: "100% 85%",
        // markers: true,
        scrub: 1,
        onEnter: function(){
          // console.log(el);
        },
      },
      autoAlpha: 0, 
      yPercent: 100, 
      stagger: 0.5,
    })
  })

  gsap.set($('.white-box'), {
    scaleY: 1,
  })
  $('.white-box').each(function(i, el){
    gsap.to($(el), 1.8, {
      scrollTrigger: {
        trigger: $(el),
        start: "0% 75%",
        end: "100% 100%",
        // markers: true,
        scrub: 1,
        onEnter: function(){
          // console.log($(el));
          $(el).addClass('on');
        },
        onLeaveBack: function(){
          $(el).removeClass('on');
        }
      },
      scaleY: 0, 
      transformOrigin: "100% 100%",
      delay: 0.3,
      ease: Cubic.easeOut,
    });
  });

