---
layout: about
title: About
---
## 🧑🏻‍💻 김현서(Hyunseo Kim)
<div class="sector-container">
  <div class="sector1">
    <img src="https://hyundev.github.io/assets/images/hyunseo_profile.jpg">
  </div>
  <div class="sector2">
    <strong>안녕하세요! <br>4년 차, 화면개발이 즐거운 프론트엔드 개발자 김현서입니다.</strong>
    <h3>Contact</h3>
    <ul>
      <li>
        Email: <a href="var.hyunseo@gmail.com">var.hyunseo@gmail.com</a>
      </li>
      <li>
        Github: <a href="https://github.com/hyunDev">https://github.com/hyunDev</a>
      </li>
      <li>
        Blog: <a href="https://hyundev.github.io">https://hyundev.github.io</a>
      </li>
    </ul>
  </div>
</div>


## 🧑🏻 About Me

안녕하세요! 4년 차, 프론트엔드 개발자 김현서입니다. 
사용자가 직접 이용하게 될 화면을 개발하는 것에 매력을 느껴 프론트엔드 개발을 시작하게 되었습니다. 

지난 3년간 데이터 시각화 솔루션을 개발하는 스타트업에서 유지보수와 개발초기 단계부터 서비스 배포까지 경험하였습니다.
1, 2년 차에는 회사에서 운영하던 솔루션의 2.0 버전의 오류 수정 및 기능 개선을 수행했습니다. 
이후 3, 4년 차에는 솔루션 3.0 개발에서 front end 개발을 담당하였습니다. 
또한 최신 프론트엔드 기술 트렌드에 뒤쳐지지 않기 위해 개인 공부와 사이드프로젝트를 진행하고 있습니다.

저는 모르는 것을 인정하고 새로운 기술을 배우는 것을 좋아합니다.
사내에서 팀원들과 적극적으로 소통하고 코드리뷰도 적극적으로 참여해
더 나은 코드를 짜기 위한 노력을 아끼지 않았습니다.
더 좋은 프론트엔드 개발자가 되기 위해 노력하고 있습니다.
## 🛠️ SKILL

### Front End
<div class="chart-container front-end-skill-container"></div>


### Back End
<div class="chart-container back-end-skill-container"></div>


### Etc
<div class="chart-container etc-skill-container"></div>


## 💼 Work Experience

### 퍼즐데이터 - 19.10~23.05 (44개월) 

- 데이터 마이닝을 통한 프로세스 개선을 지원하는 데이터 시각화 플랫폼 제공 및 컨설팅 서비스 제공


**프로젝트 : 자체 솔루션 3.0 개발**

