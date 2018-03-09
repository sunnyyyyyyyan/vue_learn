//创建vue实例
let vm = new Vue({
    el:'#app',
    data:{     //vue中的model-〉数据
        message:'hello word',
        msg:'my name is sunny',
        show:true,
        hide:false,
        height:1.68,
        height1:1.50,
        score:90,   //优秀，良好，及格，
        scores:[100,88,87,80],
        dog:{name:'sunny',age:7,height:3.2},
        name:'chen',
        dig:'1293'
    }
});
