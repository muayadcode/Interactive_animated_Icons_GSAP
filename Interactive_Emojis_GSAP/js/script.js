let tog = false;
//emoji 1

let emoji1 = document.getElementById("emoji-1");

let emoji1Eye=gsap.to("#eyes-dot",{
    transformOrigin:"center",
    yoyo:true,
    x:10,
    ease:"linear",
    duration:1.5,
    repeat:-1,
    paused:true
});
let emoji1Cirlce=gsap.to("#red-c",{

    opacity:1,
    transformOrigin:"center",
    yoyo:true,
    ease:"linear",
    duration:1.5,
    repeat:-1,
    paused:true
});
emoji1.addEventListener("click", function(){


    if(tog===false){
        tog =true;
        emoji1Eye.play();
        emoji1Cirlce.play();
    }else{
        tog =false;
        emoji1Eye.pause();
        emoji1Cirlce.pause();
    }
    
})

let emoji2 = document.getElementById("emoji-2");

//emoji2

let emoji2Circles= gsap.to("#circles",{
    transformOrigin:"center",
    yoyo:true,
    y:-8,
    ease:"linear",
    duration:2,
    repeat:-1,
    x:-2,
    paused:true

});

let emoji2Mouth=gsap.to("#mouth2",{
    transformOrigin:"center",
    yoyo:true,
    ease:"linear",
    duration:.2,
    opacity:0,
    paused:true

});
let emoji2Ang=gsap.to("#ang",{
    transformOrigin:"center",
    yoyo:true,
    opacity:1,
    ease:"linear",
    duration:2,
    paused:true

});
let emoji2Red=gsap.to("#red-ang",{
    transformOrigin:"center",
    yoyo:true,
    opacity:1,
    ease:"linear",
    duration:2,
    repeat:-1,
    paused:true

});

emoji2.addEventListener("click", function(){


    if(tog===false){
        tog =true;

        emoji2Circles.play();
        emoji2Mouth.play();
        emoji2Ang.play();
        emoji2Red.play();
    }else {
        tog =false;
        emoji2Circles.pause();
        emoji2Mouth.pause();
        emoji2Ang.pause();
        emoji2Red.pause();
    }
    
})

let emoji3 = document.getElementById("emoji-3");
//emoji 3

let myEyes=gsap.to("#eyes2",{

    transformOrigin:"center",
    y:7,
    yoyo:true,
    ease:"linear",
    duration:1.5,
    paused:true

});
let emoji3Mouth=gsap.to("#em",{

    transformOrigin:"center",
    scaleY:1.8,
    yoyo:true,
    ease:"linear",
    duration:2,
    repeat:-1,
    paused:true

});
let drops=gsap.to("#drops",{

    opacity:1,
    y:10,
    yoyo:true,
    ease:"linear",
    duration:2,
    repeat:-1,
    paused:true
});

emoji3.addEventListener("click",function(){


    if(tog===false){
        tog =true;
        myEyes.play();
        drops.play();
        emoji3Mouth.play();
    }else{
        tog =false;
        myEyes.restart();
        drops.restart();
        emoji3Mouth.reverse();
    }

});

//emoji 4
let emoji4 = document.getElementById("emoji-4");
let clsoed = gsap.to ("#closed",{
    
    scaleY:1.2,
    duration:2,
    ease:"linear",
    repeat:-1,
    yoyo:true,
    delay:1,
    paused:true
    
});
let lashes = gsap.to ("#lashes",{
    opacity:1,
    duration:2.5,
    ease:"linear",
    repeat:-1,
    yoyo:true,
    paused:true
});
let emoji4Mouth =gsap.to ("#mouth-2",{
    scaleY:1.5,
    duration:1.8,
    ease:"linear",
    repeat:-1,
    yoyo:true,
    delay:.5,
    paused:true,
});
let zes =gsap.to ("#zes",{
    opacity:1,
    duration:2,
    ease:"linear",
    repeat:-1,
    yoyo:true,
    paused:true
});

emoji4.addEventListener("click",function(){

    if(tog===false){
        tog =true;
        clsoed.play();
        lashes.play();
        emoji4Mouth.play();
        zes.play();
    }else{
        tog =false;
        clsoed.pause();
        lashes.pause();
        emoji4Mouth.pause();
        zes.pause();
    }
});

//emoji 5
let emoji5 = document.getElementById("emoji-5");
let openEyes = gsap.to("#eb1",{
    transformOrigin:"center",
    duration:2,
    scaleY:-.1,
    opacity:0,
    yoyo:true,
    paused:true
        
});
let closedEyes = gsap.to("#e01",{
    opacity:1,
    duration:2,
    ease:"linear",
    yoyo:true,
    repeat:-1,
    paused:true,
    
});

let emoji5Mouth = gsap.to("#mt-2",{
    duration:2.5,
    scaleY:1.4,
    ease:"linear",
    yoyo:true,
    repeat:-1,
    paused:true
});

