<h1 align="center"> 니콘내콘 과제 </h1>

<h3 align="center"> 서비스 링크: https://ncnc-app-iota.vercel.app/ </h3>

<p align="center"><img width="500" src="https://bit.ly/3HUSY9s" /></p>

# 👏 프로젝트 소개

> TypeScript와 Next.js를 사용하여 니콘내콘의 모바일 웹페이지를 클론하였습니다.

## 🙋‍♀️🙋‍♂️ 팀원

<table>
<thead>
<tr>
<th><p align="center">프로필</p></th>
<th><p>이름</p></th>
<th><p>담당 기능</p></th>
</tr>
</thead>

<tbody>
<tr>
<td>
<img
src="https://avatars.githubusercontent.com/Ubermensch0608"
width="100px;"
alt=""
/>
</td>
<td><b><a href="https://github.com/Ubermensch0608"
>우종원</a></b></sub></td>
<td></td>
</tr>

<tr>
<td>
<img
src="https://avatars.githubusercontent.com/crucial-sub"
width="100px;"
alt=""
/>
</td>
<td><b><a href="https://github.com/crucial-sub"
>박중섭</a></b>
<td></td>
</tr>

<tr>
<td>
<img
src="https://avatars.githubusercontent.com/ttaerrim"
width="100px;"
alt=""
/></td>
<td><a href="https://github.com/ttaerrim" >이태림</a></td>
<td></td>
</tr>

<tr>
<td align="center">
<img
src="https://avatars.githubusercontent.com/penguin311"
width="100px;"
alt=""
/><br /></td>
<td><b><a href="https://github.com/penguin311"
>임수영</a></b></td>
<td></td>
</tr>
</tbody>
</table>

## 🚀 스택

`React` `typescript` `Next.js`

## ⚙ 설치

```
# clone the project
$ git clone https://github.com/console-lo9/messenger.git

# install modules
$ cd ncnc-app
$ npm install || yarn install

# start
$ npm run dev || yarn dev

⠀
⠀  You can now view this project in the browser.
⠀  http://localhost:3000/
⠀
```

## 🔗 의존성

```
"dependencies": {
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@reduxjs/toolkit": "^1.7.2",
    "@types/react-redux": "^7.1.22",
    "axios": "^0.26.0",
    "next": "12.0.10",
    "next-redux-wrapper": "^7.0.5",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-redux": "^7.2.6"
}
```

## 📂 파일 구조

    ├── public
    ├── server
    └── src
        ├── assets
        ├── components
        │   ├── Header
        │   ├── Login
        │   ├── Messages
        │   ├── Modal
        │   ├── NewMessage
        │   └── SideNav
        ├── hooks
        ├── layout
        ├── models
        ├── pages
        ├── store
        │   ├── action
        │   └── reducer
        └── utils
        │   └── constants
        ├── App.js
        ├── GlobalStyle.js
        └── index.js

> 작성 후 삭제 참고 (https://www.lesstif.com/lpt/linux-tree-54952142.html)
>
> $ tree -N -L 2 -d -I "node_modules" 또는 vscode File-tree-generator extension 사용

## ✨ 구현 사항

-   [x] `Next.js`와 `Typescript` 사용
-   [x] 니콘내콘 모바일 웹 페이지와 같은 라우팅
-   [ ] 3분 이내의 E2E 테스트 구현
-   [x] 재사용 가능한 Container

-   [x] Header

    -   [x] 홈인 경우 햄버거 버튼, 홈이 아닐 경우 왼쪽 상단에 뒤로가기 버튼
    -   [x] 카테고리, 브랜드 페이지에서 선택한 메뉴를 중앙에 출력

-   [x] 홈

    -   [x] 배너 캐러셀 라이브러리 없이 랜덤 이미지로 직접 구현
    -   [x] 브랜드 메뉴 출력 (API)
    -   [x] 땡처리 리스트 출력 (API)

-   [x] 브랜드 페이지 /categories

    -   [x] 카테고리 상단 메뉴바는 슬라이드가 되도록 구현
    -   [x] 카테고리 내에서 브랜드 리스트 출력
    -   [x] 땡처리콘, 까페 등 각 카테고리 페이지 생성
    -   [x] 브랜드 클릭 or 터치 시 해당 브랜드 상세로 이동

-   [x] 상품 리스트 /brands

    -   [x] 상품 리스트 출력 (API)
    -   [x] 상품 개수 좌측 상단에 출력
    -   [x] 이미지, 상품명, 할인율, 할인가, ~~정가~~

-   [x] 상품 상세 /items

    -   [x] 옵션 미선택 시 옵션 선택하기 버튼 렌더링
    -   [x] 옵션 선택 버튼 클릭 시 옵션 선택 창 노출
    -   [x] 옵션 선택 시 옵션 창 닫히고 선택 옵션과 구매하기 버튼 렌더링
    -   [x] 옵션 선택 창 백그라운드 클릭 시 창 닫힘
    -   [x] 선택한 옵션 클릭 시 옵션 선택 창 노출

-   [x] 고객 센터 /contacts
    -   [x] 홈 화면의 좌측 상단 햄버거 메뉴 눌렀을 때 고객 센터 페이지로 이동하는 메뉴 노출
    -   [x] 왼쪽에서 오른쪽으로 화면을 100% 덮는 애니메이션
    -   [x] 상담 시간 안내
    -   [x] 구매 / 판매 탭 구현
    -   [x] 구매 / 판매 탭에 맞는 QnA 리스트 조회

## 🗺 한 눈으로 보는 구현 기능

<img width="400" src="https://user-images.githubusercontent.com/28384562/154145083-d5024c30-dbec-4626-a3c1-22a14b8ef00a.gif" />
<img width="400" src="https://user-images.githubusercontent.com/28384562/154145176-07ec7cde-020b-4139-9335-65d47a4664e8.gif" />

## 💡 과제 후기

### **우종원** 🍀

트랜디한 React 개발자라면 관심을 가질 TypeScript와 Next.js의 조합으로 멋진 프로젝트를 완성시킬 수 있어 좋았습니다. 특히, 빈번한 API호출과 JSON파일 렌더링을 고민해보면서 앞으로 이 부분에 있어서는 더 자신있게 구현할 수 있을 것 같습니다.

### **박중섭** ✨

CSR과 SSR에 대한 개념을 프로젝트를 진행하며 직접 체감하며 배울 수 있었습니다. 또한 왜 SSR이 SEO에 적합한 렌더링 방식인지 Next js를 활용하며 공부할 수 있었습니다. 또한 CRA와 다르게 라우팅이 디렉토리 구조를 통해 구현된다는 점이 굉장히 흥미로웠습니다.

### **이태림** 🐯

### **임수영** 🐧

처음 next.js를 사용하였는데 CSR 방식과 SSR 방식의 차이를 체험할 수 있었던 프로젝트였던 것 같습니다.
