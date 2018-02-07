const PageState = function () {
  let currentState = new homeState(this);
  
  this.init = function () {
    this.change(new homeState);
  }
  
  this.change = function (state) {
    currentState = state;
  }
}

//Homestate
const homeState = function (page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>`;
}

//Aboutstate
const aboutState = function (page) {
  document.querySelector('#heading').textContent = `About us`;
  document.querySelector('#content').innerHTML = `
    <p>This is the About Page</p>`;
}

//Contactstate
const contactState = function (page) {
  document.querySelector('#heading').textContent = `Contact us`;
  document.querySelector('#content').innerHTML = `
    <form class="form-inline">
  <label class="sr-only" for="inlineFormInput">Name</label>
  <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe">

  <label class="sr-only" for="inlineFormInputGroup">Username</label>
  <div class="input-group mb-2 mr-sm-2 mb-sm-0">
    <div class="input-group-addon">@</div>
    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
  </div>

  <div class="form-check mb-2 mr-sm-2 mb-sm-0">
    <label class="form-check-label">
      <input class="form-check-input" type="checkbox"> Contact Us
    </label>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
}

// Instantiate pagestate

const page = new PageState();
page.init();

const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

home.addEventListener('click', function (event) {
  page.change(new homeState);
  event.preventDefault();
});

about.addEventListener('click', function (event) {
  page.change(new aboutState);
  event.preventDefault();
});

contact.addEventListener('click', function (event) {
  page.change(new contactState);
  event.preventDefault();
});