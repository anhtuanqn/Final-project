class myFooter extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
       
    <footer>
    <div class="container">
        
        <div class="noi-dung about">
            <h2>lien he qua</h2>
          
            <ul class="social-icon">
                <img src="img/logo.png" alt="">
                <li><a href="https://www.facebook.com/profile.php?id=100021814261916"><i class="fa fa-facebook" ></i></a></li>
                
                <li><a href=""><i class="fa fa-github"></i></a></li>
               
            </ul>
        </div>
    
        <div class="noi-dung links">
            <h2>@@</h2>
            <ul>
               
                <li><a href="#">@@@@@</a></li>
                <li><a href="#">@@@@</a></li>
                <li><a href="#">@@@@</a></li>
            </ul>
        </div>
  
        
   
    </div>
</footer>
    
 
        `
    }
}

customElements.define("my-footer", myFooter)