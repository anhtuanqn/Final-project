class myHeader extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
          
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


