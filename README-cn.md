# Crypto Wallet Test

[En](README.md) | [繁中](README-hk.md) | [簡中](README-cn.md)

This is a interview coding test

![demo gif](./demo.gif)

## 运作环境
* Chrome v49+ or Firefox v45+ or Safari v9+
* Node v22+

## 重点使用套件
- [react-icons](https://github.com/react-icons/react-icons/actions)
- [sass](https://github.com/sass/sass)
- [clsx](https://github.com/lukeed/clsx)
  
## 专案架构
- components -> 存放组件的地方
- hooks -> 存放 hooks，目前只有把 Redux 写成 hook 避免一直需要带入型别判断
- pages -> 集合 components 而成的 Page
- store -> 存放 Redux 以及 thunks 的地方
- services -> 决定要透过哪一种服务去要资料的层级

## 架构思维

- 页面与逻辑分离，页面单存用 `.tsx` 呈现，商业逻辑使用 `useXXXController.ts` 去处理，后续方便带入 Test 进行测试
- 在商业逻辑透过 dispatch 去非同步呼叫 Store 后，从 Service 决定要从本地或者 Mock，甚至最后可以接上 axios 去实际跟后端要资料
- 再拿回资料后，透过 `extraReducers.ts` 去异步的塞入资料，最终透过资料在驱动画面改变，监听 Redux 的画面就能改变了