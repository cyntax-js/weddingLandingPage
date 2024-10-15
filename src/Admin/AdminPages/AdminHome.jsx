import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import { AddTeamIcon } from "hugeicons-react";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import { format } from "date-fns";
import {
  CREATE_INVITATION,
  GET_INVITATIONS,
  CHANGE_STATUS,
} from "../../services/AdminService";
const AdminHome = () => {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const [seeMoreDiv, setSeeMoreDiv] = useState("");
  const [invitations, setInvitations] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [rsvpSuccess, setRsvpSuccess] = useState(false);
  const [inviteCodes, setInviteCodes] = useState("");
  const [rsvpError, setRsvpError] = useState(false);
  const [sendRsvpLoading, setSendRsvpLoading] = useState(false);
  const [sendRsvpDisable, setSendRsvpDisable] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [statusLoaing1, setStatusLoading1] = useState(false);
  const [statusLoaing2, setStatusLoading2] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  const [payload, setPayload] = useState({
    groupName: "",
    numberOfInvites: "",
  });

  const toggleSeeMoreDiv = (e) => {
    setSeeMoreDiv(e.currentTarget.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(`${name}: ${value}`);
  };

  const create_invite = async () => {
    setSendRsvpLoading(true);
    setSendRsvpDisable(true);
    const body = {
      groupName: payload.groupName,
      numberOfInvites: parseInt(payload.numberOfInvites),
    };
    console.log(body);
    const res = await CREATE_INVITATION(body);

    console.log("====================================");
    console.log(res);
    console.log("====================================");

    if (res.success === true) {
      setSendRsvpLoading(false);
      setSendRsvpDisable(false);
      setRsvpSuccess(true);
      toast.success(`${res.data.message}!!`, {
        duration: 5000,
        className: "toast_success",
      });

      // setSuccessMessage(res.data.message);
      setInviteCodes(res.data.code);
      setTimeout(() => {
        window.location.href = "/couple/admin";
      }, 500);
      return;
    }
    setSendRsvpLoading(false);
    setSendRsvpDisable(false);
    setRsvpError(true);
    toast.error(`${res.data.message}!!`, {
      duration: 5000,
      className: "toast_success",
    });
  };

  const change_invite_Status = async (id, action) => {
    if (action === "TRUE") {
      setStatusLoading1(true);
      const body = {
        id: id,
        action: action,
      };
      console.log(body);
      const res = await CHANGE_STATUS(body);
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      if (res.success === true) {
        setStatusLoading1(false);
        toast.success(`Inviataion status changed to Authorized!!`, {
          duration: 5000,
          className: "toast_success",
        });
        setTimeout(() => {
          window.location.href = "/couple/admin";
        }, 500);
        return;
      }

      setStatusLoading1(false);
      toast.error(`${res.data.message}!!`, {
        duration: 5000,
        className: "toast_success",
      });
      return;
    }
    if (action === "REVOKE") {
      setStatusLoading2(true);
      const body = {
        id: id,
        action: action,
      };
      console.log(body);
      const res = await CHANGE_STATUS(body);
      console.log("====================================");
      console.log(res);
      console.log("====================================");
      if (res.success === true) {
        setStatusLoading2(false);
        toast.success(`Inviataion status changed to Revoked!!`, {
          duration: 5000,
          className: "toast_success",
        });
        setTimeout(() => {
          window.location.href = "/couple/admin";
        }, 500);
        return;
      }
      setStatusLoading2(false);
      toast.error(`${res.data.message}!!`, {
        duration: 5000,
        className: "toast_success",
      });
      return;
    }
  };

  const fetchAllInvitations = async () => {
    const res = await GET_INVITATIONS();
    console.log("====================================");
    console.log(res);

    console.log("====================================");
    setInvitations(res?.data?.data);
  };

  useEffect(() => {
    fetchAllInvitations();
  }, []);

  const pending = invitations?.filter((data) => data.approve === "FALSE");
  const revoked = invitations?.filter((data) => data.approve === "REVOKE");
  const authorized = invitations?.filter((data) => data.approve === "TRUE");
  console.log("====================================");
  console.log(pending);
  console.log(revoked);
  console.log(authorized);
  console.log("====================================");

  const changeActiveTab = (e) => {
    setActiveTab(e.currentTarget.id);
  };

  useEffect(() => {
    if (activeTab === "all") {
      return setFilteredTransactions(invitations);
    }
    if (activeTab === "pending") {
      return setFilteredTransactions(pending);
    }
    if (activeTab === "revoked") {
      return setFilteredTransactions(revoked);
    }
    if (activeTab === "authorized") {
      return setFilteredTransactions(authorized);
    }
  }, [activeTab, invitations]);

  const handleCopy = () => {
    const inputValue = inputRef.current.value; // Access input value using ref
    navigator.clipboard
      .writeText(inputValue)
      .then(() => {
        toast.success(`Copied to clipboard!`, {
          duration: 5000,
          className: "toast_success",
        });
      })
      .catch((error) => {
        toast.error(`Failed to copy!!: ${error}`, {
          duration: 5000,
          className: "toast_success",
        });
      });
  };
  const handleCopy2 = () => {
    const inputValue = inputRef2.current.value; // Access input value using ref
    navigator.clipboard
      .writeText(inputValue)
      .then(() => {
        toast.success(`Copied to clipboard!`, {
          duration: 5000,
          className: "toast_success",
        });
      })
      .catch((error) => {
        toast.error(`Failed to copy!!: ${error}`, {
          duration: 5000,
          className: "toast_success",
        });
      });
  };
  const currentOrigin = window.location.origin;
  console.log(currentOrigin);

  const filteredInvitations = filteredTransactions.filter((data) =>
    data.groupName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="AdminHomeDiv">
      <div className="adminContainer">
        <div className="adminHomeDivArea">
          <div className="adminHomeDivArea_1">
            <div className="adminHomeDivArea_1_card1">
              <div className="adminHomeDivArea_1_card1_icon">
                <AddTeamIcon />
              </div>
              <div className="adminHomeDivArea_1_card1_text_area">
                <div className="adminHomeDivArea_1_card1_text_area_title">
                  Total Invites
                </div>
                <div className="adminHomeDivArea_1_card1_text_area_amount">
                  {invitations?.length || 0}
                </div>
              </div>
            </div>
            <div className="adminHomeDivArea_1_card1">
              <div className="adminHomeDivArea_1_card1_icon">
                <AddTeamIcon />
              </div>
              <div className="adminHomeDivArea_1_card1_text_area">
                <div className="adminHomeDivArea_1_card1_text_area_title">
                  Pending Invites
                </div>
                <div className="adminHomeDivArea_1_card1_text_area_amount">
                  {pending?.length | 0}
                </div>
              </div>
            </div>
            <div className="adminHomeDivArea_1_card1">
              <div className="adminHomeDivArea_1_card1_icon">
                <AddTeamIcon />
              </div>
              <div className="adminHomeDivArea_1_card1_text_area">
                <div className="adminHomeDivArea_1_card1_text_area_title">
                  Revoked Invites
                </div>
                <div className="adminHomeDivArea_1_card1_text_area_amount">
                  {revoked?.length | 0}
                </div>
              </div>
            </div>
            <div className="adminHomeDivArea_1_card1">
              <div className="adminHomeDivArea_1_card1_icon">
                <AddTeamIcon />
              </div>
              <div className="adminHomeDivArea_1_card1_text_area">
                <div className="adminHomeDivArea_1_card1_text_area_title">
                  Authorized Invites
                </div>
                <div className="adminHomeDivArea_1_card1_text_area_amount">
                  {authorized?.length || 0}
                </div>
              </div>
            </div>
          </div>
          {/* ===== */}
          {/* ===== */}
          {/* ===== */}
          {/* ===== */}
          {/* ===== */}
          <div className="adminHomeDivArea_2">
            <div className="adminHomeDivArea_2_cont1">
              <div className="adminHomeDivArea_2_cont1_title">RSVP</div>
              <div className="adminHomeDivArea_2_cont1_body">
                <div className="adminHomeDivArea_2_cont1_body_cont1">
                  <input
                    type="text"
                    className="adminHomeDivArea_2_cont1_body_cont1_input"
                    placeholder="Name*"
                    name="groupName"
                    value={payload.groupName}
                    onChange={handleChange}
                  />
                </div>
                <div className="adminHomeDivArea_2_cont1_body_cont1">
                  <input
                    type="number"
                    className="adminHomeDivArea_2_cont1_body_cont1_input"
                    placeholder="Number of Invites*"
                    name="numberOfInvites"
                    value={payload.numberOfInvites}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="adminHomeDivArea_2_cont1_body_btn"
                  onClick={create_invite}
                  disabled={sendRsvpDisable}
                >
                  {sendRsvpLoading ? (
                    <>
                      <ClipLoader color="#fff" size={18} /> Sending...
                    </>
                  ) : (
                    "   Rsvp Now"
                  )}
                </button>
              </div>
            </div>
            <div className="adminHomeDivArea_2_cont2">
              <div className="adminHomeDivArea_2_cont2_title">Venue</div>
              <div className="adminHomeDivArea_2_cont2_body">
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
          {/* ===== */}
          {/* ===== */}
          {/* ===== */}
          {/* ===== */}
          {/* ===== */}
          <div className="adminHomeDivArea_3">
            <div className="adminHomeDivArea_3_title">Invitations</div>
            <div className="adminHomeDivArea_3_filter_div">
              <div className="adminHomeDivArea_3_filter_div_1">
                <div
                  className={
                    activeTab === "all"
                      ? "adminHomeDivArea_3_filter_div_1_cont_active"
                      : "adminHomeDivArea_3_filter_div_1_cont"
                  }
                  id="all"
                  onClick={changeActiveTab}
                >
                  All
                </div>
                <div
                  className={
                    activeTab === "pending"
                      ? "adminHomeDivArea_3_filter_div_1_cont_active"
                      : "adminHomeDivArea_3_filter_div_1_cont"
                  }
                  id="pending"
                  onClick={changeActiveTab}
                >
                  Pending
                </div>
                <div
                  className={
                    activeTab === "revoked"
                      ? "adminHomeDivArea_3_filter_div_1_cont_active"
                      : "adminHomeDivArea_3_filter_div_1_cont"
                  }
                  id="revoked"
                  onClick={changeActiveTab}
                >
                  Revoked
                </div>
                <div
                  className={
                    activeTab === "authorized"
                      ? "adminHomeDivArea_3_filter_div_1_cont_active"
                      : "adminHomeDivArea_3_filter_div_1_cont"
                  }
                  id="authorized"
                  onClick={changeActiveTab}
                >
                  Authorized
                </div>
              </div>
              <div className="adminHomeDivArea_3_filter_div_2">
                <input
                  type="search"
                  name=""
                  id=""
                  className="adminHomeDivArea_3_filter_div_2_search"
                  placeholder="search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="adminHomeDivArea_3_body">
              <table className="adminHomeDivArea_3_body_table">
                <thead className="adminHomeDivArea_3_body_table_head">
                  <tr className="adminHomeDivArea_3_body_table_head_row">
                    <th className="adminHomeDivArea_3_body_table_head_row_child">
                      <div className="adminHomeDivArea_3_body_table_head_row_child_div">
                        Guest(s) Name
                      </div>
                    </th>
                    <th className="adminHomeDivArea_3_body_table_head_row_child">
                      <div className="adminHomeDivArea_3_body_table_head_row_child_div">
                        Invites
                      </div>
                    </th>
                    <th className="adminHomeDivArea_3_body_table_head_row_child">
                      <div className="adminHomeDivArea_3_body_table_head_row_child_div">
                        Invitation Code(s)
                      </div>
                    </th>
                    <th className="adminHomeDivArea_3_body_table_head_row_child">
                      <div className="adminHomeDivArea_3_body_table_head_row_child_div">
                        Status
                      </div>
                    </th>
                    <th className="adminHomeDivArea_3_body_table_head_row_child">
                      <div className="adminHomeDivArea_3_body_table_head_row_child_div">
                        Date Created
                      </div>
                    </th>
                    <th className="adminHomeDivArea_3_body_table_head_row_child">
                      <div className="adminHomeDivArea_3_body_table_head_row_child_div"></div>
                    </th>
                  </tr>
                </thead>
                <tbody className="adminHomeDivArea_3_body_table_body">
                  {filteredInvitations
                    ?.sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .map((data) => {
                      const invitationCodes = data.accessCodes.split("-");
                      function formatDate(dateString) {
                        const date = new Date(dateString);

                        return format(date, "MMM do, yyyy / h:mm aaa");
                      }
                      return (
                        <tr
                          id={data.id}
                          className="adminHomeDivArea_3_body_table_body_row"
                          onClick={toggleSeeMoreDiv}
                        >
                          <td className="adminHomeDivArea_3_body_table_body_row_child">
                            <div className=" adminHomeDivArea_3_body_table_body_row_child_div">
                              {data.groupName}
                            </div>
                          </td>
                          <td className="adminHomeDivArea_3_body_table_body_row_child">
                            <div className=" adminHomeDivArea_3_body_table_body_row_child_div">
                              {data.numberOfInvites}
                            </div>
                          </td>
                          <td className="adminHomeDivArea_3_body_table_body_row_child">
                            <div className=" adminHomeDivArea_3_body_table_body_row_child_div">
                              {invitationCodes.length < 2
                                ? invitationCodes
                                : `${invitationCodes[0]}...(+${
                                    invitationCodes.length - 1
                                  })`}
                            </div>
                          </td>
                          <td className="adminHomeDivArea_3_body_table_body_row_child">
                            {/* <div className=" adminHomeDivArea_3_body_table_body_row_child_div"> */}
                            <div
                              className={
                                data.approve === "REVOKE"
                                  ? "adminHomeDivArea_3_body_table_body_row_child_div_status_revoke"
                                  : data.approve === "TRUE"
                                  ? "adminHomeDivArea_3_body_table_body_row_child_div_status_approve"
                                  : "adminHomeDivArea_3_body_table_body_row_child_div_status"
                              }
                            >
                              {data.approve === "FALSE"
                                ? "NEW"
                                : data.approve === "TRUE"
                                ? "AUTHORIZED"
                                : data.approve}
                              {/* </div> */}
                            </div>
                          </td>
                          <td className="adminHomeDivArea_3_body_table_body_row_child">
                            <div className=" adminHomeDivArea_3_body_table_body_row_child_div">
                              {formatDate(data?.createdAt || new Date())}
                            </div>
                          </td>
                          <td className="adminHomeDivArea_3_body_table_body_row_child">
                            <div className=" adminHomeDivArea_3_body_table_body_row_child_div">
                              ...
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {invitations.map((data) => {
        const invitationCodes = data.accessCodes.split("-");
        function formatDate(dateString) {
          const date = new Date(dateString);

          return format(date, "MMM do, yyyy / h:mm aaa");
        }
        return (
          <>
            {data.id == seeMoreDiv ? (
              <div className="seemore_div">
                <div
                  className="seemore_div_close_div"
                  onClick={() => {
                    setSeeMoreDiv("");
                  }}
                ></div>
                <div className="seemore_div_cont">
                  <div className="seemore_div_cont_1">{data?.groupName}</div>
                  <div className="seemore_div_cont_2">
                    <div className="seemore_div_cont_2_cont">
                      <div className="seemore_div_cont_2_cont_1">
                        Invitation Status
                      </div>
                      <div className="seemore_div_cont_2_cont_2">
                        <div
                          className={
                            data.approve === "REVOKE"
                              ? "adminHomeDivArea_3_body_table_body_row_child_div_status_revoke"
                              : data.approve === "TRUE"
                              ? "adminHomeDivArea_3_body_table_body_row_child_div_status_approve"
                              : "adminHomeDivArea_3_body_table_body_row_child_div_status"
                          }
                        >
                          {data.approve === "FALSE"
                            ? "NEW"
                            : data.approve === "TRUE"
                            ? "AUTHORIZED"
                            : data.approve}
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="seemore_div_cont_2_cont">
                      <div className="seemore_div_cont_2_cont_1">
                        Amount of Invitation(s)
                      </div>
                      <div className="seemore_div_cont_2_cont_2">
                        {data.numberOfInvites}
                      </div>
                    </div>
                    <div className="seemore_div_cont_2_cont">
                      <div className="seemore_div_cont_2_cont_1">
                        Access Code(s)
                      </div>
                      <div className="seemore_div_cont_2_cont_2">
                        {invitationCodes.join(" / ")}
                      </div>
                    </div>
                    <div className="seemore_div_cont_2_cont">
                      <div className="seemore_div_cont_2_cont_1">
                        Date Created
                      </div>
                      <div className="seemore_div_cont_2_cont_2">
                        {formatDate(data?.createdAt || new Date())}
                      </div>
                    </div>
                  </div>

                  <div className="seemore_div_cont_3">
                    <button
                      className="seemore_div_cont_3_btn1"
                      onClick={() => {
                        change_invite_Status(data?.id, "TRUE");
                      }}
                    >
                      {statusLoaing1 ? (
                        <>
                          <ClipLoader color="#fff" size={18} />
                        </>
                      ) : (
                        "   Authorize"
                      )}
                    </button>
                    <button
                      className="seemore_div_cont_3_btn2"
                      onClick={() => {
                        change_invite_Status(data?.id, "REVOKE");
                      }}
                    >
                      {statusLoaing2 ? (
                        <>
                          <ClipLoader color="#fff" size={18} />
                        </>
                      ) : (
                        "   Revoke"
                      )}
                    </button>
                  </div>
                  <div className="inivite_success_div_div_cont_3">
                    <input
                      type="text"
                      value={`${currentOrigin}/access/${data?.groupName}/${data?.accessCodes}`}
                      className="invitation_link_div_input"
                      ref={inputRef2}
                    />
                    <div className="seemore_div_cont_3_btn_btns_div">
                      <button
                        className="seemore_div_cont_3_btn2b"
                        onClick={() => {
                          setSeeMoreDiv("");
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="seemore_div_cont_3_btn"
                        onClick={handleCopy2}
                      >
                        Copy Invitation Link
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        );
      })}

      {rsvpSuccess && (
        <div className="seemore_div">
          <div
            className="seemore_div_close_div"
            onClick={() => {
              setRsvpSuccess(false);
            }}
          ></div>
          <div className="seemore_div_cont">
            <div className="seemore_div_cont_1">
              {payload.groupName || "--"}
              {/* <div className="seemore_div_cont_title">{successMessage}</div> */}
            </div>
            <div className="seemore_div_cont_2">
              <div className="seemore_div_cont_2_cont">
                <div className="seemore_div_cont_2_cont_1">
                  Invitation Status
                </div>
                <div className="seemore_div_cont_2_cont_2">New</div>
              </div>
              <div className="seemore_div_cont_2_cont">
                <div className="seemore_div_cont_2_cont_1">
                  Amount of Invitation(s)
                </div>
                <div className="seemore_div_cont_2_cont_2">
                  {payload.numberOfInvites || "--"}
                </div>
              </div>
              <div className="seemore_div_cont_2_cont">
                <div className="seemore_div_cont_2_cont_1">Access Code(s)</div>
                <div className="seemore_div_cont_2_cont_2">{inviteCodes}</div>
              </div>
            </div>
            <div className="inivite_success_div_div_cont_3">
              <input
                type="text"
                value={`${currentOrigin}/${payload.groupName}/${inviteCodes}`}
                className="invitation_link_div_input"
                ref={inputRef}
              />
              <div className="seemore_div_cont_3_btn_btns_div">
                <button
                  className="seemore_div_cont_3_btn2b"
                  onClick={() => {
                    setRsvpSuccess(false);
                  }}
                >
                  Close
                </button>
                <button className="seemore_div_cont_3_btn" onClick={handleCopy}>
                  Copy Invitation Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default AdminHome;
