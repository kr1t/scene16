var app = new Vue({
  el: "#app",
  data: {
    reviews: ["ไม่เอา", "ก็ดีนะ", "พอทน", "เฉยๆ", "ก็ดีนะ", "ดี", "ดีงาม"],
    videos: [
      {
        img: "ep1.png",
        text: "EP1 ใช้ชีวิตได้เต็มที่ เพราะมีเอฟดับบลิวดีดูแล",
        url: "https://youtu.be/aVS4W7GZSq0"
      },
      {
        img: "ep2.png",
        text: `EP2	สะดวกทุกที่กับบริการช่องทาง \n
        ออนไลน์จากเอฟดับบลิวดี`,
        url: "https://youtu.be/aVS4W7GZSq0"
      },
      {
        img: "ep3.png",
        text: "EP3 ชีวิตปรับเปลี่ยนได้ สไตล์ลูกค้าเอฟดับบลิวดี",
        url: "https://youtu.be/aVS4W7GZSq0"
      }
    ]
  }
})
