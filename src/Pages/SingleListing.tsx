import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
interface Business {
  name: string;
  owner_name: string;
  address: string;
  photos_sample: { photo_url: string }[];
  website: string;
  rating: string;
  state: string;
  working_hours: {
    Monday?: string[];
    Tuesday?: string[];
    Wednesday?: string[];
    Thursday?: string[];
    Friday?: string[];
    Saturday?: string[];
    Sunday?: string[];
  };
  emails_and_contacts: {
    emails: string[];
    phone_numbers: string[];
  }[];
  full_address: string;
}
const Single_Listing: React.FC = () => {
  const { business_id } = useParams<{ business_id: string }>();
  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<Business[]>(
          `http://localhost:5000/api/businessDetail/${business_id}`
        );
        console.log('The data from the Listings ', response.data);
        setBusinesses(response?.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [business_id]);
  console.log('asdfghjkl', businesses);
  return (
    <section className="gray py-5 position-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
            {/* About The Business */}

            <div className="bg-white rounded mb-4">
              <div className="jbd-01 px-4 py-4">
                <div className="jbd-details">
                  <h5 className="ft-bold fs-lg">{businesses[0]?.name}</h5>
                  <div className="d-block mt-3">
                    <p>{businesses[0]?.owner_name}</p>
                    <p className="p-0 m-0">
                      {businesses[0]?.address}
                      {/* Temporibus autem quibusdam et aut officiis debitis aut
                          rerum necessitatibus saepe eveniet ut et voluptates
                          repudiandae sint et molestiae non recusandae. Itaque
                          earum rerum hic tenetur */}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Menu */}
            <div className="bg-white rounded mb-4">
              <div className="jbd-01 px-4 py-4">
                <div className="jbd-details mb-2">
                  <h5 className="ft-bold fs-lg">Business Menu</h5>
                  <div className="d-block mt-3">
                    <div className="row g-3">
                      {/* {businesses.} */}

                      {/* Single Menu */}

                      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="Goodup-sng-menu">
                          <div className="Goodup-sng-menu-thumb">
                            <img
                              // src="https://via.placeholder.com/550x400"
                              src={businesses[0]?.photos_sample[0]?.photo_url}
                              style={{ height: 250 }}
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="Goodup-sng-menu-caption">
                            <h4 className="ft-medium fs-md">
                              Brigue Medium Burger
                            </h4>
                            <div className="lkji-oiyt">
                              <span>Start From</span>{' '}
                              <h5 className="theme-cl ft-bold">$49</h5>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Single Menu */}
                      {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="Goodup-sng-menu">
                          <div className="Goodup-sng-menu-thumb">
                            <img
                              src="https://via.placeholder.com/550x400"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="Goodup-sng-menu-caption">
                            <h4 className="ft-medium fs-md">
                              Cheese Mrig Buttor
                            </h4>
                            <div className="lkji-oiyt">
                              <span>Start From</span>{" "}
                              <h5 className="theme-cl ft-bold">$129</h5>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* Single Menu */}
                      {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="Goodup-sng-menu">
                          <div className="Goodup-sng-menu-thumb">
                            <img
                              src="https://via.placeholder.com/550x400"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="Goodup-sng-menu-caption">
                            <h4 className="ft-medium fs-md">
                              Potato Chips Crispy
                            </h4>
                            <div className="lkji-oiyt">
                              <span>Start From</span>{" "}
                              <h5 className="theme-cl ft-bold">$79</h5>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* Single Menu */}
                      {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="Goodup-sng-menu">
                          <div className="Goodup-sng-menu-thumb">
                            <img
                              src="https://via.placeholder.com/550x400"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="Goodup-sng-menu-caption">
                            <h4 className="ft-medium fs-md">
                              Non Vegetarion Burger
                            </h4>
                            <div className="lkji-oiyt">
                              <span>Start From</span>{" "}
                              <h5 className="theme-cl ft-bold">$60</h5>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* Single Menu */}
                      {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="Goodup-sng-menu">
                          <div className="Goodup-sng-menu-thumb">
                            <img
                              src="https://via.placeholder.com/550x400"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="Goodup-sng-menu-caption">
                            <h4 className="ft-medium fs-md">
                              Kadhai Paneer &amp; Pee
                            </h4>
                            <div className="lkji-oiyt">
                              <span>Start From</span>{" "}
                              <h5 className="theme-cl ft-bold">$120</h5>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* Single Menu */}
                      {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-6">
                        <div className="Goodup-sng-menu">
                          <div className="Goodup-sng-menu-thumb">
                            <img
                              src="https://via.placeholder.com/550x400"
                              className="img-fluid"
                              alt=""
                            />
                          </div>
                          <div className="Goodup-sng-menu-caption">
                            <h4 className="ft-medium fs-md">
                              Crispy Chicken Muskio
                            </h4>
                            <div className="lkji-oiyt">
                              <span>Start From</span>{" "}
                              <h5 className="theme-cl ft-bold">$99</h5>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Amenities and More */}
            <div className="bg-white rounded mb-4">
              <div className="jbd-01 px-4 py-4">
                <div className="jbd-details">
                  <h5 className="ft-bold fs-lg">Amenities and More</h5>
                  <div className="Goodup-all-features-list mt-3">
                    <ul>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img src="assets/img/verify.svg" className="" alt="" />
                          <span>Health Score 8.7 / 10</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Offers Delivery</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Offers Takeout</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Reservations</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Staff wears masks</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Vegan Options</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Vegetarian Options</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Accepts Credit Cards</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Casual</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Moderate Noise</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Offers Catering</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Good for Groups</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Good For Kids</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Good for Breakfast</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Brunch, Lunch, Dinner</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Private Lot Parking</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Waiter Service</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Free Wi-Fi</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Beer &amp; Wine</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Drive-Thru</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace deactive">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Wheelchair Accessible</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace deactive">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>TV Services</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace deactive">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Outdoor Seating</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace deactive">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Happy Hour</span>
                        </div>
                      </li>
                      <li>
                        <div className="Goodup-afl-pace deactive">
                          <img
                            src="assets/img/verify.svg"
                            className="img-fluid"
                            alt=""
                          />
                          <span>Pets Allow</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Frequently Asked Questions */}
            <div className="d-block mb-2">
              <div className="jbd-01 py-2">
                <div className="jbd-details">
                  <h5 className="ft-bold fs-lg">Frequently Asked Questions</h5>
                  <div className="d-block mt-3">
                    <div id="accordion2" className="accordion">
                      <div className="card">
                        <div className="card-header" id="h7">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link"
                              data-bs-toggle="collapse"
                              data-bs-target="#ord7"
                              aria-expanded="true"
                              aria-controls="ord7"
                            >
                              Can I get GoodUP listing for free?
                            </button>
                          </h5>
                        </div>
                        <div
                          id="ord7"
                          className="collapse show"
                          aria-labelledby="h7"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="h8">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#ord8"
                              aria-expanded="false"
                              aria-controls="ord8"
                            >
                              How to Permanently Delete Files From Windows?
                            </button>
                          </h5>
                        </div>
                        <div
                          id="ord8"
                          className="collapse"
                          aria-labelledby="h8"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="h9">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#ord9"
                              aria-expanded="false"
                              aria-controls="ord9"
                            >
                              Can I get GoodUP listing for free?
                            </button>
                          </h5>
                        </div>
                        <div
                          id="ord9"
                          className="collapse"
                          aria-labelledby="h9"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header" id="h4">
                          <h5 className="mb-0">
                            <button
                              className="btn btn-link collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target="#ord4"
                              aria-expanded="false"
                              aria-controls="ord4"
                            >
                              For GoodUp which lisence is better for business
                              purpose?
                            </button>
                          </h5>
                        </div>
                        <div
                          id="ord4"
                          className="collapse"
                          aria-labelledby="h4"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recommended Reviews */}
            <div className="bg-white rounded mb-4">
              <div className="jbd-01 px-4 py-4">
                <div className="jbd-details mb-4">
                  <h5 className="ft-bold fs-lg">Recommended Reviews</h5>
                  <div className="reviews-comments-wrap">
                    {/* reviews-comments-item */}
                    <div className="reviews-comments-item">
                      <div className="review-comments-avatar">
                        <img
                          src="https://via.placeholder.com/400x400"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="reviews-comments-item-text">
                        <h4>
                          <a href="#">Kayla E. Claxton</a>
                          <span className="reviews-comments-item-date">
                            <i className="ti-calendar theme-cl me-1" />
                            27 Oct 2019
                          </span>
                        </h4>
                        <span className="agd-location">
                          <i className="lni lni-map-marker me-1" />
                          San Francisco, USA
                        </span>
                        <div className="listing-rating high">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                        </div>
                        <div className="clearfix" />
                        <p>
                          " Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident. "
                        </p>
                        <div className="pull-left reviews-reaction">
                          <a href="#" className="comment-like active">
                            <i className="ti-thumb-up" /> 12
                          </a>
                          <a href="#" className="comment-dislike active">
                            <i className="ti-thumb-down" /> 1
                          </a>
                          <a href="#" className="comment-love active">
                            <i className="ti-heart" /> 07
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*reviews-comments-item end*/}
                    {/* reviews-comments-item */}
                    <div className="reviews-comments-item">
                      <div className="review-comments-avatar">
                        <img
                          src="https://via.placeholder.com/400x400"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="reviews-comments-item-text">
                        <h4>
                          <a href="#">Amy M. Taylor</a>
                          <span className="reviews-comments-item-date">
                            <i className="ti-calendar theme-cl me-1" />2 Nov May
                            2019
                          </span>
                        </h4>
                        <span className="agd-location">
                          <i className="lni lni-map-marker me-1" />
                          Liverpool, London UK
                        </span>
                        <div className="listing-rating mid">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="clearfix" />
                        <p>
                          " Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident. "
                        </p>
                        <div className="pull-left reviews-reaction">
                          <a href="#" className="comment-like active">
                            <i className="ti-thumb-up" /> 12
                          </a>
                          <a href="#" className="comment-dislike active">
                            <i className="ti-thumb-down" /> 1
                          </a>
                          <a href="#" className="comment-love active">
                            <i className="ti-heart" /> 07
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*reviews-comments-item end*/}
                    {/* reviews-comments-item */}
                    <div className="reviews-comments-item">
                      <div className="review-comments-avatar">
                        <img
                          src="https://via.placeholder.com/400x400"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="reviews-comments-item-text">
                        <h4>
                          <a href="#">Susan C. Daggett</a>
                          <span className="reviews-comments-item-date">
                            <i className="ti-calendar theme-cl me-1" />
                            10 Nov 2019
                          </span>
                        </h4>
                        <span className="agd-location">
                          <i className="lni lni-map-marker me-1" />
                          Denver, United State
                        </span>
                        <div className="listing-rating good">
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star active" />
                          <i className="fas fa-star" />
                        </div>
                        <div className="clearfix" />
                        <p>
                          " Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident. "
                        </p>
                        <div className="pull-left reviews-reaction">
                          <a href="#" className="comment-like active">
                            <i className="ti-thumb-up" /> 12
                          </a>
                          <a href="#" className="comment-dislike active">
                            <i className="ti-thumb-down" /> 1
                          </a>
                          <a href="#" className="comment-love active">
                            <i className="ti-heart" /> 07
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*reviews-comments-item end*/}
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span className="fas fa-arrow-circle-right" />
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          ...
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          18
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span className="fas fa-arrow-circle-right" />
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Location & Hours */}
            <div className="bg-white rounded mb-4">
              <div className="jbd-01 px-4 py-4">
                <div className="jbd-details mb-4">
                  <h5 className="ft-bold fs-lg">Location &amp; Hours</h5>
                  <div className="Goodup-lot-wrap d-block">
                    <div className="row g-4">
                      <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="list-map-lot">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0148908503734!2d80.97350361499701!3d26.871267983145383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9a9f6d1727%3A0xb87eabf63f7e4cee!2sCafe%20Repertwahr!5e0!3m2!1sen!2sin!4v1649059491407!5m2!1sen!2sin"
                            width="100%"
                            height={250}
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                        <div className="list-map-capt">
                          <div className="lio-pact">
                            <span className="ft-medium text-info">
                              2919 N Flores St
                            </span>
                          </div>
                          <div className="lio-pact">
                            <span className="hkio-oilp ft-bold">
                              San Antonio, TX 78212
                            </span>
                          </div>
                          <div className="lio-pact">
                            <p className="ft-medium">Alta Vista</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12">
                        <table className="table table-borderless">
                          <tbody>
                            <tr>
                              <th scope="row">Mon</th>
                              <td>{businesses[0]?.working_hours?.Monday?.[0]}</td>
                            
                              <td className="text-success">Open now</td>
                            </tr>
                            <tr>
                              <td>Tue</td>
                              <td>
                                {businesses[0]?.working_hours?.Tuesday?.[0]}
                              </td>
                              <td />
                            </tr>
                            <tr>
                              <td>Wed</td>
                              <td>
                                {businesses[0]?.working_hours?.Tuesday?.[0]}
                              </td>
                              <td />
                            </tr>
                            <tr>
                              <td>Thu</td>
                              <td>
                                {businesses[0]?.working_hours?.Wednesday?.[0]}
                              </td>
                              <td />
                            </tr>
                            <tr>
                              <td>Fri</td>
                              <td>{businesses[0]?.working_hours?.Friday?.[0]}</td>
                              <td />
                            </tr>
                            <tr>
                              <td>Sat</td>
                              <td>
                                {businesses[0]?.working_hours?.Saturday?.[0]}
                              </td>
                              <td />
                            </tr>
                            <tr>
                              <td>Sun</td>
                              <td>{businesses[0]?.working_hours?.Sunday?.[0]}</td>
                              <td />
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Drop Your Review */}
            <div className="bg-white rounded mb-4">
              <div className="jbd-01 px-4 py-4">
                <div className="jbd-details mb-4">
                  <h5 className="ft-bold fs-lg">Drop Your Review</h5>
                  <div className="review-form-box form-submit mt-3">
                    <form>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group mb-3">
                            <label className="ft-medium small mb-1">
                              Choose Rate
                            </label>
                            <select className="form-control rounded">
                              <option>Choose Rating</option>
                              <option>1 Star</option>
                              <option>2 Star</option>
                              <option>3 Star</option>
                              <option>4 Star</option>
                              <option>5 Star</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group mb-3">
                            <label className="ft-medium small mb-1">Name</label>
                            <input
                              className="form-control rounded"
                              type="text"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="form-group mb-3">
                            <label className="ft-medium small mb-1">
                              Email
                            </label>
                            <input
                              className="form-control rounded"
                              type="email"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group mb-3">
                            <label className="ft-medium small mb-1">
                              Review
                            </label>
                            <textarea
                              className="form-control rounded ht-140"
                              placeholder="Review"
                              defaultValue={''}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn theme-bg text-light rounded"
                            >
                              Submit Review
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
            {/* order Booking */}
            <div className="jb-apply-form bg-white rounded py-4 px-4 mb-4">
              <h4 className="ft-bold mb-1">Order Food</h4>
              <div className="Goodup-09kjh">
                <ul>
                  <li>
                    $0.99+<span>delivery fee</span>
                  </li>
                  <li>
                    $0<span>min</span>
                  </li>
                  <li>
                    35-45<span>mins</span>
                  </li>
                </ul>
              </div>
              <form className="_apply_form_form">
                <div className="form-group">
                  <div className="side-search-item">
                    <span className="search-tag">
                      <i className="lni lni-map-marker" />
                    </span>
                    <input
                      type="text"
                      className="form-control b-0 ps-2"
                      placeholder="Enter delivery address"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="button"
                    className="btn btn-md rounded theme-bg text-light ft-medium fs-sm full-width"
                  >
                    Start Your Order
                  </button>
                </div>
              </form>
            </div>
            {/* Author Box */}
            <div className="jb-apply-form bg-white rounded py-4 px-4 mb-4">
              <div className="Goodup-agent-blocks">
                <div className="Goodup-agent-thumb">
                  <img
                    // src={businesses?.photos_sample[0]?.photo_url}
                    src={businesses[0]?.photos_sample[0]?.photo_url}
                    width={90}
                    className="img-fluid circle"
                    alt=""
                  />
                </div>
                <div className="Goodup-agent-caption">
                  <h4 className="ft-medium mb-0">
                    {' '}
                    {businesses[0]?.owner_name}
                  </h4>
                  <span className="agd-location">
                    <i className="lni lni-map-marker me-1" />
                    {businesses[0]?.state}
                  </span>
                </div>
                <div className="clearfix" />
              </div>
              <div className="Goodup-iuky">
                <ul>
                  <li>
                    140+<span>Listings</span>
                  </li>
                  <li>
                    <div className="text-success">{businesses[0]?.rating}</div>
                    <span>Rattings</span>
                  </li>
                  <li>
                    80K<span>Followers</span>
                  </li>
                </ul>
              </div>
              <div className="agent-cnt-info">
                <div className="row g-4">
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
                      className="adv-btn full-width"
                    >
                      Follow Now
                    </a>
                  </div>
                  <div className="col-6">
                    <a
                      href="javascript:void(0);"
                      className="adv-btn full-width"
                    >
                      Send Message
                    </a>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <a
                      href="javascript:void(0);"
                      className="adv-btn full-width theme-bg text-light"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Business Inof */}
            <div className="jb-apply-form bg-white rounded py-4 px-4 mb-4">
              <div className="uli-list-info">
                <ul>
                  <li>
                    <div className="list-uiyt">
                      <div className="list-iobk">
                        <i className="fas fa-globe" />
                      </div>
                      <div className="list-uiyt-capt">
                        <h5>Live Site</h5>
                        <p>{businesses[0]?.website}</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-uiyt">
                      <div className="list-iobk">
                        <i className="fas fa-envelope" />
                      </div>
                      <div className="list-uiyt-capt">
                        <h5>Drop a Mail</h5>
                        <p>
                          {businesses[0]?.emails_and_contacts[0]?.emails[0]}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-uiyt">
                      <div className="list-iobk">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="list-uiyt-capt">
                        <h5>Call Us</h5>
                        <p>
                          {
                            businesses[0]?.emails_and_contacts[0]
                              ?.phone_numbers[0]
                          }
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list-uiyt">
                      <div className="list-iobk">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="list-uiyt-capt">
                        <h5>Get Directions</h5>
                        <p>{businesses[0]?.full_address}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row g-3 mb-3">
              <div className="col-4">
                <a href="javascript:void(0);" className="adv-btn full-width">
                  <i className="fas fa-camera" />
                  Add Phoos
                </a>
              </div>
              <div className="col-4">
                <a href="javascript:void(0);" className="adv-btn full-width">
                  <i className="fas fa-share" />
                  Share
                </a>
              </div>
              <div className="col-4">
                <a href="javascript:void(0);" className="adv-btn full-width">
                  <i className="fas fa-heart" />
                  Save
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Single_Listing;
