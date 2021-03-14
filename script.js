replaceText(document.body)

function replaceText(element){
if(element.hasChildNodes()){
  element.childNodes.forEach(replaceText);
}
else if(element.nodeType === Text.TEXT_NODE){
    const newElement =document.createElement('span')
    if(element.textContent.match(/LGBT/gi)){
        
        newElement.innerHTML = element.textContent.replace(/(LGBT)/gi,'<span class ="rainbow";">LGBT</span>')
        element.replaceWith(newElement)
    }
    if(element.textContent.match(/LGBTQ/gi)){
        newElement.innerHTML = element.textContent.replace(/(LGBTQ)/gi,'<span class ="rainbow";">LGBTQ</span>')
        element.replaceWith(newElement)
    }
    if(element.textContent.match(/LGBTIQ/gi)){
       
        newElement.innerHTML = element.textContent.replace(/(LGBTIQ)/gi,'<span class ="rainbow";">LGBTIQ</span>')
        element.replaceWith(newElement)
    }  
    if(element.textContent.match(/LGBTI/gi)){
       
        newElement.innerHTML = element.textContent.replace(/(LGBTI)/gi,'<span class ="rainbow";">LGBTI</span>')
        element.replaceWith(newElement)
    }    
    if(element.textContent.match(/LGBTQ+/gi)){
        
        newElement.innerHTML = element.textContent.replace(/(LGBTQ+)/gi,'<span class ="rainbow";">LGBTQ+</span>')
        element.replaceWith(newElement)
    } 
    if(element.textContent.match(/LGBTQI+/gi)){
        
        newElement.innerHTML = element.textContent.replace(/(LGBTQI+)/gi,'<span class ="rainbow";">LGBTQI+</span>')
        element.replaceWith(newElement)
    }   
  
  
  
  // element.textContent =element.textContent.replace(/WORDS/gi ,"hello")
}
}