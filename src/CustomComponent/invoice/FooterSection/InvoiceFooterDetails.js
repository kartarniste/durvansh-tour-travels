import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";

function InvoiceFooterDetails({invoiceData}){
    return (
        <View className="vbox invoiceFooterDetails">

            <SectionView className="hbox ">
                <span>* HOPE YOU HAVE PLEASANT JOURNEY *</span>
            </SectionView>

            <SectionView className="hbox justify-content-space-between invoiceFooterDetailsGstInfo">
                <View className="vbox"> 
                    <span>GST NO : {invoiceData.ownergst}</span>
                </View>

                <View className="vbox signatureSection"> 
                    <span>FOR - D.T.TRAVELS</span>
                </View>
              
            </SectionView>

            <SectionView className="hbox">
                <View className="vbox"> 
                    <span>Whether the tax is payable on Reverse charge Mechanism  : {invoiceData.taxCharge}</span>
                </View>

            </SectionView>

        </View>
    );
}

export default InvoiceFooterDetails;