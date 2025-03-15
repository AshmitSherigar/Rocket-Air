gsap.registerPlugin(ScrollTrigger);
var rellax = new Rellax('.rellax');

// document.querySelector("#icon").addEventListener("mouseover", function () {
//     console.log("Hover detected!");
// });
window.addEventListener("wheel", function (e) {
    console.log(e.deltaY);

    if (e.deltaY > 0) {
        gsap.to(".nav", {
            y: -30,
            opacity: 0,

        })

    } else {
        gsap.to(".nav", {
            y: 0,
            opacity: 1,
            delay: 0.3,
            ease: "bounce.Out"
        })
    }

})


let h1 = document.querySelector(".part-middle h1");
let letters = h1.innerText.split("");
h1.innerHTML = letters.map(letter => `<span>${letter}</span>`).join("");


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".video-container").addEventListener("mousemove", function (e) {
        // console.log(e);
        gsap.to(".video-container .circle", {
            x: e.screenX - 100 + 'px',
            y: e.screenY - 1000 + 'px',
            opacity: 1,
            duration: 1,
            ease: "power.In"
        })

    });
    document.querySelector(".video-container").addEventListener("mouseleave", function (e) {
        console.log(e);
        gsap.to(".video-container .circle", {
            opacity: 0,
            duration: 1,
            ease: "power.Out"

        })

    });

    document.querySelectorAll('.visible-tab').forEach(tab => {
        tab.addEventListener("mouseenter", function () {
            let p = this.parentElement.querySelector("p"); // Get the corresponding paragraph
            if (p) { // Only animate if <p> exists
                gsap.to(p, {
                    opacity: 1,
                    duration: 0.3,
                    delay: 0.4,
                    y: -60,
                });
            }
        });

        tab.addEventListener("mouseleave", function () {
            let p = this.parentElement.querySelector("p");
            if (p) {
                gsap.to(p, {
                    opacity: 0,
                    duration: 0.1,
                    y: 60,
                });
            }
        });
    });


    const circleText = document.querySelector(".circle-text");
    const dot = document.querySelector(".dot");

    circleText.addEventListener("mousemove", (e) => {
        const rect = circleText.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(dot, {
            x: x - rect.width / 2,
            y: y - rect.height / 2,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    circleText.addEventListener("mouseleave", () => {
        gsap.to(dot, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)"
        });
    });
    document.querySelectorAll('.visible-tab').forEach((tab, index) => {
        tab.addEventListener("mouseenter", function () {
            let videoElement = document.getElementById("tabVideo");
            let videoWrapper = document.querySelector(".video-wrapper");


            let videoSources = [
                "https://assets.website-files.com/6205ecdcec584c56193d6121/62bd5211d2734d33b4f1f3e8_Product_Work_noWindow_540x1080_v2-transcode.mp4",
                "https://assets.website-files.com/6205ecdcec584c56193d6121/625049f25321603541f849ab_Brand_Work_noWindow_540x1080-transcode.mp4",
                "https://assets.website-files.com/6205ecdcec584c56193d6121/62504a9bfb995aa187002397_Motion_Work_noWindow_540x1080-transcode.mp4"
            ];


            videoElement.src = videoSources[index];
            videoElement.play();


            gsap.to(videoWrapper, {
                width: "80%",
                duration: 1,
                ease: "power2.out"
            });
        });

        tab.addEventListener("mouseleave", function () {
            let videoWrapper = document.querySelector(".video-wrapper");


            gsap.to(videoWrapper, {
                width: "0%",
                duration: 0.8,
                ease: "power2.in"
            });
        });
    });
    //Pinning at start of Page
    gsap.to(".small-text", {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".small-text",
            start: "top top",
            end: "+=600",
            pin: true,
            scrub: true,
            // markers: true,
            pinSpacing: false,
        }
    });

    //Starting Animation ---
    let tl = gsap.timeline();

    tl.from(".small-text #start", { y: 30, duration: 0.3, opacity: 0 })
        .from(".small-text-inner", { y: 30, duration: 0.4, opacity: 0 }, "sync")
        .from(".small-text-inner .line", { scaleX: 0, opacity: 0, duration: 0.6, transformOrigin: "left center" })
        .from(".small-text #end", { y: 30, duration: 0.3, opacity: 0 }, "sync")
        .from(".small-text-part", { y: 50, duration: 0.5, opacity: 0 }, 'async')
        .from(".video-container", { y: 40, duration: 0.2, opacity: 0 }, 'async')

    //--------------------------------------------------


    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-text",
            start: "top 80%",
            end: "top 30%",
            // scrub: true,
            // markers: true
        }
    })

    tl3.from(".upper", { y: 50, duration: 0.3, opacity: 0 })
        .from(".upper-lower", { y: 50, duration: 0.4, opacity: 0 }, "sync")
        .from(".upper-lower .line-between", { scaleX: 0, opacity: 0, duration: 0.3, transformOrigin: "left center" })
        .from(".lower", { y: 50, duration: 0.3, opacity: 0 }, "sync")

    gsap.from(".big-text h1", {
        y: 40,
        opacity: 0,
        ease: "bounce.Out",
        scrollTrigger: {
            trigger: ".big-text h1",
            start: "top 80%",
            end: "top 70%",
            // scrub: true 
            // markers:true
        }
    });

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".part-start",
            start: "top 80%",
            end: "top 30%",
            // scrub: true,
            // markers: true
        }
    });

    tl2.from(".part-start h2", {
        y: 40,
        duration: 0.4,
        opacity: 0,
        ease: "power2.out"
    })
        .from(".part-start .long-line", {
            scaleX: 0,
            duration: 0.6,
            transformOrigin: "left center",
            ease: "power2.out"
        });

    gsap.from(".part-middle h1 span", {
        y: 140,
        opacity: 0,
        ease: "bounce.Out",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".part-middle h1",
            start: "top 80%",
            end: "top 70%",
            // scrub: true 
            // markers:true
        }
    });
    gsap.from(".part-end h1", {
        y: 150,
        duration: 0.3,
        opacity: 0,
        ease: "power.Out",
        scrollTrigger: {
            trigger: ".part-end h1",
            start: "top 70%",
            end: "top 70%",
            // scrub: true 
            // markers:true
        }
    });
    gsap.from(".tabs .tab", {
        x: -250,
        duration: 0.3,
        opacity: 0,
        ease: "ease",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".tabs .tab",
            start: "top 70%",
            end: "top 70%",
            // scrub: true 
            // markers:true
        }
    });
    gsap.from("#container #text p", {
        y: 70,
        duration: 0.5,
        opacity: 0,
        ease: "ease",
        // stagger: 0.4,
        scrollTrigger: {
            trigger: "#container #text",
            start: "top 70%",
            end: "top 70%",
            // scrub: true 
            // markers: true
        }
    });
    gsap.from(".section-big h1", {
        y: 200,
        duration: 0.6,
        opacity: 0,
        ease: "power.Out",
        stagger: 0.4,
        scrollTrigger: {
            trigger: ".section-big h1",
            start: "top 70%",
            end: "top 70%",
            // scrub: true 
            // markers: true
        }
    });



});
document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");
    const scrollDiv = document.querySelector(".scroll-div");

    scrollDiv.addEventListener("mousemove", (e) => {
        cursor.style.transition = "none";
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursor.style.opacity = 1;
    });

    scrollDiv.addEventListener("mouseleave", () => {
        let rect = scrollDiv.getBoundingClientRect();
        let centerX = rect.left + rect.width / 2; // Center X
        let centerY = rect.top + rect.height / 2; // Center Y

        cursor.style.transition = "left 0.5s ease, top 0.5s ease, opacity 0.3s ease";
        cursor.style.left = `${centerX}px`;
        cursor.style.top = `${centerY}px`;
        cursor.style.opacity = 0;
    });
});


