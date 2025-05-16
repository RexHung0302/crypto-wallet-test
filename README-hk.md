# Crypto Wallet Test

[En](README.md) | [繁中](README-hk.md) | [簡中](README-cn.md)

This is a interview coding test

![demo gif](./demo.gif)

## 運作環境
* Chrome v49+ or Firefox v45+ or Safari v9+
* Node v22+

## 重點使用套件
- [react-icons](https://github.com/react-icons/react-icons/actions)
- [sass](https://github.com/sass/sass)
- [clsx](https://github.com/lukeed/clsx)
  
## 專案架構
- components -> 存放組件的地方
- hooks -> 存放 hooks，目前只有把 Redux 寫成 hook 避免一直需要帶入型別判斷
- pages -> 集合 components 而成的 Page
- store -> 存放 Redux 以及 thunks 的地方
- services -> 決定要透過哪一種服務去要資料的層級

## 架構思維

- 頁面與邏輯分離，頁面單存用 `.tsx` 呈現，商業邏輯使用 `useXXXController.ts` 去處理，後續方便帶入 Test 進行測試
- 在商業邏輯透過 dispatch 去非同步呼叫 Store 後，從 Service 決定要從本地或者 Mock，甚至最後可以接上 axios 去實際跟後端要資料
- 再拿回資料後，透過 `extraReducers.ts` 去異步的塞入資料，最終透過資料在驅動畫面改變，監聽 Redux 的畫面就能改變了