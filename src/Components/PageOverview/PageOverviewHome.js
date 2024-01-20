import "./PageOverviewStyles.css";
import PageOverviewData from "./PageOverviewData";
import PageOverview1 from "../Assets/AboutUs/aboutUsThumbnailPic.jpg";

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
          text="Global Citizens for Humanity (GCH) is a dedicated charitable and educational non-profit organization, operating under the provisions of section 501(c)(3) of the Internal Revenue Code since its establishment in 2018. The organization is fully committed to making a positive impact on a global scale, GCH focuses on addressing diverse humanitarian challenges."
          url="/about"
        />

        <PageOverviewData
          image={PageOverview2}
          heading="GCH Activities"
          text="GCH engages in a myriad of activities that revolve around the core principles of protecting, progressing, and preserving humanity, transcending the boundaries of religion, nationality, race, and color on a global scale. The organization is dedicated to fostering a sense of unity and solidarity, actively participating in initiatives that address humanitarian needs worldwide."
          url="/activity"
        />
        <PageOverviewData
          image={PageOverview3}
          heading="GCH Gallery"
          text="The GCH Gallery stands as a vibrant testament to the multitude of humanitarian activities accomplished throughout the organization's journey. Bursting with colorful images capturing various events and moments in time, the gallery provides a visual narrative of GCH's impactful initiatives highlighting GCH connections towards humanity and dedications throughout its' journey."
          url="/gallery"
        />

        <PageOverviewData
          image={PageOverview4}
          heading="GCH Members"
          text="The backbone of Global Citizens for Humanity (GCH) is undoubtedly its members, who emerge as true heroes in the humanitarian field. These individuals, in addition to their regular professions, embody a steadfast commitment to humanitarian activities, willingly dedicating their leisure time and personal resources to make a positive impact on the world."
          url="/members"
        />
      </div>
    </div>
  );
}

export default PageOverview;
