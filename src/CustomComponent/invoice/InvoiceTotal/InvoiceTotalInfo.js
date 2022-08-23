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
        let taxableAmount =  parseFloat(total(invoiceData.taxiItems));

        if(invoiceData.nightHalt){
          taxableAmount = taxableAmount + parseFloat(invoiceData.nightHalt);
        }

        if(invoiceData.hasGSTBill){
          taxableAmount = taxableAmount + (taxableAmount* (5/100));
        }

        if(invoiceData.tollTax){
          taxableAmount = taxableAmount+ parseFloat(invoiceData.tollTax);
        }

        return taxableAmount;
      }

      const numberWithCommas = (num) => {
         var value =  num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
         if(!isNaN(parseFloat(value))){
            value = value.toFixed(2);
         }
         return value;
      }

    return (
        <View className="vbox">
            <SectionView className="hbox justify-content-space-between tollParkingAmountCls">
                <View className="vbox"><span>Bill Amount Rs</span></View>
                <View className="vbox"><span>{numberWithCommas(taxableAmount())}</span></View>
            </SectionView>
            
            <SectionView className="hbox tollParkingAmountCls">
                <span className="mediamFontSizeClass"> RUPEES : {converter.toWords(taxableAmount()).toUpperCase()}</span>
            </SectionView> 
        </View>
    );
}

export default InvoiceTotalInfo;
