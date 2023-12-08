import "./Header.css"
function Header() {
  return (
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            You Shop Name
          </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">
                Category one <span class="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">Category two</a>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                {" "}
                <span class="glyphicon glyphicon-shopping-cart"></span> 7 -
                Items<span class="caret"></span>
              </a>
              <ul class="dropdown-menu dropdown-cart" role="menu">
                <li>
                  <span class="item">
                    <span class="item-left">
                      <img src="http://lorempixel.com/50/50/" alt="" />
                      <span class="item-info">
                        <span>Item name</span>
                        <span>23$</span>
                      </span>
                    </span>
                    <span class="item-right">
                      <button class="btn btn-xs btn-danger pull-right">
                        x
                      </button>
                    </span>
                  </span>
                </li>
                <li>
                  <span class="item">
                    <span class="item-left">
                      <img src="http://lorempixel.com/50/50/" alt="" />
                      <span class="item-info">
                        <span>Item name</span>
                        <span>23$</span>
                      </span>
                    </span>
                    <span class="item-right">
                      <button class="btn btn-xs btn-danger pull-right">
                        x
                      </button>
                    </span>
                  </span>
                </li>
                <li>
                  <span class="item">
                    <span class="item-left">
                      <img src="http://lorempixel.com/50/50/" alt="" />
                      <span class="item-info">
                        <span>Item name</span>
                        <span>23$</span>
                      </span>
                    </span>
                    <span class="item-right">
                      <button class="btn btn-xs btn-danger pull-right">
                        x
                      </button>
                    </span>
                  </span>
                </li>
                <li>
                  <span class="item">
                    <span class="item-left">
                      <img src="http://lorempixel.com/50/50/" alt="" />
                      <span class="item-info">
                        <span>Item name</span>
                        <span>23$</span>
                      </span>
                    </span>
                    <span class="item-right">
                      <button class="btn btn-xs btn-danger pull-right">
                        x
                      </button>
                    </span>
                  </span>
                </li>
                <li class="divider"></li>
                <li>
                  <a class="text-center" href="">
                    View Cart
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
