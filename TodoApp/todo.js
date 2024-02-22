//const { getToken } = require("@chakra-ui/react")

const Submit = document.querySelector(".sbt")

const {log} = console

 const Note_Items = {

    noteStorage : []
    
 }

 const Noteboard = document.querySelector("main")

    window.onload = ()=>{
        const NoteStoredValues = localStorage.getItem("note")
         const arr = NoteStoredValues.split(',')
        log(arr)
    
        for(i = 0; i < arr.length; i += 3){

            GetstoredValue(arr[i].split(' '),arr[i+1].split(' '),arr[i+2].split(' '))
        }
  
          
    }

    function GetstoredValue(a,b,c){
       // const Noteboard = document.querySelector("main")
        const article = document.createElement("article")
        const dateTag = document.createElement("p")
        dateTag.setAttribute("class","date")
        const timeTag = document.createElement("p")
        timeTag.setAttribute("class","time")
  
            dateTag.innerText = b//CreatedDate
            timeTag.innerText = c//new Date().toLocaleTimeString()

        article.innerText = a // Notevalue
        article.append(dateTag,timeTag)
        Noteboard.append(article)
    }

    Submit.addEventListener("click",getInputValue)


function getInputValue(){
                    const INPUT_VALUE = document.querySelector(".text").value
                /// alert(INPUT_VALUE)

    if(INPUT_VALUE === '' || INPUT_VALUE === null){
        alert('No to added')

        }else{
        const timpeStamps = new Date().toJSON()
        const fliterTIMESTAMPS = timpeStamps.slice(10)
        const CALENDER_STAMP = timpeStamps.replace(fliterTIMESTAMPS,"")
        //   log(CALENDER_STAMP)
        AppendNote(INPUT_VALUE,CALENDER_STAMP)
      }
      Noteboard.offsetHeight += 10
     }

      function AppendNote(Notevalue,CreatedDate){
           
            const article = document.createElement("article")
            const dateTag = document.createElement("p")
            dateTag.setAttribute("class","date")
            const timeTag = document.createElement("p")
            timeTag.setAttribute("class","time")
      
                dateTag.innerText = CreatedDate
                timeTag.innerText = new Date().toLocaleTimeString()

            article.innerText = Notevalue
            article.append(dateTag,timeTag)
            Noteboard.append(article)
                
         SaveData(Notevalue,CreatedDate, timeTag.innerText)
      }

    async function SaveData(ValuetoSave,CreatedDate,time){
        Note_Items.noteStorage.push(ValuetoSave,CreatedDate,time)
        // log(Note_Items)
            await JSON.stringify(Note_Items.noteStorage)
        localStorage.setItem("note",Note_Items.noteStorage)
         log(localStorage.getItem('note'))
    }

