
function validation(form) {

 function removeError(input) {
   const parent = input.parentNode;
   
   if(parent.classList.contains('error')) {
    parent.querySelector('.error_label').remove()
    parent.classList.remove('error')
   }
 }  

 function removeErrortext(textarea) {
    const parentText = textarea.parentNode;
    
    if(parentText.classList.contains('error-text')) {
     parentText.querySelector('.error_labeltext').remove()
     parentText.classList.remove('error-text')
    }
  }  


function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error_label')
    errorLabel.textContent = text

    parent.append(errorLabel)
    parent.classList.add('error')
}

function createErrortext(textarea, textin) {
    const parentText = textarea.parentNode;
    const errorLabelText = document.createElement('label-text')

    errorLabelText.classList.add('error_labeltext')
    errorLabelText.textContent = textin

    parentText.append(errorLabelText)
    parentText.classList.add('error-text')
}



let result = true;

form.querySelectorAll('input').forEach(input => {

    removeError(input);

    if(input.value == '') {
        console.log('Error')
        createError(input, 'Поле не заполнено!')
        result = false
  }
});

form.querySelectorAll('textarea').forEach(textarea => {

    removeErrortext(textarea);

    if(textarea.value=='') {
        console.log('textarea')
        createErrortext(textarea, 'Поле не заполнено!')
        result = false
    }
});


return result
};

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    
    if(validation(this)==true) {
       alert('ESTI')
    }
});