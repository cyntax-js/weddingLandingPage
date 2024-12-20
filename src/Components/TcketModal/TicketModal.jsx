import React from "react";
import "./index.css";
import { QRCode } from "react-qrcode-logo";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const TicketModal = ({ code, name, invitationStatus }) => {
  const ticketCodes = code.length > 1 ? code?.split("-") : code;
  console.log(ticketCodes);
  let array = [];
  // array.push(ticketCodes);
  // console.log(updatedArray);
  // console.log(array);

  return (
    <div className="ticketModlDiv">
      {invitationStatus === "REVOKE" ? (
        <div className="accessCodeRevokeDiv">
          <div className="accessCodeRevokeDiv_body">
            <div className="accessCodeRevokeDiv_body_title">
              Access Code Revoked!
            </div>
            <div className="accessCodeRevokeDiv_body_para">
              Your access code was revoked by an admin due to some reasons.
            </div>

          </div>
        </div>
      ) : (
        <div className="ticketModlDiv_cont">
          <div className="ticketModlDiv_cont_cont1">
            <img
              src="/img/weddingCardImage3.jpg"
              alt=""
              className="ticketModlDiv_cont_cont1_img"
            />
          </div>
          <div className="ticketModlDiv_cont_cont2">
            <div className="ticketModlDiv_cont_cont2_title">Access Card</div>
            <div className="ticketModlDiv_cont_cont2_para">
              The families of Fasiku and Ochonma cordially invite you to the
              wedding ceremony of their children Sefunmi and Charles
            </div>
            <div className="ticketModlDiv_cont_cont2_div1">
              <div className="ticketModlDiv_cont_cont2_div1_cont1">
                <img
                  src=""
                  alt=""
                  className="ticketModlDiv_cont_cont2_div1_cont1_img"
                />
                <div className="ticketModlDiv_cont_cont2_div1_cont1_area">
                  <div className="ticketModlDiv_cont_cont2_div1_cont1_area_title">
                    Event Venue
                  </div>
                  <div className="ticketModlDiv_cont_cont2_div1_cont1_area_txt">
                    Sheba Centre, Mobolaji Bank Anthony. Popular landmark: FCMB
                    Bank Mobolaji Bank Anthony
                  </div>
                </div>
              </div>
              <div className="ticketModlDiv_cont_cont2_div1_cont1">
                <img
                  src=""
                  alt=""
                  className="ticketModlDiv_cont_cont2_div1_cont1_img"
                />
                <div className="ticketModlDiv_cont_cont2_div1_cont1_area2">
                  <div className="ticketModlDiv_cont_cont2_div1_cont1_area_divs1">
                    <div className="ticketModlDiv_cont_cont2_div1_cont1_area_title">
                      Event Date
                    </div>
                    <div className="ticketModlDiv_cont_cont2_div1_cont1_area_txt">
                      3rd Jan 2025
                    </div>
                  </div>
                  <div className="ticketModlDiv_cont_cont2_div1_cont1_area_divs2">
                    <div className="ticketModlDiv_cont_cont2_div1_cont1_area_divs2_div1">
                      <div className="ticketModlDiv_cont_cont2_div1_cont1_area_title">
                        Time/Church
                      </div>
                      <div className="ticketModlDiv_cont_cont2_div1_cont1_area_txt">
                        11:00am
                      </div>
                    </div>
                    <div className="ticketModlDiv_cont_cont2_div1_cont1_area_divs2_div1">
                      <div className="ticketModlDiv_cont_cont2_div1_cont1_area_title">
                        Time/Reception
                      </div>
                      <div className="ticketModlDiv_cont_cont2_div1_cont1_area_txt">
                        2:00pm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ticketModlDiv_cont_cont2_div2">
              <div className="ticketModlDiv_cont_cont2_div2_title">
                {ticketCodes?.length}{" "}
                <span className="ticketModlDiv_cont_cont2_div2_title_span">
                  {" "}
                  Access Code(s)
                </span>
              </div>
              {ticketCodes?.length < 2 ? (
                <div className="ticketModlDiv_cont_cont2_div2_ticket_div">
                  <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div1">
                    <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div1_cont1">
                      {name}
                    </div>
                    <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div1_cont2">
                      {" "}
                      <img
                        src="/img/logo.svg"
                        alt=""
                        className="ticketModlDiv_cont_cont2_div2_ticket_div_div1_cont2_img"
                      />
                      Access Card
                    </div>
                  </div>
                  <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div2">
                    Sefunmi & Charles
                  </div>
                  <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3">
                    <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3_cont1">
                      <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3_cont1_title">
                        Access Code
                      </div>
                      <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3_cont1_para">
                        {ticketCodes[0]}
                      </div>
                    </div>
                    <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3_cont2">
                      <QRCode
                        value={ticketCodes[0]}
                        quietZone={5}
                        eyeColor="#000"
                        bgColor="#fff"
                        fgColor="#000"
                        eyeRadius={[
                          [5, 5, 0, 5],
                          [5, 5, 5, 0],
                          [5, 0, 5, 5],
                        ]}
                        removeQrCodeBehindLogo={true}
                        logoPaddingStyle="circle"
                        className="depositMoneyDiv_cont_body_qr_div_qr"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <Marquee className="announceMent_header_div_body_marquee">
                  {ticketCodes.map((data) => (
                    <div className="ticketModlDiv_cont_cont2_div2_ticket_div">
                      <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div1">
                        <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div1_cont1">
                          {name}
                        </div>
                        <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div1_cont2">
                          {" "}
                          <img
                            src="/img/logo.svg"
                            alt=""
                            className="ticketModlDiv_cont_cont2_div2_ticket_div_div1_cont2_img"
                          />
                          Access Card
                        </div>
                      </div>
                      <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div2">
                        Sefunmi & Charles
                      </div>
                      <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3">
                        <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3_cont1">
                          <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3_cont1_title">
                            Access Code
                          </div>
                          <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3_cont1_para">
                            {data}
                          </div>
                        </div>
                        <div className="ticketModlDiv_cont_cont2_div2_ticket_div_div3_cont2">
                          <QRCode
                            value={data}
                            quietZone={5}
                            eyeColor="#000"
                            bgColor="#fff"
                            fgColor="#000"
                            eyeRadius={[
                              [5, 5, 0, 5],
                              [5, 5, 5, 0],
                              [5, 0, 5, 5],
                            ]}
                            removeQrCodeBehindLogo={true}
                            logoPaddingStyle="circle"
                            className="depositMoneyDiv_cont_body_qr_div_qr"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Marquee>
              )}
            </div>
          </div>
        </div>
      )}

      <a
        href="/"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <button className="ticketModalCloseButton"> Back Home</button>
      </a>
    </div>
  );
};

export default TicketModal;
