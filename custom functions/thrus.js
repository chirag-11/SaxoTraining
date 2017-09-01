var singelton = (function(){
    var instance ;

    function createInstance(){
var obj= new Object("hello")
return obj;
    }

var getinstance= function(){
        if(!instance)
        {
            instance=createInstance();
        }
        return instance;
    }
    return { getInstance:getInstance
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
