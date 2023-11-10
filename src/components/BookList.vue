<template>
    <div class="color-app">
      <div class="color-display" :style="{ backgroundColor: selectedColor }">
        <p v-if="selectedColor" class="chi-text">{{ selectedEng }}</p>
        <p v-else class="chi-text">书书书书</p>
        <p v-if="selectedColor" class="beng-text">{{ selectedName }}</p>
        <p v-else class="beng-text">BOOOOK</p>  
        <p v-if="selectedColor" class="eva-text">{{ selectedEva }}</p>
        <p v-else class="eva-text"></p>
        <router-link to="/" class="btip">🎮</router-link>
        <router-link to="/book" class="btip1">📖</router-link>
        <router-link to="/gdb" class="tip2">🖥️</router-link>
       
      </div>
     
      <div class="color-list">
        <li v-for="color in colors" :key="color.id" @click="selectColor(color)">
          <div>
            <p :class="[color.isPlayed ? 'name2-text' : 'name1-text']">{{ color.eng }}</p>
            <p :class="[color.isPlayed ? 'eng2-text' : 'eng1-text']">{{ color.name }}</p>
            
          </div>
        </li>
      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    
    name: 'GameList',
    data() {
      return {
        colors: [
          { id: 1, eng: '规训与惩罚', code: '#DC9FB4', name: '福柯', eva: ' 全景敞视主义  ',isPlayed: false,likeCount: 0 },
          { id: 2, eng: '疯癫与文明', code: '#E16BBC', name: '福柯', eva: '  疯狂不是一种自然现象  ',isPlayed: false,likeCount: 0 },
          { id: 3, eng: '月亮与六便士', code: '#F596AA', name: '毛姆', eva: '略   ',isPlayed: false ,likeCount: 0 },
          { id: 4, eng: '精通正则表达式', code: '#F8C3CD', name: '', eva: '  阿哲 ',isPlayed: false },
          { id: 5, eng: '存在主义心理治疗', code: '#F4A7B4', name: ' ', eva: '  待定' ,isPlayed: false},
          { id: 6, eng: '30天自制操作系统', code: '#F4A7B4', name: ' ', eva: '  good ，啥也不会也能学' ,isPlayed: false},
          { id: 7, eng: 'CLR via c#', code: '#F4A7B4', name: ' ', eva: '' ,isPlayed: false},
          { id: 8, eng: '忏悔录', code: '#F4A7B4', name: ' 托尔斯泰', eva: 'life is a circle' ,isPlayed: false},
          { id: 9, eng: '人不单靠面包活着', code: '#F4A7B4', name: ' 陀氏', eva: '  ',isPlayed: false},
          { id: 10, eng: '地下室手记', code: '#F4A7B4', name: ' 陀氏', eva: '地下室人',isPlayed: false},
        ],
        selectedColor: null,
        selectedName: null,
        selectedEng: null,
        selectedEva: null,
        likeCount: 0,
        
      };
    },
    methods: {
      selectColor(color) {
        // 保存之前颜色的点赞数
        
  
        this.selectedColor = color.code;
        this.selectedName = color.name;
        this.selectedEng = color.eng;
        this.selectedEva = color.eva;
    
  
        // 加载新颜色的点赞数
     
      },
      /*loadLikeCount() {
        // 从本地存储中加载各个颜色的点赞数
        this.colors.forEach((color) => {
          const savedLikeCount = localStorage.getItem(`likeCount_${color.id}`);
          if (savedLikeCount) {
            color.likeCount = parseInt(savedLikeCount);
          }
        });
      },
      saveLikeCount() {
        // 保存当前选中颜色的点赞数到本地存储
        if (this.selectedColor) {
          const selectedColorIndex = this.colors.findIndex((color) => color.code === this.selectedColor);
          if (selectedColorIndex !== -1) {
            this.colors[selectedColorIndex].likeCount = this.selectedColorLikeCount;
            localStorage.setItem(`likeCount_${this.colors[selectedColorIndex].id}`, this.selectedColorLikeCount.toString());
          }
        }
      },
      incrementLikeCount() {
        this.selectedColorLikeCount++;
        this.saveLikeCount();
      },*/
    },
  };
  </script>
  
  
  <style>
  @font-face {
    font-family: 'MyFont';
    src: url('../font/BPtypewrite.ttf') format('truetype');
  }
  @font-face {
    font-family:'MyFont2'; ;
    src: url('../font/花园明朝体HanaMinA.TTF');
  }
  @font-face {
    font-family: 'MyFont3';
    src: url('../font/花园明朝体HanaMinB.TTF');
  }
  
  @font-face {
    font-family: 'MyFont4';
    src: url('../font/NotoSerifCJKsc-ExtraLight.otf');
  }

  html, body {
    margin: 0;
    padding: 0;
    
  }
  .color-app {
    
    height: 100vh;
    overflow: hidden;
  }
  .btip1 {
  position: absolute;
 
  top: 88%;
  left: 90%;
  font-size: 60px;
  text-decoration: none;
  text-shadow: 0 0 5px rgb(255, 4, 4);
}
.btip {
  position: absolute;
 
  top: 90%;
  left: 80%;
  font-size: 50px;
  text-decoration: none;
 
}

  .color-list {
    flex: 1;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    overflow: auto;
    background-image: url(../assets/444.jpg);
    
  }
  
  .color-list li {
    cursor: pointer;
    flex-basis: 50%;
    margin-bottom: 25px;
  }
  
  .color-list li .eng1-text {
    font-size: 14px;
    padding: 0;
    margin: 10;
    font-family: 'MyFont';
    line-height: 0;
  }
  
  .color-list li .name1-text {
    font-size: 30px;
    padding: 0;
    margin: 0;
    font-family: 'MyFont2';
  }
  .color-list li .name2-text {
    font-size: 30px;
    padding: 0;
    margin: 0;
    font-family: 'MyFont2';
    color: #eb4d4d;
  }
  .color-list li .eng2-text {
    font-size: 14px;
    padding: 0;
    margin: 10;
    font-family: 'MyFont';
    line-height: 0;
    color: #eb4d4d;
  }
  
  
  
  
  .color-display {
    position: relative;
    flex: 2;
   
    background-color: #FFFFFF;
    font-family: 'MyFont';
    writing-mode: vertical-lr;
    text-orientation: upright;
    padding-top: 0px;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
  
  .color-display .eva-text {
    position: absolute;
    writing-mode: horizontal-tb;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px; /* 根据需要调整字体大小 */
    font-family: 'MyFont4';
  }
  
  .color-display .chi-text {
    margin: 0;
    padding: 10px;
    font-size: 40px; /* 调整中文文本的字体大小 */
    font-family: 'MyFont2';
  }
  
  .color-display .beng-text {
    margin: 0;
    padding: 10px;
    font-size: 40px;
    font-family: 'MyFont2';
    writing-mode: vertical-tb; /* 水平显示 */
    text-orientation: sideways;
  }
  
  @media (max-width: 600px) {
    html, body {
    margin: 0;
    padding: 0;
    
  }
  .btip1 {
  position: absolute;
 
  top: 88%;
  left: 90%;
  font-size: 30px;
  text-decoration: none;
  text-shadow: 0 0 5px rgb(255, 4, 4);
}
.btip {
  position: absolute;
 
  top: 90%;
  left: 80%;
  font-size: 25px;
  text-decoration: none;
 
}
  .color-app {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
    .color-list {
    flex: 1;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: flex-start;
    overflow: auto;
    background-image: url(../assets/444.jpg);
    
  }
  .color-display {
    position: relative;
    flex: 2;
   
    background-color: #FFFFFF;
    font-family: 'MyFont';
    writing-mode: vertical-lr;
    text-orientation: upright;
    padding-top: 0px;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
    .color-list li {
    cursor: pointer;
    flex-basis: 100%;
    margin-bottom: 15px;
  }
  
  .color-list li .eng1-text {
    font-size: 8px;
    padding: 0;
    margin: 10;
    font-family: 'MyFont';
    line-height: 0;
  }
  
  .color-list li .name1-text {
    font-size: 16px;
    padding: 0;
    margin: 0;
    font-family: 'MyFont2';
  }
  .color-list li .name2-text {
    font-size: 16px;
    padding: 0;
    margin: 0;
    font-family: 'MyFont2';
    color: #eb4d4d;
  }
  .color-list li .eng2-text {
    font-size: 8px;
    padding: 0;
    margin: 10;
    font-family: 'MyFont';
    line-height: 0;
    color: #eb4d4d;
  }
  
  .img-app {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px; /* 调整图片的宽度 */
    height: 80px;
  }
    
    .color-display .chi-text {
    margin: 0;
    padding: 5px;
    font-size: 18px; /* 调整中文文本的字体大小 */
    font-family: 'MyFont2';
    }
  
  .color-display .beng-text {
    margin: 0;
    padding: 5px;
    font-size: 18px;
    font-family: 'MyFont';
    writing-mode: vertical-tb; /* 水平显示 */
    text-orientation: sideways;
  }
  
    .color-display .eva-text {
    margin: 0;
    top: 50%;
    padding: 10px;
    font-size: 16px;
    font-family: 'MyFont4';
    writing-mode: vertical-tb; /* 水平显示 */
    text-orientation: sideways;
  }
    
  
  }
  
  
  </style>
  