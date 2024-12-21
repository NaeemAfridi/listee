import axios from 'axios';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
const Card = () => {
  const [businesses, setBusinesses] = useState([]);
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/api/businessDetails',
    params: {},
    headers: {},
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.request(options);
        console.log('The data from the cards ', response.data);
        setBusinesses(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  // Tilt card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ['7.5deg', '-7.5deg']
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ['-7.5deg', '7.5deg']
  );
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="tab-pane fade show active"
      id="places"
      role="tabpanel"
      aria-labelledby="places-tab"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="row justify-content-center"
        style={{
          // transform: "translateZ(75px)",
          // transformStyle: "preserve-3d",
          // rotateX,
          // rotateY,
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}) rotateY(${rotateY})`,
        }}
      >
        {/* <!-- Single --> */}

        {businesses.map((business) => (
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
            key={business.business_id}
          >
            <div className="Goodup-grid-wrap">
              <div className="Goodup-grid-upper">
                <div className="Goodup-pos ab-left">
                  <div className="Goodup-status close me-2">
                    {business.business_status}
                  </div>
                </div>
                <div className="Goodup-grid-thumb">
                  <Link to={`/single-listing/${business.business_id}`}>
                    {/* <a
                      // href="/single-listing"
                      className="d-block text-center m-auto"
                    > */}
                    <img
                      src={business.photos_sample[0].photo_url}
                      className="img-fluid"
                      alt=""
                    />
                    {/* </a> */}
                  </Link>
                </div>
                <div className="Goodup-rating overlay">
                  <div className="Goodup-pr-average high">4.8</div>
                  <div className="Goodup-aldeio">
                    <div className="Goodup-rates">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="Goodup-all-review">
                      <span>46 Reviews</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Goodup-grid-fl-wrap">
                <div className="Goodup-caption px-3 py-2">
                  <div className="Goodup-author">
                    <a href={business.website}>
                      <img
                        src={business.photos_sample[0].photo_url}
                        className="img-fluid circle"
                        alt=""
                      />
                    </a>
                  </div>
                  <h4 className="mb-0 ft-medium medium">
                    <a
                      href="single-listing-detail-2.html"
                      className="text-dark fs-md"
                    >
                      {business.name}
                    </a>
                  </h4>
                  <div className="Goodup-location">
                    <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                    {business.city}, {business.state}
                  </div>
                  <div className="Goodup-middle-caption mt-3">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                    </p>
                  </div>
                </div>
                <div className="Goodup-grid-footer py-2 px-3">
                  <div className="Goodup-ft-first">
                    <a
                      href="half-map-search-2.html"
                      className="Goodup-cats-wrap"
                    >
                      <div className="cats-ico bg-2">
                        <i className="lni lni-slim"></i>
                      </div>
                      <span className="cats-title">{business.type}</span>
                    </a>
                  </div>
                  <div className="Goodup-ft-last">
                    <div className="Goodup-inline">
                      <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-envelope position-absolute"></i>
                        </button>
                      </div>
                      <div className="Goodup-bookmark-btn">
                        <button type="button">
                          <i className="lni lni-heart-filled position-absolute"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Card;
