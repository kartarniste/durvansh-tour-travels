import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";

function ClientInfo(){
    return (
        <View className="vbox ClientInfoCls">
            <SectionView className="hbox justify-content-space-between">
                <View><span>Bill No : 001</span></View>
                <View><span>Date : ------</span></View>
            </SectionView>

            <SectionView className="hbox">
                <span>Guest Name : Mr. Kartar Niste</span>
            </SectionView>

            <SectionView className="hbox">
                <View><span>Name of Party : ANANTPUR</span></View>
            </SectionView>
            
            <SectionView className="hbox">
                <View><span>Address : ANANTPUR</span></View>
            </SectionView>

            <SectionView className="hbox">
                <View><span>GST : ------</span></View>
            </SectionView>
        </View>
    );
}

export default ClientInfo;