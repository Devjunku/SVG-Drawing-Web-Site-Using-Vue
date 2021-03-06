# π SVG Drawing WebSite Using Vue.js 2

SVG (λ²‘ν°κΈ°λ°) Drawing WebSiteλ₯Ό Vue.js 2λ₯Ό νμ©νμ¬ λ§λ€μ΄λ³Ό μμ μλλ€.

κ΅¬ν κ³Όμ μ λͺ¨λ κ³΅κ°ν  μμ μ΄μ€λ, μ½λλ³΄λ€λ κ΅¬ν κ³Όμ μ μ§μ€ν΄μ£Όμλ©΄ κ°μ¬νκ² μ΅λλ€.

λͺ¨λ  μμ€μ½λλ [NishantTheProgrammer](https://github.com/NishantTheProgrammer/WebDraw/tree/master/cursors)μμ λΉλ‘―λμμ΅λλ€.

μ²μμΌλ‘ κ·Έλ¦Όνμ κ΅¬ννλ κ²μ΄λΌ λ§μ μμ€μ½λλ₯Ό μ°Ύμμ§λ§, canvas(BitmapκΈ°λ°)μ΄ μλ svgλ₯Ό vue.jsλ‘ κ΅¬νν μμ€μ½λλ μ [λ§ν¬](https://github.com/NishantTheProgrammer/WebDraw/tree/master/cursors)μμ λ§νΌ μμΈν κ΅¬νν repoλ μμμ΅λλ€.

λ°λΌμ μ μμ€μ½λμμ κ·Έλ¦Όνμ λ§λ€κΈ° μν΄ μ΄λ ν κ²μ μ¬μ©νλμ§ νμ΅νλ κ²μ μ  2μ λͺ©νλ‘ νκ² μ΅λλ€.

---

### π£ νλ‘μ νΈ μ€ν

ν΄λΉ λ ν¬λ₯Ό clone λ°μΌμ  ν main.htmlμ μ€ννμλ©΄ μ¬μ©νμ€ μ μμ΅λλ€.

μ£Όμ : explorer μ§μ X

---

## π» κ°λ° νκ²½

**λΈνΈλΆ**: MacBook Air M1

**IDE**: Visual Studio Code: 1.56.2 (Universal)

**νλ μμν¬**: Vue.js 2

**μΈμ΄**: HTML, CSS, Javascript

- Node version: 16.10.0


## π¨ Figma

[Figma λ³΄λ¬κ°κΈ°](https://www.figma.com/file/U6ELp3FmU5ELEVax63yBCs/Untitled?node-id=0%3A1)

![αα³αα³αα΅α«αα£αΊ 2021-12-23 αα©αα₯α« 12.13.45](./img/figmaUI.png)

μμ UIλ₯Ό λ°λΌκ°μ§λ§, μ¬μ©μ κ²½νμ νλνκΈ° μν΄ font-awesomeμμ μ¬λ¬ κ°μ μμ΄μ½μ νμ©νμ΅λλ€.

---

## π μλ£ νμ

### π€ svg νκ·Έ

λ²‘ν° κΈ°λ° μ΄λ―Έμ§λ₯Ό μ§μνκΈ° μν΄μλ svg νκ·Έλ₯Ό μ¬μ©ν΄μΌ ν©λλ€.

- svg νκ·Έλ λ²‘ν° κΈ°λ° κ·Έλν½μ XML νμμΌλ‘ μ μμλλ€.
- svg νκ·Έλ₯Ό λ΄λ κ·Έλ¦μλλ€.
- svg νκ·Έμ λ΄μ μ μλ νμ νκ·Έλ€μ΄ μμ΅λλ€. (μμΈν νκ·Έ λ΄μ©μ νλ¨μ μ°Έκ³ νμΈμ)
- svg νκ·Έλ νμΌμ λͺ¨λ  μμμ μμ±μ μ λλ©μ΄μμ μ μ©ν  μ μμ΅λλ€.

svgλ κΈ°λ³Έμ μΌλ‘ μλμ κ°μ΄ μ¬μ©ν©λλ€.

```html
<svg>
  ...
</svg>
```

μ΄λ₯Ό ν΅ν΄ svg μ»¨νμ΄λλ₯Ό DOMμμ μμ±ν©λλ€.

### π? svg νμ νκ·Έ

svg νκ·Έ μμλ λ²‘ν° κΈ°λ° κ·Έλν½μ λνλΌ μ μλ `μ§μ λ μ¬λ¬κ°μ νκ·Έκ° μ‘΄μ¬`ν©λλ€. λ³Έ νλ‘μ νΈμμλ μ΄ μ€ λͺκ°λ₯Ό νμ©νμ¬ Drawing Toolμ λ§λ€μ΄λ³΄κ² μ΅λλ€.

1. μ¬κ°ν: `<rect>`
2. μ μ: `<circle>`
3. νμ: `<ellipse>`
4. μ : `<line>`
5. λ€κ°μ : `<polyline>`
6. λ€κ°ν: `<polygon>`
7. ν¨μ€: `<path>`
8. λ€κ°λΌμΈ: `<polyline>`

μμ κ°μ΄ λνμ μΈ 8κ°μ νκ·Έ μ€ `<rect>`, `<circle>`, `<line>`, `<polyline>`, `<text>`, `<image>`λ₯Ό μ¬μ©νμ¬ κΈ°λ³Έμ μΈ λνκ³Ό μ μ μμ±ν  μ μλλ‘ νκ² μ΅λλ€.

widthμ heightμ μ€μ νμ¬ μμ­μ μ§μ ν  μ μμ΅λλ€. λ¬Όλ‘  cssλ₯Ό νμ©νμ¬ κ° νκ·Έλ₯Ό κΎΈλ―Έλ κ²λ κ°λ₯ν©λλ€. μ΄λ μ¬μ©λλ css μμ±μ λ€μκ³Ό κ°μ΅λλ€. 

#### β­ `<rect>` μ¬κ°ν νκ·Έ

- fill: λ©΄μ
- stroke: μ μ
- stroke-width: μ  κ΅΅κΈ°
- fill-opactiy: λ©΄ ν¬λͺλ
- stroke-opacity: μ  ν¬λͺλ
- opacity:  fillκ³Ό stroke λ λͺ¨λλ₯Ό control
- rx, ry: λͺ¨μλ¦¬ radius μΆκ°

#### π£ `<circle>` μ νκ·Έ

- cx, cy: x, yμ μ’νλ₯Ό μλ―Έν©λλ€. κ°μ μμ±νμ§ μμΌλ©΄, 0,0μΌλ‘(default) μ€μ λ©λλ€.
- r : μμ λ°μ§λ¦μ λνλλλ€.

#### π `<line>` μ  νκ·Έ

- x1, y1: μ μ μμ μ’νλ₯Ό μλ―Έν©λλ€.
- x2, y2: μ μ λ μ’νλ₯Ό μλ―Έν©λλ€.
- μ€μν κ²μ lineμ μ λΆ νκ·Έμλλ€.

#### π `<polyline>` λ€κ°λΌμΈ νκ·Έ

polyline νκ·Έλ μ¬λ¬ λ€κ°μ΄λ£¨λ lineμ ννν  μ μμ΅λλ€. λ³Έ νλ‘μ νΈμμλ μΌκ°νκ³Ό κ³‘μ μ νννκΈ° μν΄ μ¬μ©ν©λλ€.

- points: κ° κΌ­μ§μ μ μ’νλ₯Ό λνλλλ€.

λͺ¨λ  νκ·Έλ κΈ°λ³Έμ μΌλ‘ μ¬μ©λ°©λ²μ΄ λͺ¨λ λμΌν©λλ€. eventμ κΈ°λ‘λ clientX, clientYλ₯Ό μ κ·Όνμ¬ ν΄λΉ μ’νμμμΌλ‘ κ·Έλ¦¬κΈ° μμν©λλ€.

---

## π νμ΅ν λ΄μ©

λ³Έ νλ‘μ νΈμμλ classμ styleμ μλΉν λ§μ λ°μΈλ©μ μ¬μ©νμ΅λλ€. κ·Έ μ΄μ λ λͺ¨λ  μμ΄μ½μ μμ νλ§μ λ°λΌ λ°λμ΄μΌ νκΈ° λλ¬Έμλλ€. λ°λΌμ classμ style λ°μΈλ©μ λν΄ μμλ³΄κ² μ΅λλ€.

[**v-bind:class Vue κ³΅μλ¬Έμ**](https://kr.vuejs.org/v2/guide/class-and-style.html)

ν΄λμ€λ₯Ό λμ μΌλ‘ λ°μΈλ©νκΈ° μν΄μ  `v-bind:class`λ₯Ό ν΅ν΄ μ λ¬ν  μ μμ΅λλ€.

μμ

```html
<div v-bind:class="{ active: isActive }"> 
  
</div>
```

λ§μ½, κ°μ²΄ νλκ° λ μμΌλ©΄, μ¬λ¬ ν΄λμ€λ₯Ό ν κΈν  μ μμ΅λλ€. κ·Έλ¦¬κ³   `v-bind:class`λ μΌλ° `class`μ κ³΅μ‘΄ν  μ μμ΅λλ€. κ·Έλμ λ€μκ³Ό κ°μ΄ templateμ μ¬μ©ν  μ μμ΅λλ€.

```html
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger' : hasError }"> 
  
</div>
```

κ·Έλ¦¬κ³  λ°μ΄ν°λ λ€μκ³Ό κ°λ€κ³  ν©μλ€.

```javascript
data: {
  isActive: true,
  hasError: false
}
```

κ·Έλ λ€λ©΄, μμ class bindingμ `<div class="static active"></div>`μ κ°μ΄ ν κΈλ©λλ€. λν λ§μ½μ hasErrorκ° trueλ‘ λ°λλ©΄, `<div class="static active text-danger"></div>`κ° λ©λλ€. μ΄λ dataλ₯Ό λ€μκ³Ό κ°μ΄ λ³κ²½νμ¬ ν κΈμν€λ κ²μ΄ javascript κ°μ²΄λ₯Ό νμ©ν λ°©λ²μλλ€.

```vue
<div class="static"
     v-bind:class="classObject"> 
  
</div>

<script>
const app = new Vue({
  el: #app,
  data: {
  	classObject: {
  		active: true,
  		'text-danger': false
		}
	}
})
</script>
```

λ¬Όλ‘  computedλ₯Ό μ¬μ©νμ¬ λ€μκ³Ό κ°μ΄ λ°μΈλ©λ κ°λ₯ν©λλ€.

```javascript
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function() {
    return {
      active: this.isActive && ! this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

λ³Έ νλ‘μ νΈμμλ μ v-bind:classλ₯Ό νμ©νμ¬(:classμ κ°μ) μΌν­μ°μ°μλ₯Ό νμ©νμμ΅λλ€.

[**v-bind:style Vue κ³΅μλ¬Έμ**](https://kr.vuejs.org/v2/guide/class-and-style.html)

μΌλ°μ μΌλ‘ :classμ μ¬μ©λ²μ κ±°μ λμΌν©λλ€. styleμ λ°μΈλ©νκΈ° μν΄μλ `v-bind:style` λλ `:style`μ μ¬μ©ν©λλ€. λ³Έ νλ‘μ νΈμμλ themeμ λ³νλ₯Ό κ°μ§νκΈ° μν΄μ λλΆλΆ μ¬μ©νμ΅λλ€. μμλ λ€μκ³Ό κ°μ΅λλ€.

```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">

</div>
```

μ΄ λν κ°μ²΄μ λ°μΈλ©νμ¬ μ¬μ©ν  μ μμ΅λλ€.

```vue
<template>
	<div v-bind:style="styleObject">
  </div>
</template>
<script>
 export default({
   data: {
    activeColor: 'red',
    fontSize: 30
  }
 })
</script>
```

λ¬Όλ‘  λ³Έ νλ‘μ νΈμμλ μ΄μ κ΄λ ¨νμ¬ 3ν­ μ°μ°μλ₯Ό νμ©νμ΅λλ€.

#### π€ JSON.stringify

JSON.stringifyλ javascript objectλ₯Ό json ννλ‘ λ³νν©λλ€. μ¦, ν΄λΌμ΄μΈνΈμ μλ²κ° ν΅μ  λ°μ΄ν°μ μ νμ jsonνμΌμ λΉ λ₯΄κ² λ§λ€ μ μμ΅λλ€. JSON.stringifyλ λ€μκ³Ό κ°μ λ΄μ©μ λ΄κ³  μμ΅λλ€.

```javascript
JSON.stringify(value, replacer, space)
```

1. value: JSON λ¬Έμμ΄λ‘ λ³νν  κ°μλλ€. λ°°μ΄, μ«μ, λ¬Έμ, κ°μ²΄ λ±μ΄ λ  μ μμ΅λλ€. valueλ νμ κ°μλλ€.

2. replace: ν¨μ λλ λ°°μ΄μ΄ λ  μ μμ΅λλ€. μ΄ λ κ°μ΄ nullμ΄κ±°λ μ κ³΅λμ§ μμΌλ©΄, κ°μ²΄μ λͺ¨λ  μμ±μ΄ JSON λ¬Έμμ΄ κ²°κ³Όμ ν¬ν¨λ©λλ€.

- replaceμ ν¨μλ₯Ό ν΅ν΄ JSON λ°μ΄ν°λ‘ λ³ννκ³  μΆμ§ μμ μ νμ κ²½μ° μ΄λ₯Ό μ μΈμν¬ μ μμ΅λλ€.
- replaceμ λ°°μ΄μ ν΅ν΄ λ°°μ΄μ κ°κ³Ό μΌμΉνλ κ°λ§ JSON λ¬Έμν λ©λλ€.

3. space: κ°λμ±μ λͺ©μ μΌλ‘ json λ¬Έμμ΄ μΆλ ₯μ κ³΅λ°±μ΄λ λ¬Έμλ₯Ό μ½μν ννλ‘ μΆλ ₯λ©λλ€. μ΄λ `λ¬Έμμ΄μ μλ ₯νλ©΄ κ³΅λ°±μ΄ μλ λ¬Έμμ΄`λ‘ `μ«μλ κ³΅λ°±μ κ°μ`λ‘ μ¬μ©λ©λλ€. 

#### π€ JSON.parse

JSON.stringifyλ μλ°μ€ν¬λ¦½νΈ λ°μ΄ν°λ₯Ό jsonλ‘ λ°κΎΈλλ° μ¬μ©νλ€λ©΄, JSON.parseλ json λ°μ΄ν°λ₯Ό μλ°μ€ν¬λ¦½νΈ λ°μ΄ν°λ‘ λ°κΎΈλλ° μ¬μ©ν©λλ€. μ¬μ©λ²μ `JSON.parse(JSONλ°μ΄ν°)`λ‘ λ§€μ° κ°λ¨ν©λλ€.

#### π€ Blob

[MDN](https://developer.mozilla.org/ko/docs/Web/API/Blob)

Blobμ νμΌμ λΆλ³μΈ λ―Έκ°κ³΅ λ°μ΄ν°λ₯Ό λνλΈλ€κ³  ν©λλ€. νμ€νΈμ μ΄μ§ λ°μ΄ν°λ‘ μ½μ μ μμΌλ©°, [ReadableStream](https://developer.mozilla.org/ko/docs/Web/API/ReadableStream)μΌλ‘ λ³νν κ΄λ ¨ λ©μλλ₯Ό ν΅ν΄μ λ°μ΄ν°λ₯Ό μ²λ¦¬ν  μ μμ΅λλ€.

μ¬κΈ°μ File μΈν°νμ΄μ€λ μ¬μ©μ μμ€ν νμΌμ μ§μνκΈ° μν΄ Blob μΈν°νμ΄μ€λ₯Ό νμ₯ν κ²μΌλ‘ File μΈν°νμ΄μ€λ λͺ¨λ  Blob κΈ°λ₯μ μμν©λλ€.

Blobμ μμ±νλ €λ©΄ `Blob()` μμ±μλ₯Ό μ¬μ©νλ©΄ λ©λλ€.

μ νλ‘μ νΈμμλ νμΌμ export νκΈ° μν΄ textλ₯Ό  `JSON.stringify(app.art)` ν΅ν΄ λ§λ€μμΌλ©°, νμμ΄ textμ΄κΈ° λλ¬Έμ, text/plainμ μ¬μ©νμ΅λλ€.

MDN μμ λ₯Ό λ³΄κ³  λ§λ€μμΌλ©°, a νκ·Έλ₯Ό μμ±ν μ΄ν ν΄λΉ λ§ν¬μ λ€μ΄λ‘λν  κ²½λ‘ κ·Έλ¦¬κ³  μ΄λ₯Ό clickνμ¬ λ€μ΄λ‘λ λ°λ κ² κΉμ§ μ§ννμ΅λλ€. 

#### π€ @keyframes

μ keyframesμ css μ λλ©μ΄μμ μ¬μ©νκΈ° μν΄μ μ¬μ©νμ΅λλ€. λ³Έ νλ‘μ νΈμμλ `hamburger` μΆκ°κΈ°λ₯μ ν΄λ¦­νμ λ μ’ λ μ€λ―μ€νκ² μμ΄μ½μ΄ λ±μ₯νμ¬ μ¬μ©μ κ²½νμ ν₯μμν€κΈ° μν΄μ μ¬μ©νμ΅λλ€

λμλ§μ κ²½μ° transitionμ μ¬μ©νμ¬ νμ΄μ§κ° μ€λ―μ€νκ² νΌμ³μ§λλ‘ νμ΅λλ€.

#### π€ createObjectURL & revokeObjectURL

`URL.createObjectURL()` μ μ  λ©μλλ μ£Όμ΄μ§ κ°μ²΄λ₯Ό κ°λ¦¬ν€λ URLμ [DOMString](https://developer.mozilla.org/ko/docs/Web/API/DOMString)μΌλ‘ λ°νν©λλ€. ν΄λΉ URLμ μμ μ μμ±ν μ°½μ [document](https://developer.mozilla.org/ko/docs/Web/API/Document)κ° μ¬λΌμ§λ©΄ ν¨κ» λ¬΄ν¨νλ©λλ€. μ¬κΈ°μ μ€μν κ²μ λ¬΄ν¨ν λλ κ²κ³Ό κ°μ²΄κ° μ¬λΌμ§λ κ²μ λ€λ¦λλ€. κ°μ²΄λ κ·Έλλ‘ λ¨μ μμ΅λλ€.

μ΄λ μ€μν κ²μ URL.createObjectURL()λ ν­μ μλ‘μ΄ κ°μ²΄λ₯Ό μμ±νκΈ° λλ¬Έμ ν΄λΉ κ°μ²΄λ₯Ό μ¬μ©νκ³  λ λ€μ URL.revokeObjectURLλ₯Ό μ¬μ©νμ¬ URL.createObjectURLμ ν΄μ ν΄μΌ ν©λλ€.

λ³Έ νλ‘μ νΈμμλ μ΄λ₯Ό export νκΈ° μν΄μ μ¬μ©νμΌλ©°, aνκ·Έμ λ§ν¬λ₯Ό μμ±νκΈ° μν΄ μ¬μ©νμ΅λλ€. νΉν λ§μ½μ μ¬μ©νλ €λ text κ°μ²΄κ° null κ°μ΄ μλλΌλ©΄ revokeObjectURLλ₯Ό μ¬μ©νμ¬ ν΄λΉ λ§ν¬λ₯Ό μ κ±°ν λ€μ λ€μ μμ±νλ λ°©μμΌλ‘ λ©λͺ¨λ¦¬ κ΄λ¦¬λ₯Ό μννμ΅λλ€.

#### π€ event.clientX, event.clientY λ± μλ‘μ΄ μ΄λ²€νΈ property

μ μ΄λ²€νΈλ κ·Έλ¦Όκ³Ό μ¬λ¬ λνμ λ§λ€κΈ° μν΄μ μ¬μ©μκ° λλ₯΄λ buttonμΈ 1κ³Ό 3μ κΈ°λ°μΌλ‘ κ·Έλ¦¬κ³  μΆμ μμΉλ₯Ό νλ¨ν©λλ€. μ¬κΈ°μ λ§μ°μ€λ₯Ό κΈ°λ°μΌλ‘ 1λ² λ²νΌμ left, 3λ²μ λ§μ°μ€μ leftμ rightλ₯Ό λμμ λλ₯΄λ κ² μλλ€. λ¬Όλ‘  `ν΄λΉ μ΄λ²€νΈλ explorerμμλ μ§μλμ§ μλ κΈ°λ₯`μλλ€.

νΉν μ΄λ² νλ‘μ νΈμμλ WebVIew μ λνμ΄λ μ μ λνλ΄κΈ° μν΄μ ν΄λΉ μ’νκ°μΌλ‘ κ³μ°ν΄μΌ νμ΅λλ€. μ΄λ μ λ§ λ§μ μνμ°©μ€κ° μμμ΅λλ€.

λ§μ°μ€μ μ’νκ°μ κ³μ μΆμ νλ©΄μ μ²μμΌλ‘ ν΄λ¦­ν λ²νΌ μ’νλ₯Ό κΈ°μ μΌλ‘ ν΄λΉ μ κ³Ό λνμ΄ κ·Έλ €μ§λλ‘ νμ΅λλ€.

λͺ¨λ  μ κ³Ό λνμ startμ draw ν¨μλ‘ κ΅¬νλ©λλ€. μ΄λ toolλ‘ κ΅¬λΆνμ¬ λ¬΄μμ κ·Έλ¦΄μ§ toogleνκ² λ©λλ€. λν λͺ¨λ  λνκ³Ό μ μ μ’νλ₯Ό κΈ°μ€μΌλ‘ κ·Έλ¦Όμ κ·Έλ¦½λλ€.  κ·Έλ¦¬κ³  μ΄λ¬ν μ’νλ€μ artλΌλ λ°°μ΄μ λ΄κΈ°κ² λλ©° redoμ undoλ art λ°°μ΄μ ν΅μ νμ¬ κ΅¬ννκ² λ©λλ€.

νΉν `redo`μ κ²½μ° `preArt λ°°μ΄μ μλ‘ λ§λ€μ΄ κ΅¬ν`νμμ΅λλ€.

## β§² μλ¬ νμΈ λ° μμ 

1. DS_StoreνμΌμ΄ μλμΌλ‘ μμ±λλ κ²μ νμΈνμ΅λλ€. DS_Store νμΌμ .gitignoreμμ controlνλ λ°©λ²μ λ€μκ³Ό κ°μ΅λλ€.
   - ν°λ―Έλμμ DS_Storeκ° μλ gitν΄λλ‘ μ΄λν©λλ€.
   - `$ find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch -f`λ₯Ό zsh λλ bash μ°½μ μλ ₯ν©λλ€.
   - `$ echo .DS_Store >> .gitignore`λ₯Ό μλ ₯ν©λλ€.
   - μ΄ν add, commit, pushλ₯Ό μ§νν©λλ€.

2. λ€ν¬ νλ§ λ°λ μ, μ `λ€λΈλ°κ° λ«νμ§ μμμ΅λλ€.`

   - μμ§ hamburger ν κΈμ λ²νΌ μ΄λ²€νΈμ λ°λΌ λ°λλ ν¨μλ₯Ό μμ±νμ§ μμμ΅λλ€. μμ± ν ν΄κ²°νμ΅λλ€.

3. `svgνκ·Έ μ μ»¨νμ΄λ λ°°κ²½μμ΄` λ°λμ§ μλ κ²μ νμΈνμ΅λλ€.

   - ν΄λΉ css artboard ν΄λμ€λ₯Ό λ§λ€μ§ μμμ μκΈ΄ λ¬Έμ μμ΅λλ€. ν΄λΉ ν΄λμ€μ transitionλ₯Ό μΆκ°νμ¬ ν΄κ²°νμμ΅λλ€.

4. redoμ κ²½μ° ν€λ³΄λκ° νκΈλ‘ μ μ©λ  κ²½μ° μλνμ§ μλ κ²μ νμΈνμ΅λλ€.

   - event.keyκ° `γ`μ κ°μ§ν΄λ λκ°μ΄ μννλλ‘ νμ΅λλ€. β νμ§λ§ ν΄κ²°λμ§ μμμ΅λλ€.
   - `νμ¬ μ΄μ νμΈ μ€ μλλ€.`

5. ZoomIn, ZoomOut methodsκ° κ°μ§λμ§ μλ κ²μ νμΈνμ΅λλ€. `νμ¬ μ΄μ νμΈ μ€ μλλ€.`

   - idκ°μΌλ‘ svgνκ·Έ λ΄μ clientWidthλ‘ μ κ·Όνλ €κ³  νμμ§λ§, ν΄λΉ λΆλΆμ μλ§ img νκ·Έμ νν΄μ μ μ©ν  μ μλ κ²μΌλ‘ λ³΄μλλ€.

   - ν΄λΉ μ½λμλλ€.

     ```vue
     <template>
       <li @click="zoomIn" title="zoomIn" ><i class="fas fa-search-plus"></i></li>
       <li @click="zoomOut" title="zoomOut" ><i class="fas fa-search-minus"></i></li>
     </template>
     <script>
       // μ€ In, Outμ΄ λ¨Ήνμ§ μμ΅λλ€.
     	zoomIn() {
     		let myImg = document.getElementById("artboard")
     		console.log(myImg.clientWidth) 
     		let currWidth = myImg.clientWidth
     		if (currWidth == 2500) return false
     		else {
     			myImg.style.width = (currWidth + 100) + "px"
     		}
     	},
     
     	zoomOut() {
     		let myImg = document.getElementById("artboard") // artboardλ₯Ό idκ°μΌλ‘ λ°κΎΈμ΄ μ κ·Όνλ € νμ΅λλ€.
     		console.log(myImg.clientWidth)
     		let currWidth = myImg.clientWidth
     		if (currWidth == 100) return false
     		else {
     			myImg.style.width = (currWidth - 100) + "px"
     		}
     	},
     </script>
     
     ```

     - classκ°μ΄μλ artboardλ₯Ό idκ°μΌλ‘ λ°κΎΈμ΄ μ κ·Όνλ € νμ΅λλ€.
     - κ·Έλ¦¬κ³  μ λ©μλκ° μ€νλλ κ²κΉμ§λ νμΈνμ΅λλ€. widthκ°μ΄ λ³νλ κ²λ νμΈνμΌλ, μ€μ  νλ©΄μμμ λ°μΈλ© λμ§ μμμ΅λλ€. κ΄λ ¨ μλ£λ₯Ό λ μ°Ύμλ³΄κ³  μμ΅λλ€.

6. import λμ§ μλ μ΄μλ₯Ό νμΈνμ΅λλ€.

   - μ€νμ μμ  ν μλ£λμμ΅λλ€.

7. export λμ§ μλ μ΄μλ₯Ό νμΈνμ΅λλ€.

   - μ€νμ μμ  ν μλ£λμμ΅λλ€.

8. image(jpeg, png etc)λ₯Ό λΆλ¬μ¬ μ μλ μ΄μλ₯Ό νμΈνμ΅λλ€.

   - μ€νμ μμ  ν μλ£λμμ΅λλ€.









