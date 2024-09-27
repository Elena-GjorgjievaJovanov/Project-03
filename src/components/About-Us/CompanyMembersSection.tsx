import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

interface CompanyMember {
  id: string;
  image: string;
  name: string;
  companyPosition: string;
}

interface CompanyMembersSectionProps {
  members: CompanyMember[];
}

const CompanyMembersSection: React.FC<CompanyMembersSectionProps> = ({
  members,
}) => {
  return (
    <div className="company-members-section">
      {members.map((member) => (
        <div className="company-member-section-inner" key={member.id}>
          <div className="company-member-section-card">
            <img src={member.image} alt={`Image for ${member.name}`} />
            <p className="member-name">{member.name}</p>
            <p className="member-position">{member.companyPosition}</p>
            <div className="member-social-media-links">
              <a href="https://www.facebook.com/" target="blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.twitter.com/" target="blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/" target="blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyMembersSection;
