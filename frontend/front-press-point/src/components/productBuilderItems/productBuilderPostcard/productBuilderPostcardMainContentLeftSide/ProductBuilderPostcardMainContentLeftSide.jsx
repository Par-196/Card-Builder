import './ProductBuilderPostcardMainContentLeftSide.css';
import MainContentLeftSideButtons from '../../../../ui/buttons/productBuilderButtons/MainContentLeftSideButtons';
import ProductBuilderMainContentImageList from '../../../../ui/lists/productBuilderMainContentImageList';
import ProductBuilderImageUploadButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderImageUploadButton';
import productBuilderImage from '../../../../assets/img/productBuilderImage.jpg';
import { useState } from 'react';

export default function ProductBuilderPostcardMainContentLeftSide() {
  const [statusButton, setStatusButton] = useState("Загрузка");
  const [images, setImages] = useState([]);

  const handleImageUpload = (files) => {
    const fileArray = Array.from(files).map((file) => ({
      img: URL.createObjectURL(file),
      title: file.name,
    }));
    setImages((prev) => [...prev, ...fileArray]);
  };

  return (
    <div className='product-builder-postcard-main-content-left-side-container'>
      <div className='product-builder-postcard-main-content-left-side-container-left-box-buttons'>
        <MainContentLeftSideButtons
          statusButton={statusButton}
          setStatusButton={setStatusButton}
        />
      </div>

      <div className='product-builder-postcard-main-content-left-side-container-right-box-content'>
        {imgButton === "Загрузка" && ( 
          <>
            <div className='product-builder-postcard-main-content-left-side-container-right-box-button-and-input-image-box'>
              <div className='product-builder-postcard-main-content-left-side-container-right-box-image-box'>
                <img
                  src={productBuilderImage}
                  alt="productBuilderImage"
                  className='product-builder-postcard-main-content-left-side-container-right-box-button-image'
                />
              </div>
              <div>
                <ProductBuilderImageUploadButton onImageUpload={handleImageUpload} />
              </div>
            </div>

            <div className='product-builder-postcard-main-content-left-side-container-right-box-input-image'>
              <ProductBuilderMainContentImageList images={images} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
