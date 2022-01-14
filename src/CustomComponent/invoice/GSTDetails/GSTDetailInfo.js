import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";

function GSTDetailInfo(){
    return (
        <View className="vbox tollParkingAmountCls">
            <SectionView className="hbox">
                <View><span>ADD:CGST@</span></View>
            </SectionView>
            <SectionView className="hbox">
                <View><span>ADD:SGST@</span></View>
            </SectionView>
        </View>
    );
}

export default GSTDetailInfo;