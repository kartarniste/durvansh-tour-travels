import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";
import GSTDetailInfo from "../GSTDetails/GSTDetailInfo";

function InvoiceItemInfo({invoiceData}){

    const total = (taxiItems) => {
      if(!taxiItems)
            return "0";

      return taxiItems.reduce(function(result, value){
            result = result + parseFloat(value.amount);
            return result;
      }, 0);
    }

    const taxableAmount=()=>{
      return parseFloat(total(invoiceData.taxiItems)) + parseFloat(invoiceData.tollTax);
    }

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
                 {
                  invoiceData && invoiceData.taxiItems.map((item)=>
                  <tr>
                    <td> {item.taxiNo}</td>
                    <td> {item.taxiType} </td>
                    <td> {item.basis} </td>
                    <td> {item.fromDate} </td>
                    <td> {item.toDate}</td>
                    <td> {item.rate}</td>
                    <td> {item.amount}</td>
                 </tr>
                  )
                 }
                
            </table>  
            <SectionView className="hbox grossTotalCls"><span>Gross Amount Rs:  {total(invoiceData.taxiItems)}</span></SectionView>
            <SectionView className="hbox justify-content-space-between tollParkingAmountCls">
                  <View className="vbox">
                        <span>Toll/Parking Amount</span>
                  </View>
                  <View className="vbox">
                        <span>{invoiceData.tollTax}</span>
                  </View>
            </SectionView>

            <SectionView className="hbox justify-content-space-between tollParkingAmountCls">
                  <View className="vbox">
                        <span>Taxable Amount:</span>
                  </View>
                  <View className="vbox">
                        <span>{taxableAmount()}</span>
                  </View>
            </SectionView>
           
            <GSTDetailInfo />
        </View>
    );
}

export default InvoiceItemInfo;