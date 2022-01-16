import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";
var converter = require('number-to-words');


function InvoiceTotalInfo({invoiceData}){

    const total = (taxiItems) => {
        if(!taxiItems)
              return 0;
  
        return taxiItems.reduce(function(result, value){
              result = result + parseFloat(value.amount);
              return result;
        }, 0);
      }
  
      const taxableAmount=()=>{
        let taxableAmount =  parseFloat(total(invoiceData.taxiItems)) + parseFloat(invoiceData.tollTax);

        if(invoiceData.SGST){
          taxableAmount = taxableAmount + parseFloat(invoiceData.SGST);
        }

        if(invoiceData.CGST){
          taxableAmount = taxableAmount + parseFloat(invoiceData.CGST);
        }

        return taxableAmount;
      }

      const numberWithCommas = (num) => {
        return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
      }

    return (
        <View className="vbox">
            <SectionView className="hbox justify-content-space-between tollParkingAmountCls">
                <View className="vbox"><span>Bill Amount Rs</span></View>
                <View className="vbox"><span>{numberWithCommas(taxableAmount())}</span></View>
            </SectionView>
            
            <SectionView className="hbox tollParkingAmountCls">
                <span> RUPEES : {converter.toWords(taxableAmount()).toUpperCase()}</span>
            </SectionView> 
        </View>
    );
}

export default InvoiceTotalInfo;