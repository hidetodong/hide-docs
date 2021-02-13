/*
 * @Author: your name
 * @Date: 2021-01-12 22:21:16
 * @LastEditTime: 2021-01-13 14:18:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hide-docs/docs/.vuepress/config.js
 */
module.exports = {
  home: true,
  title: "HIDETOXIC",
  description: "关于我和一切",
  themeConfig: {
    head: ["link", { rel: "icon", href: "./favicon.ico" }],
    sidebar: {
      "/frontend/": ["warning", "first-doc","leader-process","netmi-ui"],
      "/life/": ["aboutme"],
      "/tricks/": ["embed","test"],
    },
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文章",
        items: [
          { text: "前端技术", link: "/frontend/first-doc" },
          { text: "关于我", link: "/life/aboutme" },
          { text: "奇思妙想", link: "/tricks/embed" },
        ],
      },
      { text: "GitHub", link: "https://github.com/hidetodong" },
    ],
  },
};

// module.exports = {
//     themeConfig: {
//         sidebar:{
//           // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
//           '/accumulate/': [
//               '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
//               {
//                 title: '侧边栏下拉框的标题1',
//                 children: [
//                   '/accumulate/JS/test', // 以docs为根目录来查找文件
//                   // 上面地址查找的是：docs>accumulate>JS>test.md 文件
//                   // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
//                 ]
//               }
//             ],
//             // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
//             '/algorithm/': [
//               '/algorithm/',
//               {
//                 title: '第二组侧边栏下拉框的标题1',
//                 children: [
//                   '/algorithm/simple/test'
//                 ]
//               }
//             ]
//         }
//     }
//   }
