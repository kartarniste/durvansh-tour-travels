import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";

function InvoiceFooterDetails({invoiceData}){
    return (
        <View className="vbox invoiceFooterDetails">

            <SectionView className="hbox ">
                <span className="mediamFontSizeClass">* HOPE YOU HAVE PLEASANT JOURNEY *</span>
            </SectionView>

            <SectionView className="hbox justify-content-space-between invoiceFooterDetailsGstInfo">
                <View className="vbox"> 
                    <span>GST NO : {invoiceData.ownergst}</span>
                </View>

                <View className="vbox signatureSection"> 
                    <span>FOR - Durvansh Travel And Tourism (OPC) Pvt. Ltd.</span>
                </View>
              
            </SectionView>

            <SectionView className="hbox">
                <View className="vbox"> 
                    <span className="mediamFontSizeClass">Whether the tax is payable on Reverse charge Mechanism  : {invoiceData.taxCharge || "NO"}</span>
                </View>

            </SectionView>

        </View>
    );
}

export default InvoiceFooterDetails;