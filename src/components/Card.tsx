import React, { useRef, useState, useEffect } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Photo {
  photo_url: string;
}

interface Business {
  business_id: string;
  business_status: string;
  photos_sample: Photo[];
  website: string;
  name: string;
  city: string;
  state: string;
  type: string;
}

const ROTATION_RANGE = 10.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const Card: React.FC = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const options = {
    method: 'GET',
    url: 'http://localhost:5000/api/businessDetails',
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.request(options);
        console.log('The data from the cards ', response.data);
        setBusinesses(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredIndex(null);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        width: 'auto',
      }}
    >
      {businesses.map((business, index) => (
        <div className="" key={business.business_id}>
          <motion.div
            ref={ref}
            {...({
              onMouseMove: (e: React.MouseEvent<HTMLDivElement>) => handleMouseMove(index, e),
              onMouseLeave: handleMouseLeave,
            } as any)}
            style={{
              transformStyle: 'preserve-3d',
              transform: hoveredIndex === index ? transform : 'none',
              zIndex: hoveredIndex === index ? 1 : 0,
              margin: 20,
            }}
          >
            <div className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg">
              <div>
                <div className="Goodup-grid-wrap">
                  <div className="Goodup-grid-upper">
                    <div className="Goodup-pos ab-left">
                      <div className="Goodup-status close me-2">
                        {business.business_status}
                      </div>
                    </div>
                    <div className="Goodup-grid-thumb">
                      <Link to={`/single-listing/${business.business_id}`}>
                        <img
                          src={business.photos_sample[0]?.photo_url}
                          className="img-fluid"
                          alt={business.name}
                        />
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
                        <a href={business.website} target="_blank" rel="noopener noreferrer">
                          <img
                            src={business.photos_sample[0]?.photo_url}
                            className="img-fluid circle"
                            alt={business.name}
                          />
                        </a>
                      </div>
                      <h4 className="mb-0 ft-medium medium">
                        <Link to={`/single-listing/${business.business_id}`} className="text-dark fs-md">
                          {business.name}
                        </Link>
                      </h4>
                      <div className="Goodup-location">
                        <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                        {business.city}, {business.state}
                      </div>
                    </div>
                    <div className="Goodup-grid-footer py-2 px-3">
                      <div className="Goodup-ft-first">
                        <div className="Goodup-cats-wrap">
                          <div className="cats-ico bg-2">
                            <i className="lni lni-slim"></i>
                          </div>
                          <span className="cats-title">{business.type}</span>
                        </div>
                      </div>
                      <div className="Goodup-ft-last">
                        <div className="Goodup-inline">
                          <button type="button" className="Goodup-bookmark-btn">
                            <i className="lni lni-envelope position-absolute"></i>
                          </button>
                          <button type="button" className="Goodup-bookmark-btn">
                            <i className="lni lni-heart-filled position-absolute"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Card;
