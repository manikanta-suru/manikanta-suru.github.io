function showEmail() {
  const email = document.getElementById("email");
  email.style.display = "block";
}
function showContact() {
  const contact = document.getElementById("contact");
  contact.style.display = "block";
}
function alignImage(position) {
  const img = document.getElementById("myImage");

  if (position === "left") {
    img.style.margin = "0 auto 0 0";
  } else if (position === "center") {
    img.style.margin = "0 auto";
  } else if (position === "right") {
    img.style.margin = "0 0 0 auto";
  }
}  
        let speech;

        function playBio() {
            const bioText = "My name is Manikanta. I am an MCA postgraduate from Dr. B.R. Ambedkar University, Srikakulam. I specialize in cloud technologies such as AWS and Microsoft Azure, as well as Windows and VMware.";
            speech = new SpeechSynthesisUtterance(bioText);
            speech.lang = "en-IN";
            window.speechSynthesis.speak(speech);
        }

        function stopBio() {
            window.speechSynthesis.cancel();
        }