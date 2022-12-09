import '../App.css';

const GetInvolved = () => {
  return (
      <>
      <h1>Get Involved</h1>
        <div class="event-list">
              <div class="event-bar row">
                  <div class="event-photo col-3 py-3 text-center">
                      <img src="../src/images/event1.png" width='180px'/>
                  </div>
                  <div class="event-description col-7 align-self-center">
                    <h4>Camp Boggy Creek</h4>
                    <p>Camp Boggy Creek is open year-round and utilizes 
                    nearly 1,800 volunteers per year to accomplish its 
                    mission to foster a spirit of joy by creating a free, 
                    safe and medically-sound camp environment that enriches 
                    the lives of children with serious illnesses and their 
                    families.</p>
                  </div>
                  <div class="join col-2 align-self-center text-center">
                      <a class="btn btn-primary text-center" href="register.html">Join Now</a>
                  </div>
              </div>
              <div class="event-bar row">
                  <div class="event-photo col-3 py-3 text-center">
                      <img src="../src/images/event2.png" width='200px'/>
                  </div>
                  <div class="event-description col-7 align-self-center">
                    <h4>English Conversation Lab</h4>
                    <p>Come and practice English with people from different countries.</p>
                  </div>
                  <div class="join col-2 align-self-center text-center">
                      <a class="btn btn-primary text-center" href="register.html">Join Now</a>
                  </div>
              </div>
              <div class="event-bar row">
                  <div class="event-photo col-3 py-3 text-center">
                      <img src="../src/images/event3.png" width='200px'/>
                  </div>
                  <div class="event-description col-7 align-self-center">
                    <h4>Utah County Foster Grandparent Program</h4>
                    <p>The Foster Grandparent Program connects volunteers age 55 
                    and over with children and young people with exceptional needs. 
                    Volunteers mentor, support, and help vulnerable children.</p>
                  </div>
                  <div class="join col-2 align-self-center text-center">
                      <a class="btn btn-primary text-center" href="register.html">Join Now</a>
                  </div>
              </div>
          </div>
          <div class="footer"><a href="https://github.com/inathanrredd/creativeproject3">Github Repository</a></div>
        </>
  
  
  );
};

export default GetInvolved;