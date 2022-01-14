import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";
import GSTDetailInfo from "../GSTDetails/GSTDetailInfo";

function InvoiceItemInfo(){
    return(
        <View className = "invoiceDetailInfoCls">
            <table>
                 <tr>
                    <th> Taxi No. </th>
                    <th> Taxi Type </th>
                    <th> Basis </th>
                    <th> From Date </th>
                    <th> To Date</th>
                    <th> Rate</th>
                    <th> Amount(RS)</th>
                 </tr>
                 <tr>
                    <td> MH 31 EQ 0429 </td>
                    <td> Inova </td>
                    <td> Outstation </td>
                    <td> 09/11/2021 </td>
                    <td> 09/11/2021</td>
                    <td> 12</td>
                    <td> 1000</td>
                 </tr>

                 <tr>
                    <td> MH 31 EQ 0429 </td>
                    <td> Desire </td>
                    <td> Outstation </td>
                    <td> 09/11/2021 </td>
                    <td> 09/11/2021</td>
                    <td> 12</td>
                    <td> 2000</td>
                 </tr>

                 <tr>
                    <td> MH 31 EQ 0429 </td>
                    <td> Maruti Suzuki </td>
                    <td> Outstation </td>
                    <td> 09/11/2021 </td>
                    <td> 09/11/2021</td>
                    <td> 12</td>
                    <td> 3000</td>
                 </tr>
            </table>  
            <SectionView className="hbox grossTotalCls"><span>Gross Amount Rs:  18795</span></SectionView>
            <SectionView className="hbox justify-content-space-between tollParkingAmountCls">
                  <View className="vbox">
                        <span>Toll/Parking Amount</span>
                  </View>
                  <View className="vbox">
                        <span>18795</span>
                  </View>
            </SectionView>

            <SectionView className="hbox justify-content-space-between tollParkingAmountCls">
                  <View className="vbox">
                        <span>Taxable Amount:</span>
                  </View>
                  <View className="vbox">
                        <span>18795</span>
                  </View>
            </SectionView>
           
            <GSTDetailInfo />
        </View>
    );
}

export default InvoiceItemInfo;