import Card from '../components/Card';

export const ListingTypes = () => {
  return (
    <>
      <section className="space min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="theme-cl mb-0">Featured Listings</h6>
                <h2 className="ft-bold">Goodup in Los Angeles</h2>
              </div>
            </div>
          </div>

          {/* <!-- row --> */}
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <ul
                className="nav nav-tabs small-tab mb-3"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="places-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#places"
                    type="button"
                    role="tab"
                    aria-controls="places"
                    aria-selected="true"
                  >
                    Places
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="events-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#events"
                    type="button"
                    role="tab"
                    aria-controls="events"
                    aria-selected="false"
                  >
                    Events
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="doctor-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#doctor"
                    type="button"
                    role="tab"
                    aria-controls="doctor"
                    aria-selected="false"
                  >
                    Doctors
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="car-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#car"
                    type="button"
                    role="tab"
                    aria-controls="car"
                    aria-selected="false"
                  >
                    Cars
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="real-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#real"
                    type="button"
                    role="tab"
                    aria-controls="real"
                    aria-selected="false"
                  >
                    Real Estate
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="hotels-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#hotels"
                    type="button"
                    role="tab"
                    aria-controls="hotels"
                    aria-selected="false"
                  >
                    Hotels
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="jobs-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#jobs"
                    type="button"
                    role="tab"
                    aria-controls="jobs"
                    aria-selected="false"
                  >
                    jobs
                  </button>
                </li>
              </ul>
            </div>

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="tab-content" id="myTabContent">
                {/* <!-- Places --> */}
                <Card />

                {/* <!-- /Places --> */}

                {/* <!-- Events --> */}
                <div
                  className="tab-pane fade"
                  id="events"
                  role="tabpanel"
                  aria-labelledby="events-tab"
                >
                  <div className="row justify-content-center">
                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="event-detail.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-overlay-caps">
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="event-detail.html"
                                className="text-white fs-md"
                              >
                                Amagansett Go Around
                              </a>
                            </h4>
                            <div className="Goodup-location text-white">
                              <i className="fas fa-map-marker-alt me-1"></i>
                              Meltron Silver, UK
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-grid-footer py-3 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-catsin">
                                Sport & Football
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <span className="small">9 Fab 09:30 - 10:30</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="event-detail.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-overlay-caps">
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="event-detail.html"
                                className="text-white fs-md"
                              >
                                Amateur Barber Night
                              </a>
                            </h4>
                            <div className="Goodup-location text-white">
                              <i className="fas fa-map-marker-alt me-1"></i>
                              California, USA
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-grid-footer py-3 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-catsin">
                                Sport & Football
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <span className="small">
                                10 Fab 09:00 - 10:00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="event-detail.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-overlay-caps">
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="event-detail.html"
                                className="text-white fs-md"
                              >
                                Apex Muker Trys
                              </a>
                            </h4>
                            <div className="Goodup-location text-white">
                              <i className="fas fa-map-marker-alt me-1"></i>
                              Montreal, Australia
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-grid-footer py-3 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-catsin">It Services</div>
                            </div>
                            <div className="Goodup-ft-last">
                              <span className="small">
                                12 Apr 14:30 - 15:45
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="event-detail.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-overlay-caps">
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="event-detail.html"
                                className="text-white fs-md"
                              >
                                Ragni Book Launching
                              </a>
                            </h4>
                            <div className="Goodup-location text-white">
                              <i className="fas fa-map-marker-alt me-1"></i>
                              Old Denver, USA
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-grid-footer py-3 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-catsin">Education</div>
                            </div>
                            <div className="Goodup-ft-last">
                              <span className="small">
                                18 Oct 10:00 - 11:00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="event-detail.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-overlay-caps">
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="event-detail.html"
                                className="text-white fs-md"
                              >
                                Madhu Spa Salon
                              </a>
                            </h4>
                            <div className="Goodup-location text-white">
                              <i className="fas fa-map-marker-alt me-1"></i>
                              104 Washington, USA
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-grid-footer py-3 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-catsin">Spa & Salon</div>
                            </div>
                            <div className="Goodup-ft-last">
                              <span className="small">
                                12 Sep 10:00 - 10:30
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="event-detail.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-overlay-caps">
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="event-detail.html"
                                className="text-white fs-md"
                              >
                                Blue Light Cafe
                              </a>
                            </h4>
                            <div className="Goodup-location text-white">
                              <i className="fas fa-map-marker-alt me-1"></i>
                              California, Canada
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-grid-footer py-3 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-catsin">Party & Cafe</div>
                            </div>
                            <div className="Goodup-ft-last">
                              <span className="small">
                                17 Jul 12:00 - 14:00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="event-detail.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-overlay-caps">
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="event-detail.html"
                                className="text-white fs-md"
                              >
                                Allante Mall Opening
                              </a>
                            </h4>
                            <div className="Goodup-location text-white">
                              <i className="fas fa-map-marker-alt me-1"></i>
                              Liverpool, London
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-grid-footer py-3 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-catsin">Shopping</div>
                            </div>
                            <div className="Goodup-ft-last">
                              <span className="small">
                                10 June 10:00 - 11:30
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="event-detail.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-overlay-caps">
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="event-detail.html"
                                className="text-white fs-md"
                              >
                                Antisocial Darwinism
                              </a>
                            </h4>
                            <div className="Goodup-location text-white">
                              <i className="fas fa-map-marker-alt me-1"></i>
                              San Francisco, USA
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-grid-footer py-3 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-catsin">
                                Social Network
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <span className="small">
                                15 May 10:00 - 11:00
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Events --> */}

                {/* <!-- Doctor --> */}
                <div
                  className="tab-pane fade"
                  id="doctor"
                  role="tabpanel"
                  aria-labelledby="doctor-tab"
                >
                  <div className="row justify-content-center">
                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="doctor-grid-view">
                        <div className="doctor-grid-thumb">
                          <a href="single-listing-detail-4.html">
                            <img
                              src="https://via.placeholder.com/1200x800"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="doctor-grid-caption">
                          <div className="doc-title-wrap">
                            <h4 className="doc-title verified">
                              <a href="single-listing-detail-4.html">
                                Dr. Heather D. Birch
                              </a>
                            </h4>
                          </div>
                          <span className="doc-designation">
                            MBBS, MS - General Surgery, MCh
                          </span>

                          <div className="doc-inner-wrap">
                            <div className="doc-ratting-boxes">
                              <ul className="doc ratting-view">
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <span className="doctor-review-list">
                                (44 Reviews)
                              </span>
                            </div>
                            <div className="doc-location">
                              <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                              G87P, Birmingham, UK
                            </div>
                          </div>
                        </div>

                        <div className="doctor-grid-footer">
                          <div className="doc-foot-first">
                            <span className="av-status available">
                              Available Today
                            </span>
                          </div>
                          <div className="doc-foot-last">
                            <a href="#" className="btn doc-book-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="doctor-grid-view">
                        <div className="doctor-grid-thumb">
                          <a href="single-listing-detail-4.html">
                            <img
                              src="https://via.placeholder.com/1200x800"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="doctor-grid-caption">
                          <div className="doc-title-wrap">
                            <h4 className="doc-title verified">
                              <a href="single-listing-detail-4.html">
                                Dr. Joyce G. Howell
                              </a>
                            </h4>
                          </div>
                          <span className="doc-designation">
                            MBBS, MS - General Surgery, MCh
                          </span>

                          <div className="doc-inner-wrap">
                            <div className="doc-ratting-boxes">
                              <ul className="doc ratting-view">
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <span className="doctor-review-list">
                                (44 Reviews)
                              </span>
                            </div>
                            <div className="doc-location">
                              <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                              G87P, Birmingham, UK
                            </div>
                          </div>
                        </div>

                        <div className="doctor-grid-footer">
                          <div className="doc-foot-first">
                            <span className="av-status available">
                              Available Today
                            </span>
                          </div>
                          <div className="doc-foot-last">
                            <a href="#" className="btn doc-book-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="doctor-grid-view">
                        <div className="doctor-grid-thumb">
                          <a href="single-listing-detail-4.html">
                            <img
                              src="https://via.placeholder.com/1200x800"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="doctor-grid-caption">
                          <div className="doc-title-wrap">
                            <h4 className="doc-title verified">
                              <a href="single-listing-detail-4.html">
                                Dr. Juliana J. GGoodupry
                              </a>
                            </h4>
                          </div>
                          <span className="doc-designation">
                            MBBS, MS - General Surgery, MCh
                          </span>

                          <div className="doc-inner-wrap">
                            <div className="doc-ratting-boxes">
                              <ul className="doc ratting-view">
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <span className="doctor-review-list">
                                (44 Reviews)
                              </span>
                            </div>
                            <div className="doc-location">
                              <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                              G87P, Birmingham, UK
                            </div>
                          </div>
                        </div>

                        <div className="doctor-grid-footer">
                          <div className="doc-foot-first">
                            <span className="av-status available">
                              Available Today
                            </span>
                          </div>
                          <div className="doc-foot-last">
                            <a href="#" className="btn doc-book-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="doctor-grid-view">
                        <div className="doctor-grid-thumb">
                          <a href="single-listing-detail-4.html">
                            <img
                              src="https://via.placeholder.com/1200x800"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="doctor-grid-caption">
                          <div className="doc-title-wrap">
                            <h4 className="doc-title verified">
                              <a href="single-listing-detail-4.html">
                                Dr. Elizabeth J. Vergara
                              </a>
                            </h4>
                          </div>
                          <span className="doc-designation">
                            MBBS, MS - General Surgery, MCh
                          </span>

                          <div className="doc-inner-wrap">
                            <div className="doc-ratting-boxes">
                              <ul className="doc ratting-view">
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <span className="doctor-review-list">
                                (44 Reviews)
                              </span>
                            </div>
                            <div className="doc-location">
                              <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                              G87P, Birmingham, UK
                            </div>
                          </div>
                        </div>

                        <div className="doctor-grid-footer">
                          <div className="doc-foot-first">
                            <span className="av-status available">
                              Available Today
                            </span>
                          </div>
                          <div className="doc-foot-last">
                            <a href="#" className="btn doc-book-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="doctor-grid-view">
                        <div className="doctor-grid-thumb">
                          <a href="single-listing-detail-4.html">
                            <img
                              src="https://via.placeholder.com/1200x800"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="doctor-grid-caption">
                          <div className="doc-title-wrap">
                            <h4 className="doc-title verified">
                              <a href="single-listing-detail-4.html">
                                Dr. Michelle R. McIntyre
                              </a>
                            </h4>
                          </div>
                          <span className="doc-designation">
                            MBBS, MS - General Surgery, MCh
                          </span>

                          <div className="doc-inner-wrap">
                            <div className="doc-ratting-boxes">
                              <ul className="doc ratting-view">
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <span className="doctor-review-list">
                                (44 Reviews)
                              </span>
                            </div>
                            <div className="doc-location">
                              <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                              G87P, Birmingham, UK
                            </div>
                          </div>
                        </div>

                        <div className="doctor-grid-footer">
                          <div className="doc-foot-first">
                            <span className="av-status available">
                              Available Today
                            </span>
                          </div>
                          <div className="doc-foot-last">
                            <a href="#" className="btn doc-book-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="doctor-grid-view">
                        <div className="doctor-grid-thumb">
                          <a href="single-listing-detail-4.html">
                            <img
                              src="https://via.placeholder.com/1200x800"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="doctor-grid-caption">
                          <div className="doc-title-wrap">
                            <h4 className="doc-title verified">
                              <a href="single-listing-detail-4.html">
                                Dr. Mary F. Holliday
                              </a>
                            </h4>
                          </div>
                          <span className="doc-designation">
                            MBBS, MS - General Surgery, MCh
                          </span>

                          <div className="doc-inner-wrap">
                            <div className="doc-ratting-boxes">
                              <ul className="doc ratting-view">
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <span className="doctor-review-list">
                                (44 Reviews)
                              </span>
                            </div>
                            <div className="doc-location">
                              <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                              G87P, Birmingham, UK
                            </div>
                          </div>
                        </div>

                        <div className="doctor-grid-footer">
                          <div className="doc-foot-first">
                            <span className="av-status available">
                              Available Today
                            </span>
                          </div>
                          <div className="doc-foot-last">
                            <a href="#" className="btn doc-book-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="doctor-grid-view">
                        <div className="doctor-grid-thumb">
                          <a href="single-listing-detail-4.html">
                            <img
                              src="https://via.placeholder.com/1200x800"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="doctor-grid-caption">
                          <div className="doc-title-wrap">
                            <h4 className="doc-title verified">
                              <a href="single-listing-detail-4.html">
                                Dr. Dennis K. Bales
                              </a>
                            </h4>
                          </div>
                          <span className="doc-designation">
                            MBBS, MS - General Surgery, MCh
                          </span>

                          <div className="doc-inner-wrap">
                            <div className="doc-ratting-boxes">
                              <ul className="doc ratting-view">
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <span className="doctor-review-list">
                                (44 Reviews)
                              </span>
                            </div>
                            <div className="doc-location">
                              <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                              G87P, Birmingham, UK
                            </div>
                          </div>
                        </div>

                        <div className="doctor-grid-footer">
                          <div className="doc-foot-first">
                            <span className="av-status available">
                              Available Today
                            </span>
                          </div>
                          <div className="doc-foot-last">
                            <a href="#" className="btn doc-book-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="doctor-grid-view">
                        <div className="doctor-grid-thumb">
                          <a href="single-listing-detail-4.html">
                            <img
                              src="https://via.placeholder.com/1200x800"
                              className="img-fluid"
                              alt=""
                            />
                          </a>
                        </div>

                        <div className="doctor-grid-caption">
                          <div className="doc-title-wrap">
                            <h4 className="doc-title verified">
                              <a href="single-listing-detail-4.html">
                                Dr. Donald S. Herring
                              </a>
                            </h4>
                          </div>
                          <span className="doc-designation">
                            MBBS, MS - General Surgery, MCh
                          </span>

                          <div className="doc-inner-wrap">
                            <div className="doc-ratting-boxes">
                              <ul className="doc ratting-view">
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star filled"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <span className="doctor-review-list">
                                (44 Reviews)
                              </span>
                            </div>
                            <div className="doc-location">
                              <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                              G87P, Birmingham, UK
                            </div>
                          </div>
                        </div>

                        <div className="doctor-grid-footer">
                          <div className="doc-foot-first">
                            <span className="av-status available">
                              Available Today
                            </span>
                          </div>
                          <div className="doc-foot-last">
                            <a href="#" className="btn doc-book-btn">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Doctor --> */}

                {/* <!-- car --> */}
                <div
                  className="tab-pane fade"
                  id="car"
                  role="tabpanel"
                  aria-labelledby="car-tab"
                >
                  <div className="row justify-content-center">
                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-7.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>30,999</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-cates multi">
                              <a href="search-car.html" className="cats-1">
                                Hyundai
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-7.html"
                                className="text-dark fs-md"
                              >
                                New Hyundai Creta
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-gas-pump"></i>
                                    <span>Petrol</span>
                                  </li>
                                  <li>
                                    <i className="far fa-calendar-alt"></i>
                                    <span>2018</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-blender-phone"></i>
                                    <span>20 KM/L</span>
                                  </li>
                                  <li>
                                    <i className="fab fa-accusoft"></i>
                                    <span>500 CC</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                San Francisco, USA
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-7.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>22,500</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-cates multi">
                              <a href="search-car.html" className="cats-1">
                                Tata
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-7.html"
                                className="text-dark fs-md"
                              >
                                New Hyundai Creta
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-gas-pump"></i>
                                    <span>Diesel</span>
                                  </li>
                                  <li>
                                    <i className="far fa-calendar-alt"></i>
                                    <span>2017</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-blender-phone"></i>
                                    <span>22 KM/L</span>
                                  </li>
                                  <li>
                                    <i className="fab fa-accusoft"></i>
                                    <span>512 CC</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                San Francisco, USA
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-7.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>40,000</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-cates multi">
                              <a href="search-car.html" className="cats-1">
                                Maruti
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-7.html"
                                className="text-dark fs-md"
                              >
                                New Hyundai Creta
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-gas-pump"></i>
                                    <span>Petrol</span>
                                  </li>
                                  <li>
                                    <i className="far fa-calendar-alt"></i>
                                    <span>2013</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-blender-phone"></i>
                                    <span>26 KM/L</span>
                                  </li>
                                  <li>
                                    <i className="fab fa-accusoft"></i>
                                    <span>700 CC</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                San Francisco, USA
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-7.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>32,999</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-cates multi">
                              <a href="search-car.html" className="cats-1">
                                Hyundai
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-7.html"
                                className="text-dark fs-md"
                              >
                                New Hyundai Creta
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-gas-pump"></i>
                                    <span>Diesel</span>
                                  </li>
                                  <li>
                                    <i className="far fa-calendar-alt"></i>
                                    <span>2017</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-blender-phone"></i>
                                    <span>18 KM/L</span>
                                  </li>
                                  <li>
                                    <i className="fab fa-accusoft"></i>
                                    <span>450 CC</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                San Francisco, USA
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-7.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>50,000</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-cates multi">
                              <a href="search-car.html" className="cats-1">
                                Nexon
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-7.html"
                                className="text-dark fs-md"
                              >
                                New Hyundai Creta
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-gas-pump"></i>
                                    <span>Petrol</span>
                                  </li>
                                  <li>
                                    <i className="far fa-calendar-alt"></i>
                                    <span>2020</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-blender-phone"></i>
                                    <span>22 KM/L</span>
                                  </li>
                                  <li>
                                    <i className="fab fa-accusoft"></i>
                                    <span>600 CC</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                San Francisco, USA
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-7.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>35,500</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-cates multi">
                              <a href="search-car.html" className="cats-1">
                                Maruti
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-7.html"
                                className="text-dark fs-md"
                              >
                                New Hyundai Creta
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-gas-pump"></i>
                                    <span>Diesel</span>
                                  </li>
                                  <li>
                                    <i className="far fa-calendar-alt"></i>
                                    <span>2012</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-blender-phone"></i>
                                    <span>21 KM/L</span>
                                  </li>
                                  <li>
                                    <i className="fab fa-accusoft"></i>
                                    <span>520 CC</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                San Francisco, USA
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-7.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>25,000</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-cates multi">
                              <a href="search-car.html" className="cats-1">
                                Tata
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-7.html"
                                className="text-dark fs-md"
                              >
                                New Hyundai Creta
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-gas-pump"></i>
                                    <span>Diesel</span>
                                  </li>
                                  <li>
                                    <i className="far fa-calendar-alt"></i>
                                    <span>2016</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-blender-phone"></i>
                                    <span>24 KM/L</span>
                                  </li>
                                  <li>
                                    <i className="fab fa-accusoft"></i>
                                    <span>450 CC</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                San Francisco, USA
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-7.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>34,999</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-cates multi">
                              <a href="search-car.html" className="cats-1">
                                Maruti
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-7.html"
                                className="text-dark fs-md"
                              >
                                New Hyundai Creta
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-gas-pump"></i>
                                    <span>Petrol</span>
                                  </li>
                                  <li>
                                    <i className="far fa-calendar-alt"></i>
                                    <span>2019</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-blender-phone"></i>
                                    <span>23 KM/L</span>
                                  </li>
                                  <li>
                                    <i className="fab fa-accusoft"></i>
                                    <span>540 CC</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                San Francisco, USA
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /car --> */}

                {/* <!-- Real --> */}
                <div
                  className="tab-pane fade"
                  id="real"
                  role="tabpanel"
                  aria-labelledby="real-tab"
                >
                  <div className="row justify-content-center">
                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status open me-2">
                              For Rent
                            </div>
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-5.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>30,999</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-author">
                              <a href="author-detail.html">
                                <img
                                  src="https://via.placeholder.com/400x400"
                                  className="img-fluid circle"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="Goodup-cates multi">
                              <span className="Goodup-apr-rates">
                                <i className="fas fa-star"></i>4.8
                              </span>
                              <a href="search-property.html" className="cats-1">
                                Apartment
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-5.html"
                                className="text-dark fs-md"
                              >
                                Liverpool London, LC345AC
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-bed"></i>
                                    <span>3 Beds</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-bath"></i>
                                    <span>2 Baths</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-clone"></i>
                                    <span>1.2k sqft</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-calendar"></i>
                                    <span>3 Days Ago</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                San Francisco, USA
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <div className="Goodup-inline">
                                <div className="Goodup-bookmark-btn">
                                  <button type="button">
                                    <i className="lni lni-envelope position-absolute"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status me-2">For Sale</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-5.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>44,000</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-author">
                              <a href="author-detail.html">
                                <img
                                  src="https://via.placeholder.com/400x400"
                                  className="img-fluid circle"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="Goodup-cates multi">
                              <span className="Goodup-apr-rates">
                                <i className="fas fa-star"></i>4.7
                              </span>
                              <a href="search-property.html" className="cats-1">
                                Condos
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-5.html"
                                className="text-dark fs-md"
                              >
                                Montreal Canada, HAQC445
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-bed"></i>
                                    <span>3 Beds</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-bath"></i>
                                    <span>2 Baths</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-clone"></i>
                                    <span>1.2k sqft</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-calendar"></i>
                                    <span>3 Days Ago</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                Liverpool, London UK
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <div className="Goodup-inline">
                                <div className="Goodup-bookmark-btn">
                                  <button type="button">
                                    <i className="lni lni-envelope position-absolute"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status open me-2">
                              For Rent
                            </div>
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-5.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>37,999</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-author">
                              <a href="author-detail.html">
                                <img
                                  src="https://via.placeholder.com/400x400"
                                  className="img-fluid circle"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="Goodup-cates multi">
                              <span className="Goodup-apr-rates">
                                <i className="fas fa-star"></i>4.5
                              </span>
                              <a href="search-property.html" className="cats-1">
                                Villa
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-5.html"
                                className="text-dark fs-md"
                              >
                                Huwai Denever USA, AWE789O
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-bed"></i>
                                    <span>3 Beds</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-bath"></i>
                                    <span>2 Baths</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-clone"></i>
                                    <span>1.2k sqft</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-calendar"></i>
                                    <span>3 Days Ago</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                California, Canada
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <div className="Goodup-inline">
                                <div className="Goodup-bookmark-btn">
                                  <button type="button">
                                    <i className="lni lni-envelope position-absolute"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status me-2">For Sale</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-5.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>45,000K</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-author">
                              <a href="author-detail.html">
                                <img
                                  src="https://via.placeholder.com/400x400"
                                  className="img-fluid circle"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="Goodup-cates multi">
                              <span className="Goodup-apr-rates">
                                <i className="fas fa-star"></i>4.9
                              </span>
                              <a href="search-property.html" className="cats-1">
                                House
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-5.html"
                                className="text-dark fs-md"
                              >
                                Alameda Canada, SHQT45O
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-bed"></i>
                                    <span>3 Beds</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-bath"></i>
                                    <span>2 Baths</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-clone"></i>
                                    <span>1.2k sqft</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-calendar"></i>
                                    <span>3 Days Ago</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                104 Washington, USA
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <div className="Goodup-inline">
                                <div className="Goodup-bookmark-btn">
                                  <button type="button">
                                    <i className="lni lni-envelope position-absolute"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status open me-2">
                              For Rent
                            </div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-5.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>35,000</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-author">
                              <a href="author-detail.html">
                                <img
                                  src="https://via.placeholder.com/400x400"
                                  className="img-fluid circle"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="Goodup-cates multi">
                              <span className="Goodup-apr-rates">
                                <i className="fas fa-star"></i>4.6
                              </span>
                              <a href="search-property.html" className="cats-1">
                                Building
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-5.html"
                                className="text-dark fs-md"
                              >
                                Henever Canada, QWUI98
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-bed"></i>
                                    <span>3 Beds</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-bath"></i>
                                    <span>2 Baths</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-clone"></i>
                                    <span>1.2k sqft</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-calendar"></i>
                                    <span>3 Days Ago</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                Old Denver, USA
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <div className="Goodup-inline">
                                <div className="Goodup-bookmark-btn">
                                  <button type="button">
                                    <i className="lni lni-envelope position-absolute"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status open me-2">
                              For Rent
                            </div>
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-5.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>42,000</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-author">
                              <a href="author-detail.html">
                                <img
                                  src="https://via.placeholder.com/400x400"
                                  className="img-fluid circle"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="Goodup-cates multi">
                              <span className="Goodup-apr-rates">
                                <i className="fas fa-star"></i>4.2
                              </span>
                              <a href="search-property.html" className="cats-1">
                                Apartment
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-5.html"
                                className="text-dark fs-md"
                              >
                                Barghimbar USA, ERIO098
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-bed"></i>
                                    <span>3 Beds</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-bath"></i>
                                    <span>2 Baths</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-clone"></i>
                                    <span>1.2k sqft</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-calendar"></i>
                                    <span>3 Days Ago</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                Montreal, Australia
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <div className="Goodup-inline">
                                <div className="Goodup-bookmark-btn">
                                  <button type="button">
                                    <i className="lni lni-envelope position-absolute"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status me-2">For Sale</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-5.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>31,950</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-author">
                              <a href="author-detail.html">
                                <img
                                  src="https://via.placeholder.com/400x400"
                                  className="img-fluid circle"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="Goodup-cates multi">
                              <span className="Goodup-apr-rates">
                                <i className="fas fa-star"></i>4.5
                              </span>
                              <a href="search-property.html" className="cats-1">
                                Villa
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-5.html"
                                className="text-dark fs-md"
                              >
                                Burbank Canada, ECH15462
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-bed"></i>
                                    <span>3 Beds</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-bath"></i>
                                    <span>2 Baths</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-clone"></i>
                                    <span>1.2k sqft</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-calendar"></i>
                                    <span>3 Days Ago</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                California, USA
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <div className="Goodup-inline">
                                <div className="Goodup-bookmark-btn">
                                  <button type="button">
                                    <i className="lni lni-envelope position-absolute"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status open me-2">
                              For Rent
                            </div>
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-5.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-prt-price">
                              $<span>46,999</span>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-author">
                              <a href="author-detail.html">
                                <img
                                  src="https://via.placeholder.com/400x400"
                                  className="img-fluid circle"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="Goodup-cates multi">
                              <span className="Goodup-apr-rates">
                                <i className="fas fa-star"></i>4.7
                              </span>
                              <a href="search-property.html" className="cats-1">
                                Work Space
                              </a>
                            </div>
                            <h4 className="mb-0 ft-medium medium">
                              <a
                                href="single-listing-detail-5.html"
                                className="text-dark fs-md"
                              >
                                Emeryville Green Vally
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-middle-caption mt-2">
                              <div className="Goodup-options-list">
                                <ul className="no-list-style">
                                  <li>
                                    <i className="fas fa-bed"></i>
                                    <span>3 Beds</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-bath"></i>
                                    <span>2 Baths</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-clone"></i>
                                    <span>1.2k sqft</span>
                                  </li>
                                  <li>
                                    <i className="fas fa-calendar"></i>
                                    <span>3 Days Ago</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="Goodup-grid-footer py-2 px-3">
                            <div className="Goodup-ft-first">
                              <div className="Goodup-location">
                                <i className="fas fa-map-marker-alt me-1 theme-cl"></i>
                                Meltron Silver, UK
                              </div>
                            </div>
                            <div className="Goodup-ft-last">
                              <div className="Goodup-inline">
                                <div className="Goodup-bookmark-btn">
                                  <button type="button">
                                    <i className="lni lni-envelope position-absolute"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Real --> */}

                {/* <!-- Hotels --> */}
                <div
                  className="tab-pane fade"
                  id="hotels"
                  role="tabpanel"
                  aria-labelledby="hotels-tab"
                >
                  <div className="row justify-content-center">
                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-8.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-pr-average high">4.2</div>
                            <div className="Goodup-aldeio">
                              <div className="Goodup-rates">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="Goodup-all-review">
                                <span>42 Reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-room-price">
                              <span>$199</span>per night
                            </div>
                            <h4 className="mb-0 ft-medium medium mb-0">
                              <a
                                href="single-listing-detail-8.html"
                                className="text-dark fs-md"
                              >
                                3112 Comfort Deluxe Space
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-distance">
                              1.5 km to Town Center
                            </div>
                            <div className="Goodup-middle-caption mt-3">
                              <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                                <div className="Goodup-facility-list">
                                  <ul className="no-list-style">
                                    <li>
                                      <i className="fas fa-wifi"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-swimming-pool"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-parking"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-dog"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-fan"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-wine-glass-alt"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="Goodup-booking-button">
                                <a href="#" className="Goodup-btn-book">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status offer me-2">
                              -20% Off
                            </div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-8.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-pr-average high">4.2</div>
                            <div className="Goodup-aldeio">
                              <div className="Goodup-rates">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="Goodup-all-review">
                                <span>42 Reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-room-price">
                              <span>$199</span>per night
                            </div>
                            <h4 className="mb-0 ft-medium medium mb-0">
                              <a
                                href="single-listing-detail-8.html"
                                className="text-dark fs-md"
                              >
                                3112 Comfort Deluxe Space
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-distance">
                              1.5 km to Town Center
                            </div>
                            <div className="Goodup-middle-caption mt-3">
                              <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                                <div className="Goodup-facility-list">
                                  <ul className="no-list-style">
                                    <li>
                                      <i className="fas fa-wifi"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-swimming-pool"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-parking"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-dog"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-fan"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-wine-glass-alt"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="Goodup-booking-button">
                                <a href="#" className="Goodup-btn-book">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-8.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-pr-average high">4.2</div>
                            <div className="Goodup-aldeio">
                              <div className="Goodup-rates">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="Goodup-all-review">
                                <span>42 Reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-room-price">
                              <span>$199</span>per night
                            </div>
                            <h4 className="mb-0 ft-medium medium mb-0">
                              <a
                                href="single-listing-detail-8.html"
                                className="text-dark fs-md"
                              >
                                3112 Comfort Deluxe Space
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-distance">
                              1.5 km to Town Center
                            </div>
                            <div className="Goodup-middle-caption mt-3">
                              <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                                <div className="Goodup-facility-list">
                                  <ul className="no-list-style">
                                    <li>
                                      <i className="fas fa-wifi"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-swimming-pool"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-parking"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-dog"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-fan"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-wine-glass-alt"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="Goodup-booking-button">
                                <a href="#" className="Goodup-btn-book">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-8.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-pr-average high">4.2</div>
                            <div className="Goodup-aldeio">
                              <div className="Goodup-rates">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="Goodup-all-review">
                                <span>42 Reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-room-price">
                              <span>$199</span>per night
                            </div>
                            <h4 className="mb-0 ft-medium medium mb-0">
                              <a
                                href="single-listing-detail-8.html"
                                className="text-dark fs-md"
                              >
                                3112 Comfort Deluxe Space
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-distance">
                              1.5 km to Town Center
                            </div>
                            <div className="Goodup-middle-caption mt-3">
                              <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                                <div className="Goodup-facility-list">
                                  <ul className="no-list-style">
                                    <li>
                                      <i className="fas fa-wifi"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-swimming-pool"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-parking"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-dog"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-fan"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-wine-glass-alt"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="Goodup-booking-button">
                                <a href="#" className="Goodup-btn-book">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status offer me-2">
                              -20% Off
                            </div>
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-8.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-pr-average high">4.2</div>
                            <div className="Goodup-aldeio">
                              <div className="Goodup-rates">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="Goodup-all-review">
                                <span>42 Reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-room-price">
                              <span>$199</span>per night
                            </div>
                            <h4 className="mb-0 ft-medium medium mb-0">
                              <a
                                href="single-listing-detail-8.html"
                                className="text-dark fs-md"
                              >
                                3112 Comfort Deluxe Space
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-distance">
                              1.5 km to Town Center
                            </div>
                            <div className="Goodup-middle-caption mt-3">
                              <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                                <div className="Goodup-facility-list">
                                  <ul className="no-list-style">
                                    <li>
                                      <i className="fas fa-wifi"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-swimming-pool"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-parking"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-dog"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-fan"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-wine-glass-alt"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="Goodup-booking-button">
                                <a href="#" className="Goodup-btn-book">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status offer me-2">
                              -20% Off
                            </div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-8.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-pr-average high">4.2</div>
                            <div className="Goodup-aldeio">
                              <div className="Goodup-rates">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="Goodup-all-review">
                                <span>42 Reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-room-price">
                              <span>$199</span>per night
                            </div>
                            <h4 className="mb-0 ft-medium medium mb-0">
                              <a
                                href="single-listing-detail-8.html"
                                className="text-dark fs-md"
                              >
                                3112 Comfort Deluxe Space
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-distance">
                              1.5 km to Town Center
                            </div>
                            <div className="Goodup-middle-caption mt-3">
                              <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                                <div className="Goodup-facility-list">
                                  <ul className="no-list-style">
                                    <li>
                                      <i className="fas fa-wifi"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-swimming-pool"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-parking"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-dog"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-fan"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-wine-glass-alt"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="Goodup-booking-button">
                                <a href="#" className="Goodup-btn-book">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-featured-tag">Featured</div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-8.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-pr-average high">4.2</div>
                            <div className="Goodup-aldeio">
                              <div className="Goodup-rates">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="Goodup-all-review">
                                <span>42 Reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-room-price">
                              <span>$199</span>per night
                            </div>
                            <h4 className="mb-0 ft-medium medium mb-0">
                              <a
                                href="single-listing-detail-8.html"
                                className="text-dark fs-md"
                              >
                                3112 Comfort Deluxe Space
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-distance">
                              1.5 km to Town Center
                            </div>
                            <div className="Goodup-middle-caption mt-3">
                              <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                                <div className="Goodup-facility-list">
                                  <ul className="no-list-style">
                                    <li>
                                      <i className="fas fa-wifi"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-swimming-pool"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-parking"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-dog"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-fan"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-wine-glass-alt"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="Goodup-booking-button">
                                <a href="#" className="Goodup-btn-book">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="Goodup-grid-wrap">
                        <div className="Goodup-grid-upper">
                          <div className="Goodup-bookmark-btn">
                            <button type="button">
                              <i className="lni lni-heart-filled position-absolute"></i>
                            </button>
                          </div>
                          <div className="Goodup-pos ab-left">
                            <div className="Goodup-status offer me-2">
                              -20% Off
                            </div>
                          </div>
                          <div className="Goodup-grid-thumb">
                            <a
                              href="single-listing-detail-8.html"
                              className="d-block text-center m-auto"
                            >
                              <img
                                src="https://via.placeholder.com/1200x850"
                                className="img-fluid"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="Goodup-rating overlay">
                            <div className="Goodup-pr-average high">4.2</div>
                            <div className="Goodup-aldeio">
                              <div className="Goodup-rates">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <div className="Goodup-all-review">
                                <span>42 Reviews</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Goodup-grid-fl-wrap">
                          <div className="Goodup-caption px-3 py-2">
                            <div className="Goodup-room-price">
                              <span>$199</span>per night
                            </div>
                            <h4 className="mb-0 ft-medium medium mb-0">
                              <a
                                href="single-listing-detail-8.html"
                                className="text-dark fs-md"
                              >
                                3112 Comfort Deluxe Space
                                <span className="verified-badge">
                                  <i className="fas fa-check-circle"></i>
                                </span>
                              </a>
                            </h4>
                            <div className="Goodup-distance">
                              1.5 km to Town Center
                            </div>
                            <div className="Goodup-middle-caption mt-3">
                              <div className="Goodup-facilities-wrap Goodup-flx mb-0">
                                <div className="Goodup-facility-list">
                                  <ul className="no-list-style">
                                    <li>
                                      <i className="fas fa-wifi"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-swimming-pool"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-parking"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-dog"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-fan"></i>
                                    </li>
                                    <li>
                                      <i className="fas fa-wine-glass-alt"></i>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="Goodup-booking-button">
                                <a href="#" className="Goodup-btn-book">
                                  Book Now
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /Hotels --> */}

                {/* <!-- jobs --> */}
                <div
                  className="tab-pane fade"
                  id="jobs"
                  role="tabpanel"
                  aria-labelledby="jobs-tab"
                >
                  <div className="row justify-content-center">
                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                Application Designer
                              </a>
                            </h4>
                            <div className="_times_jb">$70k - 80k</div>
                            <div className="_jb_types fulltime_lite">
                              Full Time
                            </div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">Just now</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                IOS Developer
                              </a>
                            </h4>
                            <div className="_times_jb">$55k - 80k</div>
                            <div className="_jb_types parttime_lite">
                              Part Time
                            </div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">10 min ago</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                Web Developer
                              </a>
                            </h4>
                            <div className="_times_jb">$50k - 60k</div>
                            <div className="_jb_types internship_lite">
                              Internship
                            </div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">02 min ago</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                Product Designer
                              </a>
                            </h4>
                            <div className="_times_jb">$40k - 60k</div>
                            <div className="_jb_types parttime_lite">
                              Part Time
                            </div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">05 min ago</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                UI/UX Designer
                              </a>
                            </h4>
                            <div className="_times_jb">$60k - 80k</div>
                            <div className="_jb_types remote">Remote</div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">10 min ago</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                SEO Expert
                              </a>
                            </h4>
                            <div className="_times_jb">$30k - 50k</div>
                            <div className="_jb_types fulltime_lite">
                              Full Time
                            </div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">20 min ago</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                Magento Developer
                              </a>
                            </h4>
                            <div className="_times_jb">$50k - 60k</div>
                            <div className="_jb_types internship_lite">
                              Internship
                            </div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">1 hour ago</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                WordPress Developer
                              </a>
                            </h4>
                            <div className="_times_jb">$40k - 60k</div>
                            <div className="_jb_types fulltime_lite">
                              Full Time
                            </div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">6 hour ago</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                PHP Developer
                              </a>
                            </h4>
                            <div className="_times_jb">$25k - 40k</div>
                            <div className="_jb_types remote">Remote</div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">3 hour ago</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                Content Writer
                              </a>
                            </h4>
                            <div className="_times_jb">$30k - 40k</div>
                            <div className="_jb_types fulltime_lite">
                              Full Time
                            </div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">5 hour ago</div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Single Jobs --> */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                      <div className="_jb_list72">
                        <div className="jobs-like bookmark">
                          <label className="toggler toggler-danger">
                            <input type="checkbox" />
                            <i className="fa fa-bookmark"></i>
                          </label>
                        </div>
                        <div className="_jb_list72_flex">
                          <div className="_jb_list72_first">
                            <div className="_jb_list72_yhumb">
                              <img
                                src="https://via.placeholder.com/200x200"
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="_jb_list72_last">
                            <h4 className="_jb_title">
                              <a href="single-listing-detail-6.html">
                                UI/UX Designer
                              </a>
                            </h4>
                            <div className="_times_jb">$30k - 55k</div>
                            <div className="_jb_types parttime_lite">
                              Part Time
                            </div>
                          </div>
                        </div>
                        <div className="_jb_list72_foot">
                          <div className="_times_jb">7 hour ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- /jobs --> */}
              </div>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
      </section>
    </>
  );
};

export default ListingTypes;
