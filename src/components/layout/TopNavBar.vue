<template>
  <v-app-bar app :class="navClass" scroll-off-screen flat height="60">
    <!-- 手机端导航栏 -->
    <div class="d-md-none nav-mobile-container">
      <div style="font-size:18px;font-weight:bold">
        <router-link to="/">
          {{ tempName }}
        </router-link>
      </div>
      <div style="margin-left:auto">
        <a><i class="iconfont iconsousuo" /></a>
        <a style="margin-left:10px;font-size:20px">
          <i class="iconfont iconhanbao" />
        </a>
      </div>
    </div>
    <!-- 电脑导航栏 -->
    <div class="d-md-block d-none nav-container">
      <div class="float-left blog-title">
        <router-link to="/">
          {{ tempName }}
        </router-link>
      </div>
      <div class="float-right nav-title">
        <div class="menus-item">
          <router-link class="menu-btn" to="/">
            <i class="iconfont iconzhuye" /> 首页
          </router-link>
        </div>
        <div class="menus-item">
          <a class="menu-btn">
            <i class="iconfont iconsousuo" /> 搜索
          </a>
        </div>
        <div class="menus-item">
          <a class="menu-btn">
            <i class="iconfont iconfaxian" /> 发现
            <i class="iconfont iconxiangxia2 expand" />
          </a>
          <ul class="menus-submenu">
            <li>
              <router-link to="/archives">
                <i class="iconfont iconguidang" /> 归档
              </router-link>
            </li>
            <li>
              <router-link to="/categories">
                <i class="iconfont iconfenlei" /> 分类
              </router-link>
            </li>
            <li>
              <router-link to="/tags">
                <i class="iconfont iconbiaoqian" /> 标签
              </router-link>
            </li>
            <li>
              <button>
                <i class="iconfont icontuichu" /> 跳转到后台
              </button>
            </li>
          </ul>
        </div>

        <div class="menus-item">
          <a class="menu-btn">
            <i class="iconfont iconqita" /> 娱乐
            <i class="iconfont iconxiangxia2 expand" />
          </a>
          <ul class="menus-submenu">

            <li>
              <router-link to="/talks">
                <i class="iconfont iconpinglun" /> 说说
              </router-link>
            </li>
            <li>
              <button>
                <i class="iconfont icon-chatgpt" /> chatGPT
              </button>
            </li>
          </ul>
        </div>
        <div class="menus-item">
          <router-link class="menu-btn" to="/links">
            <i class="iconfont iconlianjie" /> 友链
          </router-link>
        </div>

        <div class="menus-item">
          <router-link class="menu-btn" to="/message">
            <i class="iconfont iconpinglunzu" /> 留言
          </router-link>
        </div>
        <div class="menus-item">
          <a class="menu-btn" v-if="true">
            <i class="iconfont icondenglu" /> 登录
          </a>
          <template v-else>
            <img class="user-avatar" :src="blogInfo.src" height="30" width="30" />
            <ul class="menus-submenu">
              <li>
                <router-link to="/user">
                  <i class="iconfont icongerenzhongxin" /> 个人中心
                </router-link>
              </li>
              <li>
                <a><i class="iconfont icontuichu" /> 退出</a>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
import { onMounted, computed, reactive, ref, onUnmounted } from 'vue'

const tempName = ref("EulerLin");
const navClass = ref("nav");

const blogInfoRef = {
  src: "src/assets/fukralos.png",

}
const blogInfo = reactive(blogInfoRef)



// onMounted(() => {
//   // 监听滚动事件
//   window.addEventListener('scroll', handleScroll)
// })
// onUnmounted(() => {
//   // 移除滚动事件监听
//   window.removeEventListener('scroll', handleScroll)
// })
// const handleScroll = () => {
//   const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
//   // console.log(scrollTop) // 输出滚动条高度
//   if (scrollTop > 60) {
//     navClass.value = "nav-fixed";
//   } else {
//     navClass.value = "nav";
//   }
// }

</script>

<style scoped>
i {
  margin-right: 4px;
}

ul {
  list-style: none;
}

.nav {
  background: rgba(0, 0, 0, 0) !important;
}

.nav a {
  color: #eee !important;
}

.nav .menu-btn {
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
}

.nav .blog-title a {
  text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
}

.theme--light.nav-fixed {
  background: rgba(255, 255, 255, 0.8) !important;
  box-shadow: 0 5px 6px -5px rgba(133, 133, 133, 0.6);
}

.theme--dark.nav-fixed {
  background: rgba(18, 18, 18, 0.8) !important;
}

.theme--dark.nav-fixed a {
  color: rgba(255, 255, 255, 0.8) !important;
}

.theme--light.nav-fixed a {
  color: #4c4948 !important;
}

.nav-fixed .menus-item a,
.nav-fixed .blog-title a {
  text-shadow: none;
}

.nav-container {
  font-size: 14px;
  width: 100%;
  height: 100%;
}

.nav-mobile-container {
  width: 100%;
  display: flex;
  align-items: center;
}

.blog-title,
.nav-title {
  display: flex;
  align-items: center;
  height: 100%;
}

.blog-title a {
  font-size: 18px;
  font-weight: bold;
}

.menus-item {
  position: relative;
  display: inline-block;
  margin: 0 0 0 0.875rem;
}

.menus-item a {
  transition: all 0.2s;
}

.nav-fixed .menu-btn:hover {
  color: #49b1f5 !important;
}

.menu-btn:hover:after {
  width: 100%;
}

.menus-item a:after {
  position: absolute;
  bottom: -5px;
  left: 0;
  z-index: -1;
  width: 0;
  height: 3px;
  background-color: #80c8f8;
  content: "";
  transition: all 0.3s ease-in-out;
}

.user-avatar {
  cursor: pointer;
  border-radius: 50%;
}

.menus-item:hover .menus-submenu {
  display: block;
}

.menus-submenu {
  position: absolute;
  display: none;
  right: 0;
  width: max-content;
  margin-top: 8px;
  box-shadow: 0 5px 20px -4px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  animation: submenu 0.3s 0.1s ease both;
}

.menus-submenu:before {
  position: absolute;
  top: -8px;
  left: 0;
  width: 100%;
  height: 20px;
  content: "";
}

.menus-submenu a {
  line-height: 2;
  color: #4c4948 !important;
  text-shadow: none;
  display: block;
  padding: 6px 14px;
}

.menus-submenu a:hover {
  background: #4ab1f4;
}

.menus-submenu button {
  line-height: 2;
  color: #4c4948 !important;
  text-shadow: none;
  display: block;
  padding: 6px 14px;
}

.menus-submenu button:hover {
  background: #4ab1f4;
}

@keyframes submenu {
  0% {
    opacity: 0;
    filter: alpha(opacity=0);
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    filter: none;
    transform: translateY(0);
  }
}</style>
