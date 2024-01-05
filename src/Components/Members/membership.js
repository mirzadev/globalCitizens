import "./MembershipStyles.css";
import React from "react";
import membershipForm from "../Assets/Members/Membership-forms.jpg";
import President_GCH from "../Assets/Members/MembersPic/EhsanulKarim.jpg";
import VP_GCH from "../Assets/Members/MembersPic/EhsanulKarim.jpg";
import GS_GCH from "../Assets/Members/MembersPic/MirzaAbdulAwal.jpg";
import Tres_GCH from "../Assets/Members/MembersPic/EhsanulKarim.jpg";

function membership() {
  return (
    <div className="membership-container">
      <h1>GCH Members</h1>

      <p className="members-heading-subTitle">Devoted to Humanity</p>

      <div className="kp-members-cart">
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={President_GCH} alt="member1" />
          </div>
          <h3>Ehsanul Karim, MD</h3>
          <p>President</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={VP_GCH} alt="member1" />
          </div>
          <h3>XXXXXXXXXX</h3>
          <p>Vice President</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={GS_GCH} alt="member1" />
          </div>
          <h3>Mirza Abdul Awal</h3>
          <p>General Secretary</p>
        </div>
        <div className="kp-members-area">
          <div className="kp-members-area-image">
            <img src={Tres_GCH} alt="member1" />
          </div>
          <h3>Mr Kabir</h3>
          <p>Treasurer</p>
        </div>
      </div>
      <h2>GCH Membership Form</h2>
      <div>
        <p>Download the form, fill up and email to GCH</p>
      </div>
      <div className="membership-form">
        <img alt="img" src={membershipForm} />
      </div>
    </div>
  );
}

export default membership;
