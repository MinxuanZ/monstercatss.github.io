<template>
  <div class="color-app">
    <div class="color-display" :style="{ backgroundColor: selectedColor }">
      <p v-if="selectedColor" class="chi-text">{{ selectedEng }}</p>
      <p v-else class="chi-text">戴神的游戏推荐</p>
      <p v-if="selectedColor" class="eng-text">{{ selectedName }}</p>
      <p v-else class="eng-text">DAISHEN GAME</p>  
      <p v-if="selectedColor" class="eva-text">{{ selectedEva }}</p>
      <p v-else class="eva-text">💩💩💩💩💩💩💩💩</p>
      <router-link to="/" class="tip">🎮</router-link>
      <router-link to="/book" class="tip1">📖</router-link>
      <router-link to="/gdb" class="tip2">🖥️</router-link>
      <img src="../assets/2224.jpg" alt="" class="img-app">
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
        { id: 1, eng: '桥梁建造师', code: '#DC9FB4', name: 'Bridge Architect', eva: '模拟建造闯关😭    ',isPlayed: false,likeCount: 0 },
        { id: 2, eng: '全面战争模拟器', code: '#E16BBC', name: 'Total War Simulator', eva: '模拟战略，搞笑    ',isPlayed: false,likeCount: 0 },
        { id: 3, eng: '愤怒的小鸟', code: '#F596AA', name: 'Angry Birds', eva: '略    ',isPlayed: false ,likeCount: 0 },
        { id: 4, eng: '坎巴拉太空计划', code: '#F8C3CD', name: 'Kerbal Space Program', eva: '模拟类    ',isPlayed: false },
        { id: 5, eng: '剑士', code: '#F4A7B4', name: 'Kenshi ', eva: '单人沙盘类pc游戏，重量级，内容及其庞大    ' ,isPlayed: false},
        { id: 6, eng: '环世界', code: '#DB4D6D', name: 'RimWorld', eva: '沙盒类单机游戏，内容庞大但是不如上面的重量级    ',isPlayed: true },
        { id: 7, eng: '战斗方块剧场', code: '#CB1B45', name: 'Battle Cube Theater', eva: '横版动作pve冒险游戏，经典    ',isPlayed: false },
        { id: 8, eng: '文明6', code: '#EB7A77', name: 'Civilization VI ', eva: '最佳策略游戏    ' ,isPlayed: false},
        { id: 9, eng: '冰汽时代', code: '#EB7A77', name: 'Frostpunk', eva: '后末日模拟经营游戏，特色十足    ',isPlayed: false },
        { id: 10, eng: '塞尔达', code: '#EF8686', name: 'The Legend of Zelda', eva: '不需多言    ',isPlayed: false },
        { id: 11, eng: '师傅', code: '#F08989', name: 'Sifu', eva: '第三人称动作闯关游戏，制作精良    ',isPlayed: false },
        { id: 12, eng: '整蛊邻居', code: '#F18C8C', name: 'Neighbors from Hell', eva: '远古巨坟     ' ,isPlayed: false},
        { id: 13, eng: '暗黑地牢', code: '#F28F8F', name: 'Darkest Dungeon 1, 2', eva: '1游戏性极佳，2动画效果极佳    ' ,isPlayed: false},
        { id: 14, eng: '小偷模拟器', code: '#F39292', name: 'Thief Simulator', eva: '模拟游戏    ',isPlayed: false },
        { id: 15, eng: 'PVZ各种改版', code: '#F49595', name: 'Plants vs. Zombies', eva: 'β，e支线    ' ,isPlayed: true},
        { id: 16, eng: '邪恶铭刻', code: '#F59898', name: 'Inscryption ', eva: '卡牌闯关，去年的黑马    ' ,isPlayed: false},
        { id: 17, eng: '杀戮尖塔', code: '#F69B9B', name: 'Slay the Spire', eva: '卡牌肉鸽类巅峰    ',isPlayed: false },
        { id: 18, eng: '弹丸论破', code: '#F79E9E', name: 'ダンガンロンパ ', eva: '典    ' ,isPlayed: false},
        { id: 19, eng: '人狼村之谜', code: '#F8A1A1', name: 'Werewolf', eva: '文字类剧情游戏，听说剧情封神，不过是加上番外   ' ,isPlayed: false},
        { id: 20, eng: '死亡细胞', code: '#F9A4A4', name: 'Dead Cells', eva: '横版动作肉鸽大成之作，可以称的上一句业内天花板级别   ' ,isPlayed: false},
        { id: 21, eng: '神界原罪2', code: '#FAA7A7', name: 'Divinity', eva: '文本量太大，dai弃了？   ' ,isPlayed: true},
        { id: 22, eng: '大表哥2', code: '#FBA9A9', name: 'Red Dead Redemption 2', eva: '横版动作肉鸽大成之作，可以称的上一句业内天花板级别   ' ,isPlayed: false},
        { id: 23, eng: '全面战争系列', code: '#FCAEAE', name: 'Total War series ', eva: '部部经典，大型策略单机   ' ,isPlayed: false},
        { id: 24, eng: '脑叶公司', code: '#FDAFAF', name: 'Hellblade:Senuas Sacrifice', eva: '策略模拟游戏，喜欢scp的风格的话不要错过   ' ,isPlayed: false},
        { id: 25, eng: '我的世界', code: '#FEB4B4', name: 'MineCraft', eva: '无需多言   ' ,isPlayed: false},
        { id: 26, eng: '泰拉瑞亚', code: '#FFB6B6', name: 'Terraria', eva: '重量级   ',isPlayed: false},
        { id: 27, eng: '骑砍1，2', code: '#FFBBBB', name: 'Mount & Blade 1, 2', eva: '策略与角色扮演游戏，典中典   ' ,isPlayed: false},
        { id: 28, eng: '以撒的结合', code: '#FFBDBD', name: 'The Binding of Isaac', eva: '肉鸽之王，没有异议   ' ,isPlayed: false},
        { id: 29, eng: '勇敢的心', code: '#FFC2C2', name: '', eva: '横版动作冒险类反战游戏，剧情及其感人   ',isPlayed: false},
        { id: 30, eng: '黏黏世界', code: '#FFC4C4', name: 'World of Goo', eva: '远古重量级益智解谜游戏，什么时候有续作啊啊啊啊   ' ,isPlayed: false},
        { id: 31, eng: '地痞街区', code: '#FFC7C7', name: 'Streets of Rogue', eva: 'rogue-like类俯视视角像素rpg游戏，很有意思的游戏，音乐很好听，尤其是市长村里的   ' ,isPlayed: false},
        { id: 32, eng: '怪物列车', code: '#FFCACA', name: 'Monster Train', eva: 'roguelike卡牌策略游戏   ' ,isPlayed: false},
        { id: 33, eng: '女神异闻录', code: '#FFCDCD', name: 'Persona 5 Royal', eva: '二尺远角色扮演游戏，口碑不错   ' ,isPlayed: false},
        { id: 34, eng: '幽灵行者', code: '#FFD0D0', name: 'Ghostrunner', eva: '赛博朋克风冒险动作游戏，有较大的跑酷元素   ' ,isPlayed: false},
        { id: 35, eng: '红警', code: '#FFD3D3', name: 'Command & Conquer', eva: '上古巨坟，即时战略重量级中的重量级   ' ,isPlayed: false},
        { id: 36, eng: 'APEX', code: '#FFD6D6', name: 'APEX', eva: 'FPS大逃杀类游戏   ',isPlayed: false },
        { id: 37, eng: '围攻', code: '#FFD9D9', name: 'Besiege', eva: '很有特色的建造类闯关游戏，大佬可以玩出花来   ' ,isPlayed: false},
        { id: 38, eng: '潜渊症', code: '#FFDCDC', name: 'Barotrauma', eva: '2D合作生存冒险潜艇模拟游戏，有点惊悚   ',isPlayed: false },
        { id: 39, eng: '挺进地牢', code: '#FFDFDF', name: 'Enter the Gungeon', eva: '标标准准的肉鸽游戏   ',isPlayed: false },
        { id: 40, eng: '巫师三', code: '#FFE2E2', name: 'The Witcher 3', eva: '有些年头了，角色扮演类游戏   ' ,isPlayed: false},
        { id: 41, eng: '城市天际线', code: '#FFE5E5', name: 'Cities: Skylines', eva: '模拟经营类游戏   ',isPlayed: false },
        { id: 42, eng: '耻辱', code: '#FFE8E8', name: 'Shame', eva: '硬核第一人称潜行闯关游戏，适合技术大佬   ' ,isPlayed: false},
        { id: 43, eng: '英雄无敌3', code: '#FFEBEB', name: 'Heroes of Might and Magic', eva: '即时战略，很多人眼中的神作   ' ,isPlayed: false},
        { id: 44, eng: '这是我的战争', code: '#FFEEEE', name: 'This War of Mine', eva: '横版生存类反战题材游戏   ',isPlayed: false },
        { id: 45, eng: '深空返航', code: '#FFF1F1', name: 'Astroneer', eva: '开放冒险生存类游戏   ' ,isPlayed: false},
        { id: 46, eng: '符石守护者', code: '#FFF4F4', name: 'Slay the Spire', eva: '回合制肉鸽   ' ,isPlayed: false},
        { id: 47, eng: '加拿大的死亡之路', code: '#FFF7F7', name: 'Death Road to Canad', eva: '横版突突突打僵尸，没有官中   ',isPlayed: false },
        { id: 48, eng: '打造世界', code: '#FFF9F9', name: 'Worldbox', eva: 'slg游戏，画风独特   ' ,isPlayed: false},
        { id: 49, eng: '大富翁', code: '#FFFCFC', name: '', eva: '好家伙   ',isPlayed: false },
        { id: 50, eng: '胡闹厨房', code: '#FCFEFF', name: 'Overcooked', eva: '分手厨房   ' ,isPlayed: false},
        { id: 51, eng: '泰坦陨落2', code: '#F9FDFF', name: 'Titanfall 2', eva: 'FPS   ' ,isPlayed: false},
        { id: 52, eng: '云顶之弈', code: '#F6FCFF', name: '', eva: 'の   ' ,isPlayed: false},
        { id: 53, eng: '黑相集', code: '#F3FBFF', name: 'The Dark Pictures Anthology', eva: '不知道不认识   ' ,isPlayed: false},
        { id: 54, eng: '缺氧', code: '#F0FAFF', name: 'Oxygen Not Included', eva: '硬核模拟游戏，上手难度较高，玩进去停不下来   ' ,isPlayed: false},
        { id: 55, eng: '超级鸡马', code: '#EDF9FF', name: 'super Chicken Hors', eva: '团建游戏,节目效果只比tabs差一点   ' ,isPlayed: false},
        { id: 56, eng: '进化之地', code: '#EAF8FF', name: '', eva: '很有特色的冒险游戏，体验电子游戏进化的过程   ' ,isPlayed: false},
        { id: 57, eng: '进击的要塞', code: '#E7F7FF', name: 'Forts', eva: '冷门的横版建造对抗游戏，有pvp，节目效果极佳   ' ,isPlayed: true},
        { id: 58, eng: 'grounded', code: '#E4F6FF', name: 'grounded', eva: '生存类游戏，据说是半成品   ' ,isPlayed: false},
        { id: 59, eng: '深海迷航', code: '#E1F5FF', name: 'Subnautica', eva: '开放冒险生存类游戏   ' ,isPlayed: false},
        { id: 60, eng: '战锤40k', code: '#DEF4FF', name: 'Warhammer', eva: '中土风格，剑与魔法，绿皮科技的可以了解   ' ,isPlayed: false},
        { id: 61, eng: '帕特里克的套箱', code: '#DBF3FF', name: 'Patrick‘s parabox', eva: '硬核解谜游戏，据说非常硬   ' ,isPlayed: false},
        { id: 62, eng: '奇妙探险队1,2', code: '#D8F2FF', name: 'Pikmin 1, 2 ', eva: '探险模拟游戏，有独特的色子系统   ' ,isPlayed: false},
        { id: 63, eng: '最后的咒语', code: '#D5F1FF', name: 'The Last Spell', eva: 'roguelite，rpg，策略   ' ,isPlayed: false},
        { id: 64, eng: '皇帝成长计划', code: '#D2F0FF', name: '', eva: '4399    ' ,isPlayed: false},
        { id: 65, eng: '经典马里奥', code: '#CCF0FF', name: 'Mario', eva: '😭   ' ,isPlayed: false},
        { id: 66, eng: 'i wanna ', code: '#CFF0FF', name: 'i wanna', eva: '硬核横版冒险游戏，慎入   ' ,isPlayed: false},
        { id: 67, eng: '猫里奥', code: '#C9EFFF', name: 'Cat Mario', eva: '哈哈   ' ,isPlayed: false},
        { id: 68, eng: '杀手2', code: '#C6EFFF', name: 'Hitman 2 ', eva: ' 😭    ' ,isPlayed: false},
        { id: 69, eng: '狂父重置版', code: '#C3EFFF', name: 'The Beginners Guide', eva: '恐怖文字游戏   ' ,isPlayed: false},
        { id: 70, eng: '魔女之家', code: '#C0EEFF', name:' House in Fata Morgana', eva: '😭   ' ,isPlayed: false},
        { id: 71, eng: '奥德赛', code: '#BDEEFF', name: 'Odyssey', eva: '没玩过   ' ,isPlayed: false},
        { id: 72, eng: '僵尸毁灭工程', code: '#BAEEFF', name: 'Project Zomboid', eva: '俯视视角末日角色扮演，可以联机   ' ,isPlayed: false},
        { id: 73, eng: 'GMOD', code: '#B7EDFF', name: 'Garrys Mod', eva: '？？？   ' ,isPlayed: false},
        { id: 74, eng: '地牢战争', code: '#B4EDFF', name: 'Dungeon Warfare', eva: '一眼肉鸽   ' ,isPlayed: false},
        { id: 75, eng: '监狱建造师', code: '#B1ECFF', name: 'Prison Architect', eva: '很好玩的模拟经营游戏，以王老菊“自由开火”最为出名   ' ,isPlayed: false},
        { id: 76, eng: '暖雪', code: '#AEECFF', name: 'xxx', eva: '高难度肉鸽）   ' ,isPlayed: false},
        { id: 78, eng: '蝙蝠侠三部曲', code: '#ABECFF', name: 'Batman: Arkham Trilogy', eva: '剧情向   ' ,isPlayed: false},
        { id: 79, eng: 'hifi-rush', code: '#A8EBFF', name: 'HiFi-Rush', eva: '貌似是今年新出的节奏游戏？是音游吗？听说画面鲜艳明亮   ' ,isPlayed: false},
        { id: 80, eng: '高楼爆破', code: '#A5EBFF', name: 'Blast Corps', eva: '童年   ' ,isPlayed: false},
        { id: 81, eng: '十字军之王3', code: '#A2EBFF', name: '', eva: 'rgb   ' ,isPlayed: false},
      ],
      selectedColor: null,
      selectedName: null,
      selectedEng: null,
      selectedEva: null,
      likeCount: 0,
      isClicked: false,
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
    handleClick(){
      this.clicked = true;
    }
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
.router-link-active {
  text-decoration: none;
  color: yellow;
}
.color-app {
  display: flex;
  height: 100vh;
  overflow: hidden;
}
.tip {
  position: absolute;
 
  top: 88%;
  left: 80%;
  font-size: 60px;
  text-decoration: none;
  text-shadow: 0 0 5px rgb(255, 4, 4);
}
.tip1 {
  position: absolute;
  
  top: 90%;
  left: 90%;
  font-size: 50px;
  text-decoration: none;
}
.tip2 {
  position: absolute;
  overflow: auto;
  top: 90%;
  left: 70%;
  font-size: 50px;
  text-decoration: none;
}


.img-app {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 150px; /* 调整图片的宽度 */
  height: 150px;
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

.color-display .eng-text {
  margin: 0;
  padding: 10px;
  font-size: 40px;
  font-family: 'MyFont';
  writing-mode: vertical-tb; /* 水平显示 */
  text-orientation: sideways;
}

@media (max-width: 600px) {
  html, body {
  margin: 0;
  padding: 0;
  
}
.tip {
  position: absolute;
 
  top: 88%;
  left: 80%;
  font-size: 30px;
  text-decoration: none;
  text-shadow: 0 0 5px rgb(255, 4, 4);
}
.tip1 {
  position: absolute;
  
  top: 90%;
  left: 90%;
  font-size: 25px;
  text-decoration: none;
}
.tip2 {
  position: absolute;
  overflow: auto;
  top: 90%;
  left: 70%;
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

.color-display .eng-text {
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
