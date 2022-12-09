import '../App.css';

const AboutUs = () => {
  return (
      <>
      <h1>About Us</h1>
        <div class="content">
          <div class="container image-container">
            <div class="row">
              <div class="col">
                <img src="../src/images/about.jpg" width='100%'/>
                <h2 class="about-heading">Our Mission</h2>
                <hr />
                <p>
                  At Volunteer.io, our mission is to connect people through opportunities to serve. We believe that service is one of the best ways to give back to our communities and improve the lives of those around us.
                  Everyone has the responsibilty to serve others, and Volunteer.io makes it easy by connecting you with local businesses and organizations that are sponsoring these service projects. By spending some of your time
                  volunteering with Volunteer.io, we promise that you will feel increased satisfaction in your own life, and you will dramatically change the lives of others for the better. What's there to lose? Register for a project
                  that interests you today!
                </p>
              </div>
            </div>
          </div>
          <div class="footer"><a href="https://github.com/inathanrredd/creativeproject3">Github Repository</a></div>
        </div>
    </>
  
  );
};

export default AboutUs;