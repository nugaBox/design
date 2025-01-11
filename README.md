# nugaBox Design

> <https://design.nugabox.com>


## Directory

- `assets` : 정적 파일
- `dashboard` : 프로젝트별 작업현황
- `repos` : 레포지토리 소스 (서브모듈 방식)
- `sites` : 레포지토리 링크 (심볼릭링크)

## 프로젝트 목록

|Repo Name|Repo URL|Description|Created Date|
|---|---|---|---|
|newpeoplech-html|https://github.com/nugabox/newpeoplech-html.git|광주새백성교회 홈페이지|2021-04-15|
|univ-html|https://github.com/nugabox/univ-html.git|대학정보 홈페이지|2022-11-13|
|dimetime-html|https://github.com/nugabox/dimetime-html.git|Dimetime 홈페이지|2023-01-04|
|nkcc-html|https://github.com/nugabox/nkcc-html.git|새광주교회 홈페이지|2024-05-22|
|changeok-html|https://github.com/nugabox/changeok-html.git|창억떡 쇼핑몰|2025-01-11|


## 프로젝트 관리

> - 아래 내용을 따라 repos 디렉토리에 원격 레포지토리를 서브모듈로 추가
>
> - 작업 중인 repos를 연결하기 위해 sites 디렉토리에 심볼릭 링크 생성
>
> - dashboard는 필요하면 생성

### 프로젝트 추가

1. Git 원격 레포지토리 생성 (예 : nugabox-html)
1. 로컬에서 현재 레포지토리의 repos 디렉토리 진입
   ```bash
   cd repos
   ```
1. 서브모듈로 원격 레포지토리 추가
   ```bash
   git submodule add <원격 레포지토리 주소> <레포지토리 이름>
   git submodule add https://github.com/nugabox/nugabox-html.git nugabox-html
   ```
1. 레포지토리 서브모듈 반영 (루트 디렉토리로 이동)
   ```bash
   cd ..
   git add .gitmodules repos/nugabox-html
   ```
1. sites 디렉토리에 심볼릭 링크 생성
   ```bash
   cd sites
   ln -s ../repos/nugabox-html nugabox-html
   ```
1. 원격 레포지토리에 로컬 내용 반영
   ```bash
   cd ..
   git add .
   git commit -m "nugabox-html 서브모듈 추가"
   git push
   ```

### 프로젝트 삭제

1. 레포지토리 서브모듈 삭제
   ```bash
   git submodule deinit -f repos/nugabox-html
   rm -rf repos/nugabox-html .git/modules/repos/nugabox-html
   git rm -f repos/nugabox-html
   git commit -m "nugabox-html 서브모듈 삭제"
   git push
   ```
