import React from 'react'

export default function About() {
  return (
    <section id="about-us" className="container my-5">
      <div className="row text-center">
        <div className="col-12">
          <h2 className="text-sucess mb-4">About Us</h2>
          <p className="lead">
            At Gardner, we believe in the power of nature. Our mission is to help you create your own green sanctuary by providing the best tools, advice, and products. Whether you're a beginner or a seasoned gardener, we have something for everyone. Join us in making the world greener, one garden at a time!
          </p>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0">
            <img
              src="https://t3.ftcdn.net/jpg/01/95/00/54/360_F_195005444_Q9XMau2JWPU3g34r1hccHnnhm4xY9HIQ.jpg"
              alt="Team Member 1"
              className="card-img-top "
            />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Founder & CEO</p>
              <p className="card-text">
                John has a passion for gardening and sustainable living. He founded Gardner with the mission of helping people connect with nature.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0">
            <img
              src="https://t3.ftcdn.net/jpg/09/50/15/76/360_F_950157600_wo6ZCjQizfojYOSuTNuIm2yURZrMXqdY.jpg"
              alt="Team Member 2"
              className="card-img-top "
            />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Chief Horticulturist</p>
              <p className="card-text">
                Jane has over 15 years of experience in horticulture and loves sharing her knowledge with others. She plays a key role in product development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-0">
            <img
              src="https://img.freepik.com/premium-photo/man-working-garden_925414-5140.jpg"
              alt="Team Member 3"
              className="card-img-top "
            />
            <div className="card-body">
              <h5 className="card-title">Emily Taylor</h5>
              <p className="card-text">Community Manager</p>
              <p className="card-text">
                Emily is dedicated to fostering a strong gardening community. She engages with gardeners and customers to help improve their gardening experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
