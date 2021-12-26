const app = new Vue({
    el: "#app",
    data() {
      return {
        art: [],
        name: "draw",
        hamburger: false,
        help: false,
        dark: false,
        openModal: false,
        openOptions: [],
        tool: 'pencil',
        img: '',
  
        stroke: "#000000",
        text: "Hello",
        fill: "#FFFFFF",
        strokeWidth: 5,
        linecap: 'butt',
  
        preArt: [],
        lastArtEle: ""
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
  

        deleteArt() {
            while(this.art.length >= 40) {
                this.art.shift()
            }
        },

        startLine(event) {
            this.art.push({
                tool: 'line',
                x1: event.clientX, y1: event.clientY,
                x2: event.clientX, y2: event.clientY,
                stroke: this.stroke,
                strokeWidth: this.strokeWidth != 0 ? this.strokeWidth : 1,
                linecap: this.linecap,
                rotate: 0
            })
            this.deleteArt()
      
        },
  
        startRect(event) {
            this.art.push({
                tool: 'rect',
                x: event.clientX, y: event.clientY,
                width: 0, height: 0,
                stroke: this.stroke,
                fill: this.fill,
                strokeWidth: this.strokeWidth,
                radius: 0,
                rotate: 0
            })

    
            this.deleteArt()
        },

        // 줌 In, Out이 먹히지 않습니다.
        // macbook의 경우 매직패드로 줌을 사용할 수 있으나
        // zoomIn() {
        //     console.log("zoomIn")
        //     let myImg = document.getElementById("artboard")
        //     console.log(myImg.clientWidth)
        //     let currWidth = myImg.clientWidth
        //     if (currWidth == 2500) return false
        //     else {
        //         myImg.style.width = (currWidth + 100) + "px"
        //     }
        // },

        // zoomOut() {
        //     console.log("zoomOut")
        //     let myImg = document.getElementById("artboard")
        //     console.log(myImg.clientWidth)
        //     let currWidth = myImg.clientWidth
        //     if (currWidth == 100) return false
        //     else {
        //         myImg.style.width = (currWidth - 100) + "px"
        //     }
        // },
  
        startCircle(event) {
            this.art.push({
                tool: 'circle',
                x: event.clientX, y: event.clientY,
                stroke: this.stroke,
                fill: this.fill,
                strokeWidth: this.strokeWidth,
                radius: 0
            })
    
            this.deleteArt()
        },
  
        startPencil(event) {
            this.art.push({
                tool: 'polyline',
                points: `${event.clientX},${event.clientY} `,
                width: this.strokeWidth != 0 ? this.strokeWidth : 1,
                stroke: this.stroke
            })
    
            this.deleteArt()
        },
  
        startEraser(event) {
            this.art.push({
                tool: 'eraser',
                points: `${event.clientX},${event.clientY} `,
                width: this.strokeWidth != 0 ? this.strokeWidth : 1
            })
    
            this.deleteArt()
        },
  
        startText(event) {
            this.art.push({
                tool: 'text',
                x: event.clientX, y: event.clientY,
                text: this.text,
                size: this.strokeWidth != 0 ? this.strokeWidth : 1,
                stroke: this.stroke,
                rotate: 0
            })
  
            this.deleteArt()
        },
  
        startImg(event) {
            this.art.push({
                tool: 'img',
                img: this.img,
                width: 0,
                x: event.clientX, y: event.clientY,
                rotate: 0
            })
    
            this.deleteArt()
        },
  
        drawLine(event) {
            if(event.buttons == 1 || event.buttons == 3) {
            let lastLine = this.art[this.art.length - 1]
            lastLine.x2 = event.clientX
            lastLine.y2 = event.clientY
            }
        },
    
        drawCircle(event) {
            if(event.buttons == 1 || event.buttons == 3){
                let lastCircle = this.art[this.art.length - 1];
                let a = Math.abs(lastCircle.x - event.clientX);
                let b = Math.abs(lastCircle.y - event.clientY);
                lastCircle.radius = Math.sqrt((a * a) + (b * b));
            }
        },
  
        drawRect(event) {
            if (event.buttons == 1 || event.buttons == 3) {
            let lastRect = this.art[this.art.length - 1]
            if (event.clientX > lastRect.x && event.clientY > lastRect.y) {
                lastRect.width = event.clientX - lastRect.x
                lastRect.height = event.clientY - lastRect.y
            }
            }
        },
  
        drawImg(event) {
            if (event.buttons == 1 && event.buttons == 3) {
                let lastImg = this.art[this.art.length - 1]
                if (event.clientX - lastImg.x > 0 && event.clientY - lastImg.y > 0) {
                    lastImg.width = event.clientX - lastImg.x
                }
            }
        },
  
        drawPencil(event) {
            if (event.buttons == 1 || event.buttons == 3) {
                let lastLine = this.art[this.art.length - 1]
                lastLine.points += `${event.clientX},${event.clientY} `
            }
        },
    
        // 사용자 경험상 도형을 바로 삭제시키는 것 보다는 하나하나 삭제시키는 것이 더 좋을 것 같아 좌표값으로
        // 지우개가 작동하도록 했습니다.
        drawEraser(event) {
            if (event.buttons == 1 || event.buttons == 3) {
                let lastLine = this.art[this.art.length - 1];
                lastLine.points += `${event.clientX},${event.clientY} `;
                console.log(lastLine)
            }
        },
    
        drawText(event) {
            if (event.buttons == 1 && event.buttons == 3) {
            let text = this.art[this.art.length - 1]
            text.x = event.clientX
            text.y = event.clientY
            }
        },
    
        // 이벤트에 따른 그림 그리기 시작
        start(event) {
            switch(this.tool) {
            case 'line': this.startLine(event); break
            case 'circle': this.startCircle(event); break
            case 'rect': this.startRect(event); break
            case 'pencil': this.startPencil(event); break
            case 'eraser': this.startEraser(event); break
            case 'text': this.startText(event); break
            case 'img': this.startImg(event); break
            }
        },
    
        move(event) {
            switch(this.tool) {
            case 'line': this.drawLine(event); break
            case 'circle': this.drawCircle(event); break
            case 'rect': this.drawRect(event); break
            case 'pencil': this.drawPencil(event); break
            case 'eraser': this.drawEraser(event); break
            case 'text': this.drawText(event); break
            case 'img': this.drawImg(event); break
            }
        },
    
        saveArt() {
            this.name = prompt('파일 이름을 입력하세요.', this.name)
            if (this.name) {
            localStorage.setItem(`drawing_${this.name}`, JSON.stringify(app.art))
            }
        },
    
        showOpen() {
            this.openModal = !this.showOpen
            if (this.openModal) {
            for (let i in localStorage) {
                if (i.substring(0, 8) === 'drawing_') {
                this.openOption.push(i)
                }
            }
            }
        },
    
        openArt(event) {
            let key = event.tartget.value
            this.name = key.substring(4, key.length)
            this.art = JSON.parse(localStorage.getItem(key))
        },
    
        importArt(event) {
            var fileReader = new FileReader()
            fileReader.onload = function() {
                app.art = JSON.parse(fileReader.result)
            }
            fileReader.readAsText(event.tartget.value[0])
        },
    
        exportArt() {
            var textFile = null,
            makeTextFile = function(text) {
                var data = new Blob([text],  {type: 'text/plain'})
                if (textFile !== null) {
                    window.URL.revokeObjectURL(textFile)
                }
                textFile = window.URL.createObjectURL(data)
                return makeTextFile
            }
            var filePath = `host/path/${this.name}.drw`
            var a = document.createElement('A')
            a.href = makeTextFile(JSON.stringify(app.art))
            a.download = filePath.substr(filePath.lastIndexOf('/') + 1)
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
        },
    
        trash() {
            if (confirm("정말로 모두 지우시겠습니까?")) {
            this.art = []
            }
        },
    
        keydown(event) {
            if(this.art.length > 0) {
            let last = this.art[this.art.length - 1]
            switch(this.tool) {
                case 'rect':
                event.key == 'ArrowDown' && last.radius > 0 ? last.radius -= 2 : ''
                event.key == 'ArrowUp' ? last.radius += 2 : ''
                event.key == 'ArrowLeft' ? last.rotate += 2 : ''
                event.key == 'ArrowRight' ? last.rotate -= 2 : ''
                event.key == 'a' ? last.x -= 2 : ''
                event.key == 'd' ? last.x += 2 : ''
                event.key == 'w' ? last.y -= 2 : '' 
                event.key == 's' ? last.y += 2 : ''
                break

                case 'img':
                event.key == 'ArrowLeft' ? last.rotate += 2 : ''
                event.key == 'ArrowRight' ? last.rotate -= 2 : ''
                event.key == 'a' ? last.x-= 2 : ''
                event.key == 'd' ? last.x+= 2 : ''
                event.key == 'w' ? last.y-= 2 : ''
                event.key == 's' ? last.y+= 2 : ''
                break

                case 'text':
                event.key == 'ArrowLeft' ? last.rotate += 2 : ''
                event.key == 'ArrowRight' ? last.rotate -= 2 : ''
                event.key == 'a' ? last.x-= 2 : ''
                event.key == 'd' ? last.x+= 2 : ''
                event.key == 'w' ? last.y-= 2 : ''
                event.key == 's' ? last.y+= 2 : ''
                break;

                case 'circle':
                event.key == 'a' ? last.x-= 2 : ''
                event.key == 'd' ? last.x+= 2 : ''
                event.key == 'w' ? last.y-= 2 : ''
                event.key == 's' ? last.y+= 2 : ''
                break;
                }
            }

            // undo
            if((event.key == 'z' && event.ctrlKey) || (event.key == 'ㅋ' && event.ctrlKey)) {
                this.lastArtEle = this.art.pop()
            } else {
                this.lastArtEle = ""
            }
            if (this.lastArtEle != "") {
                this.preArt.push(this.lastArtEle)
            }
            
            // redo 구현에서 event.key == 'z'가 다시 돌아가기를 막았었음
            // event.key를 살펴보니 'Z'로 보였으며, 이로 수정하니 redo가 실행되었음
            if ((event.key == 'Z' && event.shiftKey && event.ctrlKey) || (event.key == 'ㅋ' && event.shiftKey && event.ctrlKey)) {
                console.log(event.key)
                if (this.preArt.length > 0) {
                    this.lastArtEle = this.preArt.pop()
                    if (this.art.length < 40) {
                        this.art.push(this.lastArtEle)
                    }
                }
            }
            if(event.ctrlKey && event.key == 's') {
                event.preventDefault()
                this.saveArt()
            }
        }
    }
})
document.addEventListener("keydown", app.keydown);