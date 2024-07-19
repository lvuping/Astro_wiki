import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "G-CIC",
      // social: {
      // 	github: 'https://github.com/withastro/starlight',
      // },
      sidebar: [
        {
          label: "개요",
          items: [
            { label: "CS 모듈 소개", slug: "overview/cs-module-intro" },
            { label: "주요 기능 및 특징", slug: "overview/key-features" },
          ],
        },
        {
          label: "비즈니스 프로세스",
          items: [
            {
              label: "고객 서비스 프로세스 개요",
              slug: "business-processes/customer-service-overview",
            },
            {
              label: "서비스 요청 관리",
              slug: "business-processes/service-request-management",
            },
            {
              label: "서비스 계약 관리",
              slug: "business-processes/service-contract-management",
            },
            {
              label: "클레임 처리",
              slug: "business-processes/claim-processing",
            },
            {
              label: "현장 서비스 관리",
              slug: "business-processes/field-service-management",
            },
          ],
        },
        {
          label: "데이터 흐름도",
          items: [
            {
              label: "전체 CS 모듈 데이터 흐름",
              slug: "data-flow/overall-data-flow",
            },
            {
              label: "주요 프로세스별 데이터 흐름",
              slug: "data-flow/key-process-data-flow",
            },
          ],
        },
        {
          label: "주요 테이블",
          items: [
            {
              label: "마스터 데이터 테이블",
              slug: "key-tables/master-data-tables",
            },
            {
              label: "트랜잭션 데이터 테이블",
              slug: "key-tables/transaction-data-tables",
            },
            { label: "설정 테이블", slug: "key-tables/configuration-tables" },
          ],
        },
        {
          label: "ABAP 개발 가이드",
          items: [
            {
              label: "코딩 표준 및 모범 사례",
              slug: "abap-development-guide/coding-standards",
            },
            {
              label: "주요 함수 모듈 및 클래스",
              slug: "abap-development-guide/key-function-modules",
            },
            {
              label: "성능 최적화 팁",
              slug: "abap-development-guide/performance-optimization",
            },
          ],
        },
        {
          label: "인터페이스",
          items: [
            {
              label: "다른 SAP 모듈과의 연계",
              slug: "interfaces/sap-module-integration",
            },
            {
              label: "외부 시스템 연동",
              slug: "interfaces/external-system-integration",
            },
          ],
        },
        {
          label: "설정 및 커스터마이징",
          items: [
            {
              label: "기본 설정 가이드",
              slug: "configuration-customization/basic-configuration",
            },
            {
              label: "커스터마이징 옵션",
              slug: "configuration-customization/customization-options",
            },
          ],
        },
        {
          label: "보고서 및 분석",
          items: [
            {
              label: "표준 보고서 목록",
              slug: "reports-analysis/standard-reports",
            },
            {
              label: "맞춤형 보고서 개발 가이드",
              slug: "reports-analysis/custom-report-development",
            },
          ],
        },
        {
          label: "문제 해결",
          items: [
            {
              label: "일반적인 이슈 및 해결 방법",
              slug: "troubleshooting/common-issues",
            },
            { label: "로그 분석 가이드", slug: "troubleshooting/log-analysis" },
          ],
        },
        {
          label: "변경 관리",
          items: [
            { label: "릴리스 노트", slug: "change-management/release-notes" },
            {
              label: "패치 및 업그레이드 가이드",
              slug: "change-management/patch-upgrade-guide",
            },
          ],
        },
        {
          label: "교육 자료",
          items: [
            { label: "사용자 매뉴얼", slug: "training-materials/user-manual" },
            {
              label: "교육 동영상 및 프레젠테이션",
              slug: "training-materials/training-videos",
            },
          ],
        },
        {
          label: "FAQ",
          items: [{ label: "자주 묻는 질문 및 답변", slug: "faq/faq" }],
        },
      ],
    }),
  ],
});
