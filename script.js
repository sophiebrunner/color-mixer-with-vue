Vue.createApp({
  data() {
    return {
      red: 97,
      green: 27,
      blue: 183,
      alpha: 0.85,
    };
  },
  computed: {
    color() {
      return `rgb(${this.red}, ${this.green}, ${this.blue})`;
    },
    colorTransparent() {
      return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
    },
    convertRgbToHex() {
      let red = Number(this.red).toString(16);
      let green = Number(this.green).toString(16);
      let blue = Number(this.blue).toString(16);

      if (red.length === 1) {
        red = "0" + red;
      }
      if (green.length === 1) {
        green = "0" + green;
      }
      if (blue.length === 1) {
        blue = "0" + blue;
      }

      return "#" + red + green + blue;
    },
  },
  methods: {
    getRandomColor() {
      fetch("https://dummy-apis.netlify.app/api/color")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.red = data.rgb.r;
          this.green = data.rgb.g;
          this.blue = data.rgb.b;
        });
    },
  },
}).mount("#app");
