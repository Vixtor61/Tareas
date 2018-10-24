window.onload = init;

 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             let element = document.createElement("li");
             let button = document.createElement("button");
             let fin = document.createElement("button");
             let texto = document.createTextNode("Del");
             let texto2 = document.createTextNode("finalizado");
                button.appendChild(texto);
                fin.appendChild(texto2);




             element.innerText = task;
             element.appendChild(button);
             element.appendChild(fin);

console.log(element.childNodes);

             /*element.addEventListener("click", () => {
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             });*/
             /*
             element.addEventListener("click", function(){
                console.log(this);
                let parent = this.parentNode;
                if(parent){
                    parent.removeChild(this);
                }
             });
             */
            // Añadir un boton para marcar de finalizado
            fin.addEventListener("click", function(){
               console.log(element);
               let parent = this.parentNode;
               if(parent){
                   element.style.textDecoration = "line-through wavy";
               }
            });
            // Elmine de la lista
            button.addEventListener("click", function(){
               console.log(element);
               let parent = element.parentNode;
               if(parent){
                   parent.removeChild(element);
               }
            });
             if (priority) {
                 this.listTask.unshift({
                     element,
                     task
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
}
