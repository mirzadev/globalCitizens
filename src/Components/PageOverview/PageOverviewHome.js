import "./PageOverviewStyles.css";
import PageOverviewData from "./PageOverviewData";
import PageOverview1 from "../Assets/AboutUs/aboutUsCoverPic.jpg";

import PageOverview2 from "../Assets/Activity/ActivityCoverPic.jpg";

import PageOverview3 from "../Assets/Gallery/GalleryThumbnailPic.jpg";

import PageOverview4 from "../Assets/Members/GchMembersThumbnailPic.jpg";

function PageOverview() {
  return (
    <div className="page-overview">
      <h1>Explore GCH</h1>
      <p>Always Beside the Humanity</p>
      <div className="page-overview-cart">
        <PageOverviewData
          image={PageOverview1}
          heading="About GCH"
          text="Global Citizens for Humanity (GCH) is a charitable and educational non-profit organization under section 501(c)(3) of the Internal Revenue Code established in 2018."
          url="/about"
        />

        <PageOverviewData
          image={PageOverview2}
          heading="GCH Activities"
          text="GCH activities are centered around protecting, progressing, and preserving humanity irrespective of religion, nation, race, and color throughout the international community."
          url="/activity"
        />

        <PageOverviewData
          image={PageOverview3}
          heading="GCH Gallery"
          text="GCH has accomplished a huge number of humanitarian activities within its journey. GCH Gallery presents colorful images of all those activities as per the event and time."
          url="/gallery"
        />

        <PageOverviewData
          image={PageOverview4}
          heading="GCH Members"
          text="GCH members are the real heroes in the humanitarian field. Besides their own profession, they are always committed to humanitarian activities in their leisure time spending own resources."
          url="/members"
        />
      </div>
    </div>
  );
}

export default PageOverview;
