import SectionView from "../../../component/view/SectionView";
import View from "../../../component/view/View";

function GSTDetailInfo({invoiceData}){

    const numberWithCommas = (num) => {
        var value =  num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '';
        if(!isNaN(parseFloat(value))){
            value = value.toFixed(2);
        }
        return value;
    }

    const total = (taxiItems) => {
        if(!taxiItems)
              return 0;
  
        return taxiItems.reduce(function(result, value){
              result = result + parseFloat(value.amount);
              return result;
        }, 0);
    }
  
    const getTaxAmount=()=>{
        let taxableAmount =  parseFloat(total(invoiceData.taxiItems));

        if(invoiceData.nightHalt){
            taxableAmount = taxableAmount + parseFloat(invoiceData.nightHalt);
        }

        if(invoiceData.hasGSTBill){
            taxableAmount = taxableAmount * (2.5/100);
        }
        
        return taxableAmount;
    }

    if( invoiceData && invoiceData.hasGSTBill){
        return (
            <View className="vbox tollParkingAmountCls">
                <SectionView className="hbox justify-content-space-between">
                    <View className="vbox"><span className="mediamFontSizeClass">ADD  :  CGST  @2.50% </span></View>
                    <View className="vbox"><span>{numberWithCommas(getTaxAmount())}</span></View>
                </SectionView>
                <SectionView className="hbox justify-content-space-between">
                    <View className="vbox" ><span className="mediamFontSizeClass">ADD  :  SGST  @2.50% </span></View>
                    <View className="vbox"><span>{numberWithCommas(getTaxAmount())}</span></View>
                </SectionView>
            </View>
        );
    }
    
    return null;
    
}

export default GSTDetailInfo;
