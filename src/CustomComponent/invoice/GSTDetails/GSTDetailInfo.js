import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";

function GSTDetailInfo({invoiceData}){

    const numberWithCommas = (num) => {
        return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
      }

    return (
        <View className="vbox tollParkingAmountCls">
            <SectionView className="hbox justify-content-space-between">
                <View className="vbox"><span>ADD  :  CGST  @</span></View>
                <View className="vbox"><span>{numberWithCommas(invoiceData.CGST)}</span></View>
            </SectionView>
            <SectionView className="hbox justify-content-space-between">
                <View className="vbox"><span>ADD  :  SGST  @</span></View>
                <View className="vbox"><span>{numberWithCommas(invoiceData.SGST)}</span></View>
            </SectionView>
        </View>
    );
}

export default GSTDetailInfo;