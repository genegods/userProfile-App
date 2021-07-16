import React, { useEffect } from "react";
import profileImage from "../../asserts/images/tryImage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/userRedux/user.actions";
import { USER_KEY } from "../../redux/userRedux/user.reducer";
import Spinner from "../spinnerFolder/Spinner";

const UserApp = () => {
  // initialize dispatch
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, []);

  // view data from store
  let viewUser = useSelector((state) => {
    return state[USER_KEY];
  });

//   button click
let btnClick = () =>{
    dispatch(loadData());

}

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(viewUser)}</pre> */}
      <div className="row mt-4">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-header">
              <h4 className="font-weight-bold">RANDOM USER PROFILE APP</h4>
            </div>

            {/* body section */}
            <div className="card-body">
              {viewUser.loading === true ? (
                <Spinner />
              ) : (
                <React.Fragment>
                  {viewUser.data.length === 0 ? null : (
                    <React.Fragment>
                      {viewUser.data.results.map((item) => {
                        return (
                          <div key={item.email}>
                            <div className="profileContainer">
                              <div className="topContainer centered">
                                <div className="imageContainer centered">
                                  <img src={item.picture.large} alt="" />
                                </div>
                              </div>

                              <div className="downContainer">
                                <div className="profileContent">
                                  <i className="fa fa-user"></i>
                                  <h5>{item.name.title} {item.name.first} {item.name.last}</h5>
                                </div>

                                <div className="profileContent">
                                  <i className="fa fa-flag"></i>
                                  <h5>{item.location.country}</h5>
                                </div>

                                <div className="profileContent">
                                  <i className="fa fa-phone"></i>
                                  <h5>{item.phone}</h5>
                                </div>

                                <div className="profileContent">
                                  <i className="fa fa-envelope"></i>
                                  <h6 className='span'>{item.email}</h6>
                                </div>
                              </div>

                              <div>
                                <button className="btns" onClick={btnClick}>NEXT PROFILE</button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserApp;
