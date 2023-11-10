<template>
  <div class="color-app">
    <div class="color-display" :style="{ backgroundColor: selectedColor }">
      <p v-if="selectedColor" class="chi-text">{{ selectedEng }}</p>
      <p v-else class="chi-text">学习</p>
      <p v-if="selectedColor" class="eng-text">{{ selectedName }}</p>
      <p v-else class="beng-text">linux-gdb</p>  
      <p v-if="selectedColor" class="eva-text" >{{ selectedEva }}</p>
      <p v-else class="eva-text"  ></p>
      <router-link to="/game" class="btip">🎮</router-link>
      <router-link to="/book" class="tip1">📖</router-link>
      <router-link to="/" class="gtip2">🖥️</router-link>
     
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
  
  name: 'GdbList',
  data() {
    return {
      
      colors: [
        { id: 1, eng: 'LMM', code: '#DC9FB4', name: 'Large language model', eva: '大语言模型 (英语：large language model，LLM) 是一种语言模型',isPlayed: false },
        { id: 2, eng: 'lsp', code: '#DC9FB4', name: 'Language Server Protocol', eva: 'LSP 是一套通信协议，遵从 LSP 规范的客户端（各种编辑器/IDE）可以通过众多 LSP 服务端按协议标准进行通信',isPlayed: false },
        { id: 3, eng: 'dom', code: '#DC9FB4', name:' Document Object Model',eva: '对象模型 (DOM) 是 Web 文档的编程接口',isPlayed: false },
        { id: 4, eng: 'jit', code: '#DC9FB4', name:' Just In Time Compilation',eva: '即时编译，c# ,java',isPlayed: false },
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
  },
};
</script>
<style>
  .gtip2 {
  position: absolute;
 
  top: 88%;
  left: 70%;
  font-size: 60px;
  text-decoration: none;
  text-shadow: 0 0 5px rgb(255, 4, 4);
}
@media (max-width:600px){
  .gtip2 {
  position: absolute;
 
  top: 88%;
  left: 70%;
  font-size: 30px;
  text-decoration: none;
  text-shadow: 0 0 5px rgb(255, 4, 4);
}
}
</style>