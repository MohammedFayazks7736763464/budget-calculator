let totalbudget=0;
var  totalexpense=0;
let expenses=[]




/// lets retrieve the  budget
function addamount(){
    const amount=document.getElementById('amount').value

    totalbudget+=parseFloat(amount)
    alert("amount added successfully")
    displayfinal()


}
function add(){
    const name=document.getElementById('Pname').value
    const price=parseFloat(document.getElementById('pprice').value)
    



    if(name && price >0){
        expenses.push({namee:name ,pricee:price});  ///    expenses=[{    name:input  price:input}]


        totalexpense+=price


        displayexpense()
        displayfinal()


    }
}
    
    function displayexpense(){


        const display=document.getElementById('jk')                                                // <ul><li>name:price</li></ul>
                                                                                                          


        display.innerHTML=""   // display paranet ul

        expenses.forEach((expense)=>{
            const item=document.createElement('li')
            item.textContent=`${expense.namee}:${expense.pricee.toFixed(0)}`

            display.appendChild(item)  //  item cild li  connect it with ul  (display)  using append child
        });  

    }


    function displayfinal(){
        document.getElementById('kl').textContent=totalbudget.toFixed(0)
        document.getElementById('ol').textContent=totalexpense.toFixed(0)
        document.getElementById('po').textContent=(totalbudget-totalexpense).toFixed(0)
    }


    const gg=document.getElementById('nn')
    gg.textContent=id
   

   function clearall(){
    location.reload()
   }






