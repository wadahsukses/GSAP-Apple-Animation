$(document).ready(function () {
    var tlFirstScroll = new TimelineMax();

    tlFirstScroll
        .set('.iphone-image-wrapper', {
            scale: 4,
            transformOrigin: 'center top'
        })
        .to('.iphone-image-wrapper', 3, {
            scale: 2.2,
            y: "-50%"
        })
        .to('.iphone-image-wrapper', 3, {
            scale: 1,
            y: "0%"
        });

    var controller = new ScrollMagic.Controller();

    // scene 1

    var scene1 = new ScrollMagic.Scene({
            triggerElement: '.trigger1',
            triggerHook: 0,
            duration: "100%"
        })

        .setTween(tlFirstScroll)
        .addIndicators()
        .addTo(controller);

    var tlSecondScroll = new TimelineMax();

    tlSecondScroll
        // .set('.footer', {
        //     display: "none"
        // })
        .to('.iphone1', 3, {
            x: "-54%"
        })
        .to('.iphone2', 3, {
            x: "54%"
        }, "-=3")
        .from('.iphone1-text', 0.3, {
            autoAlpha: 0
        }, "-=3")
        .from('.iphone2-text', 0.3, {
            autoAlpha: 0
        }, "-=3")
        .to('.iphone1-text', 3, {
            x: "-30%",
        }, "-=3")
        .to('.iphone2-text', 3, {
            x: "30%"
        }, "-=3")
        .set('.iphone-stick', {display: "block"})
        .set('.footer p:nth-of-type(1)', {y: "-3vh", x: "4vh"})
        .set('.footer p:nth-of-type(2)', {y: "-3vh", x: "0vh"})
        .set('.footer p:nth-of-type(3)', {y: "-10vh", x: "0vh"})
        .to('.iphone1-img-behind', 3, {x: "-54%"})
        .to('.iphone2-img-behind', 3, {x: "56%"}, "-=3")
        .to('.iphone1-img', 0.5, {autoAlpha: 0}, "-=3")
        .to('.iphone2-img', 0.5, {autoAlpha: 0}, "-=3")
        .to('.iphone1-text', 0.5, {autoAlpha: 0}, "-=3")
        .to('.iphone2-text', 0.5, {autoAlpha: 0}, "-=3")
        .from('.footer p:nth-of-type(1)', 3, {autoAlpha: 0}, "+=1")
        .to('.footer p:nth-of-type(1)', 3, {
            y: "-80%",
        }, "-=3")
        .from('.footer p:nth-of-type(2)', 3, {autoAlpha: 0}, "+=1")
        .to('.footer p:nth-of-type(2)', 3, {
            y: "-80%",
        }, "-=3")
        .from('.footer p:nth-of-type(3)', 3, {autoAlpha: 0}, "+=1")
        .to('.footer p:nth-of-type(3)', 3, {
            y: "-260%",
        }, "-=3")
        
        var scene2 = new ScrollMagic.Scene({
            triggerElement: '.trigger2',
            triggerHook: 0,
            duration: "100%"
        })

        .setTween(tlSecondScroll)
        .setPin('.trigger2')
        .addIndicators()
        .addTo(controller);
})