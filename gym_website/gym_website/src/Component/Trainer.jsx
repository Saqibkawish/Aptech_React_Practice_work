import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Trainer.css'; // Import custom CSS for styling

export default function Trainer() {
  return (
    <div className="container my-5">
      {/* Page Title */}
      <h2 className="text-center mb-4 text-dark">Meet Our Trainers</h2>

      {/* Row for displaying trainer cards */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {/* Trainer 1 */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/ta.jpg" className="card-img-top trainer-img" alt="Trainer 1" />
            <div className="card-body">
              <h5 className="card-title text-center">John Doe</h5>
              <p className="card-text text-center text-muted">Fitness Trainer</p>
              <p className="card-text">
                John is a certified fitness trainer with 5 years of experience. He specializes in strength training and bodyweight exercises.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-success">Contact</a>
            </div>
          </div>
        </div>

        {/* Trainer 2 */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/tb.jpg" className="card-img-top trainer-img" alt="Trainer 2" />
            <div className="card-body">
              <h5 className="card-title text-center">Jane Smith</h5>
              <p className="card-text text-center text-muted">Yoga & Pilates Trainer</p>
              <p className="card-text">
                Jane is an expert in yoga and Pilates, bringing calm and flexibility to her clients' workout routines.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-success">Contact</a>
            </div>
          </div>
        </div>

        {/* Trainer 3 */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/tc.jfif" className="card-img-top trainer-img" alt="Trainer 3" />
            <div className="card-body">
              <h5 className="card-title text-center">Michael Lee</h5>
              <p className="card-text text-center text-muted">Cardio Specialist</p>
              <p className="card-text">
                Michael specializes in cardiovascular exercises, helping clients improve endurance and stamina.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-success">Contact</a>
            </div>
          </div>
        </div>

        {/* Trainer 4 */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/td.jpg" className="card-img-top trainer-img" alt="Trainer 4" />
            <div className="card-body">
              <h5 className="card-title text-center">Emily Brown</h5>
              <p className="card-text text-center text-muted">Strength Training Expert</p>
              <p className="card-text">
                Emily is a strength training expert who can guide you to build muscle and achieve your fitness goals.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-success">Contact</a>
            </div>
          </div>
        </div>

        {/* Trainer 5 */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/te.jpg" className="card-img-top trainer-img" alt="Trainer 5" />
            <div className="card-body">
              <h5 className="card-title text-center">Sophie Green</h5>
              <p className="card-text text-center text-muted">Nutrition Specialist</p>
              <p className="card-text">
                Sophie is a certified nutritionist and wellness coach, helping clients with diet plans and healthy eating.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-success">Contact</a>
            </div>
          </div>
        </div>

        {/* Trainer 6 */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/tf.jfif" className="card-img-top trainer-img" alt="Trainer 6" />
            <div className="card-body">
              <h5 className="card-title text-center">Chris Wilson</h5>
              <p className="card-text text-center text-muted">CrossFit Expert</p>
              <p className="card-text">
                Chris is an expert in CrossFit and high-intensity workouts designed to challenge your strength and endurance.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-success">Contact</a>
            </div>
          </div>
        </div>

        {/* Trainer 7 */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/tg.jpg" className="card-img-top trainer-img" alt="Trainer 7" />
            <div className="card-body">
              <h5 className="card-title text-center">David Harris</h5>
              <p className="card-text text-center text-muted">Personal Trainer</p>
              <p className="card-text">
                David provides one-on-one coaching to help clients achieve their personal fitness goals.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-success">Contact</a>
            </div>
          </div>
        </div>

        {/* Trainer 8 */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/th.jfif" className="card-img-top trainer-img" alt="Trainer 8" />
            <div className="card-body">
              <h5 className="card-title text-center">Olivia Martinez</h5>
              <p className="card-text text-center text-muted">Yoga & Meditation</p>
              <p className="card-text">
                Olivia specializes in mindfulness and meditation, bringing peace to your fitness routine.
              </p>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-success">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
