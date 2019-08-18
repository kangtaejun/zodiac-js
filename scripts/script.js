var selectMonth = document.getElementById('birthMonth')
var selectDay = document.getElementById('birthDay')
var selectYear = document.getElementById('birthYear')

var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

for (var j = 2019; j > 1900; j--) {
    var x = document.createElement("option");
    x.textContent = +j
    x.value = +j
    selectYear.appendChild(x)
}

for (var i = 0; i < monthNames.length; i++) {
    var opt = monthNames[i]
    var x = document.createElement("option")
    x.textContent = opt
    x.value = i
    selectMonth.appendChild(x)
}

function getDate() {
    var selectedMonth = document.getElementById('birthMonth').value
    var selectedYear = document.getElementById('birthYear').value
    selectDay.innerHTML = ""
    var opt = monthNames[i]
    var x = document.createElement("option")
    x.textContent = 'Day'
    x.disabled
    x.selected
    selectDay.appendChild(x)

    var days = new Date(selectedYear, selectedMonth, 0).getDate()

    for (var d = 0; d < days; d++) {
        var x = document.createElement("option")
        x.value = d + 1
        x.textContent = d + 1
        selectDay.append(x)
    }
}

var zodiacSigns = [{
        celestialNo: 1,
        celestialSign: "Leo",
        startMonth: 7,
        startDay: 23,
        endMonth: 8,
        endDay: 22
    },
    {
        celestialNo: 2,
        celestialSign: "Virgo",
        startMonth: 8,
        startDay: 23,
        endMonth: 9,
        endDay: 22
    },
    {
        celestialNo: 3,
        celestialSign: "Libra",
        startMonth: 9,
        startDay: 23,
        endMonth: 10,
        endDay: 22
    },
    {
        celestialNo: 4,
        celestialSign: "Scorpio",
        startMonth: 10,
        startDay: 23,
        endMonth: 11,
        endDay: 21
    },
    {
        celestialNo: 5,
        celestialSign: "Sagittarius",
        startMonth: 11,
        startDay: 22,
        endMonth: 12,
        endDay: 21
    },
    {
        celestialNo: 6,
        celestialSign: "Capricorn",
        startMonth: 12,
        startDay: 22,
        endMonth: 1,
        endDay: 19
    },

    {
        celestialNo: 7,
        celestialSign: "Aquarius",
        startMonth: 1,
        startDay: 20,
        endMonth: 2,
        endDay: 18
    },
    {
        celestialNo: 8,
        celestialSign: "Pisces",
        startMonth: 2,
        startDay: 19,
        endMonth: 3,
        endDay: 20
    },
    {
        celestialNo: 9,
        celestialSign: "Aries",
        startMonth: 3,
        startDay: 21,
        endMonth: 4,
        endDay: 19
    },
    {
        celestialNo: 10,
        celestialSign: "Taurus",
        startMonth: 4,
        startDay: 20,
        endMonth: 5,
        endDay: 20
    },
    {
        celestialNo: 11,
        celestialSign: "Gemini",
        startMonth: 5,
        startDay: 21,
        endMonth: 6,
        endDay: 20
    },
    {
        celestialNo: 12,
        celestialSign: "Cancer",
        startMonth: 6,
        startDay: 21,
        endMonth: 7,
        endDay: 22
    }
]

function getCelestialSign() {
    var birthYear = document.getElementById('birthYear').value
    var birthMonth = document.getElementById('birthMonth').value
    var birthDay = document.getElementById('birthDay').value
    var birthDate = new Date(birthYear, birthMonth, birthDay)
    var zodiac;

    console.log(birthDate);

    for (var i = 0; i < zodiacSigns.length; i++) {
        zodiac = checkZodiac(birthDate, zodiacSigns[i])
        if (zodiac !== undefined)
            break;
    }

    console.log(zodiac)
}

function checkZodiac(birthDate, zodiacSign) {
    var year = birthDate.getYear()
    var startDate = new Date(year, zodiacSign.startMonth, zodiacSign.startDay)
    var endDate = new Date(year, zodiacSign.endMonth, zodiacSign.endDay)


    if (zodiacSign.endMonth === 1) {
        year += 1
        endDate = new Date(year, zodiacSign.endMonth, zodiacSign.endDay)
    } else if (zodiacSign.endMonth <= 7) {
        year += 1
        startDate = new Date(year, zodiacSign.startMonth, zodiacSign.startDay)
        endDate = new Date(year, zodiacSign.endMonth, zodiacSign.endDay)
    }

    console.log( startDate + '\n' + birthDate + '\n' + endDate);
    console.log(((birthDate >= startDate) && (birthDate <= endDate)));
    if ((birthDate >= startDate) && (birthDate <= endDate)) {
        return zodiacSign.celestialNo
    }
    return undefined
}
