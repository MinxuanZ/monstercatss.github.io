<template>
  <div class="color-app">
    <div class="color-display" :style="{ backgroundColor: selectedColor }">
      <p v-if="selectedColor" class="chi-text">{{ selectedEng }}</p>
      <p v-else class="chi-text">学习</p>
      <p v-if="selectedColor" class="eng-text">{{ selectedName }}</p>
      <p v-else class="beng-text">linux-gdb</p>  
      <p v-if="selectedColor" class="eva-text" >{{ selectedEva }}</p>
      <p v-else class="eva-text"  ></p>
      <router-link to="/" class="btip">🎮</router-link>
      <router-link to="/book" class="tip1">📖</router-link>
      <router-link to="/gdb" class="gtip2">🖥️</router-link>
     
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
        { id: 1, eng: 'vim', code: '#DC9FB4', name: 'vim', eva: 'vim教程:http://www2.geog.ucl.ac.uk/~plewis/teaching/unix/vimtutor',isPlayed: false },
        { id: 2, eng: 'gdb', code: '#E16BCC', name: 'gdb', eva: '100个gdb技巧 https://github.com/hellogcc/100-gdb-tips' ,isPlayed: false },
        { id: 3, eng: 'CLR', code: '#E16BCC', name: 'CLR', eva: '一边编译一边运行 大神的jit笔记 https://gist.github.com/303248153/2ca436a0e44e5da1c711de050fa3c13f ' ,isPlayed: false },
        { id: 4, eng: 'csharp', code: '#E16BCC', name: 'C#', eva: '在线csharp网页  https://sharplab.io/' ,isPlayed: false },
        { id: 5, eng: 'Makefile', code: '#E16BCC', name: 'Makefile', eva: 'utils.o : utils.c defs.h 写makefile教程：https://seisman.github.io/how-to-write-makefile/recipes.html' ,isPlayed: false },
        { id: 6, eng: '汇编教程', code: '#E16BCC', name: 'ARM', eva: ' mov  x0, xzr asm(arm)教程：https://github.com/pkivolowitz/asm_book' ,isPlayed: false },
        { id: 7, eng: '现代硬件的算法', code: '#F18C18', name: 'Algorithms for Modern Hardware', eva: ' https://en.algorithmica.org/hpc/' ,isPlayed: false },
        { id: 8, eng: 'Hello算法', code: '#FDA4A4', name: '', eva: '二叉树：https://www.hello-algo.com/chapter_tree/binary_tree/' ,isPlayed: false },
        { id: 9, eng: 'git', code: '#F59898', name: '', eva: 'git stash pop git stash drop list' ,isPlayed: false },
        { id: 10, eng: 'CMAKE', code: '#F59898', name: '', eva: '' ,isPlayed: false },
        { id: 11, eng: 'awk grep sed ', code: '#F59898', name: '', eva: '打印文件的第一列：awk \'{print $1}\' file.txt;替换文件中的字符串：sed \'s/old/new/g\' file.txt' ,isPlayed: false },
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