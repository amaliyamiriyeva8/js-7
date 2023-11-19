const  myTable=document.querySelector('table')
   const FormEl=document.querySelector('form');
   const TbodyEl=document.querySelector('tbody');
   const Btn=document.getElementById('btn');
   Btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const Name=document.getElementById('myName').value;
    const SurName=document.getElementById('mySurName').value;
    const Age=document.getElementById('myAge').value;
    TbodyEl.innerHTML+=`
    <tr>
        <td>${Name}</td>
        <td>${SurName}</td>
        <td>${Age}</td>
        <td><button class="Btnn">Delete</button></td>
    </tr>
    `
   })
       myTable.addEventListener('click',(e)=>{
     if(!e.target.classList.contains('Btnn')){
        return
     }
     const btn=e.target;
      btn.closest('tr').remove();
   })