* 기간 : 21.03 - 23.05 (26개월)
* 사용기술 : 자체 프론트 프레임워크 개발(proxy, redux 활용), vanilla script, es6 이상 문법 사용, class형 컴포넌트, scss, webpack, babel, eslint
* [프로젝트 시연 영상](https://www.youtube.com/watch?v=UxOh1jiwZMk)
* 개발 내용
    1. 2.0의 경험을 바탕으로 더 나은 분석 제공을 위한 3.0 솔루션 개발
    2. 효과적인 데이터 시각화 구현을 위해 자체 Front Frame Work 개발

* 주요 담당 개발 내용
    1. grid 라이브러리 개발
       * 대용량 grid 시각화 처리(tr, td 컴포넌트 화, 이벤트 바인드 최적화)
       * 셀 내에 막대 그래프 표시
       * 행, 열 길이 조정, 이동 구현
       + 개발을 진행하면서 겪은 이슈 및 성능 개선 기여한 내용
          > 많은 양의 컴포넌트 렌더링(1000개 이상)으로 인한 속도 저하
          > - 많은 양의 컴포넌트(1000개 이상) 렌더링 위해 코드 최적화를 통한 성능 개선(class형 컴포넌트가 상속 받은 코드들 중 사용되지 않는 코드들이 실행되지 않도록 처리)
          > - 이벤트 버블링의 원리를 이용해 컴포넌트들에게 바인드 된 이벤트 없애고 각 이벤트가 발생하는 class 이름을 이용한 이벤트 제어를 통해 성능 개선 작업
          > - click 이벤트를 차트에 한개 만 bind 하고 발생한 component를 구분해서 해당 component에 맞는 click event 로직이 실행되도록 함

    2. web memo editor 구현
        * editor 구현
        * 변수 기능 개발
* 개발 진행
    * 기획문서 확인 및 피그마를 통해서 UI, UX 확인
    * 주기적인 개발팀 회의 및 코드 리뷰 진행
    * 테스트문서 확인을 통해 오류수정 및 이슈관리

<br>
**프로젝트 : 자체 솔루션 2.0 오류 개선, 기능 개선**

* 기간 : 19.10 - 21.03 (18개월)
* 사용기술 : AngularJS, Elastic Search
* [프로젝트 시연 영상](https://www.youtube.com/watch?v=7FyYIkmuPQA)
* 개발 내용
  * 2.0이 가지고 있는 오류 및 성능 이슈 수정
  * 컨설팅팀의 의견을 바탕으로 제품 ux 개선
  * 개발을 진행하면서 겪은 이슈 및 성능 개선 기여한 내용
    > 많은 양의 데이터를 다루다 보니 평균, 중앙값 등 의 값을 연산할 때 시간이 오래걸림
    > - 자주 사용되는 값(평균, 중앙값, 데이터 시작,끝 timestamp) 등을 한번 연산이후 에 브라우저 캐쉬에 저장하도록 수정
    


### 하나사무회계소 - 2019.03 - 2019.06 (4개월)

**프로젝트명 : howtax.co.kr 웹페이지 개발**
* 주사용 기술 : PHP, Bootstrap, jQuery, MySQL, Android(Java)
* [프로젝트 시연 영상](https://www.youtube.com/watch?v=KpAL2htK1w4)
* 개발 내용
  1. 카카오 알림 톡 API와 SMS API를 이용한 문자 전송 서비스
  2. 근로계약서 작성, 출퇴근 관리, 인건비 관리, 고객 스탬프 적립 기능

* 주요 개발 내용
  1. 1인 개발을 진행, 위 내용을 모두 담당

### SG데이타 2018.03 - 2018.06 (4개월)

**프로젝트명 : 패션 ERP 웹페이지 개발**
* 학점 연계제 ICT 인터십으로 근무
* 주사용 기술 : egovframework, Java, jQuery, PostgreSQL
* 개발 내용
  1. 패션 물품 재고관리 페이지 개발

## 🚀 사이드 프로젝트

**프로젝트명: 오늘의 날씨**
* 사용기술: TypeScript, React, Container/Presentational 패턴, Redux-toolkit, axios, react-chart, styled-component, KAKAO Map(Local) API
* 프로젝트 내용: 시,도/구/동 선택 또는 주소 입력을 통해 해당 지역의 오늘 날씨를 그래프로 보여줍니다.
* 개발 과정: 공부 목적을 위한 프로젝트 진행
* [포트폴리오 링크](https://hyundev.github.io/assets/pdf/todayWeatherPortfolio.pdf)
* [Git 링크](https://github.com/hyunDev/todayWeather)
* 아키텍쳐: 
![example image](https://hyundev.github.io/assets/images/todayWeatherArchitecture.png "An exemplary image")

**프로젝트명: Wage Calculator**
* 사용기술: React Native
* 프로젝트 내용: 사용자가 시급을 입력해 일하는 동안 벌어드인 돈을 계산하는 어플리케이션
* 개발 과정: 아는 분의 요청으로 기획 및 개발, 안드로이드 플레이스토어에 출시
* [구글 플레이 링크](https://play.google.com/store/apps/details?id=com.wagecalculator)

**프로젝트명: Fantasy Shisen-Sho**
* 사용기술: Unity, c#
* 프로젝트 내용: Fantasy 게임에 등장하는 아이템 타일들을 이용하여 사천성 규칙에 의해서 타일을 맞추는 퍼즐 게임
* 개발 과정: 사천성 규칙 판단을 위해, BFS 알고리즘 활용 및 맞추어진 타일 경로 애니메이션 구현 등을 개발, 광고를 통한 수입 목적 개발 및 출시
* [구글 플레이 링크](https://play.google.com/store/apps/details?id=com.SimpleIsBestByHyun.FantasyShisenSho)

## 🏆 CERTIFICATE

**정보처리기사 (최종합격)**

* 2019.08
* 한국산업인력공단

**TOEIC Speaking Test (120점/intermediate Mid2급/PASS)**

* 2018.07

**교내 알고리즘 대회**
* 전교생 대상 대회 2등 수상
* 2017


## 🏫 Education

**서경대학교(4년제) (주간)**

* 2015.03 ~ 2020.02 (졸업)
* 소프트웨어학과
* 학점 3.79/4.5

**영훈고등학교**

* 2007.03 ~ 2010.02 (졸업)
* 이과계열


## ⁉ ETC

**경험/활동/교육**

* 2016.03 ~ 2016.08 (6개월)
* C언어 강의 : 유닛소프트 학원에서 초/중/고 대상으로 C언어 강의 진행

**군필(육군/병장)**

* 2012.08 ~ 2014.05
* 만기전역
