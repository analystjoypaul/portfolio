function sendMail(){
    let prams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("text").value
    }
    let serviceId="service_dkrjdzk";
    let templateId="template_3aymuho";
    emailjs.send(serviceId, templateId, prams).then(res=>{
      document.getElementById("name").value="";
      document.getElementById("email").value="";
      document.getElementById("text").value="";
      console.log(res);
      alert("message sent successfully");
    }).catch(err=>console.log(err));
  }
  
  
  