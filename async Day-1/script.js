document.body.style.background= 'rgb(233,123,41)'
document.body.style.background= 'linear-gradient(90deg, rgba(233,123,41,1) 0%, rgba(249,244,244,1) 50%, rgba(22,133,25,1) 100%)'


let h1=document.createElement('h1')
h1.innerText='CALLBACK HELL TASK'
h1.style.textAlign='center'
document.body.append(h1)


let P=document.createElement('p')
P.innerText='Display Countdown from 10 to 1 on the screen and then display happy independence on screen'
P.style.textAlign='center'
document.body.append(P)


 let h2=document.createElement('h2')
 h2.style.color="red"
 h2.style.height="100px"
 h2.style.width="800px"
 h2.style.fontSize="50px"
 h2.style.textAlign="center"
 h2.style.marginTop="100px"
 h2.style.paddingTop="50px"
 
 h2.style.marginLeft="auto"
 h2.style.marginRight="auto"
 h2.style.border="5px solid black"
 h2.style.borderRadius='100px'
 h2.style.display="flex"
 h2.style.justifyContent="center"
 
 document.body.append(h2)
setTimeout(() => {
 h2.innerText= 10
setTimeout(() => {

h2.innerText=9
 setTimeout(() => {
 
  h2.innerText=8
     setTimeout(() => {
     
      h2.innerText=7
         setTimeout(() => {
         
          h2.innerText=6
             setTimeout(() => {
             
              h2.innerText=5
                 setTimeout(() => {
                 
                  h2.innerText=4
                     setTimeout(() => {
                     
                      h2.innerText=3
                         setTimeout(() => {
                         
                          h2.innerText=2
                             setTimeout(() => {
                             
                              h2.innerText=1
                                 setTimeout(() => {
                                 
                                  h2.innerText="(*_*)Happy independence(*_*)"
                                 }, 1000)
                             }, 1000)
                         }, 1000)
                     }, 1000)
                 }, 1000)
             }, 1000)
         }, 1000)
     }, 1000)
 }, 1000)
}, 1000)


}, 1000)