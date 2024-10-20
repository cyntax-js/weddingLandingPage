import React, { useEffect, useState } from "react";
import "./index.css";
import TicketModal from "../../Components/TcketModal/TicketModal";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { UPLOAD_IMAGE, GET_IMAGES } from "../../services/AdminService";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { BASE_URL } from "../../config/core";

const Home = () => {
  const { name, code } = useParams();
  const [ticketModal, setTiicketModal] = useState(false);
  const [uploadImageModal, setUploadaImageModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(null);
  console.log("====================================");
  console.log(code);
  console.log("====================================");
  const toggleImageUploadModal = () => {
    setUploadaImageModal(true);
  };
  useEffect(() => {
    if (code !== undefined) {
      setTiicketModal(true);
    } else {
      setTiicketModal(false);
    }
  }, [code]);
  const fetchImages = async () => {
    const res = await GET_IMAGES();
    console.log(res);
    setImages(res?.data?.data);
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file)); // For previewing the selected image
    }
  };

  const handleUploadClick = async () => {
    if (!selectedFile) {
      alert("Please choose an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    setLoading(true);
    const res = await UPLOAD_IMAGE(formData);
    console.log(res);

    if (res.success === true) {
      setLoading(false);
      toast.success(`Image Uploaded Successfully!!`, {
        duration: 5000,
        className: "toast_success",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 500);

      return;
    }
    setLoading(false);
    toast.error(`${res.data.message}!!`, {
      duration: 5000,
      className: "toast_success",
    });
  };

  const imageUploadNotice = () => {
    toast.error(`Image Upload will be available on the 3rd of January 2025!!`, {
      duration: 5000,
      className: "toast_success",
    });
  };

  return (
    <div className="HomeDiv">
      <section className="HomeDiv_section1">
        <div className="container">
          <div className="HomeDiv_section1_area">
            <div className="HomeDiv_section1_area_div1">
              <div className="HomeDiv_section1_area_div1_title">
                SEFUNMI & CHARLES
                <br />
                <span className="HomeDiv_section1_area_div1_title_span">
                  TODAY AND FOREVER
                </span>
              </div>
              <div className="HomeDiv_section1_area_div1_para">
                <img
                  src="/img/heroParaLine.svg"
                  alt="HomeDiv_section1_area_div1_para_img"
                  className="HomeDiv_section1_area_div1_para_img"
                />
                <div className="HomeDiv_section1_area_div1_para_txt">
                  Celebrating a love that lasts a lifetime – Sefunmi & Charles,
                  Today and Forever.
                </div>
              </div>
              <div
                className="HomeDiv_section1_area_div1_btn_div
              "
              >
                <img
                  src="/img/hero_Section_img2.svg"
                  alt="HomeDiv_section1_area_div1_btn_div_img"
                  className="HomeDiv_section1_area_div1_btn_div_img"
                />
              </div>
            </div>
            <div className="HomeDiv_section1_area_div2">
              <img
                src="/img/hero_couple_img.png"
                alt="Couple Image"
                className="HomeDiv_section1_area_div2_img"
              />
            </div>
          </div>
        </div>
        <img
          src="/img/hero_bg_img.png"
          alt="HomeDiv_section1_bg"
          className="HomeDiv_section1_bg"
        />
        <img
          src="/img/hero_Section_line.svg"
          alt="hero_Section_line"
          className="hero_Section_line"
        />
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section2">
        <div className="container">
          <div className="HomeDiv_section4_area">
            <div className="HomeDiv_section4_area_div1">
              <div className="HomeDiv_section4_area_tag">
                ENJOY OUR MOMENT WITH US
              </div>
              <div className="HomeDiv_section4_area_title">
                WELCOME TO OUR WEDDING
              </div>
              <img
                src="/img/area3_title_line.svg"
                alt=""
                className="HomeDiv_section4_area_div1_img"
              />
            </div>
            <div className="HomeDiv_section4_area_conts">
              <div className="HomeDiv_section4_area_conts_div1">
                <div className="HomeDiv_section4_area_conts_div1_cont1">
                  <img
                    src="/img/section2_pic1.png"
                    alt=""
                    className="section4_wedding_img1"
                  />
                </div>
                <div className="HomeDiv_section4_area_conts_div1_cont2">
                  <div className="HomeDiv_section4_area_conts_div1_cont2_title">
                    A Day of Love
                  </div>
                  <div className="HomeDiv_section4_area_conts_div1_cont2_para">
                    Join us in celebrating a beautiful day of love, joy, and
                    togetherness as we say "I do".
                  </div>
                </div>
              </div>
              <div className="HomeDiv_section4_area_conts_div2">
                <div className="HomeDiv_section4_area_conts_div1_cont1">
                  <img
                    src="/img/section2_pic2.png"
                    alt=""
                    className="section4_wedding_img2"
                  />
                </div>
                <div className="HomeDiv_section4_area_conts_div1_cont2">
                  <div className="HomeDiv_section4_area_conts_div1_cont2_title">
                    A Day of Joy
                  </div>
                  <div className="HomeDiv_section4_area_conts_div1_cont2_para">
                    A day filled with joy, love, and cherished moments as we
                    begin our forever together.
                  </div>
                </div>
              </div>
              <div className="HomeDiv_section4_area_conts_div1">
                <div className="HomeDiv_section4_area_conts_div1_cont1">
                  <img
                    src="/img/section2_pic3.png"
                    alt=""
                    className="section4_wedding_img1"
                  />
                </div>
                <div className="HomeDiv_section4_area_conts_div1_cont2">
                  <div className="HomeDiv_section4_area_conts_div1_cont2_title">
                    A Day To
                    <br /> Remember
                  </div>
                  <div className="HomeDiv_section4_area_conts_div1_cont2_para">
                    A day to remember, full of love, laughter, and the start of
                    our lifelong journey.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section3">
        <div className="container">
          <div className="HomeDiv_section3_area">
            <img
              src="/img/section3area_circle_line.svg"
              alt=""
              className="HomeDiv_section3_area_img"
            />
            <div className="HomeDiv_section3_area_tag">
              ENJOY OUR MOMENT WITH US
            </div>
            <div className="HomeDiv_section3_area_title">COME WITH US</div>
            <div className="HomeDiv_section3_area_para">
              Saturday, January 3rd, 2025 Ikeja Lagos, Nigeria.
              <span className="HomeDiv_section3_area_para_img">
                {" "}
                This event is strictly by invitation!
              </span>
            </div>
          </div>
        </div>
        <img
          src="/img/section3_bg_img.png"
          alt=""
          className="HomeDiv_section3_img1"
        />
        <img src="/img/section3_line1.svg" alt="" className="section3_line1" />
        <img src="/img/section3_line2.svg" alt="" className="section3_line2" />
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section2" id="story">
        <div className="container">
          <div className="HomeDiv_section2_area">
            <div className="HomeDiv_section2_area_1">
              <div className="HomeDiv_section2_area_1_tag">
                ENJOY OUR MOMENT WITH US
              </div>
              <div className="HomeDiv_section2_area_1_title">Our Story</div>
              <div className="HomeDiv_section2_area_1_para">
                We met on the parade ground during NYSC orientation camp in 2017
                and became instant friends. After two years of friendship, we
                realized our connection was something more and started dating.
                Since then, we've been inseparable, growing stronger together
                with every moment.
                <br />
                <br />
                Now, we're excited to take the next step and begin the rest of
                our lives together. We can't wait to celebrate this special day
                with you! #foreverSC
              </div>
              <div className="HomeDiv_section2_area_1_btn_div">
                <img
                  src="/img/section2_button_img.svg"
                  alt=""
                  className="HomeDiv_section2_area_1_btn_div_img"
                />
              </div>
            </div>
            <div className="HomeDiv_section2_area_2">
              <img
                src="/img/section2_wedding_pics.png"
                alt=""
                className="HomeDiv_section2_area_2_img"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <div className="HomeDiv_section5" id="gallery">
        <div className="container">
          <div className="HomeDiv_section5_area">
            <div className="HomeDiv_section5_area_cont1">
              <div className="HomeDiv_section5_area_cont1_tag">
                ENJOY OUR MOMENT WITH US
              </div>
              <div className="HomeDiv_section5_area_cont1_title2">
                <div className="HomeDiv_section5_area_cont1_title2_text">
                  SHARE YOUR CAPTURED MOMENTS{" "}
                </div>
                <button
                  className="UploadImageButton"
                  // onClick={toggleImageUploadModal}
                  onClick={imageUploadNotice}
                >
                  Upload Image
                </button>
              </div>
            </div>
            <div className="HomeDiv_section5_area_cont2">
              <Marquee>
                {images?.map((data) => (
                  <div className="HomeDiv_section5_area_cont2_div1">
                    <img
                      src={`${BASE_URL}/${data.image}`}
                      alt=""
                      className="HomeDiv_section5_area_cont2_div1_img"
                    />
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
        <img src="/img/gallery_line1.svg" alt="" className="gallery_line1" />
        <img src="/img/gallery_line2.svg" alt="" className="gallery_line2" />
      </div>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section6" id="programs">
        <div className="container">
          <div className="HomeDiv_section6_area">
            <div className="HomeDiv_section5_area_cont1_tag">
              ENJOY OUR MOMENT WITH US
            </div>
            <div className="HomeDiv_section6_area_title">PROGRAMS</div>
            <div className="HomeDiv_section6_area_body">
              <div className="HomeDiv_section6_area_body_div1">
                <div className="HomeDiv_section6_area_body_div1_title">
                  Church
                </div>
                <div className="HomeDiv_section6_area_body_div1_body">
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Welcome and Introduction
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Arrival of the couple’s parents
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Arrival of the Bridal Party
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Arrival of the Couple
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Opening Prayer
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Chairman’s Remark
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Toasts
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Cake Cutting
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    First Dance
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Father – Daughter Dance and Mother – Son dance
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Dancing/Entertainments
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Bouquet and Garter Toss
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Special Performances
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Closing Remarks
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Farewell
                  </div>
                </div>
              </div>
              <div className="HomeDiv_section6_area_body_div2">
                <div className="HomeDiv_section6_area_body_div1_title">
                  Reception
                </div>
                <div className="HomeDiv_section6_area_body_div1_body">
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Welcome and Introduction
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Arrival of the couple’s parents
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Arrival of the Bridal Party
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Opening Prayer
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Chairman’s Remark
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Toasts
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Cake Cutting
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    First Dance
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Father – Daughter Dance and Mother – Son dance
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Dancing/Entertainments
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Bouquet and Garter Toss
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Special Performances
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Closing Remarks
                  </div>
                  <div className="HomeDiv_section6_area_body_div1_body_cont1">
                    Farewell
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/programs_bg_img.png"
          alt=""
          className="HomeDiv_section6_bg_img"
        />
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section8" id="location">
        <div className="container">
          <div className="HomeDiv_section8_area">
            <div className="HomeDiv_section7_area_tag">
              ENJOY OUR MOMENT WITH US
            </div>
            <div className="HomeDiv_section8_area_title">Getting There</div>
            <div className="HomeDiv_section8_area_para">
              Sheba Centre, Mobolaji Bank Anthony. Popular landmark: FCMB Bank
              Mobolaji Bank Anthony
            </div>
            <div className="HomeDiv_section8_area_map_div">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7927.056587321224!2d3.3589284205543324!3d6.581052360465465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b927286444557%3A0xc422d41b44a3c5f6!2sSheba%20Centre!5e0!3m2!1sen!2sng!4v1727017443780!5m2!1sen!2sng"
                width="800"
                height="600"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="mapDiv"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      {/* ========= */}
      <section className="HomeDiv_section9" id="faq">
        <div className="container">
          <div className="HomeDiv_section9_area">
            <div className="HomeDiv_section7_area_tag">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <div className="HomeDiv_section7_area_title">FAQ</div>
            <div className="HomeDiv_section7_area_body">
              {" "}
              {/* <div className="homeDiv_section6_area_body"> */}
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  What’s the best way to get to the venue?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    Sheba hall is close to Maryland, Ikeja.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  Is there enough parking space?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    Yes, there’s enough parking space
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  Is the venue indoors or outdoors?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    ⁠the venue is indoors
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  How late will the wedding run?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    the event will last until 5:30 pm
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  Can I bring a plus-one?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    One access card permits only one entry.
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  What’s the RSVP deadline?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">November 15</div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  Can I take pictures during the ceremony?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    Yes, pictures are allowed
                  </div>
                </div>
              </details>
              <details className="newHome_div_section7_area_body_accordion_body">
                <summary className="baccordion_title">
                  Can I bring my kids?
                </summary>
                <div className="accordion_body">
                  <div className="accordion_body_cont1">
                    Yes, kids are allowed
                  </div>
                </div>
              </details>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      {ticketModal && <TicketModal code={code} name={name} />}
      {uploadImageModal && (
        <div className="seemore_div">
          <div
            className="seemore_div_close_div"
            onClick={() => {
              setUploadaImageModal(false);
            }}
          ></div>
          <div className="seemore_div_cont">
            <div className="seemore_div_cont_upload_div1">
              <img
                src={imagePreview || "/img/img_placeholder.jpg"}
                alt="Preview"
                className="seemore_div_cont_upload_div1_img"
              />
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button
                className="chooseImageBtn"
                onClick={() => document.getElementById("fileInput").click()}
              >
                Choose Image
              </button>
            </div>
            <div className="seemore_div_cont_upload_div2">
              {/* <a href="/" style={{ width: "100%" }}> */}
              <button
                className="seemore_div_cont_upload_div2_btn11"
                onClick={() => {
                  setUploadaImageModal(false);
                }}
              >
                Close
              </button>
              {/* </a> */}
              <button className="UploadBtn" onClick={handleUploadClick}>
                {loading ? (
                  <>
                    <ClipLoader color="#fff" size={18} /> Uploading
                  </>
                ) : (
                  "     Upload Image"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Home;
