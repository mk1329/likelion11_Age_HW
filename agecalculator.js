let el = document.getElementById('birthday');
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

/* 오늘 날짜 반환 */
const today = new Date();


function calculateAge() {
    /* 생년월일 입력 -> 날짜로 변환 */
    let birthDate = new Date(el.value);
    let age;

    /* 생일 기준 1년 뺄지말지 */
    /* 생일 '월' 지난 경우 */
    /* 생일 '월' 같고, '일' 지난 경우 */
    if (today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate()
        )
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullYear() -1;
    }

    /* ``로 묶을 것 */
    elResult.innerText = `귀하의 만 나이는 ${age} 입니다.`;
    
    return age;
}

/* submit - 제출하기 버튼 클릭 */
elSubmit.addEventListener('click', calculateAge);