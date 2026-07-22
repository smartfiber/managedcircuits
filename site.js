const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.nav-links');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}const form=document.querySelector('#contact-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(`Managed Circuits inquiry — ${data.get('company')||data.get('name')}`);const body=encodeURIComponent(`Name: ${data.get('name')}
Email: ${data.get('email')}
Company: ${data.get('company')}
Topic: ${data.get('topic')}

${data.get('message')}`);const email='REPLACE-WITH-YOUR-EMAIL@example.com';document.querySelector('.form-status').textContent='Your email application should open. Replace the placeholder recipient before publishing.';window.location.href=`mailto:${email}?subject=${subject}&body=${body}`;});}