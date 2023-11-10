<template>
  <div class="about-me">
    <!-- About Me 组件的内容 -->
    <h1>About Me</h1>
    <p>这是关于我的页面。</p>
    <p>其他内容可以在这里添加。</p>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}

.about-me {
  font-size: 10px;
  display: flex;
  height: 100vh;
  overflow: hidden;
  /* About Me 组件的样式 */
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.about-me h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.about-me p {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
