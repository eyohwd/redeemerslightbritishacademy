import './blogGallery.css';
import blogimg3 from '../../assets/blog-img3.png'
import blogimg4 from '../../assets/blog-img2.png'
import blogimg5 from '../../assets/blog-img5.png'
import blogimg6 from '../../assets/blog-img6.png'
import blogimg7 from '../../assets/blog-img7.png'
import blogimg8 from '../../assets/blog-img8.png'

const BlogGallery = () => {
  return (
    <div className='bgContainer'>
      <div className="bgImgContainer">
        <img src={blogimg3} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg4} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg5} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg6} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg7} alt="" />
      </div>
      <div className="bgImgContainer">
        <img src={blogimg8} alt="" />
      </div>
    </div>
  );
}

export default BlogGallery;
