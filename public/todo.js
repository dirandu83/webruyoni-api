
// https://api.winters0727.kr/furuyoni/images/card/kor/01-O-N-1.jpg


// 외부 이미지 호출 시 referrer 제한으로 인한 오류 발생 시 아래 meta 태그 추가
// <meta name="referrer" content="no-referrer" />
// 또는 각 img 태그에 referrerpolicy="no-referrer" 추가
// <img referrerpolicy="no-referrer" src="외부 이미지 경로"/>



// imgSrc: [
//     `${SYSTEM.DISCORD_IMAGE_DOMAIN}`,
//     `${SYSTEM.IMAGE_DOMAIN}`,
// ],

// 兩虎相鬪(양호상투) : 두 마리의 범이 서로 싸운다는 뜻으로, 힘이 센 두 편이 맞붙어 다툼을 비유적으로 이르는 말.
// 孤軍奮鬪(고군분투) : (1)운동경기나 싸움에서 혼자서 많은 수의 적들을 상대하여 힘들게 싸움.
// (2)남의 도움을 받지 아니하고 힘에 벅찬 일을 잘해 나가는 것을 비유적으로 이르는 말
// 乾坤一擲(건곤일척) : 주사위를 던져 승패를 건다는 뜻으로, 운명을 걸고 단판걸이로 승부를 겨룸을 이르는 말.

// '테스트' 메뉴 추가 - 각종 여신별 카드 선택하여 사용 테스트, 상대 카드도 선택/사용 가능, 대응 등 테스트
// pico.css 적용
// 카드목록 - 필터에 '추가패' 추가
// 렌리/위증 카드 추가
// 카드 목록(여신별) - 기원전 선택 시 현재 선택된 여신이 포함되지 않으면 미선택 처리

// 2024.02.06
// 부여 카드 사용시 납 처리 오류 (완료)
// 덱 관리
// 쌍장 여신 선택 및 카드 선택 저장 시 tts 연동 덱 코드 제공 및 개인별 덱 관리 제공
// 납 지불 시 오라/더스트 선택 팝업
// 파기되는 부여패가 복수일 경우 선택 팝업 구현
// 멀리건 action 구현
// 버리는 카드 고르는 팝업창 구현
// 덮임패 덱 클릭 시 덮임패 카드 목록 보기 팝업창 구현 (완료)

// 2024.02.02
// 카드목록(조건별) - 공격 후/재기/즉재기 여부, 종단, 초극, 독, 징병, 기동, 연소 등 => 현재 구현 불가 (카드 구현 끝나면 가능)
// FAQ 추가 (winters 님 API 호출)
// http://api.winters0727.kr/furuyoni/faq/category
// http://api.winters0727.kr/furuyoni/faq?category=라이라&keyword

// 2024.01.31
// 대진표 (스위스/토너먼트)
// 로그인 필참 여부, 대회/교류회 모집 및 대진표 생성까지 다이렉트 참가자 수 및 아이디 입력 후 실행 시
// 자동 대진표 랜덤 매칭 및 승패관리, 자동 선후공 사용유무에 따라 은박 스크래치 노출 분기 처리
// (선공 : 루시이뽀, 자동 사용 시 노출, 미사용 시 비노출 및 은박 스크래치 클릭 시 노출)
// ==========================================
// 드래프트 (인천/회기 미플 버전 선택)
// 참가 인원 수, 사용 코어 수, 사용 카드 분류(통상패, 비장패, 추가패, 공격, 행동, 부여, 전력, 대응), 특정 카드풀 직접 지정 등

// 2024.01.27
// og 태그 적용 (사이트 미리보기)
// 카드 목록 - 카드 이미지 로딩 전 와꾸 표시

// 2023.12.22
// 카드관리 - 카드 클릭 확대 시 스와이프로 이전/다음 카드로 이동하도록 구현

