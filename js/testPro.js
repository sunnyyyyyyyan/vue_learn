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
        dog:{ name:'sunny',age:7,height:3.2 },
        name:'chen',
        dig:'1293',
        persons:[
            { name:'a',age:7,sex:'man' },
            { name:'b',age:8,sex:'woman' },
            { name:'c',age:9,sex:'man' },
            { name:'d',age:10,sex:'woman' }
        ],
        html:'<input type="date"><input type="color">',
        imgSrc:'img/a.jpg',
        imgSrc1:'img/b.jpg',
        alt:'sunny',
        lips:[ 'ios学院','ui学院','html学院','java学院','c++学院','android学院'],
        fontColor:'red'
    },
    methods:{   //实例所有的函数实现
        changeContent(){
            //alert(0);
            this.msg='改掉了';
        },
        changeContentColor(){
            this.fontColor='green';
        }
    }
});
