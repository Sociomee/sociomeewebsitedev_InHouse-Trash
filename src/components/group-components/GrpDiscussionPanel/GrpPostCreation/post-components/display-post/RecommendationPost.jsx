import React from "react";

const RecommendationPost = ({ recommendation }) => {
  return (
    <>
      <div class="recomandation-display-block">
        <div class="recom-btn-cont-blk">
          <h4 className="text-white">{recommendation?.totalRecommended} Recommendations</h4>
          <button class="btn btn-outline">Recommend</button>
        </div>
      </div>
      <h3>{recommendation?.caption}</h3>
    </>
  );
};

export default RecommendationPost;
