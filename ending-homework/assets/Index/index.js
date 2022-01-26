//表名表
        const eText = document.getElementById('school');
        const eTime = document.getElementById('time');
        let schoolCascade = null;
        let timeCascade = null;
        (async () => {
            const json = [
                {
                  "name":"北京市","child":[
                    {"name":"北京大学","child":null},
                    {"name":"中国人民大学","child":null},
                    {"name":"北京交通大学","child":null},
                    {"name":"北京科技大学","child":null},
                    {"name":"北京工业大学","child":null},
                    {"name":"北京航空航天大学","child":null},
                    {"name":"北京化工大学","child":null},
                    {"name":"北京邮电大学","child":null},
                    {"name":"中国农业大学","child":null},
                    {"name":"北京林业大学","child":null},
                    {"name":"中国传媒大学","child":null},
                    {"name":"中央民族大学","child":null},
                    {"name":"北京师范大学","child":null},
                    {"name":"中央音乐学院","child":null},
                    {"name":"北京工业大学","child":null},
                    {"name":"对外经济贸易大学","child":null},
                    {"name":"北京中医药大学","child":null},
                    {"name":"北京外国语大学","child":null},
                    {"name":"中国石油大学","child":null},
                    {"name":"中国政法大学","child":null},
                    {"name":"中央财经大学","child":null},
                    {"name":"华北电力大学","child":null},
                  ]
                },
                {
                  "name":"河北省","child":[
                    {"name":"河北科技大学","child":null},
                    {"name":"河北经贸大学","child":null},
                    {"name":"河北广播电视大学","child":null},
                    {"name":"河北体育学院","child":null},
                    {"name":"河北传媒学院","child":null},
                  ]
                },
                {
                  "name":"重庆市","child":[
                    {"name":"重庆大学","child":null},
                    {"name":"西南大学","child":null},
                    {"name":"重庆邮电大学","child":null},
                    {"name":"重庆交通大学","child":null},
                    {"name":"重庆医科大学","child":null},
                    {"name":"重庆师范大学","child":null},
                    {"name":"四川外国语大学","child":null},
                  ]
                },
                {
                  "name":"四川省","child":[
                    {"name":"四川大学","child":null},
                    {"name":"西南交通大学","child":null},
                    {"name":"电子科技大学","child":null},
                    {"name":"西南财经大学","child":null},
                    {"name":"西南民族大学","child":null},
                    {"name":"成都理工大学","child":null},
                    {"name":"西华大学","child":null},
                  ]
                },
                {
                  "name":"天津市","child":[
                    {"name":"南开大学","child":null},
                    {"name":"天津大学","child":null},
                    {"name":"天津科技大学","child":null},
                    {"name":"天津工业大学","child":null},
                    {"name":"天津医科大学","child":null},
                    {"name":"中国民航大学","child":null},
                    {"name":"天津理工大学","child":null},
                    {"name":"天津师范大学","child":null},
                  ]
                },
                {
                  "name":"上海市","child":[
                    {"name":"复旦大学","child":null},
                    {"name":"上海交通大学","child":null},
                    {"name":"同济大学","child":null},
                    {"name":"华东师范大学","child":null},
                    {"name":"东华大学","child":null},
                    {"name":"华东理工大学","child":null},
                  ]
                },
                {
                  "name":"湖北省","child":[
                    {"name":"武汉大学","child":null},
                    {"name":"华中科技大学","child":null},
                    {"name":"华中师范大学","child":null},
                    {"name":"武汉理工大学","child":null},
                    {"name":"华中农业大学","child":null},
                    {"name":"中国地质大学","child":null},
                  ]
                },
                {
                  "name":"山东省","child":[
                    {"name":"山东大学","child":null},
                    {"name":"中国海洋大学","child":null},
                    {"name":"山东科技大学","child":null},
                    {"name":"青岛科技大学","child":null},
                    {"name":"山东建筑大学","child":null},
                    {"name":"齐鲁工业大学","child":null},
                  ]
                },
                {
                  "name":"广东省","child":[
                    {"name":"中山大学","child":null},
                    {"name":"华南理工大学","child":null},
                    {"name":"华南农业大学","child":null},
                    {"name":"广州中医药大","child":null},
                    {"name":"华南师范大学","child":null},
                    {"name":"汕头大学","child":null},
                  ]
                },
                {
                  "name":"广西省","child":[
                    {"name":"广西大学","child":null},
                    {"name":"广西科技大学","child":null},
                    {"name":"广西医科大学","child":null},
                    {"name":"广西师范大学","child":null},
                    {"name":"广西民族大学","child":null},
                    {"name":"玉林师范学院","child":null},
                    {"name":"广西艺术学院","child":null},
                  ]
                },
            ];
            schoolCascade = new CascadeMenu(eText, json, "请选择学校");
            const data = [
                {
                    "name": "本科", "child": [
                        { "name": "本科一年级", "child": null },
                        { "name": "本科二年级", "child": null },
                        { "name": "本科三年级", "child": null },
                        { "name": "本科四年级", "child": null },
                        { "name": "其他", "child": null },
                    ]
                },
                {
                    "name": "硕士", "child": [
                        { "name": "硕士一年级", "child": null },
                        { "name": "硕士二年级", "child": null },
                        { "name": "硕士三年级", "child": null },
                        { "name": "其他", "child": null },
                    ]
                },
                {
                    "name": "博士", "child": [
                        { "name": "博士一年级", "child": null },
                        { "name": "博士二年级", "child": null },
                        { "name": "博士三年级", "child": null },
                        { "name": "其他", "child": null },
                    ]
                },
                {
                    "name": "其他", "child": [
                        { "name": "其他", "child": null },
                    ]
                },
            ];
            timeCascade = new CascadeMenu(eTime, data, "请选择年级");
        })();

        //警告框
        const button = document.getElementById("button");
        const reEml = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;

        button.addEventListener("click", () => {
            const schoolValue = eText.value;
            const timeValue = eTime.value;
            const emailValue = document.getElementById("email").value;
            if (schoolValue === "") {
                const oAlertDanger = new alert.popAlert({
                    'class': 'alert-danger',
                    'content': '您还没有选择您的学校，请选择！'
                });
                oAlertDanger.show();
            } else if (timeValue === "") {
                const oAlertDanger = new alert.popAlert({
                    'class': 'alert-danger',
                    'content': '您还没有选择您的入学年份，请选择！'
                });
                oAlertDanger.show();
            } else if (!reEml.test(emailValue)) {
                console.log(reEml.test(emailValue));
                const oAlertDanger = new alert.popAlert({
                    'class': 'alert-danger',
                    'content': '邮箱地址不符合要求(yourname@host.com),请重新输入'
                });
                oAlertDanger.show();
            } else {
                const oAlertSuccess = new alert.popAlert({
                    'class': 'alert-success',
                    'content': '恭喜您，来自 ' + schoolValue + ' ' + timeValue + ' ' + emailValue + ' 同学，您的报名信息已记录，请关注您的邮件'
                });
                oAlertSuccess.show();

                const sign = document.querySelector('.sign_up');
                const successDiv = document.createElement('div');
                sign.style.display = 'none';
                successDiv.classList.add('success_div');
                successDiv.innerHTML = "您已完成报名，开始您的学习之旅吧!";
                successDiv.innerHTML += "<div class='close'>重新报名</div>";
                document.body.appendChild(successDiv);
                const aclose = document.querySelector('.success_div > .close');
                aclose.addEventListener("click" ,() => {
                    successDiv.style.display = 'none';
                    sign.style.display = 'block';
                })
            }
        })