<h1 align=center></h2>

>

![Alt text](png)

<br/><br/>

## 설치 방법

```bash
git clone https://github.com/
cd
```

.env 파일 생성


## 실행



<br/><br/>

## 🫂 팀원 소개

<br/>

## 🔨 사용 기술 및 도구

### 배포

![Vercel](https://taskify-sage-xi.vercel.app/)

### 개발

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TailWind](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

### 협업

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=eslint&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white) ![Notion](https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white)

<br/>

#리액트쿼리
- 서버상태를 집중적으로 관리하기 위해 도입했고 서버상태를 전역적으로 간편하게 관리할수있어좋았음.
특정데이터를 refetch하고싶을때 키값을 사용할수있어서 쉽게 구현이 가능한좀이좋았고 
onSucess시 로직을 바로 작성해줄수있어서 편리했음.


# 조타이
- 프로젝트 규모나 기간이 짧은편이고 리덕스같은 거대한 라이브러리는 적용에 시간이 오래걸릴거같아서
단순하고 사용이 편리한 조타이를 선택함.
atom이라는 키워드로 간단하게 전역상태를 관리할수있었고 이것을 이용해 모달을 전역관리할수있어 좋았지만
라이브러리 사용자수가 적어서 에러가 발생했을때 참고할 문서가 적다는 문제가있었음.


# 테일윈드
- 팀원 모두 테일윈드 사용경험이 없었고 nextjs(사용하지않게되었지만)의 앱라우팅과 호환성이 좋아서
scss와 고민중에 테일윈드를 도입하게되었다.
css파일이 별도로 필요하지않아서 파일갯수가 줄어들고
클래스네이밍을 고민하지않아도되는점, 스타일에만 집중할수있는점은 좋았지만

클래스에 기능이 명시되지않다보니
코드를 리뷰하거나 오래된코드를 다시 리팩토링할때 태그의 정확한 기능을 알기어려웠고
코드가 길어지면 가독성이 떨어지는문제, 동적스타일링을 할때 스타일을 한번더 가공해주거나 safeList를 거쳐야하는것,
반응형디자인 구현시 일일이 스타일을 지정해줘야하는점등
여러개의 오브젝트를 한꺼번에 제어하고싶을때 불편함이 있었다.

*figma에서 [Figma to Code] 라는 플러그인 을 사용하면 피그마의 css값을 테일윈드로 바로 따올수있어서 좋았음.



# 타입스크립트
- 처음에는 값에 타입을 지정해준다는 행위자체가 불필요하고 번거롭게 느껴졌지만
나중에 코드가 복잡해지고 api로 값이 이동할때 타입스크립트의 검수로 인해 오류를 미리 막아주거나 오류원인을 찾는데 굉장히 편했다



# 넥스트js14버전
- 처음에는 nextjs를 사용해서 프로젝트를 빌드하려고 했으나
멘토님이 리액트에 좀더 집중하고 그다음 nextjs로 리팩토링을 진행하는것이 여러 문제를 겪었을때 해결하는데 수월할것이라고 조언하셔서 
nextjs는 제외하고 빌드하게됨. 프로젝트기간이 끝난뒤 리팩토링을 진행할예정.



<br/>

## 폴더 구조

```bash
src
├── assets 
│   └── images
│       └── button-icon.png
├── apis 
├── types // 타입 지정 관련 파일(Props 타입은 해당 컴포넌트 상단에 지정)
│   └──api.ts
├── components 
│   └──Layout
│       └── HeaderLayout
│           └── HeaderLayout.tsx
│       └── FooterLayout
│           └── FooterLayout.tsx
│   └── Input
│       └── Input.tsx
├── store // 전역 상태 관리
├── constants
│   └── userContext.ts
├── pages 
│   └── DashboardPage
│       └── DashboardPage.tsx
│       
├── utils  
│   └── calculateDate.ts
├── hooks  
│   └── useHook.ts
├── router
│   └── router.ts
├── _App.jsx       
├── GlobalStyle.css
└── index.jsx
```
<br/><br/>

# ✨ 서비스 주요 기능


### 📄 대시보드 페이지

- 컬럼, 할일 카드, 댓글 CRUD 구현
- 댓글 무한스크롤


### 📄 나의 대시보드 페이지

- 초대 받은 대시보드 응답(수락, 거절) 기능
- 초대 받은 대시보드 제목 검색 기능


### 📄 대시보드 수정 페이지

