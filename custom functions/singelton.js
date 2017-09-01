

var singelton = (function(){
    var instance ;

    function createInstance(){
var obj= new Object("hello")
return obj;
    }
return {
    getInstance: function(){
        if(!instance)
        {
            instance=createInstance();
        }
        return instance;
    }
};

})();

var a=singelton.getInstance()

var b=singelton.getInstance()

if(a===b)
{
true;
}
else{
false;
}


/* observer */

var observer=(function(){ 
var list=[]; 
function subscribe(func) 
{ 
    Cosnole.log(func);
    list.push(func); 
} 
function unSubscribe() 
{ 
   var index=list.IndexOf(func)
    {	console.log(func);
		list.splice()



} 
function fire() 
{ 
    for(var i=0;i<list.length;i++) 
    { 
        list[i](); 
    } 

} 
return{ 
        subscribe:Subscribe, 
        unSubscribe:unSubscribe, 
        fire:fire 
}; 

})();

var obj1=new Object("this is object 1");
var obj2 =new Object("this is next object");

obj1.observer.Subscribe();
obj2.observer.Subscribe();


