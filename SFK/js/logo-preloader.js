document.addEventListener("DOMContentLoaded",function(){
    var fill = document.querySelector(".water-fill");
    var preloader = new TimelineLite();

    TweenMax.fromTo(fill,0.8,{
        attr:{
            x:-400
        }
    },
    {
        attr:{
            x:0,
    },
        repeat:6,
        ease:Linear.easeNone
    });

    // TweenMax.fromTo(fill,10,{
    //     attr:{
    //         y:50,
    //         height:100
    //     },
    // }, {
    //     attr:{
    //         y:50,
    //         height:100
    //     },
    //     repeat:-1,
    //     yoyo:true,
    //     ease:Linear.easeNone
    // });

    preloader.add(TweenMax.from(fill, 1, {attr: {y: 50, height: 100}, yoyo: true, ease: Linear.easeNone}));
    preloader.add(TweenMax.to(fill, 1, {attr: {y: 50, height: 100}, yoyo: true, ease: Linear.easeNone}));
    preloader.add(TweenMax.to(fill, 1, {attr: {y: -50, height: 200}, delay: 2, yoyo: true, ease: Linear.easeNone}));

  
});