// 2023.12.14
// 대전 종료 후 게임 재시작 버튼 추가
// 메인화면 하단으로 credit 내용 및 라이센스, 저작권 안내 문구 삽입
// 상대 턴에 내 카드로 대응을 하였는데 상대가 쓴 것으로 처리 되는 오류 수정
// 데미지 결정 팝업을 게임보드판 현황이 보이도록 자신의 손패 쪽으로 위치 변경
// - 데미지나 오라 피해보다 적은 오라일 경우 선택불가하도록 변경 (disable 및 안내 메시지 출력)
// 오토마 대응 카드를 손에 든 채로 턴을 넘겨 '대응' 으로 쓸 수 있도록 수정

// 2023.12.13
// 현재 간격이 달인의 간격으로부터 2칸 내외 시 노출하도록 수정
// 여신 타롯 확대시 클릭하면 뒷면 회전 구현

// 데미지 선택 시 - 데미지는 선택불가 처리, 양쪽 대미지일 경우 아무거나 클릭 시 진행
// 데미지 선택 시 대응 카드 처리 확인 필요
// 최초의 결투에 한해 매 카드 확대 시(사용 전) 빨간색 동그라미 폰트 레이어로 안내 메시지 표시
// 로컬스토리지로 대화명 및 최초의 결투 클리어 여부 판단

// 2023.12.12
// 액션 로그 추가
// 부여 패 - 자동 납 떨어지지 않음 플래그 추가

// self, opponent 명칭을 'firstUser', 'lastUser' 로 일괄 변경
// 전개 시, 전개 중 변수를 각각 deployStart, deploying 으로 일괄 변경

// 5. 웹 시뮬레이터 모작
// 6. 덱 빌더 메뉴 구현
// 7. 덱 코드 저장/불러오기 적용(러프멜로디)
// ====================================================================================
// 한 여신당 6자리로 총 12자리로 구성된 코드입니다.
// 6자리 구성은 이렇습니다.
// 예시: 유리나O + 참(1), 일섬(2), 자루치기(3), 거합(4), 달그림자(1), 해안(2) 선택시
// 1)첫 두자리: 01(여신번호)
// 2) 세번째 자리: 0(어나더 번호, 오리진인 경우 0)
// 3) 마지막 세자리: 12자리 2진수 생성 100000000000
// 3-1) 맨 앞자리는 자릿수 맞추기용 '1'
// 3-2) 나머지 11자리는 각 카드번호에 대응 (1~7통상패, 8~11비장패)
// 3-3) 덱에 들어간 카드에 해당하는 부분은 1로 변경 (111110001100)
// 3-4) 12자리 2진수를 16진수로 변환 (F8C)
// 4) 코드 완성 010F8C
// ====================================================================================

// 대응 구현
// 각 진행상황을 localStorage 로 저장하여 재접속 시 체크하여 진행상황 복구 구현
// 핸드에서 카드 사용가능 유무(canUseCheck) css 적용 (원심 추가로 인한 수정)

// 공격으로 대응 가능한 카드 목록의 줄바꿈
// 우산, 독, 대응, 순풍/역풍 카드 추가

// 2. 벚꽃결정 호버 시 외곽선 추가 (불가 - 벚꽃 모양 외곽선을 딸 수가 없음)
// 3. 덱 만들기 구현
// 4. 벚꽃결투 로비 및 방 만들기/입장 구현

// 1. 웹소켓  준비
// 2. 이미지 l프로젝트azyload 구현
// 3. debug 버튼 누를경우 한시적(현재 턴)으로 수동조작 버튼 활성화
// 4. actionLog를 방 단위 log로 누적하여 replay 만들수 있도록 설정
// 5. 사이드보드 공간에 여신 눈매이미지로 여신 및 능력 활성화 표시
// 6. 클릭시 확대되어 여신 타롯 및 여신 사이드보드 표현

// 3. 스탯 변경 시 벚꽃토큰 이동 애니메이션 구현

// 턴 종료 시, 해당 턴 플레이어 안내 문구 modal 필요

// 여신 카드 사이즈
// ?width=80&height=112
// ?width=120&height=167

// 전투결과 이미지 사이즈
// ?size=160
// ?size=320
// ?size=640

// https://imgbb.com/
// https://socketsbay.com/      webruyoni   9e085c2872bed986163da91713e91065
// https://fly.io               네이버      dirandu83 [git]


