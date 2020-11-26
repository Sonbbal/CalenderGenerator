const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth();
const nowFirstDay = new Date(`${nowYear}-${nowMonth + 1}`);
const prevMonth = () => {
    if(nowMonth === 0) {
        const prevMonth = new Date(`${nowYear - 1}-12`);
        return prevMonth;
    } else if (nowMonth === 11) {
        const prevMonth = new Date(`${nowYear}-${nowMonth}`);
        return prevMonth;
    } else {
        const prevMonth = new Date(`${nowYear}-${nowMonth}`);
        return prevMonth;
    }
}
const nextMonth = () => {
    if(nowMonth === 0) {
        const nextMonth = new Date(`${nowYear}-${nowMonth + 2}`);
        return nextMonth;
    } else if (nowMonth === 11) {
        const nextMonth = new Date(`${nowYear + 1}-1}`);
        return nextMonth;
    } else {
        const nextMonth = new Date(`${nowYear}-${nowMonth + 2}`);
        return nextMonth;
    }
}


// Date 객체를 해당 달에 맞게 배열 생성
const generateMonth = (date) => {
    let monthNumber = date.getMonth();
    let month = [];
    
    // 숫자 배열 생성
    const numberArr = ( num ) => {
        let newArry = [];
        for(let i = 1; i <= num; i++){
            newArry.push(i)
        }
        return newArry;
    }

    if (monthNumber === 0 || monthNumber === 2 || monthNumber === 4 || monthNumber === 6 || monthNumber === 7 || monthNumber === 9 || monthNumber === 11 ) {
        month = numberArr(31);
    } else if (monthNumber === 3 || monthNumber === 5 || monthNumber === 8 || monthNumber === 10) {
        month = numberArr(30);
    } else {
        if((nowYear % 4 === 0 && nowYear % 100 === 0) || nowYear % 400 === 0 ){
            month = numberArr(29);
        } else {
            month = numberArr(28);
        }
    }
    return month;
}

// 각 배열 합침
const totalData = (now, prev, next, prevCount, nextCount ) => {
    let data = [];
    // 이번달 
    for(let i = 0; i < now.length; i++) {
        data.push({month:'now', number:now[i]});
        console.log('이번달 푸시')
    };
    // 이전달
    if(prevCount > 0){
        for(let i = 0; i < prevCount; i++ ){
            data.unshift({month:'prev',number:prev[prev.length - 1 - i]});
            console.log('이전달 푸시')
        }
    }
    // 다음달
    if (nextCount > 0) {
        for(let i = 0; i < nextCount; i++){
            data.push({month:'next',number:next[i]})
            console.log('다음달 푸시')
        }
    }
    return data;
}
const dataThisMonth = generateMonth(nowFirstDay);
const dataPrevMonth = generateMonth(prevMonth());
const dataNextMonth = generateMonth(nextMonth());
const dataPreDays = nowFirstDay.getDay();
const dataNextDays = 7 - nextMonth().getDay();
const dataAll = totalData(dataThisMonth,dataPrevMonth,dataNextMonth,dataPreDays,dataNextDays);

const initialState = {
    days:dataAll
};

// 리듀서

const date = (state =initialState , action) => {
    return state
}

export default date;