emoji5.addEventListener("click",function(){

    if(tog===false){
        tog =true;
        openEyes.play();
        closedEyes.play();
        emoji5Mouth.play();
        
    }else{
        tog =false;
        openEyes.reverse();
        closedEyes.reverse();
        emoji5Mouth.pause();
    }
});


//emoji 6
let emoji6 = document.getElementById("emoji-6");
let emoji6Circle = gsap.to("#circle1",{
    
    duration:2,
    fill:"#a3bece",
    yoyo:true,
    repeat:-1,
    paused:true
    
});
let emoji6Drops = gsap.to("#drop",{

    duration:2,
    opacity:1,
    yoyo:true,
    repeat:-1,
    paused:true

});
let emoji6Mouth = gsap.to("#m-s",{

    duration:2.5,
    scaleY:.5,
    ease:"linear",
    yoyo:true,
    repeat:-1,
    paused:true

});


emoji6.addEventListener("click",function(){

    if(tog===false){
        tog =true;
        emoji6Circle .play();
        emoji6Drops.play();
        emoji6Mouth.play();
        
    }else{
        tog =false;
        emoji6Circle .pause();
        emoji6Drops.pause();
        emoji6Mouth.pause();
    }
});

//emoji 7
let emoji7 = document.getElementById("emoji-7");

let glasses = gsap.to("#glasses1",{
    
    duration:2,
    y:-60,
    yoyo:true,
    repeat:-1,
    paused:true

});

let emoji7Moving = gsap.to("#m2", {

    fill:"none",
    duration: 2,
    opacity: 0,
    attr: {
        d:"m88.47,190.42c3.69,1.82,28.8,13.69,54.71,1.66,13.53-6.28,21.27-16.3,24.79-21.62"
    },
    yoyo:true,
    repeat:-1,
    paused:true

});

let emoji7Mouth =gsap.to("#m2-2",{
        
    duration:2,
    opacity:1,
    yoyo:true,
    repeat:-1,
    paused:true
        
});

emoji7.addEventListener("click",function(){

        if(tog===false){
            tog =true;
            glasses.play();
            emoji7Moving.play();
            emoji7Mouth.play();
            
        }else{
            tog =false;
            glasses.pause();
            emoji7Moving.pause();
            emoji7Mouth.pause();
        }
    });

//emoji 8
let emoji8 = document.getElementById("emoji-8");
let heart = gsap.timeline({repeat:-1, yoyo: true, paused:true})
.to("#h1", {transformOrigin:"center",duration:1, scale:2 })

let hearts = gsap.to("#hearts",{

    opacity:1,
    duration:3,
    y:50,
    ease:"linear",
    repeat:-1,
    yoyo: true, 
    paused:true
});

emoji8.addEventListener("click",function(){
    if(tog===false){
        tog =true;
        heart.play();
        hearts.play();
        
    }else{
        tog =false;
        heart.pause();
        hearts.pause();
    }
});

    //emoji 9
    let notes= "#note-1";
    gsap.timeline({repeat:-1, yoyo: true})
    .to(notes, {duration:1, rotate:20 })
    .to(notes, {duration:2, y:40, rotate:10 })
    .to(notes, {duration:0.5,rotate:15 })

    let note= "#note-2";
    gsap.timeline({repeat:-1, yoyo: true})
    .to(note, {duration:1, rotate:-20 })
    .to(note, {duration:1, y:10, rotate:10, ease:"linear" })


    gsap.to ("#note-3",{
        rotate:-50,
        duration:4,
        ease:"linear",
        repeat:-1
    });
        

//emoji 10
    gsap.timeline({repeat:-1,yoyo:true})
    .to("#bell", {duration:1, rotate:-10,ease:"bounce.In" })
    .to("#bell", {duration:2,rotate:10 })

    gsap.timeline({repeat:-1,yoyo:true})
    .to("#sound", {duration:1,opacity:1,ease:"bounce.Out" })
    .to("#sound", {duration:1,opacity:0,ease:"bounce.In" })


//emoji 11

    gsap.to("#locked",{

        duration:1.5,
        opacity:1,
        ease:"linear",
        yoyo:true,
        repeat:-1

    });
    gsap.to("#checked",{

        duration:1.5,
        opacity:1,
        ease:"linear",
        yoyo:true,
        repeat:-1

    });

    //emoji 12
    gsap.to("#box-1",{
        rotate:-10,
        duration:1.5,
        yoyo:true,
        ease :"linear",
        repeat:-1
    });
    gsap.to("#box-2",{
        rotate:10,
        duration:1.5,
        yoyo:true,
        ease :"linear",
        repeat:-1
    })
    gsap.to("#hello",{
        opacity:2,
        x:5,
        y:-6,
        yoyo:true,
        duration:1.5,
        ease :"linear",
        repeat:-1
    });
    gsap.to("#dots",{
        rotate:10,
        duration:1.5,
        yoyo:true,
        x:-5,
        y:3,
        ease :"linear",
        repeat:-1
    });