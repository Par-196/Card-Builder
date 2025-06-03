import "./ProductBuilderBusinessCardHeaderBar.css";
import BackButton from "../../../../ui/buttons/productBuilderButtons/BackButton.jsx";
import BusinessCardFormatButtons from "../../../../ui/buttons/productBuilderButtons/businessCardButtons/BusinessCardFormatButtons.jsx";
import BusinessCardPrintingButtons from '../../../../ui/buttons/productBuilderButtons/businessCardButtons/BusinessCardPrintingButtons.jsx'
import ProductBuilderOrderButton from "../../../../ui/buttons/productBuilderButtons/ProductBuilderOrderButton.jsx";

export default function ProductBuilderBusinessCardHeaderBar({ format, setFormat, printType, setPrintType, orderData, onCreateOrder }) {
  return (
    <div className="product-builder-business-card-header-bar">
      <div className="product-builder-business-card-header-back-button-box">
        <BackButton />
      </div>
      <div className="product-builder-business-card-header-buttons">

        <div className="product-builder-business-card-header-button-format-box">
          <div className="product-builder-business-card-header-button-format-title">
            <p>Формат</p>
          </div>
          <div className="product-builder-business-card-header-button-format">
            <BusinessCardFormatButtons
              format={format}
              setFormat={setFormat}
            />
          </div>
        </div>
        <div>
          <div className="product-builder-business-card-header-button-printing-buttons-box">
            <div className="product-builder-business-card-header-button-print-title">
                <p>Друк</p>
            </div>
            <div className="product-builder-business-card-header-button-print">
              <BusinessCardPrintingButtons
              printType={printType} 
              setPrintType={setPrintType}
              />
            </div>
          </div>
        </div>

        <div className="product-builder-business-card-header-buttons-builder-order">
          <ProductBuilderOrderButton
            orderData={orderData}
            onCreateOrder={onCreateOrder}
          />
        </div>
      </div>
    </div>
  );
}