// =================================================================

// deckImgSrc() {
//     return IMAGE_LIST.AREA.DECK.imgSrc
// },
// usedCardImgSrc() {
//     return IMAGE_LIST.AREA.USED.imgSrc
// },
// hiddenCardImgSrc() {
//     return IMAGE_LIST.AREA.HIDDEN.imgSrc
// },

// =================================================================

// 이미지
// basicAction() { // 기본 동작
//     return IMAGE_LIST.BUTTON.BASIC_ACTION
// },
// selectDamage() {    // 피해 선택
//     return IMAGE_LIST.BUTTON.SELECT_DAMAGE
// },
// consumeFlare() {    // 플레어 소비
//     return IMAGE_LIST.BUTTON.CONSUME_FLARE
// },

// =================================================================

// 공격 생성 샘플
// const attackInfo = {
//     auraDmg: '-',
//     lifeDmg: 1,
//     distance: [3,4,5,6],
//     canNotAvoid,
//     canNotChoose,
//     target: opponentPlayer(),
// }
// ACTION.createAttack(attackInfo)

// return new Promise((resolve) => setTimeout(resolve({}), 1000));

// =================================================================

// https://i.ibb.co/99jW4rL/image.jpg	// 대응함
// https://i.ibb.co/mRPBzJL/image.jpg	// 미대응
// https://i.ibb.co/5rwF4zL/image.png	// 귀모
// https://i.ibb.co/YbmRMRf/image.png	// 신산
// https://i.ibb.co/Cm097jJ/image.png	// 계략 뒷면
// https://i.ibb.co/tD8sBgv/image.jpg	// 우산 접음
// https://i.ibb.co/nC8R8zT/image.jpg	// 우산 펼침
// https://i.ibb.co/zZrswk8/image.jpg	// 독 뒷면
// https://i.ibb.co/HXt7K0n/image.jpg	// 순풍
// https://i.ibb.co/ZfMSqNq/image.jpg	// 역풍
// https://i.ibb.co/z6Nm9Sv/image.jpg	// 잠수 뒷면
// https://i.ibb.co/2hj1y4k/image.jpg	// 잠수 전진
// https://i.ibb.co/rmGGP5L/image.jpg	// 잠수 후퇴

// https://i.ibb.co/YPpG4Tk/image.jpg	// 우츠로(소)
// https://i.ibb.co/hLVGYdw/image.jpg	// 우츠로
// https://i.ibb.co/khXMtkG/image.jpg	// 유리나(소)
// https://i.ibb.co/dtM4VR0/image.jpg	// 유리나
// https://i.ibb.co/SfZhLkm/image.jpg	// 유키히(소)
// https://i.ibb.co/CBy5pxg/image.jpg	// 유키히
// https://i.ibb.co/dGb8v3w/image.jpg	// 치카게(소)
// https://i.ibb.co/cNxy270/image.jpg	// 치카게
// https://i.ibb.co/HLytPXf/image.jpg	// 코르누(소)
// https://i.ibb.co/QNxs6M3/image.jpg	// 코르누
// https://i.ibb.co/jTnRfV6/image.jpg	// 쿠루루(소)
// https://i.ibb.co/KVwVZYy/image.jpg	// 쿠루루
// https://i.ibb.co/VLvxSMK/image.jpg	// 토코요(소)
// https://i.ibb.co/H2F8SSH/image.jpg	// 토코요
// https://i.ibb.co/y4pKqxb/image.jpg	// 하가네(소)
// https://i.ibb.co/47931W9/image.jpg	// 하가네
// https://i.ibb.co/4VCp5hq/image.jpg	// 히미카(소)
// https://i.ibb.co/tJBzQv7/image.jpg	// 히미카
// https://i.ibb.co/ZV8SnR3/image.jpg	// 사이네(소)
// https://i.ibb.co/rmcJfCd/image.jpg	// 사이네
// https://i.ibb.co/JdW2B3c/image.jpg	// 신라(소)
// https://i.ibb.co/z6dG0q3/image.jpg	// 신라