# wanted-pre-onboarding-week2
원티드 프론트엔드 프리온보딩 인턴십 2주차 과제

## 첼린지
1. 검색 바
   - onFocus 했을 경우, Input의 스타일과 X버튼 등장 시켰습니다.
   - 단, 이 때 X버튼이 눌렀을 때에는 onFocus 했을 때 적용된 스타일 유지와 입력한 검색어를 사라지게 해야 합니다.
   - 그리고 onBlur할 때에는 onFocus하지 않았을 때의 기본 모습으로 돌아와야 합니다.
   - 이 과정에서 onFocus, onBlur, onKeyDown를 사용했고 onKeyDown시 onBlur가 일어나지 않도록 onBlur 핸들러 함수 내부에 `e.preventDefault()`를 실행시켰습니다.