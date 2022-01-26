;(function(window,undefined){
     //构造一个函数，参数为一个对象，实例化时，有值则进行传值，没有则赋值一个空对象
      function popAlert( opt ){
          this.opt = opt || {};
      };
      // 显示函数的设置
      popAlert.prototype.show = function(){
        //   创建一个div元素
        const Odiv = document.createElement('div');
        const that = this;
        //   给div添加class属性，这里使用的是多个属性的添加，同时将opt的class传递过来
        Odiv.classList.add('alert',this.opt['class']||'' );
        //   设定div包含的内容
        Odiv.innerHTML = this.opt['content'] || '';
        Odiv.style.display = 'block';
        Odiv.style.zIndex = -2;
        // 把div元素整体插入body内，appendChild是插在最后面
        document.body.appendChild(Odiv);
        if(Odiv.style.display === 'block' && Odiv.className === "alert alert-danger"){
            setTimeout(() =>{
                Odiv.style.display = 'none';
            },3000)
        }
        if(Odiv.style.display === 'block' && Odiv.className === "alert alert-success"){
            setTimeout(() =>{
                Odiv.style.display = 'none';
            },5000)
        }
      };

      // 设置一个空对象：alert
      let alert = {};
      //   把popAlert 挂在alert下面
      alert = {
          'popAlert' : popAlert,
      };
      //   然后把alert挂在window 对象下面，这样就可以在外面使用alert调用popAlert 了
      window.alert = alert;

})(window,undefined);