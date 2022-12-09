import '../App.css';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
        <div class="content">
            <div class="search-area">
                <div class="container search-bar">
                    <div class="row">

                        <div class="col-sm-10">
                            <em>Search for volunteer opportunities here</em>
                        </div>
                        <div class="col-sm-2 search-button">
                            <a href="howtohelp.html">Search</a>
                        </div>
                    </div>
                </div>
               
            </div>
            <div class="container image-container">
              <div class="row">
                <div class = "col main-image">
                  <img src="../src/images/main1.jpg" width='100%'/>
                  <div class="main-image-text"><h4>Get involved</h4></div>
                </div>
                <div class = "col main-image">
                  <img src="../src/images/main2.jpg" width='100%'/>
                  <div class="main-image-text"><h4>Make a difference</h4></div>
                </div>
                <div class = "col main-image">
                  <img src="../src/images/main3.jpg" width = '100%'/>
                  <div class="main-image-text"><h4>Change lives</h4></div>
                </div>
              </div>
              
            </div>
            
            <div class="footer"> Site by Claire Chen and Nathan Redd</div>
        </div>
        </>
      );
};

export default Home;