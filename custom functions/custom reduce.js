(function(){
Array.prototype.reduce = function(fun)
   {
      var len = this.length;
      
      debugger;
      if (len == 0 && arguments.length == 1)
   {   throw new UserException("not valid");
    }  
      var i = 0;
      
      if (arguments.length >= 2)
      {
         var rv = arguments[1];
      }
      else
      {
         do
         {
            if (this[i])
            {
               rv = this[i++];
               break;
            }
            
         
            if (++i >= len)
            {  throw new UserException("not valid");
            }
	}
         while (true);
      }
      for (; i < len; i++)
      {
         if (this[i])

        { 
            rv = fun.call(null,rv, this[i], i, this);
        }
      }
      return rv;
   };

function init()
{
var a=[2,3,4,5,6,7];
a.reduce(function(c,b){
return b+c;}
,0);

}
init();

})();