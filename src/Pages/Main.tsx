import { useState } from "react";
import SearchCard from "../components/SearchCard";
import Search from "../components/Search";
import Categories from "./Categories";
import ListingTypes from "./ListingTypes";
import Blog from "./Blog";
import Pricing from "./Pricing";
import Download from "./Download";
import Newsletter from "../components/Newsletter";
interface SearchQuery {
  findQuery: string;
  whereQuery: string;
}
const Main = () => {
  const [searchQuery, setSearchQuery] = useState<SearchQuery | null>(null);

  const handleSearch = (find: string, where: string): void => {
    setSearchQuery({ findQuery: find, whereQuery: where }); // Create a SearchQuery object
  };
  return (
    <>
      {/* <!-- Preloader - style you can find in spinners.css --> */}
      <div className="preloader"></div>

      {/* <!-- Main wrapper - style you can find in pages.scss --> */}
      <div id="main-wrapper">
        {/* <!-- Top header  --> */}
        {/* <NavBar /> */}
        {/* <!-- ======================= Home Banner ======================== --> */}
        <div className="home-banner margin-bottom-40" data-overlay="5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_caption text-center mb-5">
                  <h1 className="banner_title ft-bold mb-1">
                    Explore Great Place in Your
                  </h1>
                  <p className="fs-md ft-medium">
                    Explore wonderful place to stay, salon, shoping, massage or
                    visit local areas.
                  </p>
                </div>
                <div
                  className=""
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Search onSearch={handleSearch} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {searchQuery ? (
          <>
            <span></span>
            <SearchCard searchQuery={searchQuery} />
          </>
        ) : (
          <>
            <span></span>
          </>
        )}

        {/* <!-- ======================= Listing Categories ======================== --> */}
        <Categories />
        {/* <!-- ======================= All Types Listing ======================== --> */}
        <ListingTypes />
        {/* <!-- ======================= Our Partner Start ============================ --> */}
        <section className="pt-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
                <div className="sec_title position-relative text-center mb-5">
                  <h6 className="text-muted mb-0">Our Partners</h6>
                  <h2 className="ft-bold">
                    We Have Worked with{" "}
                    <span className="theme-cl">10,000+</span> Trusted Companies
                  </h2>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="empl-thumb text-center px-3 py-4">
                  <img
                    src="https://via.placeholder.com/300x90"
                    className="img-fluid mx-auto"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <Card /> */}
        {/* <Temp /> */}

        {/* <!-- ======================= Our Partner Start ============================ --> */}
        {/* <!-- ======================= Blog Start ============================ --> */}
        <Blog />
        {/* <!-- ============================ Pricing Start ==================================== --> */}
        <Pricing />
        {/* <!-- ========================== Download App Section =============================== --> */}
        <Download />
        {/* <!-- ======================= Newsletter Start ============================ --> */}
        <Newsletter />
        {/* <!-- Log In Modal --> */}
        {/* <div
          className="modal fade"
          id="login"
          tabindex="-1"
          role="dialog"
          aria-labelledby="loginmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog login-pop-form" role="document">
            <div className="modal-content" id="loginmodal">
              <div className="modal-headers">
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span className="ti-close"></span>
                </button>
              </div>

              <div className="modal-body p-5">
                <div className="text-center mb-4">
                  <h4 className="m-0 ft-medium">Login Your Account</h4>
                </div>

                <form className="submit-form">
                  <div className="form-group">
                    <label className="mb-1">Email</label>
                    <input
                      type="text"
                      id="inputEmail"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control rounded bg-light"
                      placeholder="Email*"
                    />
                    {errors.email && (
                      <div className="alert alert-danger">
                        {" "}
                        {errors.email.message}
                      </div>
                    )}

                    {errors.serverMessage && (
                      <div className="alert alert-danger">
                        {" "}
                        {errors.serverMessage}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="mb-1">Password</label>
                    <input
                      type="password"
                      id="inputPassword"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control rounded bg-light"
                      placeholder="Password*"
                    />
                    {errors.password && (
                      <div className="alert alert-danger">
                        {" "}
                        {errors.password.message}{" "}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <input
                          id="dd"
                          className="checkbox-custom"
                          name="dd"
                          type="checkbox"
                          checked
                        />
                        <label for="dd" className="checkbox-custom-label">
                          Remember Me
                        </label>
                      </div>
                      <div className="eltio_k2">
                        <a href="#" className="theme-cl">
                          Lost Your Password?
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light rounded ft-medium"
                    >
                      Sign In
                    </button>
                  </div>

                  <div className="form-group text-center mb-0">
                    <p className="extra">Or login with</p>
                    <div className="option-log">
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="https://via.placeholder.com/200x200"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Google
                        </a>
                      </div>
                      <div className="single-log-opt">
                        <a href="javascript:void(0);" className="log-btn">
                          <img
                            src="assets/img/facebook.png"
                            className="img-fluid"
                            alt=""
                          />
                          Login with Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Modal */}
        <a id="tops-button" className="top-scroll" title="Back to top" href="#">
          <i className="ti-arrow-up" />
        </a>
      </div>

      {/* <!-- End Wrapper --> */}
    </>
  );
};

export default Main;
