class Iteam{
    constructor(titleField,textField,productShocasee) {
this.titleField=document.getElementById(titleField)
this.textField=document.getElementById(textField)
this.productShocase=document.getElementById(productShocasee)
    }

    validation(event){
        if (event.target.value!=="") {
            event.target.style.outline="1px solid green"  
        }else if(event.target.value==""){
            event.target.style.outline="1px solid red" 
        }

    }
    addIteam(){
        const newElement=document.createElement("div")
        newElement.classList.add("md:w-72")
        newElement.classList.add("w-full")
        newElement.innerHTML=`
        <div class="shadow-lg rounded-md bg-[#ffffffca] p-4 w-full  space-y-3">
        <h1 class="text-center font-bold text-wrap break-all" id="title-text">${this.titleField.value}</h1>
        <hr>
        <p class="text-wrap break-all">${this.textField.value}</p>
        <div class="flex justify-center gap-2">
            <button id="editButton" type="button"
                class="p-1 text-white bg-green-600 w-full rounded-md mt-2 ">Edit
                Iteam</button>
            <button id="remove" type="button" class="p-1 text-white bg-red-600 w-full rounded-md mt-2 ">Remove
                Iteam</button>
        </div>
    </div>
        `;
        if (this.textField.value!=="" && this.titleField.value!=="") {
            this.productShocase.appendChild(newElement);
            this.titleField.style.outline=`none`;
            this.textField.style.outline=`none`;
            this.titleField.value=""
            this.textField.value=""
            
        }else{
          
            if (this.titleField.value=="") {
                this.titleField.style.outline=`1px solid red`
            }
            if (this.textField.value=="") {
                this.textField.style.outline=`1px solid red`
            }
        }
       
    }

    removeIteam(event){
       console.log(event.target.parentNOde);

    }
   
}
// object create
const todoOne=new Iteam("titleField","textField","placeForShowcase")
// acces addbutton
const addButton=document.getElementById("addIteam")
// validation
todoOne.textField.addEventListener("keyup",todoOne.validation)
todoOne.titleField.addEventListener("keyup",todoOne.validation)
// adding iteam funtionality
addButton.addEventListener("click",()=>{
    todoOne.addIteam()
})
// remove Button
document.getElementById("remove") && addEventListener("click",(event)=>todoOne.removeIteam(event))
