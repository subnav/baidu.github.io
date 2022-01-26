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
        this.generateMenu();
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

  