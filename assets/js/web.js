$(document).ready(function() {
  var timeline = new TimelineMax({ paused: true, repeat: 1 })

  timeline.add(
    TweenMax.from(".headline h1", 0.5, {
      alpha: 0,
      scale: 0.5,
      y: 150,
      clearProps: "all",
      delay: 1,
      ease: Back.easeOut
    }),
    TweenMax.from(".headline span", 0.5, {
      alpha: 0,
      scale: 0.5,
      y: 150,
      clearProps: "all",
      delay: 1 + 0.5,
      ease: Back.easeOut
    })
  )

  let timelinex = []

  for (var i = 0; i < 7; i++) {
    timelinex.push(
      TweenMax.from(".review-btn-" + i, 0.5, {
        alpha: 0,
        scale: 0.5,
        y: 150,
        delay: i * 0.15,
        clearProps: "all",
        ease: Back.easeOut
      }),
      TweenMax.from(".review-btn-" + i + " span", 0.3, {
        alpha: 0,
        scale: 0.2,
        y: 150,
        delay: i * 0.05,
        clearProps: "all",
        ease: Back.easeOut
      })
    )
  }
  console.log(timelinex)

  timeline.add(timelinex)

  timeline.add(
    TweenMax.from(".thankyou .th", 0.2, {
      alpha: 0,
      scale: 0.5,
      x: 0,
      clearProps: "all",
      ease: Back.easeOut
    })
  )

  timeline.add(
    TweenMax.from(".thankyou .en", 0.2, {
      alpha: 0,
      scale: 0.5,
      x: 0,
      clearProps: "all",
      ease: Back.easeOut
    })
  )

  timeline.add(
    TweenMax.from(".video-section", 0.2, {
      css: {
        width: "0px",
        padding: "0",
        "border-right": "0"
      }
    })
  )

  let timelineVideo = []

  for (var i = 0; i < 3; i++) {
    timelineVideo.push(
      TweenMax.from(".ep" + i, 0.3, {
        alpha: 0,
        scale: 0.5,
        x: 0,
        y: 150,
        delay: i * 0.25,
        clearProps: "all",
        ease: Back.easeOut
      })
    )
  }

  timeline.add(timelineVideo)

  $(".arm").on("click", function() {
    console.log("has end")
    timeline.play()
    console.log(timeline.play())
  })
})
