(function(){

   function sum(){
       return Array.prototype.reduce.call( arguments, function(atual, novo){
           return atual + novo;
       } )
   }
   console.log(sum( 1, 15, 111 ))
})();