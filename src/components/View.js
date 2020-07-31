import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class View extends Component {
  state = {
    data: false
  }
  async componentDidMount(){
    let res = await fetch('http://localhost:8001/')
    let data = await res.json()
    this.setState({
      data: data
    })
  }

  render() {
    const {data} = this.state

    var settings = {
      loop:true,
      infinite: true,
      speed: 1500,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            }
        },
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
          }
      },
      {
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
        }
    },
      ]
    };


   if(data){
    return (
      <div className="pb-3">

        <div className="block" id="product-details">
          <div className="section">
              <div className="section-title">
                <p>Product Details</p>
              </div>
              <div className="section-body">
                <div className="d-flex">
                  <div className="field">
                    <img src="./images/tag.png" width="14px" height="14px"/>
                    <div><p className="field-title">Batch Number</p>
                    <p className="field-desc">{data.product.batch_number}</p>
                    </div>
                  </div>

                  <div className="field">
                    <img src="./images/file-minus.svg" width="14px" height="14px"/>
                    <div><p className="field-title">Product Number</p>
                    <p className="field-desc">{data.product.product_number}</p>
                    </div>
                  </div>

                  <div className="field">
                    <img src="./images/group-18.svg" width="14px" height="14px"/>
                    <div><p className="field-title">Scan ID</p>
                    <p className="field-desc">{data.product.scan_id}</p>
                    </div>
                  </div>

                  <div className="field">
                    <img src="./images/group-23.svg" width="14px" height="14px"/>
                    <div><p className="field-title">Product Name</p>
                    <p className="field-desc">{data.product.product_name}</p>
                    </div>
                  </div>

                  <div className="field">
                    <img src="./images/group-17.svg" width="14px" height="14px"/>
                    <div><p className="field-title">Expiry Date</p>
                    <p className="field-desc">{data.product.expiry}</p>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-column">
                    <div className="field">
                      <img src="./images/group-24.svg" width="14px" height="14px"/>
                      <div>
                        <p className="field-title">Store Name</p>
                        <p className="field-desc">{data.product.store_name}</p>
                      </div>
                    </div>
                    <div className="field">
                      <img src="./images/group-19.svg" width="14px" height="14px"/>
                      <div>
                        <div className="d-flex justify-content-between">
                          <p className="field-title">Store Location</p>
                          <a href="#" className="field-title fs-12 underline">Open Map<img className="ml-1 mt-0" src="./images/path-2.svg" width="9px" height="10px"/></a>
                        </div>
                        <p className="field-desc">{data.product.store_location}</p>
                      </div>
                      <p></p>
                    </div>
                  </div>

                  <div id="img-slider">
                    <div className="field">
                      <img src="./images/shape-copy.svg" width="14px" height="14px"/>
                      <div>
                        <p className="field-title">Product Image</p>
                        <Slider {...settings}>
                          {data.product.images.map(img=>
                          <div>
                            <img src={img} width="80px" height="80px"/>
                          </div>
                          )}
                    
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>


              

              </div>
          </div>
        </div>

        <div className="block d-md-flex" id="block2">

          <div className="section">
            <div className="section-title">
              <p>User Details</p>
            </div>

            <div className="section-body">

              <div className="d-flex">
                <div className="field w-50 mr-0">
                  <img src="./images/user-4.svg" width="14px" height="14px"/>
                  <div><p className="field-title">User Name</p>
                  <p className="field-desc">{data.user.name}</p>
                  </div>
                </div>
                <div className="field w-50 mr-5">
                  <img src="./images/phone-call-4.svg" width="14px" height="14px"/>
                  <div><p className="field-title">User Phone</p>
                  <p className="field-desc">{data.user.phone}</p>
                  </div>
                </div>
              </div>    

              <div className="d-flex">
                <div className="field w-50 mr-0">
                  <img src="./images/mail-1.svg" width="14px" height="14px"/>
                  <div><p className="field-title">User Email</p>
                  <p className="field-desc">{data.user.email}</p>
                  </div>
                </div>
                <div className="field w-50 ml-0 mr-5">
                  <img src="./images/group-19.svg" width="14px" height="14px"/>
                  <div><p className="field-title">User Location</p>
                  <p className="field-desc">{data.user.location}</p>
                  </div>
                </div>
              </div>  

            </div>
          </div>
  
  
          <div className="section">
            <div className="section-title">
              <p>Request Details</p>
            </div>

            <div className="section-body">

              <div className="d-flex">
                <div className="field w-40 mr-0">
                  <img src="./images/file-minus-4.svg" width="14px" height="14px"/>
                  <div><p className="field-title">Request Subject</p>
                  <p className="field-desc">{data.request.subject}</p>
                  </div>
                </div>
                <div className="field w-60 mx-0">
                  <img src="./images/file-minus-2.svg" width="14px" height="14px"/>
                  <div><p className="field-title">Request Type</p>
                  <p className="field-desc">{data.request.type}</p>
                  </div>
                </div>
              </div>    

              <div className="d-flex">
                <div className="field w-40 mr-0">
                  <img src="./images/group-17-2.svg" width="14px" height="14px"/>
                  <div><p className="field-title">Request Date</p>
                  <p className="field-desc">{data.request.date}</p>
                  </div>
                </div>
                <div className="field w-60 mx-0 pr-1">
                  <img src="./images/file-minus-3.svg" width="14px" height="14px"/>
                  <div>
                    <p className="field-title">Request Description</p>
                    <p className="field-desc">{data.request.description}</p>
                  </div>
                </div>
              </div>  

            </div>
          </div>
  

        </div>



        <div className="block" id="asignee-details">
          <div className="section">
              <div className="section-title justify-content-between">
                <p>Asignee Details</p>
                <div>
                  <a className="assign assign-1 mr-2">
                    Un-Assign
                  </a>
                  <a className="assign assign-2 mr-3">
                    Change Assignee
                    <img className="ml-5px" src="./images/arrow-down.svg" width="11px"/>
                  </a>
                </div>
              </div>
              <div className="section-body">
                <div className="d-flex">
                  <div className="field">
                    <img src="./images/user-4.svg" width="14px" height="14px"/>
                    <div><p className="field-title">Assignee Name</p>
                    <p className="field-desc">Stuart</p>
                    </div>
                  </div>

                  <div className="field">
                    <img src="./images/phone-call-4.svg" width="14px" height="14px"/>
                    <div><p className="field-title">Phone Number</p>
                    <p className="field-desc">35467456846</p>
                    </div>
                  </div>

                  <div className="field">
                    <img src="./images/mail-1.svg" width="14px" height="14px"/>
                    <div><p className="field-title">Email ID</p>
                    <p className="field-desc">jenny_example@email.com</p>
                    </div>
                  </div>

                  <div className="field">
                    <img src="./images/group-17.svg" width="14px" height="14px"/>
                    <div><p className="field-title">Date of Action</p>
                    <p className="field-desc">01/12/2020</p>
                    </div>
                  </div>

                  <div className="field mr-4">
                    <img src="./images/file-minus-4.svg" width="14px" height="14px"/>
                    <div><p className="field-title">Request Status</p>
                    <p className="field-desc">Acknowledged</p>
                    </div>
                  </div>
                </div>

              </div>
          </div>
        </div>


      </div>
    );
    }else{
      return "...loading"
    }
  }
}


export default View;