let secHelthState = document.querySelector('#secHelthState span');
var date = new Date();
var day = date.getDay();
var days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت']
var month = ['يناير', 'فبراير', 'مارس', 'إبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
var zero = '٠'
var one = '١'
var two = '۲'
var three = '٣'
var four = '٤'
var five = '٥'
var six = '٦'
var seven = '٧'
var eght = '٨'
var nine = '٩'
var ten = '١٠'
var eleven = '١١'
var twilf = '١۲'
var thirtin = '١٣'
var fourtin = '١٤'
var fivetin = '١٥'
var sixtin = '١٦'
var seventin = '١٧'
var eghttin = '١٨'
var ninetin = '١٩'
var twiny = '۲٠'
var twinyone = '۲١'
var twinytwo = '۲۲'
var twinythree = '۲٣'
var twinyfour = '۲٤'
var twinyfive = '۲٥'
var twinysix = '۲٦'
var twinyseven = '۲٧'
var twinyeght = '۲٨'
var twinynine = '۲٩'
var thirty = '٣٠'
var thirtyone = '٣١'
var thirtytwo = '٣۲'
var thirtythree = '٣٣'
var thirtyfour = '٣٤'
var thirtyfive = '٣٥'
var thirtysix = '٣٦'
var thirtyseven = '٣٧'
var thirtyeght = '٣٨'
var thirtynine = '٣٩'
var fourty = '٤٠'
var fourtyone = '٤١'
var fourtytwo = '٤۲'
var fourtythree = '٤٣'
var fourtyfour = '٤٤'
var fourtyfive = '٤٥'
var fourtysix = '٤٦'
var fourtyseven = '٤٧'
var fourtyeght = '٤٨'
var fourtynine = '٤٩'
var fivty = '٥٠'
var fivtyone = '٥١'
var fivtytwo = '٥۲'
var fivtythree = '٥٣'
var fivtyfour = '٥٤'
var fivtyfive = '٥٥'
var fivtysix = '٥٦'
var fivtyseven = '٥٧'
var fivtyeght = '٥٨'
var fivtynine = '٥٩'
var monthDay = [zero, one, two, three, four, five, six, seven, eght, nine, ten, eleven, twilf, thirtin, fourtin, fivetin, sixtin, seventin, eghttin, ninetin, twiny, twinyone, twinytwo, twinythree, twinyfour, twinyfive, twinysix, twinyseven, twinyeght, twinynine, thirty, thirtyone]
var mintNum = [zero, one, two, three, four, five, six, seven, eght, nine, ten, eleven, twilf, thirtin, fourtin, fivetin, sixtin, seventin, eghttin, ninetin, twiny, twinyone, twinytwo, twinythree, twinyfour, twinyfive, twinysix, twinyseven, twinyeght, twinynine, thirty, thirtyone, thirtytwo, thirtythree, thirtyfour, thirtyfive, thirtysix, thirtyseven, thirtyeght, thirtynine, fourty, fourtyone, fourtytwo, fourtythree, fourtyfour, fourtyfive, fourtysix, fourtyseven, fourtyeght, fourtynine, fivty, fivtyone, fivtytwo, fivtythree, fivtyfour, fivtyfive, fivtysix, fivtyseven, fivtyeght, fivtynine]
var timeHour = ''
var timeMint = ''
var amPm = ''
if (date.getHours() > 12) {
    if ((date.getHours() - 12) < 10) {
        timeHour = `${zero}${monthDay[date.getHours() - 12]}`
    } else {
        timeHour = `${monthDay[date.getHours() - 12]}`
    }
    amPm = 'م'
} else if (date.getHours() == 0) {
    timeHour = `${monthDay[12]}`
    amPm = 'ص'
} else if (date.getHours() == 12) {
    timeHour = `${monthDay[12]}`
    amPm = 'م'
} else {
    if (date.getHours() < 10) {
        timeHour = `${zero}${monthDay[date.getHours()]}`
    } else {
        timeHour = `${monthDay[date.getHours()]}`
    }
    amPm = 'ص'
}
if (date.getMinutes() < 10) {
    timeMint = `${zero}${mintNum[date.getMinutes()]}`
} else {
    timeMint = `${mintNum[date.getMinutes()]}`
}
secHelthState.innerHTML = `${days[day]} ${monthDay[date.getDate()]} ${month[date.getMonth()]}، ${timeHour}:${timeMint} ${amPm}`
let helthRefraech = document.querySelector('.helthRefraech')
helthRefraech.addEventListener('click', () => {
    window.location.reload()
})

let navItems = document.querySelectorAll('.nav ul li');
navItems.forEach((ele) => {
    ele.onclick = function () {
        navItems.forEach((ele) => {
            ele.classList.remove('clicked')
        })
        ele.classList.add('clicked')
    }
})
