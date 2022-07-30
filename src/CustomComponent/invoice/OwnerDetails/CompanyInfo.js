import View from "../../../component/view/View";
import SectionView from "../../../component/view/SectionView";
import logo  from "../../../image/logo.png";
import letterPadInfo  from "../../../image/dttravels_letter_pad.png";


function CompanyInfo(){
    return(
        <View className="vbox componyInfo">
            {/*<img src={logo} className="App-logo-custom" alt="logo" />*/}
            
                <SectionView className="hbox">
                  <View className="vbox logoCls">
                    <img src={logo} className="App-logo-custom" alt="logo" />
                  </View>
                  <View className="vbox companyAddressMainCls">
                    <ul className="CompanyAddressCls">
                        <li><span>Plot No. 215 Kharbi Road</span></li>
                        <li><span>Sankalp Nagar</span></li>
                        <li><span>Nagpur-440024</span></li>
                        <li>Email: durvanshtours111@gmail.com</li>
                        <li><span>Mob. No. 8830834138</span></li>
                        <li><span className="secondaryMobileCls">8412960494</span></li>
                    </ul>
                  </View>  

            </SectionView>

            <SectionView className="hbox travelTagLineCls">
                <span>FOR ROUND THE CLOCK EFFICIENT TRAVEL SERVICES</span>
            </SectionView>
        

        </View>
    );
}

export default CompanyInfo;