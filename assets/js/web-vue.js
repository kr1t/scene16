var app = new Vue({
  el: "#app",
  data: {
    showPopup: false,
    active: 999,
    ort: false,
    reviews: ["ไม่เอา", "ก็ดีนะ", "พอทน", "เฉยๆ", "ก็ดีนะ", "ดี", "ดีงาม"],
    videos: [
      {
        img: "ep1.png",
        text: "EP1 ใช้ชีวิตได้เต็มที่ เพราะมีเอฟดับบลิวดีดูแล",
        url: "https://www.youtube.com/watch?v=pvCEHJi_sm4"
      },
      {
        img: "ep2.png",
        text: `EP2	สะดวกทุกที่กับบริการช่องทาง \n
        ออนไลน์จากเอฟดับบลิวดี`,
        url: "https://www.youtube.com/watch?v=C4JVVY78A3s"
      },
      {
        img: "ep3.png",
        text: "EP3 ชีวิตปรับเปลี่ยนได้ สไตล์ลูกค้าเอฟดับบลิวดี",
        url: "https://www.youtube.com/watch?v=kz4sdT8kGdM"
      }
    ]
  },
  methods: {
    async videoClick(video_id) {
      const { data } = await axios.get(
        `https://online-campaigns.com/campaigns/2019/fwd/backend/video-click.php?video_id=${video_id}`
      )
    },
    async sendReview(score) {
      this.active = score
      let formData = new FormData()
      formData.append("score", score)
      const { data } = await axios.post(
        "https://online-campaigns.com/campaigns/2019/fwd/backend/review.php" +
          window.location.search,
        formData
      )

      if (data) {
        Swal.fire({ title: data, confirmButtonText: "ตกลง" })
      }
    },

    onEnd() {
      this.showPopup = true
    },
    checkOR() {
      this.ort = window.innerHeight > window.innerWidth
      console.log(this.ort)
    },

    beforeDestroy() {
      window.removeEventListener("resize", this.checkOR)
    }
  },
  beforeMount() {
    window.addEventListener("resize", this.checkOR)
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.checkOR)
    })
    this.checkOR()
  },
  created() {
    console.log(this.ort)
  }
})
