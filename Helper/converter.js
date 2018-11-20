const slug=require('slug')
const Helper={
        parseStringIntoArray : (StringData)=>
            {
                if(StringData!==""){
                    let data = StringData.split('~');
                   return data.splice(1,data.length-2);
                }
                else return [];
            },
        parseArrayIntoString : (ArrayData)=>
            {
                if(ArrayData.length>0){
                    var str="~"+ArrayData[0];
                    for(let i=1;i<ArrayData.length;i++)
                        {
                            str=str+'~'+ArrayData[i];
                        }
                        str=str+'~';
                    return str;
                }
                else return "";
            },
            isValidateEmail : (email) => {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            slugify : function(title) {
                return slug(title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
            }        
    }   

 module.exports = Helper 
