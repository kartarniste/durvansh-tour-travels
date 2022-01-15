import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";

function ClientInfo({invoiceData}){
    return (
        <View className="vbox ClientInfoCls">
            <SectionView className="hbox justify-content-space-between">
                <View><span>Bill No : {invoiceData.billNo}</span></View>
                <View><span>Date : {invoiceData.date}</span></View>
            </SectionView>

            <SectionView className="hbox">
                <span>Guest Name : {invoiceData.name}</span>
            </SectionView>

            <SectionView className="hbox">
                <View><span>Name of Party : {invoiceData.clientPartyName}</span></View>
            </SectionView>
            
            <SectionView className="hbox">
                <View><span>Address : {invoiceData.address}</span></View>
            </SectionView>

            <SectionView className="hbox">
                <View><span>GSTN : {invoiceData.clientGSTNo}</span></View>
            </SectionView>
        </View>
    );
}

export default ClientInfo;