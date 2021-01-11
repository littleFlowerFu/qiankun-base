<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中可以放自己的路由 -->
      <el-menu-item index="/">Home</el-menu-item>
      <!-- 引用其他子应用 -->
      <el-menu-item index="/vue"> vue 应用</el-menu-item>
      <el-menu-item index="/react"> react 应用</el-menu-item>
    </el-menu>
    <!-- 默认加载路由 -->
    <router-view></router-view>
    <!-- 挂载vue应用 -->
    <div id="vue"></div>
    <!-- 挂载react应用 -->
    <div id="react"></div>
  </div>
</template>
