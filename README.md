# 😀 SVG Drawing WebSite Using Vue.js 2

SVG (벡터기반) Drawing WebSite를 Vue.js 2를 활용하여 만들어볼 예정입니다.

구현 과정을 모두 공개할 예정이오니, 코드보다는 구현 과정에 집중해주시면 감사하겠습니다.

---

## 💻 개발 환경

**노트북**: MacBook Air M1

**IDE**: Visual Studio Code: 1.56.2 (Universal)

**프레임워크**: Vue.js 2

**언어**: HTML, CSS, Javascript

- Node version: 16.10.0


## 🎨 Figma

[Figma 보러가기](https://www.figma.com/file/U6ELp3FmU5ELEVax63yBCs/Untitled?node-id=0%3A1)

![스크린샷 2021-12-23 오전 12.13.45](./img/figmaUI.png)

---

## 📝 자료 탐색

### 🤔 svg 태그

벡터 기반 이미지를 지원하기 위해서는 svg 태그를 사용해야 합니다.

- svg 태그는 벡터 기반 그래픽을 XML 형식으로 정의입니다.
- svg 태그를 담는 그릇입니다.
- svg 태그에 담을 수 있는 하위 태그들이 있습니다. (자세한 태그 내용은 하단을 참고하세요)
- svg 태그는 파일의 모든 요소와 속성에 애니메이션을 적용할 수 있습니다.

svg는 기본적으로 아래와 같이 사용합니다.

```html
<svg>
  ...
</svg>
```

이를 통해 svg 컨테이너를 DOM에서 생성합니다.

### 😮 svg 하위 태그

svg 태그 안에는 벡터 기반 그래픽을 나타낼 수 있는 `지정된 여러개의 태그가 존재`합니다. 본 프로젝트에서는 이 중 몇개를 활용하여 Drawing Tool을 만들어보겠습니다.

1. 사각형: `<rect>`
2. 정원: `<circle>`
3. 타원: `<ellipse>`
4. 선: `<line>`
5. 다각선: `<polyline>`
6. 다각형: `<polygon>`
7. 패스: `<path>`
8. 다각라인: `<polyline>`

위와 같이 대표적인 7개의 태그 중 `<rect>`, `<circle>`, `<line>`, `<polygon>`를 사용하여 기본적인 도형과 선을 생성할 수 있도록 하겠습니다.

width와 height을 설정하여 영역을 지정할 수 있습니다. 물론 css를 활용하여 각 태그를 꾸미는 것도 가능합니다. 이때 사용되는 css 속성은 다음과 같습니다. 

#### ▭ `<rect>` 사각형 태그

- fill: 면색
- stroke: 선색
- stroke-width: 선 굵기
- fill-opactiy: 면 투명도
- stroke-opacity: 선 투명도
- opacity:  fill과 stroke 둘 모두를 control
- rx, ry: 모서리 radius 추가

#### 🟣 `<circle>` 원 태그

- cx, cy: x, y의 좌표를 의미합니다. 값을 작성하지 않으면, 0,0으로(default) 설정됩니다.
- r : 원의 반지름을 나타냅니다.

#### 📏 `<line>` 선 태그

- x1, y1: 선의 시작 좌표를 의미합니다.
- x2, y2: 선의 끝 좌표를 의미합니다.
- 중요한 것은 line은 선분 태그입니다.

#### 📐 `<polygon>` 다각형 태그

polygon 태그는 여러 다각형을 표현할 수 있습니다. 본 프로젝트에서는 삼각형을 표현하기 위해 사용합니다.

- points: 각 꼭지점의 좌표를 나타냅니다.

---

## ⧲ 에러 확인 및 수정

1. DS_Store파일이 자동으로 생성되는 것을 확인했습니다. DS_Store 파일을 .gitignore에서 통제하는 방법은 다음과 같습니다.
   - 터미널에서 DS_Store가 있는 git폴더로 이동합니다.
   - `$ find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch -f`를 zsh 또는 bash 창에 입력합니다.
   - echo .DS_Store >> .gitignore를 입력합니다.
   - 이후 add, commit, push를 진행합니다.