- 대시보드 제목/색상 수정
- 대시보드 구성원 목록 조회/삭제
- 대시보드 초대/삭제/초대 내역 조회


### 📄 계정관리 페이지

- 프로필 이미지를 input으로 받아서 post로 서버에 이미지를 업로드하고 이미지url을 받아서  put으로 url정보를 수정하는 기능
- 비밀번호 수정 기능


### 📄 로그인&회원가입 페이지

- 가입정보를 입력받아서 post로 보내고
- 로그인하면서 accesstoken을 발급받아 로컬스토리지에 저장.

<br/><br/>

# ✨ 추가 기능

- 

<br/><br/><br/>

# 💡 문제 및 해결

<br/>

### 1️⃣ 
- 문제 : react query로 쿼리키를 같게 주었을 때, 다른 곳에서 데이터를 처리해도 같이 최신화가 되는 문제
- 해결 방법 : 같은 api 요청을 조건을 줘서 분기 시켜주었고, 쿼리키를 다르게 적용했다.

<br/>

### 2️⃣
- 데이터 카드 수정 모달을 띄워줄 때 데이터의 기본 값이 formData에 넣어지기 전에 보여지는 문제가 발생 ⇒ useMutation의 queryFn에 async를 사용하여 선행적으로 폼데이터 기본 값들을 넣어줌
- 카드 수정 시 이미지의 데이터가 잘못되었다는 에러 발생 ⇒ 조건문을 사용하여 이미지의 값이 존재하지 않을시엔 null값을 imgUrl로 할당, 이전에 생성된 이미지의 값이 존재할 때는 그 값을 그대로 imgURL 값으로 할당, 새로운 이미지라면 이미지 업로드를 하여 그 리턴값을 할당해 주었음

if(!imgValue)
{ 이미지 값이 존재 하지 않을때 처리 } 
else if(typeof imgValue === "string")
{ 이미지 값 존재하고, 이전에 생성된 이미지의 값이 존재 할 때 처리 } 
else if(typeof imgValue === "Object")
{ 이미지 값 존재하고, 새롭게 들어온 이미지의 값이 존재 할 때 처리 }


<br/>

### 3️⃣
- 대시보드 중복 초대되던 문제
    - 폼 제출 시 초대 목록 조회 후 중복 검사 하도록 설정
- 구성원/초대 목록 첫 로딩 or 변경될 때 페이지네이션 동작 중 깜빡거리는 문제(refetch 중 데이터 유실)
     - data를 state에 담아준 후 해당 state로 ui를 표시하도록 변경해주었음. isLoading 중에는 이전의 data를 사용하도록 해주었음


<br/>

### 4️⃣ 
팀 회고
## 윤해용
- Next.js를 바로 도입하기보다는 리액트에 집중하는 방식으로 프로젝트를 진행했던 점이 좋았습니다. 덕분에 hooks 사용과 컴포넌트 분리에 더 집중할 수 있었습니다.
- 앞만 보고 달렸던 것 같습니다. 문제 상황이 발생했을 때 해결 과정을 기록을 하지 않은게 아쉽습니다.

## 최무현
- 요구 사항 구현에 너무 급급했던 것 같다. 만났던 문제 상황을 잘 정리를 해놨어야 했는데 지금 다시와서 생각해보니까 그 당시만큼 생각이 나지 않는것 같다. 앞으로는 완성도 완성이지만 배움에 좀 더 초점을 두어야겠다.

## 박준수
- 리액트와 타입스크립트에 집중하며 프로젝트를 진행할 수 있어서 좋았다. 처음에 여러가지를 정하고 처음 사용하는 라이브러리, 테일윈드 등에 적응하느라 시간이 많이 소요돼서 중후반부에는 시간에 쫒기듯 프로젝트를 마무리했다. 다음에는 좀 더 시간분배에 신경을 써야할 듯 하다. 그리고 프로젝트를 진행하며 마주치는 여러 문제들을 당시에 기록해두는 습관을 들여야겠다.

## 김율민
- 시간이 부족해서 api를 리팩토링 하지 못한점이 아쉬움.
처음 프로젝트를 빌드할때 레이아웃부터 짜고시작했어야 했는데
각자 맡게된부분에 집중하게 되면서 공통레이아웃부분은 후순위로 밀렸고 이로인해 나중에 레이아웃의 스타일이 지저분해지고 반응형디자인을 적용하는데 애를먹었다.



<br/><br/>

# Q & A

![Alt text](image-6.png)
