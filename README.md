# 날꾸

## 최종 구현 화면 이미지
    
  시작화면
  
  
  메인화면
  
  
  설정화면
    
    
## 설치, 환경설정 및 실행 방법

  - env : 3가지 API Key 필요
      - 네이버 맵 API
      - 공공데이터 (OPEN API)
          - 기상청 단기예보 조회서비스
          - 한국천문연구원 출몰시각 정보
  
  ```bash
  yarn install  // 라이브러리 설치
  
  yarn start    // 실행
  ```
    
## 구현 요구 사항 목록
  - 시작페이지
      - 프리셋 종류 보여주기
  - 메인페이지
      - 선택된 장소의 날씨 및 천문 정보 가져오기
      - 드래그 앤 드롭으로 카테고리 순서 변경
      - 주소찾기
          - 원하는 주소 검색
          - 주소에 해당하는 위경도 가져오기
  - 설정페이지
      - 드래그앤드롭으로 순서 변경
      - 카테고리별 색상 변경
      - 카테고리 추가, 삭제
## 사용한 프레임워크 및 라이브러리 설명

  - React
  - Next.js
    - 페이지 라우팅
    - image 최적화
    - vercel 배포 연동
  - React-Query : 서버 상태관리, 캐시 처리
  - react-beautiful-dnd : 드래그 앤 드롭 기능
  - Recoil : 클라이언트 상태관리 및 로컬스토리지 저장
  - TypeScript : 정적타입을 사용하여 안정적인 코드 작성
  - Naver Map API : 주소검색 및 해당 주소의 위경도 가져오기
  - styled-components : CSS in JS, 컴포넌트 단위로 CSS를 관리하기 위해 사용

  ##  폴더 구조 설명

  - 아토믹 디자인 패턴 사용

📦public
📦src
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┣ 📂molecules
 ┃ ┣ 📂organisms
 ┃ ┗ 📂templates
 ┣ 📂hooks
 ┣ 📂lib
 ┃ ┣ 📂constants
 ┃ ┣ 📂store
 ┃ ┣ 📂types
 ┃ ┗ 📂utils
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┣ 📂main
 ┃ ┣ 📂setup
 ┃ ┣ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┗ 📜_document.tsx
 ┗ 📂styles

##  과제 진행 시 주안점 작성
  - API 동시에 2개 호출
    - 처음에는 API fetch를 각각 처리, 그 후 Promise.all로 변경했다가 useQueries로 수정하여 구현
      - 동일한 요청은 캐시 처리되어 실제로 요청하지 않을 수 있었음
      - API 요청을 병렬로 처리하여 소요시간을 최소화
      - useQuery에서 제공하는 상태(isLoading, isError 등)를 활용하기 좋음

##  한계점 및 개선 사항 작성
  - 한계점
    - 카테고리 사이즈 다양화 미구현
    - 컴포넌트 구조
        - 아토믹 디자인 패턴을 사용하였으나 폴더별 명확한 구분이 어려웠음
    - getServerSideProps 미사용 : Next.js의 SSG를 제대로 사용해보지 않았음
    
  - 향후 넣고 싶은 기능
    - 현위치 가져오기
    - 다른 API로 정보 추가(미세먼지 등)
    - suspense 사용해보기

## 후기
  - 완벽하지는 않지만 생각했던 기본 기능은 완료했고, 실제로도 날씨 볼 때 사용하기 편했음
  - 오픈소스에 기여는 못해봤으나 OPEN API(공공데이터)의 2023년 위경도 위치에 대한 장소를 잘못 가져오는 오류를 발견, 제보하여 수정해 줌
