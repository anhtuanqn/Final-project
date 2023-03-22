class myHeader extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML =myHeader `
          
  <header >
  <div class="header">
    
    <nav>
      <div class="img-nav">
          <img src="img/logo.png" alt="" />
      </div>
      <div class="content-nav">
          <ul>
              <li><a href="#">NAm</a></li>
              <li><a href="#">nam</a></li>
              <li><a href="#">nam</a></li>
              <li><a href="#">nam</a></li>
          </ul>

    </div>
    <form>
      <input type="text" name="search" id="search" placeholder="Tìm kiếm sach" />
      
  </form>
   <div class="container">
      <h1 class="heading">
        <span class="heading-title">@@@@@</span>
        <span class="heading-sub">@@@@@</span>
      </h1>
      <a href="#" class="btn btn-white">doc sach ngay</a>
    </div>
 </div>
</header>
        `
    }
}

customElements.define("my-header", myHeader)

class myFooter extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = myFooter`
       
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
