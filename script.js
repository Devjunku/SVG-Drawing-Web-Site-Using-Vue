const app = new Vue({
    el: "#app",
    data() {
      return {
          art: [],
          tool: 'pensil',
          hamburger: false,
          name: "drawing",
          help: false,
          dark: false,
          openOptions: [],
      }
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            this.img = URL.createObjectURL(file);
        },
        selectTool(tool, event){
        this.tool = tool;
        },

        // 저장 함수
        saveArt(){
          this.name = prompt('파일 이름을 입력하세요', this.name);
          // 이름이 있으면 저장하는 것으로
          if(this.name)
          {
              localStorage.setItem(`art_${this.name}`, JSON.stringify(app.art));
          }
        },

        move(event){
          switch(this.tool)
          {
              case 'line': this.drawLine(event); break;
              case 'circle': this.drawCircle(event); break;
              case 'rect': this.drawRect(event); break;
              case 'pencil': this.drawPencil(event); break;
              case 'eraser': this.drawEraser(event); break;
              case 'text': this.drawText(event); break;
              case 'img': this.drawImg(event); break;
          }
<<<<<<< HEAD
        },
        
        start(event){
            switch(this.tool)
            {
                case 'line': this.startLine(event); break;
                case 'circle': this.startCircle(event); break;
                case 'rect': this.startRect(event); break;
                case 'pencil': this.startPencil(event); break;
                case 'eraser': this.startEraser(event); break;
                case 'text': this.startText(event); break;
                case 'img': this.startImg(event); break;
            }
        },
=======
      },
>>>>>>> 4119431d753d48b8d970eb8f6ca3b18f1e6bf3f9

        // 아이템 오픈
        showOpen(){
          this.openModal = !this.openModal;
          if(this.openModal){
              for(let i in localStorage)
              {
                  if(i.substring(0, 4) === 'art_')
                  {
                      this.openOptions.push(i);
                  }
              }
          } 
        },

        openArt(event){
          let key = event.target.value;
          this.name = key.substring(4, key.length)
          this.art = JSON.parse(localStorage.getItem(key));      
      },
      // 모두 지우기
      trash(){
        if(confirm("모두 지우시겠습니까?")){
            this.art = [];
        }
    },
    },
})

document.addEventListener("keydown", app.keydown)