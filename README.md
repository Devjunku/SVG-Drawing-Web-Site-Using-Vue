# 😀 SVG Drawing WebSite Using Vue.js 2

SVG (벡터기반) Drawing WebSite를 Vue.js 2를 활용하여 만들어볼 예정입니다.

구현 과정을 모두 공개할 예정이오니, 코드보다는 구현 과정에 집중해주시면 감사하겠습니다.



## 💻 개발 환경

**노트북**: MacBook Air M1

**IDE**: Visual Studio Code: 1.56.2 (Universal)

**프레임워크**: Vue.js 2

**언어**: HTML, CSS, Javascript

- Node version: 16.10.0

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

svg 태그 안에는 벡터 기반 그래픽을 나타낼 수 있는 지정된 여러개의 태그가 존재합니다. 본 프로젝트에서는 이 중 몇개를 활용하여 Drawing Tool을 만들어보겠습니다.

1. 사각형: `<rect>`
2. 정원: `<circle>`
3. 타원: `<ellipse>`
4. 선: `<line>`
5. 다각선: `<polyline>`
6. 다각형: `<polygon>`
7. 패스: `<path>`

위와 같이 대표적인 7개의 태그 중 `<rect>`, `<circle>`, `<line>`, `<polygon>`를 사용하여 기본적인 도형과 선을 생성할 수 있도록 하겠습니다.









