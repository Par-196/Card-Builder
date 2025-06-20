import "./ProductBuilderNotepadHeaderBar.css"
import BackButton from "../../../../ui/buttons/productBuilderButtons/BackButton.jsx"
import NotepadFormatButton from '../../../../ui/buttons/productBuilderButtons/notepadButtons/NotepadFormatButton.jsx'
import NotepadRibbonButton from "../../../../ui/buttons/productBuilderButtons/notepadButtons/NotepadRibbonButton.jsx"
import ProductBuilderOrderButton from '../../../../ui/buttons/productBuilderButtons/ProductBuilderOrderButton.jsx'


export default function ProductBuilderNotepadHeaderBar( {format, setFormat, ribbon, setRibbon, orderData, onCreateOrder } )
{
    return (
        <div className='product-builder-notepad-header-bar'>
            <div className='product-builder-notepad-header-back-button-box'>
                <BackButton />
            </div>
            <div className='product-builder-notepad-header-buttons'>
                <div className="product-builder-notepad-header-button-format-box">
                    <div className="product-builder-notepad-header-button-format-title">
                        <p>Формат</p>
                    </div>
                    <div className="product-builder-notepad-header-button-format">
                        <NotepadFormatButton 
                        format={format} 
                        setFormat={setFormat} 
                        />
                    </div>
                </div>
                <div className="product-builder-notepad-header-button-print-box">
                    <div className="product-builder-notepad-header-button">
                        <NotepadRibbonButton
                        ribbon={ribbon}
                        setRibbon={setRibbon}
                         />
                    </div>
                </div>
                <div className="product-builder-notepad-header-buttons-builder-order">
                    <ProductBuilderOrderButton orderData={orderData} onCreateOrder={onCreateOrder}/>
                </div>
            </div>
        </div>
    )
}