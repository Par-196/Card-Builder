import './ProductBuilderBusinessCardMainContent.css'
import MainContentLeftSideButtons from '../../../../ui/buttons/productBuilderButtons/MainContentLeftSideButtons';
import ProductBuilderMainContentImageList from '../../../../ui/lists/productBuilderMainContentImageList';
import ProductBuilderImageUploadButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderImageUploadButton';
import productBuilderImage from '../../../../assets/img/productBuilderImage.jpg';
import ProductBuilderMaterialUIIcons from '../../../../ui/grid/productBuilderMaterialUIIcons';
import MainContentLeftSideTextButton from '../../../../ui/buttons/productBuilderButtons/MainContentLeftSideTextButton';
import MainContentRightSideCustomizationTextButtons from '../../../../ui/buttons/productBuilderButtons/MainContentRightSideCustomizationTextButtons'
import ProductBuilderDragAndDropField from '../../productBuilderDragAndDropField/ProductBuilderDragAndDropField';
import { useState } from 'react';


export default function ProductBuilderBusinessCardMainContent()
{
    const [statusButton, setStatusButton] = useState("Загрузка");
    const [images, setImages] = useState([]);

    const handleImageUpload = (files) => {
    const fileArray = Array.from(files).map((file) => ({
      img: URL.createObjectURL(file),
      title: file.name,
    }));
    setImages((prev) => [...prev, ...fileArray]);
    };

    
    return(
        <div className='product-builder-business-сard-main-content'>
            <div className='product-builder-business-сard-main-content-left-side-container'>
                <div className='product-builder-business-сard-main-content-left-side-container-left-box-buttons'>
                    <MainContentLeftSideButtons
                    statusButton={statusButton}
                    setStatusButton={setStatusButton}
                    />
                </div>
                <div className='product-builder-business-сard-main-content-left-side-container-right-box-contnt'>
                    {statusButton === "Загрузка" && (
                    <>
                        <div className='product-builder-business-сard-main-content-left-side-container-right-box-button-and-input-image-box'>
                            <div className='product-builder-business-сard-main-content-left-side-container-right-box-image-box'>
                                <img
                                src={productBuilderImage}
                                alt="productBuilderImage"
                                className='product-builder-business-сard-main-content-left-side-container-right-box-button-image'
                                />
                            </div>
                            <div className='product-builder-business-сard-сardtcard-main-content-left-side-container-right-box-button'>
                                <ProductBuilderImageUploadButton onImageUpload={handleImageUpload} />
                            </div>
                            </div>

                            <div className='product-builder-business-сard-main-content-left-side-container-right-box-input-image'>
                            <ProductBuilderMainContentImageList images={images} />
                            
                            </div>
                    </>
                    )}
                    {statusButton === "Фігури" && (
                        <>
                            <div>
                                <ProductBuilderMaterialUIIcons />
                            </div>
                        </>
                    )}
                    {statusButton === "Текст" && (
                        <>
                            <div className='product-builder-business-сard-main-content-left-side-container-right-box-text-button'>
                                <MainContentLeftSideTextButton/>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='product-builder-business-сard-main-content-right-side-container'>
                <div className='product-builder-business-сard-main-content-right-side-text-customization-buttons'>
                    <>
                        {statusButton === 'Текст' && (
                            <MainContentRightSideCustomizationTextButtons />
                        )}
                    </>
                </div>
                <div>
                  <ProductBuilderDragAndDropField />
                </div>
            </div>
        </div>
    )
}