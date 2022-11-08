// Q1
function 삼육구게임(n) {
    if (n % 3 == 0) {
        console.log('박수');
    } else {
        console.log('통과');
    }
}

// Test Cases
삼육구게임(15); // 박수
삼육구게임(11); // 통과

// Q2
function 업그레이드된삼육구게임(n) {
    if (n % 3 == 0 && n % 9 != 0) {
        console.log('박수');
    } else if (n % 9 == 0) {
        console.log('박수x2');
    } else {
        console.log('통과');
    }
}

// Test Cases
업그레이드된삼육구게임(15); // 박수
업그레이드된삼육구게임(81); // 박수x2
업그레이드된삼육구게임(5); // 통과

// Q3
function 합격했냐(n, m) {
    if (n + m >= 120) {
        if (n >= 40 && m >= 40) {
            console.log('합격');
        } else {
            console.log('불합격');
        }
    } else {
        console.log('불합격')
    }
}

// Test Cases
합격했냐(70, 70); // 합격
합격했냐(30, 100); // 불합격
합격했냐(50, 50); // 불합격

// Q4 (응용)
function 삼육구응용게임(n) {
    if (n % 10 == 3 || n % 10 == 6 || n % 10 == 9) {
        console.log('박수');
    } else {
        console.log('통과');
    }
}

// Test Cases
삼육구응용게임(15); // 통과
삼육구응용게임(29); // 박수

// Q5 (응용2)
function 합격했냐응용(n, m) {
    if (n < 0 || n > 100 || m < 0 || m > 100) {
        alert('장난치지 마세요');
    } else {
        if (n + m >= 120) {
            if (n >= 40 && m >= 40) {
                console.log('합격');
            } else {
                console.log('불합격');
            }
        } else {
            console.log('불합격')
        }
    }
}

// Test Cases
합격했냐응용(-10, 30); // alert
합격했냐응용(50, 120); // alert
합격했냐응용(70, 70); // 합격
합격했냐응용(30, 100); // 불합격
합격했냐응용(50, 50); // 불합격