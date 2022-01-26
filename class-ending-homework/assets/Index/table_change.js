//获取筛选区和课程区
const tabClassArr = document.querySelectorAll(".index_class");
const classArr = document.querySelectorAll(".class");

const tabValue = [];
tabClassArr.forEach((el) => {
    tabValue.push(el.innerHTML);
})
let value = {
    [tabValue[0]]:[],
    [tabValue[1]]:[],
    [tabValue[2]]:[],
    [tabValue[3]]:[]
};
value[tabValue[0]].push(...classArr);

//根据标签筛选分组
const  labelArr = classArr.forEach((el) => {
    const htmlLabel = el.querySelector(".index_html");
    if(htmlLabel !== null){
        value[tabValue[1]].push(el);
    }

    const cssLabel = el.querySelector(".index_css");
    if(cssLabel !== null){
       value[tabValue[2]].push(el);
    }

    const jsLabel = el.querySelector(".index_javascript");
    if(jsLabel !== null){
        value[tabValue[3]].push(el);
    }
})

//点击切换功能
tabClassArr.forEach(el => {
    el.addEventListener("click", (event) => {
        const clickTab = event.target.innerHTML;
        
        tabClassArr.forEach(item => {
            item.className = "index_class";
        })
        
        event.target.className = "index_class current-index"

        for(const k in value) {
           value[k].forEach(item => {
                item.style.display = "none";
            })
        }

        for(const k in value) {
            if(clickTab === k){
                value[k].forEach(item => {
                   item.style.display = "block";
                })
            }
       }
    })
})


