import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";

function InvoiceTotalInfo(){
    return (
        <View className="vbox">
            <SectionView className="hbox">
                <View><span>Bill Amount Rs</span></View>
                <View><span>4452</span></View>
            </SectionView>
            
            <SectionView className="hbox">
                <span> Four Thousand Five Hundred two</span>
            </SectionView> 
        </View>
    );
}

export default InvoiceTotalInfo;