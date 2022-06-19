import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/684764.webp?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h2>2911 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/971345.webp?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>1651 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/540x270/684621.webp?k=de4564823df0c10c49589157336abdb45bc83f574a63f7861556dc329c41605c&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Gurgaon</h1>
          <h2>1133 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
