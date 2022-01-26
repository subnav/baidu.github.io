function CascadeMenu(elem,data,placeholder){
    //获取文本框
    this.eInput = elem;
    //设置文本框为只读
    this.eInput.setAttribute('readonly',true);
    //设置文本框提示
    this.eInput.placeholder = placeholder;
    //获取文本框父元素
    const eInputParent = this.eInput.parentNode;
    //创建级联菜单容器
    this.eCascade = document.createElement('div');
    this.eCascade.className = 'cascade_container';
    //创建菜单下拉列表容器
    this.eCascadeInto = document.createElement('div');
    this.eCascadeInto.className = 'cascade_into';
    //下拉列表容器默认隐藏
    this.eCascadeInto.style.display = 'none';
    //将各个元素放到页面中
    this.eCascade.appendChild(this.eInput);
    this.eCascade.appendChild(this.eCascadeInto);
    eInputParent.appendChild(this.eCascade);
    //获取菜单数据
    this.aData = data;
    //记录已选择的菜单数据
    this.aSelected = [];
    //菜单打开状态，默认为false，表示隐藏
    this.bShow = false;

    this.generateMenu();

//绑定点击事件
    this.eInput.addEventListener('mouseover',()=>{
      if(this.bShow){ 
        this.eCascadeInto.style.display = 'none';
        this.bShow = false;
      }else{
        this.eCascadeInto.style.display = 'block';
        this.aSelected = this.eInput.value.split('>');
      }
    });


    //利用事件委托选择菜单
    this.eCascadeInto.addEventListener('click',(event)=>{
      const eTarget = event.target;
      let po = +eTarget.dataset.po;
      this.aSelected.splice(po+1,this.aSelected.length-(po+1));
      this.aSelected[po] = eTarget.innerHTML;
      if(eTarget.className.indexOf('child')==-1){ //没有子菜单直接选择
        this.eInput.value = this.aSelected[po];
        this.eInput.id = "cure";
        this.eCascadeInto.style.display = 'none';
        this.bShow = false;
      }else{  //有子菜单显示下一级
        this.aSelected.push('')
        this.generateMenu();
      }   
    });

    this.eInput.addEventListener('mouseover',()=>{
      if(this.bShow){ 
        this.eCascadeInto.style.display = 'none';
        this.bShow = false;
        document.onmouseover = null;
      }else{
        this.eCascadeInto.style.display = 'block';
        this.aSelected = this.eInput.value.split('>');
        document.onmouseover = () => {
          this.eCascadeInto.style.display = 'none';
          this.bShow = false;
          document.onmouseover = null;
        }
      }
    });
    //阻止冒泡
    this.eCascade.addEventListener('mouseover',(event)=>{
      event.stopPropagation();
    });
}

//根据数据生成级联菜单
CascadeMenu.prototype.generateMenu = function(){
  const _self = this;
  function fnCreatHTML(data,step){
    let aChildArr = null;
    let sHTML = '<ul class="child'+step+'">';
    for(let i=0;i<data.length;i++){
      if(data[i].child){ 
        if(data[i].name==_self.aSelected[step]){
          aChildArr = data[i].child;
          sHTML += '<li class="child cur" data-po="'+step+'">';
        }else{
          sHTML += '<li class="child" data-po="'+step+'">';
        }
      }else{  
        if(data[i].name==_self.aSelected[step]){
          sHTML += '<li class="child cur" data-po="'+step+'">';
        }else{
          sHTML += '<li data-po="'+step+'">';
        }
      }
      //添加菜单名称
      sHTML += data[i].name;
      //结束当前菜单
      sHTML += '</li>';
    }
    sHTML += '</ul>';
    if(_self.aSelected.length>step+1){
      sHTML += fnCreatHTML(aChildArr,step+1);
    }
    return sHTML;
  }
  this.eCascadeInto.innerHTML = fnCreatHTML(this.aData,0);
}


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

  