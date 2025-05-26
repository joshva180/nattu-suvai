"use strict";
var testimonialSlider = document.querySelector(".testimonial-slider")
  , testimonialSlide = document.querySelector(".testimonial-slide")
  , prevTestimonialButton = document.querySelector(".prev")
  , nextTestimonialButton = document.querySelector(".next");
if (testimonialSlider) {
    var updateButtonVisibility = function() {
        var t = testimonialSlider.scrollLeft
          , e = testimonialSlider.clientWidth
          , i = testimonialSlider.scrollWidth;
        prevTestimonialButton.style.opacity = 0 === t ? "0.5" : "1",
        nextTestimonialButton.style.opacity = t + e >= i ? "0.5" : "1",
        prevTestimonialButton.disabled = 0 === t,
        nextTestimonialButton.disabled = t + e >= i
    }
      , handleNextButtonClick = function() {
        testimonialSlider.scrollBy({
            left: testimonialSlide.offsetWidth + 24,
            behavior: "smooth"
        }),
        setTimeout(updateButtonVisibility, 300)
    }
      , handlePrevButtonClick = function() {
        testimonialSlider.scrollBy({
            left: -testimonialSlide.offsetWidth - 24,
            behavior: "smooth"
        }),
        setTimeout(updateButtonVisibility, 300)
    };
    nextTestimonialButton.addEventListener("click", handleNextButtonClick),
    prevTestimonialButton.addEventListener("click", handlePrevButtonClick),
    updateButtonVisibility(),
    testimonialSlider.addEventListener("scroll", updateButtonVisibility)
}
function initializeCardSlider(t, e, i, n) {
    var o, l = document.querySelectorAll(t), r = document.querySelector(e), d = document.querySelectorAll(i), c = 0;
    function a(t) {
        var e = window.innerWidth <= 580 ? .9 * r.clientWidth : l[0].offsetWidth
          , i = t * e;
        l.forEach(function(e, i) {
            e.classList.toggle("active", i === t)
        });
        var o = {
            behavior: "smooth"
        };
        o.left = "left" === n ? i : -i,
        r.scrollTo(o),
        d.forEach(function(e, i) {
            e.classList.toggle("active", i === t)
        }),
        c = t
    }
    function s() {
        o = setInterval(function() {
            a(c = (c + 1) % l.length)
        }, 5e3)
    }
    function u() {
        clearInterval(o)
    }
    return d.forEach(function(t, e) {
        t.addEventListener("click", function(t) {
            return function() {
                u(),
                a(t),
                s()
            }
        }(e))
    }),
    l.forEach(function(t, e) {
        t.addEventListener("click", function() {
            u(),
            a(e),
            s()
        })
    }),
    a(c),
    s(),
    {
        updateActiveSlide: a,
        startAutoSlide: s,
        stopAutoSlide: u,
        scrollToFirstSlide: function() {
            a(0)
        }
    }
}
var direction = "rtl" === document.documentElement.getAttribute("dir") ? "right" : "left"
  , cardSlider = initializeCardSlider(".card-slide", ".card-slider", ".employee-portal-menu-item", direction);
function initializeBoxSlider(t, e, i) {
    var n = document.querySelectorAll(t)
      , o = document.querySelector(e)
      , l = document.querySelector(i)
      , r = 0;
    function d(t, e) {
        t.addEventListener("click", function() {
            r = e,
            c(),
            function(t) {
                var e = l.querySelector(".dot.active");
                e && e.classList.remove("active");
                l.children[t].classList.add("active")
            }(e)
        })
    }
    function c() {
        var t = n[0].offsetWidth + 16
          , e = r * t;
        o.style.transform = "translateX(-" + e + "px)",
        n.forEach(function(t, e) {
            t.classList.toggle("active", e === r)
        })
    }
    function a() {
        window.innerWidth <= 580 && (l.hasChildNodes() || function() {
            for (var t = 0; t < n.length; t++) {
                var e = document.createElement("span");
                e.classList.add("dot"),
                0 === t && e.classList.add("active"),
                l.appendChild(e),
                d(e, t)
            }
        }(),
        c())
    }
    window.addEventListener("load", a),
    window.addEventListener("resize", function() {
        window.innerWidth <= 580 && a()
    })
}
cardSlider.scrollToFirstSlide(),
initializeBoxSlider(".box", ".effortless-payroll .col-2", ".dots");
