Vue.createApp({
  data: () => {
    return {
      nameUser: "Lê Nguyễn Bảo Tâm",
      className: "WD18302",
      technicalSkill: ["JS", "VueJS", "ReactJS"],
    };
  },
}).mount("#interpolation");

Vue.createApp({
  data: () => {
    return {
      linkImage:
        "https://i.pinimg.com/originals/6b/13/8e/6b138e9532d25a9bb2abbe402dc361b8.jpg",
      linkInfo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    };
  },
}).mount("#bind-attribute");

Vue.createApp({
  data: () => {
    return {
      taiOrXiuResult: "Chưa xác định",
    };
  },
  methods: {
    createNumbers() {
      function random(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
      }
      const total = [random(1, 6), random(1, 6), random(1, 6)].reduce(
        (cr, tt) => cr + tt,
        0
      );

      return total;
    },
    renderTaiOrXiu() {
      const total = this.createNumbers();
      if (total >= 11) {
        this.taiOrXiuResult = "Tài";
      } else {
        this.taiOrXiuResult = "Xỉu";
      }
    },
  },
}).mount("#method");

Vue.createApp({
  data: () => {
    return {
      message: `<h1>Học Vue JS</h1>`,
    };
  },
}).mount("#raw-html");

Vue.createApp({
  data: () => {
    return {
      count: 0,
    };
  },
  methods: {
    handleCount(event, number) {
      console.log(event.target);

      this.count += number;
    },

    handleSubmit() {
      alert("Submit Done");
    },

    handleLogin() {
      console.log("Handle Login");
    },
  },
}).mount("#event");

Vue.createApp({
  data: () => {
    return {
      message: "",
      checked: false,
    };
  },
  methods: {
    handleForm(event) {
      this.message = event.target.value;
    },
  },
}).mount("#two-way-binding");

Vue.createApp({
  data: () => {
    return {
      lastName: "Lê",
      firstName: "Tâm",
      fullName: "",
      count: 0,
    };
  },
  computed: {
    getFullName() {
      return this.lastName + " " + this.firstName;
    },
  },
  methods: {
    handleIncrement() {
      this.count += 1;
    },
  },
  watch: {
    lastName(newValue) {
      this.fullName = newValue + " " + this.firstName;
    },
    firstName(newValue) {
      this.fullName = newValue + " " + newValue;
    },
  },
}).mount("#computed-and-watchers");

Vue.createApp({
  data: () => {
    return {
      bgColor: "red",
      isFormat: false,
    };
  },

  methods: {
    changeBg() {
      this.isFormat = true;
      console.log(this.isFormat);
    },
  },
}).mount("#styling");

Vue.createApp({
  data: () => {
    return {
      isActive: false,
      nameAnimals: "",
    };
  },
  methods: {
    login() {
      this.isActive = true;
    },
    handleNameAnimals(newNameAnimal) {
      this.nameAnimals = newNameAnimal;
    },
  },
}).mount("#directive");

Vue.createApp({
  data: () => {
    return {
      listArtist: [
        {
          name: "Img 1",
          link: "https://i.pinimg.com/236x/a3/17/5e/a3175e2e49eb6d2acb3eef523d751c52.jpg",
        },
        {
          name: "Img 2",
          link: "https://i.pinimg.com/236x/be/ed/e6/beede66da0162da5b5f5bc27504951cc.jpg",
        },
        {
          name: "Img 3",
          link: "https://i.pinimg.com/236x/08/72/f5/0872f5c6a4f8dba9fcf26dd4e920b05d.jpg",
        },
        {
          name: "Img 4",
          link: "https://i.pinimg.com/236x/62/92/bc/6292bc7fc135d814017a6cab4336c1d8.jpg",
        },
      ],
    };
  },

  methods: {
    handleRemove(index) {
      this.listArtist.splice(index, 1);
    },
  },
}).mount("#listRendering");