document.querySelectorAll(".layer").forEach(layer => {
    layer.addEventListener("mousemove", function (e) {
        gsap.to(".view-case-study", {
            opacity: 1,
            x: e.clientX + "px",  // Use clientX for absolute positioning
            y: e.clientY + "px",  // Use clientY for absolute positioning
            duration: 0.2,
            ease: "power2.out"
        });
        gsap.to(layer.querySelector("img"), {
            scale: 1.01,
            duration: 0.3,
            ease: "power2.out"

        });
        gsap.to(layer, {
            height: "60vh",
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.to(layer.querySelector("p"), {
            y: 0,
            duration: 0.5,
            ease: "power2.out",
            opacity: 1
        });
        // console.log("wow");

    });

    layer.addEventListener("mouseleave", function () {
        gsap.to(".view-case-study", {
            opacity: 0,
            duration: 0.2
        });
        gsap.to(layer.querySelector("img"), {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"

        });
        gsap.to(layer, {
            height: "70vh",
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.to(layer.querySelector("p"), {
            y: 10,
            duration: 0.5,
            ease: "power2.out",
            opacity: 0
        });
    });


});
ScrollTrigger.create({
    trigger: ".section-text",
    start: "top top+=280vh",
    end: "+=1000",
    pin: true,
    // markers: true,
    pinSpacing: true,
    onUpdate: (self) => {
        if (self.progress >= 1) {
            // When ScrollTrigger reaches the end
            gsap.to(".section-text , .section-text h1 , .work , .work span", {
                backgroundColor: "#000",
                color: "white",
                duration: 0.1
            });
            gsap.to(".work-circle", {
                backgroundColor: "#DBFF00",
                color: "#000",
                duration: 0.1
            })
            gsap.to(".section-text .line-between", {
                backgroundColor: "#fff",

                duration: 0.1,
            })
        } else {
            // When scrolling back up
            gsap.to(".section-text , .section-text h1 , .work , .work span", {
                backgroundColor: "white",
                color: "black",
                duration: 0.1
            });
            gsap.to(".work-circle", {
                backgroundColor: "black",
                color: "white",
                duration: 0.1
            })
            gsap.to(".section-text .line-between", {
                backgroundColor: "black",
                duration: 0.1
            })
        }
    }
});

