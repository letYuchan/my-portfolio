import type { Project } from "@/pages/home/model/home.types";
import project1 from "@/assets/imgs/digitalCardDateService.png";
import project2 from "@/assets/imgs/ssumpick.png";
import project3 from "@/assets/imgs/trinity.png";
import project4 from "@/assets/imgs/etevers.png";
import project5 from "@/assets/imgs/cloody.png";
import project6 from "@/assets/imgs/velogit.png";
import project7 from "@/assets/imgs/ddareungiMap.png";

export const projects: Project[] = [
  {
    id: "digital-card-date",
    name: "Digital Card Date Service",
    shortName: "Digital Card Date",
    role: "기획 · 디자인 · 프론트엔드",
    period: "2024.01 - 2024.03",
    summary:
      "명함 기반 소개팅 서비스로, 최소한의 정보로 자기소개를 공유하고, 상대를 '카드'처럼 탐색할 수 있는 웹 서비스입니다.",
    heroImage: project1,
    problem:
      "기존 소개팅/매칭 서비스는 과도한 프로필 입력과 부담스러운 피드 UI로 인해 가볍게 시도하기 어렵고, 연락처 노출에 대한 심리적 부담이 큽니다.",
    solution:
      "실제 명함을 모티브로 한 카드 UI를 설계하고, 최소한의 정보만 노출되는 구조로 진입 장벽을 낮췄습니다. 대학교 이메일 인증 오픈소스를 활용하여 사용자의 안전을 확보했습니다.",
    highlights: [
      "필자의 최초 팀 프로젝트로, 기획·디자인·프론트엔드 전 영역 담당",
      "명함 레이아웃 기반 카드 디자인 및 반응형 웹 퍼블리싱",
      "Vanila JS와 Flask 기반 풀스택 웹 애플리케이션 개발",
      "대학 이메일 인증 오픈소스 활용한 안전한 사용자 인증 시스템 구현",
    ],
  },
  {
    id: "ssumpick",
    name: "SSUMPICK",
    shortName: "SSUMPICK",
    role: "프론트엔드 · 기획 · 디자인 · 운영",
    period: "2025.01 - 2025.06",
    summary:
      "기존 디지털 명함 소개팅의 UI/UX를 대폭 개선한 소개팅 웹 서비스입니다.",
    heroImage: project2,
    problem:
      "기존 프로젝트는 UI/UX가 다소 부족하여 실제로 배포·운영하기에 한계가 있었습니다.",
    solution:
      "디자이너와 작업하여 UI/UX를 전면 개선하고, React·TailwindCSS 기반으로 재구축하여 유지보수성과 확장성을 높였습니다. 이상형 기반 매칭 알고리즘을 사용하여 사용자 경험을 향상시켰습니다.",
    highlights: [
      "16가지 동물상 + 포인트 컬러로 얼굴 사진 없이도 나를 표현하는 개인화된 프로필 시스템 구현",
      "사용자 무단 이용 및 비정상적인 접근을 방지하는 보안 강화",
      "자체 피드백 수집 페이지 구축으로 실시간 사용자 피드백 수집",
      "실시간 사용자 피드백 반영 및 지속적인 UI/UX 개선",
      "관리자 페이지 구축으로 사용자 관리 및 통계 기능 제공",
      "React 기반 컴포넌트 구조화로 카드 타입 확장 용이",
    ],
  },
  {
    id: "trinity",
    name: "TRINITY",
    shortName: "TRINITY",
    role: "프론트엔드",
    period: "2024.12 - 2025.02",
    summary:
      "실제 골프장 운영을 위한 트랙 모드 맵, 리얼타임 카트 위치, 라운드 진행 상황을 한 눈에 볼 수 있는 운영 대시보드입니다.",
    heroImage: project3,
    problem:
      "골프장 운영자는 현재 카트 위치와 라운드 진행 현황을 실시간으로 파악하기 어렵고, 전화·무전기에 의존한 운영으로 비효율이 발생합니다.",
    solution:
      "GPS 좌표를 코스 맵 이미지 위 픽셀 좌표로 매핑하는 시스템을 구현하고, 카트·홀·진행상황을 시각적으로 표현하는 트랙 모드 대시보드를 제작했습니다.",
    highlights: [
      "위도/경도 → 코스 이미지 픽셀 좌표 변환 로직 구현",
      "홀별 시작/중간/종료 지점을 기준으로 카트 진행률 시각화",
      "확대/축소시에도 정확한 위치 표시를 위한 반응형 맵 구현",
      "캐디·회원·골프인원·홀 정보를 실시간으로 연결하는 데이터 플로우 설계",
    ],
  },
  {
    id: "etevers",
    name: "ETEVERS",
    shortName: "ETEVERS",
    role: "프론트엔드",
    period: "2025.01 - 2025.02",
    summary:
      "해외 제조사·국내 유통사·판매 대리점을 연결하는 HR 자동 견적 시스템의 관리자 대시보드입니다.",
    heroImage: project4,
    problem:
      "사용자 역할에 따른 UI 제공 및 복잡한 견적 상태 관리와 대용량 데이터 시각화를 효과적으로 처리할 수 있는 UI 아키텍처가 필요했습니다.",
    solution:
      "Tanstack Table 기반의 가상화 테이블로 대용량 데이터 렌더링을 최적화하고, 권한별 UI 플로우 설계로 사용자 역할에 따른 맞춤형 경험을 제공했습니다.",
    highlights: [
      "역할별(제조사/유통사/대리점) 화면 구조 및 권한 기반 UI 플로우 설계",
      "견적서 주문 단계에 따른 UI 플로우 설계",
      "Tasnstack Table 기반 대용량 데이터 가상화 테이블 구현",
      "상태 관리(Zustand)로 견적 상태 일관되게 제어",
      "화면 상태에 따라 Header 컴포넌트 동적 렌더링",
    ],
  },
  {
    id: "cloody",
    name: "CLOODY",
    shortName: "CLOODY",
    role: "퍼블리셔",
    period: "2025.03 - 2025.03",
    summary: "클라우드 시스템 관리 대시보드입니다.",
    heroImage: project5,
    problem:
      "짧은 개발 기간 내에 복잡한 B2B 클라우드 관리 UI를 구현해야 했고, 다양한 화면 크기에서 많은 데이터 UI를 효과적으로 보여줘야 했습니다.",
    solution:
      "디자인 시스템 기반의 컴포넌트 라이브러리를 활용해 일관된 UI를 빠르게 구현하고, 차트·카드 컴포넌트를 조합한 데이터 시각화 레이아웃을 설계하여 복잡한 정보를 명확하게 전달했습니다.",
    highlights: [
      "차트와 카드 컴포넌트를 조합한 커스텀 데이터 시각화 UI 구현",
      "반응형 레이아웃으로 데스크탑·태블릿 환경 동시 대응",
      "디자인 시스템 기반 컴포넌트 활용으로 개발 속도 향상",
    ],
  },
  {
    id: "velogit",
    name: "VELOGIT",
    shortName: "VELOGIT",
    role: "프론트엔드 · 기획 · 디자인",
    period: "2025.07 - 2025.08",
    summary:
      "GitHub Pages 기반 정적 블로그 플랫폼으로, 마크다운 에디터, 하이라이트, 댓글, 테마, 성장 시스템까지 직접 구현했습니다.",
    heroImage: project6,
    problem:
      "기성 블로그 플랫폼은 커스터마이징 한계가 있어, 개발자 포트폴리오 중심의 글쓰기·테마·툴링 경험을 원하는 그대로 구현하기 어렵습니다.",
    solution:
      "Vite + React + Tailwind 기반의 정적 블로그 엔진을 직접 구축하고, 마크다운 에디터·테마 시스템·댓글·성장 시스템 등 개발자에게 최적화된 기능을 커스터마이징 가능하게 설계했습니다.",
    highlights: [
      "마크다운 플로팅 툴바, 단축키, 테이블·이미지 삽입 등 에디터 툴링 직접 구현",
      "카테고리/태그/TOC/관련 글/댓글 등 블로그 기본 기능 풀스택 구축",
      "GitHub Pages + GitHub Actions를 활용한 정적 배포 파이프라인 구성",
    ],
  },
  {
    id: "ddareungi-map",
    name: "DDAREUNGI MAP",
    shortName: "DDAREUNGI MAP",
    role: "프론트엔드 · 기획 · PM · 리더",
    period: "2025.07 - 진행 중",
    summary:
      "서울시 공공자전거 사용자들을 위한 도보-자전거-도보 통합 경로 네비게이션 솔루션으로, 경로 추천, 탄소 절감·칼로리 계산, 지도 인터랙션을 제공합니다.",
    heroImage: project7,
    problem:
      "기존 지도 서비스는 자전거·따릉이 사용자 관점의 경로 추천과 네비게이션 UX를 제공하지 못하고, 빗스한 경쟁 서비스들은 불편한 인터랙션과 부족한 기능으로 사용자 경험이 떨어집니다.",
    solution:
      "따릉이 스테이션과 도로 정보를 조합한 경로 추천 로직을 설계하고, 이동 경로에 따른 탄소 절감량과 칼로리 소모를 함께 제공하는 네비게이션 UX를 구현하고 있습니다.",
    highlights: [
      "React Native 기반 크로스플랫폼 앱 개발",
      "OSRM 기반으로 출발지와 대여소 그리고 목적지를 잇는 통합 경로 추천 알고리즘 설계",
      "실시간 위치 추적 기반 네비게이션 및 음성 안내 기능 구현",
      "목표 거리 기반 원형 순환 경로 추천 기능",
      "실시간 데이터 기반 사용자 중심 지도 인터랙션 디자인",
      "OAuth2.0 PKCE 인증 알고리즘 자체 구현",
    ],
  },
];
