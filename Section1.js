import React from 'react';

export default function Section1() {
  return (
    <div className="container-lg">
      <div className="row align-items-center">

        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <p className="mb-1 content-text">
            Welcome to <strong>JK Coaching Academy</strong>, your destination for quality and affordable Hindi coaching and extracurricular skill-based programs. We provide flexible learning options to ensure the best educational experience for every child.
          </p>
        </div>

        <div className="col-md-6 text-center">
          <img 
            src={`${process.env.PUBLIC_URL}/background.png`} 
            alt="Profile" 
            className="img-fluid profile-picture"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>      
    </div>
  );
}
