(function () {
    var lang = {
            months : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays : "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort : "日_月_火_水_木_金_土".split("_"),
            longDateFormat : {
                LT : "Ah:mm",
                L : "YY/MM/DD",
                LL : "YYYY/MM/DD",
                LLL : "YYYY年MoDo LT",
                LLLL : "YYYY年MoDodddd LT"
            },
            meridiem : {
                AM : '午前',
                am : '午前',
                PM : '午後',
                pm : '午後'
            },
            calendar : {
                sameDay : '[今日] LT',
                nextDay : '[明日] LT',
                nextWeek : '[来週]dddd LT', 
                lastDay : '[昨日] LT',
                lastWeek : '[前週]dddd LT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "%後",
                past : "%s前",
                s : "数秒",
                m : "1分",
                mm : "%d分",
                h : "1時間",
                hh : "%d時間",
                d : "1日",
                dd : "%d日",
                M : "1ヶ月",
                MM : "%ヶ月",
                y : "1年",
                yy : "%d年"
            },
            ordinal : function (number) {
                    return '';
            }
        };

    // Node
    if (typeof module !== 'undefined') {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('jp', lang);
    }
}());
