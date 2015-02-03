$( document ).ready(function() {
    $("#clearAll").on("click",function(){
        removeFilter.call({});
    });
    $("#clear1").on("click",function(){
        removeFilter.call({"id":1});
    });
    $("#select1").on("click",function(){
        addFilter.call({"id":1});
    });
    function removeFilter(){
        if(!this.id){
            $('input:checkbox').removeAttr('checked');
            $('#stringCase').empty();
        }
        else{
            if(!this.val){                                $('#check'+this.id+' input:checkbox').removeAttr('checked');
            $('#stringCase'+this.id).remove();
            }
              else{                  
                  $('#stringCaseItem'+this.val).remove();
              }          
        }
    }
    
    function addFilter(){
        if(!this.id){
            
        }
        else{
            if(!this.val){                               
            var that=this;
                          
            $('#check'+that.id+' input:checkbox').each(function(){                
                addFilter.call({"id":that.id,"val":this.value});
  });               
            
            }
              else{
                  alert(this.id+"++"+this.val);
                   $('#check'+this.id+
                     ' input:checkbox[value='+this.val+']').
                   prop('checked', true);
                  $('#stringCase'+this.id).append("Category"+this.id+"++"+this.val);
              }          
        }
    }
    
});
