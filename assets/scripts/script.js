let tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5,
});
tl.from(".line-countbox", {
    opacity:0, 
    onStart:function(){
        let countTimer = document.querySelector(".line h5");
        let count = 0;
        setInterval(function(){
            if(count < 100){
                countTimer.innerHTML = count++;
            }
            else{
                countTimer.innerHTML = count;
            }
        },35);
    },
});
tl.to(".line h2", {
    animationName:"changeText",
    opacity:1
})

tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4,
});
tl.from(".page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4
});
tl.to("#loader",{
    dispaly:"none",
})