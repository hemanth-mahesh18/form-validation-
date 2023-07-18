const form=document.getElementById('form');
const userame=document.getElementById('username');
const email=documnet.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//show input error message

function showerror(input, message){
    const formcontrol=input.parentelement;
    formcontrol.classname='form-control error';
    const small=formcontrol.queryselector('small');
    small.innertext=message;
}

function showsuccess(input){
    const formcontrol=input.parentelement;
    formcontrol.classname='form-control success';
}

//email

function isValidEmail(email)
{
    const re= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9] {1,3}\.[0-9] {1,3}\.[0-9] {1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-z] {2,}))$/;
    return re.test(String(email)).toLowerCase();
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value===''){
        showerror(username, 'username is required');
    }
    else{
        showsuccess(username);
    }
    if(email.value===''){
        showerror(email, 'email is required');
    }else if(!isvalidemail(emailvalue)){
        showerror(email, 'email is not valid')
    }
    else{
        showsuccess(email);
    }
    if(password.value===''){
        showerror(password, 'password is required');
    }
    else{
        showsuccess(password);
    }
    if(passsword2.value===''){
        showerror(password2, 'confirm password is required');
    }
    else{
        showsuccess(password2);
    }


});